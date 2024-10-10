import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as style from "./FAQ.styles";

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
      <Typography sx={style.Title} variant="h3" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((item, index) => (
        <Accordion key={index} sx={style.Accordion}>
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
    </Box>
  );
}
