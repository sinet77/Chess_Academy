import { Grid, Box, Divider, Typography } from "@mui/material";
import * as style from "./RankCard.style";

type RankCardProps = {
  rank: {
    icon: string;
    rank: string;
    levels: {
      beginner: number;
      intermediate: number;
      advanced: number;
    };
  };
};

export const RankCard = ({ rank }: RankCardProps) => {
  return (
    <Box sx={style.rankCardContainer}>
      <img src={rank.icon} alt={`${rank.rank}-icon`} style={{ width: '100px', height: '100px' }} />
      <Typography variant="h6">{rank.rank}</Typography>
      <Divider variant="middle" />

      {Object.entries(rank.levels).map(([levelName, points]) => (
        <Grid container justifyContent="space-between" key={levelName}>
          <Grid item>
            <Typography>{levelName}</Typography>
          </Grid>
          <Grid item>
            <Typography>{points}</Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
