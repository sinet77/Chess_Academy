import { Box, Typography } from "@mui/material"
import * as style from "./Badge.style"

type BadgeProps = {
  title: string,
  src: string
}
export const Badge = ({ title, src }: BadgeProps) => {
  return (
    <Box sx={style.badgeContainer}>
      <img src={src} alt={`${src}-icon`} style={style.imgStyle} />
      <Box>
        <Typography sx={style.title}>{title}</Typography>
      </Box>
    </Box>

  )
}
