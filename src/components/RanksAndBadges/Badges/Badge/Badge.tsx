import { Box, Typography } from "@mui/material"
import * as style from "./Badge.style"

type BadgeProps = {
  title: string,
  src: string
}
export const Badge = ({ title, src }: BadgeProps) => {
  return (
    <Box sx={style.badgeContainer}>
      <img src={src} alt={`${src}-icon`} style={{ width: '70px', height: '70px' }} />
      <Box>
        <Typography sx={style.title}>{title}</Typography>
      </Box>
    </Box>

  )
}
