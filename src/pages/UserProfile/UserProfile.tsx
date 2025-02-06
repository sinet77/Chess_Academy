import {
  Box,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import * as style from "./UserProfile.style";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { ColorsChessboard } from "../../components/ColorsChessboard/ColorsChessboard";
import userProfile_bg from "../../assets/userProfile_bg.jpg";
import { Chessboard } from "react-chessboard";
import { Tile } from "./Tile"; 

export default function UserProfile() {
  const [links, setLinks] = useState([
    { icon: <GitHubIcon />, label: "Github", value: "" },
    { icon: <TwitterIcon />, label: "Twitter", value: "" },
    { icon: <InstagramIcon />, label: "Instagram", value: "" },
    { icon: <FacebookIcon />, label: "Facebook", value: "" },
  ]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const { currentUser } = useAuth();

  console.log("User data:", currentUser);

  const handleChange = (index: number, newValue: string) => {
    const updatedLinks = [...links];
    updatedLinks[index].value = newValue;
    setLinks(updatedLinks);
  };

  const handleFocus = (index: number) => setFocusedIndex(index);
  const handleBlur = () => setFocusedIndex(null);

  return (
    <Box sx={{ ...style.Main, backgroundImage: `url(${userProfile_bg})` }}>
      <Grid container spacing={4} sx={{ width: "1320px", margin: "auto" }}>
        <Grid item xs={12} sm={6}>
          <Tile title="Chess Profile">
            <Box sx={style.TestAvatar}></Box>
            <Typography variant="body2">{currentUser?.login}</Typography>
          </Tile>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tile title="Data">
            <Typography variant="body2">
              {currentUser ? (
                <Box sx={style.DataBox}>
                  <Box><strong>Login:</strong> {currentUser.login || "N/A"}</Box>
                  <Box><strong>Email:</strong> {currentUser.email || "N/A"}</Box>
                </Box>
              ) : (
                "No user is logged in."
              )}
            </Typography>
          </Tile>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tile title="Links">
            {links.map((link, index) => (
              <Box key={index}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Box sx={style.Label}>
                        {link.icon}
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ ml: 1 }}
                        >
                          {link.label}
                        </Typography>
                      </Box>
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
                {index < links.length && <Divider />}
              </Box>
            ))}
          </Tile>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tile title="Choose colors on chessboard">
            <Box sx={style.Wrapper}>
              <ColorsChessboard />
              <Box sx={style.Chessboard}>
              <Chessboard
                arePiecesDraggable={false}
                customDarkSquareStyle={{
                  backgroundColor:
                    currentUser?.chessboard?.darkSquare || "#607d8b",
                }}
                customLightSquareStyle={{
                  backgroundColor:
                    currentUser?.chessboard?.lightSquare || "#e0e0e0",
                }}
              />
              </Box>
            </Box>
          </Tile>
        </Grid>
      </Grid>
    </Box>
  );
}
