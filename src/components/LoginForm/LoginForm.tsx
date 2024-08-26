import { LoginSchema } from "../../schemas/ValidationSchema";
import { useNavigate } from "react-router-dom";
import * as style from "./LoginForm.style";
import { Formik, Form, Field } from "formik";
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

export default function LoginForm() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/");
  };

  return (
    <Box sx={style.Main}>
      <Typography sx={style.Text}>Start your journey</Typography>
      <Formik
        initialValues={{ login: "", password: "", remember: false }}
        validationSchema={LoginSchema}
        validateOnChange={true}
        validateOnBlur={true}
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
                <Link href="/register" underline="hover">
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
