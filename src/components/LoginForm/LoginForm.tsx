import { LoginSchema } from "../../schemas/ValidationSchema";
import * as style from "./LoginForm.style";
import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import web_logo from "../../assets/web_logo.png";
import google_logo from "../../assets/googleLogo.png"
import { useAuth } from "../../context/authContext";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { routes } from "../../routes";

export default function LoginForm() {
  const {
    userLoggedIn,
    handleSignInWithEmailAndPassword,
    handleSignInWithGoogle,
  } = useAuth();

  const initialValues = { login: "", password: "" };
  const demoValues = { login: "Demo", password: "Demo123" };

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

  const demoLogin = async () => {
    try {
      await handleSignInWithEmailAndPassword(
        demoValues.login,
        demoValues.password
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={style.Main}>
      {userLoggedIn && <Navigate to={routes.home} />}
      <Box component="img" sx={style.WebLogo} src={web_logo} />
      <Typography sx={style.Text}>Log in with</Typography>

      <Box sx={style.SocialButtons}>
        <Button variant="outlined" sx={style.Button} onClick={demoLogin}>
          Demo Login
        </Button>
      </Box>

      <Divider sx={style.Divider}>or</Divider>

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
                label="Login"
                placeholder="Enter your login"
                error={touched.login && Boolean(errors.login)}
                helperText={touched.login && errors.login}
              />
              <Field
                sx={style.TextField}
                name="password"
                as={TextField}
                fullWidth
                label="Password"
                type="password"
                placeholder="Enter your password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button onClick={onGoogleSignIn} sx={style.GoogleButton}>

              <Box component="img" sx={{ height: "20px", width: "20px", marginRight: "10px" }} src={google_logo}>
      </Box>
                Sign in with Google
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={style.Button}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <Typography sx={style.Centered}>
        Don’t have an account?{" "}
        <Link component={RouterLink} to={routes.register}>
          Sign up!
        </Link>
      </Typography>
    </Box>
  );
}
