import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// 1 numeric digit, 1 lower case letter, 1 upper case letter, min 5 characters
export const RegisterSchema = yup.object().shape({
  login: yup.string().required("Login is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

export const LoginSchema = yup.object().shape({
  login: yup
    .string()
    .required("Login or email is required")
    .test("is-email-or-login", "Invalid email or login", function (value) {
      if (value?.includes("@")) {
        return yup.string().email().isValidSync(value);
      } else {
        return yup.string().min(3).isValidSync(value);
      }
    }),
  password: yup.string().required("Password is required"),
});
