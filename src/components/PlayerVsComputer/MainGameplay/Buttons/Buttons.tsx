import { Box, Button, Switch, FormControlLabel } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import * as style from "./Buttons.style";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";

interface ButtonsProps {
  handleBoardOrientation: () => void;
  handleAutoPromoteToQueen: () => void;
}

export default function Buttons({
  handleBoardOrientation,
  handleAutoPromoteToQueen,
}: ButtonsProps) {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(routes.chooseComputerLevel);
  };
  return (
    <Box sx={style.Container}>
      <Button sx={style.BackButton} onClick={handleBackButtonClick}>
        Back
      </Button>
      <Box sx={style.Window}>
        <Button
          sx={style.Button}
          startIcon={<SwapVertIcon />}
          onClick={handleBoardOrientation}
        >
          Swap
        </Button>

        <FormControlLabel
          control={
            <Switch
              color="warning"
              size="small"
              onChange={handleAutoPromoteToQueen}
            />
          }
          label="Enable auto promotion to queen"
          sx={style.SwitchLabel}
        />
      </Box>
    </Box>
  );
}
