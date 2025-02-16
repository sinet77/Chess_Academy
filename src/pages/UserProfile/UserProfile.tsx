import { Box, Divider, Grid, Typography } from "@mui/material";
import * as style from "./UserProfile.style";
import { useAuth } from "../../context/authContext";
import { ColorsChessboard } from "../../components/ColorsChessboard/ColorsChessboard";
import userProfile_bg from "../../assets/userProfile_bg.jpg";
import { Chessboard } from "react-chessboard";
import { Tile } from "./Tile";

export default function UserProfile() {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ ...style.Main, backgroundImage: `url(${userProfile_bg})` }}>
      <Box>
        <Grid item xs={12} sm={6}>
          <Tile title="User info">
            <Box sx={style.Wrapper}>
              <Typography variant="body2">
                {currentUser ? (
                  <Box sx={style.DataBox}>
                    <Box>
                      <strong>Login:</strong> {currentUser.login || "N/A"}
                    </Box>
                    <Box>
                      <strong>Email:</strong> {currentUser.email || "N/A"}
                    </Box>
                  </Box>
                ) : (
                  "No user is logged in."
                )}
              </Typography>
              <Divider sx={style.Divider}></Divider>
              <Typography variant="h6">
                Choose colors on chessboard
              </Typography>
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
      </Box>
    </Box>
  );
}
