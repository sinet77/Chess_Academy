import { Box } from "@mui/material";
import { Badges } from "./Badges/Badges";
import { Ranks } from "./Ranks/Ranks";
import * as style from "./Ranks/Ranks.style";

export const RanksAndBadges = () => {
  return (
    <>
      <Box sx={style.Navbar}></Box>
      <Ranks />
      <Badges />
    </>
  );
};
