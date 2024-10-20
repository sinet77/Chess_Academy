import { Grid } from "@mui/material"
import { RankCard } from "./RankCard/RankCard"
import { ranks } from "../ranksAndBadgesValues.js";

export const Ranks = () => {
  return (
    <Grid container spacing={2} >
      {ranks.map((rank) => (
        <Grid item xs={12} sm={6} md={4} key={rank.rank}>
          <RankCard rank={rank} />
        </Grid>
      ))}
    </Grid>
  );
};
