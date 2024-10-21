import { Box, Typography } from "@mui/material";
import { Badge } from "./Badge/Badge";
import { badges } from "../ranksAndBadgesValues";
import * as style from "./Badges.style"; // Import styli

export const Badges = () => {
  return (
    <Box sx={style.badgesContainer}>
      {badges.map((category) => (
        <Box key={category.category}>
          <Typography variant="h5" sx={style.categoryTitle}>
            {category.category}
          </Typography>
          <Box sx={style.badgesWrapper}>
            {category.items.map((badge) => (
              <Badge key={badge.title} title={badge.title} src={badge.src} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
