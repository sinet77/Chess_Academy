import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import * as style from "./FairPlay.styles";
import FairPlayMainContent from "./FairPlayMainContent";

export default function FairPlay() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    setShowNewComponent(true);
  };

  return (
    <Box>
      {!showNewComponent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={style.HeadContainer}>
            <Typography sx={style.HeadTitle}>Fair Play</Typography>
            <Box
              sx={style.FairPlayImage}
              component="img"
              src="/src/assets/fair_play_image.jpg"
            ></Box>
            <Button onClick={handleButtonClick}>Na dół</Button>
          </Box>
        </motion.div>
      )}

      {showNewComponent && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FairPlayMainContent />
        </motion.div>
      )}
    </Box>
  );
}
