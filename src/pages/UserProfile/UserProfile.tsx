import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import * as style from "./UserProfile.style";
import { useState } from "react";

export default function UserProfile() {
  const [links, setLinks] = useState([
    { icon: <GitHubIcon />, label: "Github", value: "" },
    { icon: <TwitterIcon />, label: "Twitter", value: "" },
    { icon: <InstagramIcon />, label: "Instagram", value: "" },
    { icon: <FacebookIcon />, label: "Facebook", value: "" },
  ]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleChange = (index, newValue) => {
    const updatedLinks = [...links];
    updatedLinks[index].value = newValue;
    setLinks(updatedLinks);
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };
  return (
    <Box sx={style.Main}>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6}>
          <Box sx={style.Avatar}>
            <Typography variant="h6">Left Top</Typography>
            <Typography variant="body2">
              This is the content for Left Top.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Right Top</Typography>
            <Typography variant="body2">
              This is the content for Right Top.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Links</Typography>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {links.map((link, index) => (
                <Box key={index}>
                  <ListItem>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight="bold">
                          {link.label}
                        </Typography>
                      }
                      secondary={
                        <TextField
                          variant="outlined"
                          size="small"
                          value={link.value}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onFocus={() => handleFocus(index)}
                          onBlur={handleBlur}
                          sx={{
                            "& fieldset": {
                              borderColor:
                                focusedIndex === index
                                  ? "primary.main"
                                  : "transparent",
                            },
                          }}
                        />
                      }
                    />
                  </ListItem>
                  {index < links.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Right Bottom</Typography>
            <Typography variant="body2">
              This is the content for Right Bottom.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
