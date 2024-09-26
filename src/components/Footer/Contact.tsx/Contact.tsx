import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import * as style from "./Contact.style";
import { ContactSchema } from "./ValidationSchema";
import { Formik, Form, Field, FormikHelpers } from "formik";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

interface FormValues {
  email: string;
  subject: string;
  description: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);

    if (!formRef.current) {
      console.log("Form reference is null.");
      setSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        "service_usxqwrb",
        "template_y0ozzt7",
        formRef.current,
        "whK46bSEc2Ei1VLH4"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email sent successfully!");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email.");
        }
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <Box sx={style.Main}>
      <Box sx={style.FormAndTitle}>
        <Formik
          initialValues={{ email: "", subject: "", description: "" }}
          validationSchema={ContactSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={sendEmail}
        >
          {({ isSubmitting, errors, touched, values, handleChange }) => (
            <Form ref={formRef}>
              <Box sx={style.Form}>
                <Box sx={style.Text}>
                  <Typography sx={style.Paragraph}>
                    Hi there! If you want contact us or report a bug, just fill
                    the form below.
                  </Typography>
                  <Typography sx={style.Paragraph}>
                    Tell us more about the situation you want to talk about
                  </Typography>
                </Box>
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
                ></Field>
                <Field
                  sx={style.TextField}
                  name="subject"
                  as={TextField}
                  select
                  fullWidth
                  id="subject"
                  label="Subject"
                  value={values.subject}
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={touched.subject && errors.subject}
                  onChange={handleChange}
                >
                  <MenuItem value="Idea to improve the site">
                    Idea to improve the site
                  </MenuItem>
                  <MenuItem value="Technical issue">Technical issue</MenuItem>
                  <MenuItem value="Report a bug">Report a bug</MenuItem>
                  <MenuItem value="General question">General question</MenuItem>
                </Field>
                <Field
                  sx={style.TextField}
                  name="message"
                  as={TextField}
                  fullWidth
                  multiline
                  rows={4}
                  id="description"
                  label="Description"
                  placeholder="Describe the issue"
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  onChange={handleChange}
                />
                <Box sx={{ mt: 2 }}>
                  <Button
                    sx={style.Button}
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Loading..." : "Send"}
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
