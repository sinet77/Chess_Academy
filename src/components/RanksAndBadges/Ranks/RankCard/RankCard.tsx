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
      <Box sx={style.iconWithTitle}>
        <img src={rank.icon} alt={`${rank.rank}-icon`} style={{ filter: 'invert(56%) sepia(94%) saturate(1453%) hue-rotate(-9deg) brightness(102%) contrast(105%)', width: '100px', height: '100px', marginBottom: '10px' }} />
        <Typography variant="h6" sx={style.rankTitle}>{rank.rank}</Typography>
      </Box>

      {Object.entries(rank.levels).map(([levelName, points]) => (
        <Grid container justifyContent="space-between" key={levelName} >
          <Grid item sx={style.rankContent}>
            <Typography sx={{ fontWeight: "500" }}>{levelName}</Typography>
          </Grid>
          <Grid item sx={style.rankContent}>
            <Typography sx={{ fontWeight: "500" }}>{points}</Typography>
          </Grid>
          <Divider sx={style.divider} />
        </Grid>
      ))}
    </Box>
  );
};
