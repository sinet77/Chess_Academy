import { useState } from "react";
import { useAuth } from "../../context/authContext";
import PasswordStrengthBar from "react-password-strength-bar";
import * as style from "./RegisterForm.style";
import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { RegisterSchema } from "../../schemas/ValidationSchema";
import { Navigate } from "react-router-dom";

interface FormValues {
  email: string;
  login: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const { userLoggedIn } = useAuth();

  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
      setIsRegistering(false);
    }
  };

  return (
    <Box sx={style.Main}>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <Typography sx={style.Text}>Create your account</Typography>
      <Formik
        initialValues={{
          login: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched, values, handleChange }) => (
          <Form>
            <Box sx={style.Form}>
              <Field
                sx={style.TextField}
                name="login"
                as={TextField}
                fullWidth
                id="login"
                label="Login"
                placeholder="Login"
                error={touched.login && Boolean(errors.login)}
                helperText={touched.login && errors.login}
              />
              <Field
                sx={style.TextField}
                name="email"
                as={TextField}
                fullWidth
                id="email"
                label="Email"
                placeholder="Email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                onChange={handleChange}
              />

              <Field
                sx={style.TextField}
                name="password"
                as={TextField}
                fullWidth
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
              />

              <PasswordStrengthBar
                password={values.password}
                scoreWords={["Knight", "Knight", "Rook", "Queen", "King"]}
                shortScoreWord={"Pawn"}
              />

              <Field
                sx={style.TextField}
                name="confirmPassword"
                as={TextField}
                fullWidth
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                label="Confirm password"
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange}
              />

              <Box sx={style.Centered}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={style.Button}
                >
                  {isSubmitting ? "Loading..." : "Register"}
                </Button>
                <Divider sx={style.Divider}>
                  Do you have an account? Sign in!
                </Divider>
                <Link href="/login" underline="hover">
                  Sign in
                </Link>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
