import { Typography, Box, Link } from "@mui/material";
import * as styles from "./Footer.styles";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={styles.Footer}>
      <Box sx={styles.Links}>
        <Typography
          sx={styles.Typography}
          component="a"
          href="/help"
          variant="caption"
          gutterBottom
        >
          Help
        </Typography>
        <Typography
          sx={styles.Typography}
          component="a"
          href="/languages"
          variant="caption"
          gutterBottom
        >
          Languages
        </Typography>
        <Typography
          sx={styles.Typography}
          component="a"
          href="/faq"
          variant="caption"
          gutterBottom
        >
          FAQ
        </Typography>
        <Typography
          sx={styles.Typography}
          component="a"
          href="/fair-play"
          variant="caption"
          gutterBottom
        >
          Fair play
        </Typography>
      </Box>
      <Box sx={styles.FooterIcons}>
        <Link
          href="https://www.linkedin.com/in/pawe%C5%82-koz%C5%82owski-69b29521b/"
          color="inherit"
        >
          <LinkedIn />
        </Link>
        <Link href="https://github.com/sinet77" color="inherit">
          <GitHub />
        </Link>
        <Link href="https://facebook.com" color="inherit">
          <Facebook />
        </Link>
        <Link href="https://instagram.com" color="inherit">
          <Instagram />
        </Link>
      </Box>
    </Box>
  );
}
