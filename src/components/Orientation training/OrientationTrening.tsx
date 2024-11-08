import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import * as style from "./OrientationTrening.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SQUARES = Array.from({ length: 8 }, (_, row) =>
  Array.from(
    { length: 8 },
    (_, col) => String.fromCharCode(97 + col) + (8 - row)
  )
).flat();

const FEN = "";

export default function Vision() {
  const [changeBoardOrientation, setChangeBoardOrientation] = useState<
    "white" | "black"
  >("white");
  const [randomSquare, setRandomSquare] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const generateRandomSquare = () => {
    const randomIndex = Math.floor(Math.random() * SQUARES.length);
    const drawnSquare = SQUARES[randomIndex];
    setRandomSquare(drawnSquare);
    console.log(drawnSquare);
  };

  const handleStartClick = () => {
    generateRandomSquare();
  };

  const handleSquareClick = (square: string) => {
    console.log(`Clicked on square: ${square}`);
    if (square === randomSquare) {
      setIsCorrect(true);
      toast.success("Correct! New square coming up!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
      setIsCorrect(false);
      toast.error("Try again!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
    generateRandomSquare();
  };

  const handleBoardOrientation = () => {
    setChangeBoardOrientation((prevBoardOrientation) =>
      prevBoardOrientation === "white" ? "black" : "white"
    );
  };

  return (
    <Box>
      <Box sx={style.Navbar}></Box>
      <Grid container sx={style.Main}>
        <Grid item xs={12} md={9} sx={style.BoardAndButtons}>
          <ToastContainer />
          <Box sx={style.Chessboard}>
            <Chessboard
              id="BasicChessboard"
              position={FEN}
              boardOrientation={changeBoardOrientation}
              onSquareClick={handleSquareClick}
              showBoardNotation={checked}
              customNotationStyle={{ fontSize: "22px" }}
              customDarkSquareStyle={{ backgroundColor: "#e0e0e0" }}
              customLightSquareStyle={{ backgroundColor: "#607d8b" }}
            />
          </Box>
          <Box sx={style.ButtonsContainer}>
            <Button onClick={handleStartClick} sx={style.Button}>
              Start
            </Button>
            <Button onClick={handleBoardOrientation} sx={style.Button}>
              Swap orientation
            </Button>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  icon={<VisibilityOffIcon />}
                  checkedIcon={<VisibilityIcon />}
                />
              }
              label="Show cords"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={3} sx={style.Moves}>
          <Box sx={style.Title}>
            <Link to={"/"} component={RouterLink}>
              <ArrowBackIcon sx={style.ArrowBackIcon} />
            </Link>
            <Box sx={style.TitleContainer}>
              <Typography sx={style.TitleName}>Vision Training</Typography>
              <ExtensionIcon sx={style.PuzzleIcon} />
            </Box>
          </Box>
          <List>
            {/* {playedMoves.map((moveName, index) => (
              <ListItem key={index}>
                <Box sx={style.ListItem}>
                  {moveName.isValid ? (
                    <CheckCircleIcon sx={style.CheckIcon} />
                  ) : (
                    <CancelIcon sx={style.CancelIcon} />
                  )}
                  <Typography
                    sx={{
                      color: `${moveName.isValid ? "#81B64C " : "#FA412D"}`,
                    }}
                  >
                    {moveName.move}
                  </Typography>
                  {moveName.isValid ? (
                    <Typography sx={style.ValidationCorrectMoveName}>
                      is correct!
                    </Typography>
                  ) : (
                    <Typography sx={style.ValidationWrongMoveName}>
                      is not correct. Try again!
                    </Typography>
                  )}
                </Box>
              </ListItem>
            ))} */}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
