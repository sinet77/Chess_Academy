import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as style from "./FAQ.styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import { FAQ_DATA } from "./FAQData";

export default function FAQ() {
  return (
    <Box>
    <Box sx={style.FAQContainer}>
      <Box sx={style.titleContainer}>
        <Typography sx={style.Title} variant="h2" gutterBottom>
          Frequently Asked
        </Typography>
        <Typography variant="h2" sx={style.questionsWordInTitle}>Questions</Typography>
      </Box>

      {FAQ_DATA.map((item, index) => (
        <Accordion key={index} sx={style.Accordion} elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={style.AccordionSummary}
            >
            <Typography sx={style.Question}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={style.Answer}>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Box sx={style.footerContainer}>
        <Typography variant="h3" sx={style.footertitle}>
          Can't find what you are looking for?
        </Typography>
        <Typography variant="h5" sx={style.footerInfo}>
          Don't hestitate to leave us a message!
        </Typography>
        <Button
          component={Link}
          to={routes.contactUs}
          sx={style.contactButton}
          >
          Contact us
        </Button>
      </Box>
    </Box>
          </Box>
  );
}
