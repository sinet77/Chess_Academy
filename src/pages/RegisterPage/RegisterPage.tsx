import { Box } from "@mui/material";
import * as style from "./RegisterPage.style";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <Box sx={style.Main}>
      <RegisterForm />
    </Box>
  );
}
