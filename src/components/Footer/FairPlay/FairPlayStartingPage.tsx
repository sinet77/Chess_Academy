import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import * as style from "./FairPlay.styles";
import FairPlayMainContent from "./FairPlayMainContent";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { fairPlayDescription } from "./FairPlay.utils";

export default function FairPlay() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    setShowNewComponent(true);
  };

  return (
    <Box sx={style.Background}>
      {!showNewComponent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={style.HeadContainer}>
            <Box sx={style.Starter}></Box>
            <Typography sx={style.HeadTitle}>Fair Play</Typography>
            <Typography sx={style.Description}>{fairPlayDescription}</Typography>
            <Button onClick={handleButtonClick} sx={style.Button}>
              <KeyboardDoubleArrowDownIcon
                sx={style.BouncingIcon}
                fontSize="large"
              />
            </Button>
          </Box>
        </motion.div>
      )}

      {showNewComponent && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FairPlayMainContent onBack={() => setShowNewComponent(false)} />
        </motion.div>
      )}
    </Box>
  );
}
