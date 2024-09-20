import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: yup
    .string()
    .oneOf([
      "Idea to improve the site",
      "Technical issue",
      "Report a bug",
      "General question",
    ])
    .required("Categorize your issue"),
  description: yup
    .string()
    .required("Describe the case why you want to contact us"),
});
