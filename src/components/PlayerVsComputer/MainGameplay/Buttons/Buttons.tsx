import { Box, Button, Switch, FormControlLabel, Collapse } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import * as style from "./Buttons.style";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

interface ButtonsProps {
  handleBoardOrientation: () => void;
  handleAutoPromoteToQueen: () => void;
  handleToggleShowEnableMoves: () => void;
}

export default function Buttons({
  handleBoardOrientation,
  handleAutoPromoteToQueen,
  handleToggleShowEnableMoves,
}: ButtonsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(routes.chooseComputerLevel);
  };

  const toggleOptions = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={style.Container}>
      <Button sx={style.BackButton} onClick={handleBackButtonClick}>
        Back
      </Button>
      <Button sx={style.OptionsButton} onClick={toggleOptions}>
        <SettingsIcon />
        Options
      </Button>
      <Collapse in={open}>
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
          <FormControlLabel
            control={
              <Switch
                color="warning"
                size="small"
                onChange={handleToggleShowEnableMoves}
              />
            }
            label="Show possible moves"
            sx={style.SwitchLabel}
          />
        </Box>
      </Collapse>
    </Box>
  );
}
