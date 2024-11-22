import { Grid, Box, Typography } from "@mui/material";
import { RankCard } from "./RankCard/RankCard";
import { ranks } from "../ranksAndBadgesValues.js";

export const Ranks = () => {
  return (
    <Box >
      <Box sx={{
  backgroundColor: "black",
  height: "112px",
  width: "100%",
}}></Box>
      <Typography sx={{ fontSize: "1.5rem", padding: "30px" }}>RANKS</Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3, md: 5 }}
        columnSpacing={{ xs: 1, sm: 5, md: 12 }}
      >
        {ranks.map((rank) => (
          <Grid
            item
            xs={12} sm={6} md={4}
            key={rank.rank}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <RankCard rank={rank} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
