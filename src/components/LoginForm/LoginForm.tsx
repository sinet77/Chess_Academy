import { LoginSchema } from "../../schemas/ValidationSchema";
import * as style from "./LoginForm.style";
import { Formik, Field, Form } from "formik";
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

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function LoginForm() {
  return (
    <Box sx={{ backgroundColor: "white", padding: "20px" }}>
      <Formik
        initialValues={{ login: "", password: "", remember: false }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "300px",
                margin: "0 auto",
              }}
            >
              <TextField
                sx={style.TextField}
                fullWidth
                id="login"
                name="login"
                label="Login"
                placeholder="Login"
                error={touched.login && Boolean(errors.login)}
                helperText={touched.login && errors.login}
              />

              <TextField
                sx={style.TextField}
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    color="primary"
                    sx={style.Checkbox}
                  />
                }
                label="Remember"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={style.Button}
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>
              <Divider>OR</Divider>
              <Link href="/register" underline="hover">
                Register
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
