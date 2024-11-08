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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import * as style from "./OrientationTrening.style";
import target from "../../assets/chess_aim_target.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timer from "./Timer/Timer";

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
  const [randomSquare, setRandomSquare] = useState<string>("");
  const [attempts, setAttempts] = useState<
    { isValid: boolean; targetSquare: string }[]
  >([]);
  const [checked, setChecked] = useState<boolean>(true);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

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
    setAttempts([]);
    generateRandomSquare();
    setIsTimerActive(true);
  };

  const handleSquareClick = (square: string) => {
    const isCorrect = square === randomSquare;
    setAttempts((prevAttempts) => [
      ...prevAttempts,
      { isValid: isCorrect, targetSquare: randomSquare },
    ]);

    if (isCorrect) {
      setCounter(counter + 1);
      toast.success("Correct! New square coming up!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
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
          <Typography sx={{ color: "white" }}>{counter}</Typography>
          <Timer isTurnedOn={isTimerActive} />
          <Typography sx={style.DrawnSquare}>{randomSquare}</Typography>
          <ToastContainer />
          <Box sx={style.Chessboard}>
            <Chessboard
              id="BasicChessboard"
              position={FEN}
              boardOrientation={changeBoardOrientation}
              onSquareClick={handleSquareClick}
              showBoardNotation={checked}
              customNotationStyle={{ fontSize: "22px" }}
              customLightSquareStyle={{ backgroundColor: "#e0e0e0" }}
              customDarkSquareStyle={{ backgroundColor: "#607d8b" }}
            />
          </Box>
          <Box sx={style.ButtonsContainer}>
            <Button
              onClick={handleStartClick}
              sx={{
                ...style.Button,
                ...(isTimerActive && {
                  "&.Mui-disabled": {
                    backgroundColor: "grey",
                    color: "black",
                  },
                }),
              }}
              disabled={isTimerActive}
            >
              Start
            </Button>
            <Button
              onClick={handleBoardOrientation}
              sx={{
                ...style.Button,
                ...(isTimerActive && {
                  "&.Mui-disabled": {
                    backgroundColor: "grey",
                    color: "black",
                  },
                }),
              }}
              disabled={isTimerActive}
            >
              Swap orientation
            </Button>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  icon={<VisibilityOffIcon />}
                  checkedIcon={<VisibilityIcon />}
                  disabled={isTimerActive}
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
              <Box
                component="img"
                src={target}
                alt="Aim target with pawns"
                sx={style.ImageTarget}
              />
            </Box>
          </Box>
          <List sx={style.List}>
            {attempts.map((attempt, index) => (
              <ListItem key={index} sx={style.ListItem}>
                <Box sx={style.AttemptsContainer}>
                  {attempt.isValid ? (
                    <CheckCircleIcon sx={style.CheckIcon} />
                  ) : (
                    <CancelIcon sx={style.CancelIcon} />
                  )}
                  <Typography
                    sx={{
                      color: attempt.isValid ? "#81B64C" : "#FA412D",
                    }}
                  >
                    {attempt.targetSquare}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
