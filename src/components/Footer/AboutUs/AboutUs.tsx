import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import * as style from "./AboutUs.style";
import AboutUsStartingPage from "./AboutUsStartingPage";
import { useState } from "react";
import { guidelinesSecondPage } from "./AboutUs.constants";

export default function AboutUs() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    setShowNewComponent(true);
  };

  const handleGoBackClick = () => {
    setShowNewComponent(false);
  };

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <AnimatePresence>
        {!showNewComponent && (
          <motion.div
            initial={{
              y: "-100%",
              opacity: 1,
            }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: "absolute", width: "100%" }}
            key="startingPage"
          >
            <AboutUsStartingPage buttonClick={handleButtonClick} />
          </motion.div>
        )}

        {showNewComponent && (
          <motion.div
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: "absolute", width: "100%" }}
            key="mainComponent"
          >
            <Box sx={style.Background}>
              <Box sx={style.Container}>
                <Button sx={style.AboutUsButton} onClick={handleGoBackClick}>
                  Back to About us
                </Button>

                <Typography sx={style.Title} variant="h4" gutterBottom>
                  Help Improve Chess Academy
                </Typography>
                <Typography sx={style.Description} paragraph>
                  Chess Academy is constantly evolving, with new features and
                  designs being implemented on a weekly basis (if not more
                  frequently). However, we don't always get everything right,
                  and that's where you can help! If you notice something that
                  could be improved or done differently, there are a few ways to
                  get your changes implemented:
                </Typography>

                {guidelinesSecondPage.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? "-100vw" : "100vw",
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 70, damping: 20 }}
                  >
                    <Box sx={style.Section}>
                      <Typography sx={style.SubTitle} variant="h5" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography sx={style.Description}>
                        {item.description}
                      </Typography>
                      <Button
                        sx={style.ActionButton}
                        variant="contained"
                        href={item.buttonLink}
                      >
                        {item.buttonText}
                      </Button>
                    </Box>
                  </motion.div>
                ))}

                <Typography sx={style.FooterText}>
                  Your contributions are invaluable in helping us make Chess
                  Academy better!
                </Typography>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
