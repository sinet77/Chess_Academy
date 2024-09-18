import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as style from "./FairPlay.styles";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const guidelines = [
  "Make your own moves independently.",
  "Refrain from cheating or using any unfair means.",
  "Do not accept assistance from others, such as parents, friends, coaches, or other players.",
  "Avoid using chess engines, software, bots, plugins, browser add-ons, or any tools that analyze positions during a game. We have the capability to detect the use of such programs.",
  "Do not use tablebases or any other tools that reveal the optimal move in both Online and Daily chess formats.",
  "Opening Explorer and other books may only be used in Daily chess, not during Online or Live games.",
  "Do not conduct automated analysis or check for mistakes in ongoing games.",
  "Do not share your account with others or use someone else's account.",
  "Avoid artificially manipulating ratings, match outcomes, or results.",
  "Do not disrupt or interfere with the gameplay experience of other players.",
  "If you believe your opponent is cheating, this does not justify using outside assistance yourself. Suspected cheating should be reported directly to Chess.com.",
];

export default function FairPlayGuidelines() {
  return (
    <Box sx={style.MainContent}>
      <Typography sx={style.guidelineTitle} variant="h4" gutterBottom>
        Fair Play Guidelines
      </Typography>
      <List>
        {guidelines.map((item, index) => (
          <Box key={index}>
            <ListItem>
              <ListItemIcon>
                <ArrowRightAltIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
            {index < guidelines.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
      <Box sx={style.ImportantBox}>
        <Typography sx={style.Important}>IMPORTANT</Typography>
        <Typography>
          As per our User Agreement, if we discover or have reason to believe
          that you have breached any of these Fair Play Guidelines, your account
          may be terminated, and it may be publicly marked as closed due to Fair
          Play violations.
        </Typography>
      </Box>
    </Box>
  );
}
