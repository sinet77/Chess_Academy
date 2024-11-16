import { Typography, Box, Link, Divider } from "@mui/material";
import * as style from "./Footer.styles";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { footer_knight } from "../../assets/FooterNavbarImages.ts";
import { routes } from "../../routes.js";

export default function Footer() {
  return (
    <Box sx={style.Footer}>
      <Box sx={style.Container}>
        <Box sx={style.ImgAndQuote}>
          <Box component="img" sx={style.Image} src={footer_knight} />
          <Typography sx={{ ...style.CopyrightText, textAlign: "left" }}>
            „Chess is a fight against yourself first and foremost” - Garri
            Kasparow
          </Typography>
        </Box>
        <Box sx={style.IconsAndCopyright}>
          <Box sx={style.FooterIcons}>
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
          <Typography sx={style.CopyrightText}>
            Copyright 2024 © All Rights Reserved by Paweł Kozłowski
          </Typography>
        </Box>
      </Box>
      <Divider sx={style.Divider}></Divider>
      <Box sx={style.Links}>
        <Typography
          sx={style.Typography}
          component="a"
          href={routes.contactUs}
          variant="caption"
          gutterBottom
        >
          Contact
        </Typography>
        <Typography
          sx={style.Typography}
          component="a"
          href={routes.aboutUs}
          variant="caption"
          gutterBottom
        >
          About us
        </Typography>
        <Typography
          sx={style.Typography}
          component="a"
          href={routes.faq}
          variant="caption"
          gutterBottom
        >
          FAQ
        </Typography>
        <Typography
          sx={style.Typography}
          component="a"
          href={routes.fairPlay}
          variant="caption"
          gutterBottom
        >
          Fair play
        </Typography>
      </Box>
    </Box>
  );
}
