import { LoginSchema } from "../../schemas/ValidationSchema";
import * as style from "./LoginForm.style";
import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { useAuth } from "../../context/authContext";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { routes } from "../../routes";

export default function LoginForm() {
  const {
    userLoggedIn,
    handleSignInWithEmailAndPassword,
    handleSignInWithGoogle,
  } = useAuth();

  const initialValues = { login: "Demo", password: "Demo123", remember: false };

  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      await handleSignInWithEmailAndPassword(values.login, values.password);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };

  const onGoogleSignIn = async () => {
    try {
      await handleSignInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={style.Main}>
      {userLoggedIn && <Navigate to={routes.home} replace={true} />}
      <Typography sx={style.Text}>Start your journey</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
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
                name="password"
                as={TextField}
                fullWidth
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="remember"
                    color="primary"
                    sx={style.Checkbox}
                  />
                }
                label="Remember"
              />
              <Box sx={style.Centered}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={style.Button}
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </Button>
                <Divider sx={style.Divider}>OR</Divider>
                <Button
                  onClick={onGoogleSignIn}
                  variant="contained"
                  color="primary"
                  sx={style.Button}
                  type="button"
                >
                  Sign in with Google
                </Button>
                <Link component={RouterLink} to={routes.register} underline="hover">
                  Register
                </Link>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
