import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import * as style from "./Contact.style";
import { ContactSchema } from "./ValidationSchema";
import { Formik, Form, Field } from "formik";

export default function Contact() {
  const onSubmit = () => {
    navigate("/");
  };

  return (
    <Box sx={style.Main}>
      <Box sx={style.FormAndTitle}>
        <Formik
          initialValues={{ email: "", subject: "", description: "" }}
          validationSchema={ContactSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched, values, handleChange }) => (
            <Form>
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
                  name="description"
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
