import {
  Box,
  Button,
  Switch,
  FormControlLabel,
  Collapse,
  Link,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import * as style from "./Buttons.style";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../../../../routes";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

interface Props {
  handleBoardOrientationChange: () => void;
  handleAutoPromoteToQueen: () => void;
  handleToggleShowEnableMoves: () => void;
}

export default function Buttons({
  handleBoardOrientationChange,
  handleAutoPromoteToQueen,
  handleToggleShowEnableMoves,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOptions = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box>
      <Link to={routes.chooseComputerLevel} component={RouterLink}>
        <Button sx={style.BackButton}>Back</Button>
      </Link>
      <Button sx={style.OptionsButton} onClick={toggleOptions}>
        <SettingsIcon />
        Options
      </Button>
      <Collapse in={open}>
        <Box sx={style.Window}>
          <Button
            sx={style.Button}
            startIcon={<SwapVertIcon />}
            onClick={handleBoardOrientationChange}
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
            label="Hide possible moves"
            sx={style.SwitchLabel}
          />
        </Box>
      </Collapse>
    </Box>
  );
}
