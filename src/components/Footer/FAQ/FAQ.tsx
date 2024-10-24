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

const faqData = [
  {
    question: "How do I start a game?",
    answer:
      "To start a game, simply log in and click on 'New Game' from the main menu. You can choose to play against an opponent or a bot.",
  },
  {
    question: "What are the rules of chess?",
    answer:
      "Chess is played on an 8x8 board with each player starting with 16 pieces. The objective is to checkmate the opponent's king. You can find detailed rules on our help page.",
  },
  {
    question: "Can I play with friends?",
    answer:
      "Yes, you can invite friends to play by selecting 'Play with Friends' from the game options and sending them an invitation link.",
  },
  {
    question: "How can I improve my rating?",
    answer:
      "To improve your rating, practice regularly, study game strategies, and analyze your past games. Participate in tournaments and play against stronger opponents.",
  },
  {
    question: "What should I do if I encounter a technical issue?",
    answer:
      "If you encounter a technical issue, please contact our support team via the 'Help' section. Provide details about the issue and any relevant screenshots.",
  },
];

export default function FAQ() {
  return (
    <Box sx={style.FAQContainer}>
      <Box sx={style.titleContainer}>
        <Typography sx={style.Title} variant="h2" gutterBottom>
          Frequently Asked
        </Typography>
        <Typography variant="h2" sx={style.questionsWordInTitle}>Questions</Typography>
      </Box>

      {faqData.map((item, index) => (
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
  );
}
