import { Typography, Box, Link } from "@mui/material"
import * as styles from "./Footer.styles";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer(){
    return(
        <Box sx={styles.Footer}>
        <Box sx={styles.Links}>
        <Typography variant="caption" gutterBottom>
        Help
      </Typography>
      <Typography variant="caption" gutterBottom>
        Languages
      </Typography>
      <Typography variant="caption" gutterBottom>
        Job offers
      </Typography>
      <Typography variant="caption" gutterBottom>
        Fair play
      </Typography>
        </Box>
                    <Box sx={styles.FooterIcons}>
                    <Link href="https://pl.linkedin.com" color="inherit">
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
    )
}

