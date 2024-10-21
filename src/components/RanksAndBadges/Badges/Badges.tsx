import { Box, Typography } from "@mui/material";
import { Badge } from "./Badge/Badge";
import { badges } from "../ranksAndBadgesValues";

export const Badges = () => {
  return (
    <Box sx={{ backgroundColor: "#302e2b", padding: "30px", paddingTop: 0 }}>
      {badges.map((category) => (
        <Box key={category.category}>
          <Typography variant="h5" sx={{ color: "white", mb: "30px", mt: "30px" }}>{category.category}</Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {category.items.map((badge) => (
              <Badge key={badge.title} title={badge.title} src={badge.src} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};