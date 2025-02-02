import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as style from "./FairPlay.styles";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { guidelines } from "./FairPlay.utils";

export default function FairPlayGuidelines({ onBack }: { onBack: () => void }) {
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
      <Button onClick={onBack} sx={style.BackButton}>
        Back to Fair Play Intro
      </Button>
    </Box>
  );
}
