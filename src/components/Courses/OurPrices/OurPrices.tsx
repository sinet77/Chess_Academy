import { Box, Button, Typography } from "@mui/material";
import * as style from "./OurPrices.style";

export default function OurPrices() {
  return (
    <Box sx={style.Main}>
      <Box sx={style.Titles}>
        <Typography sx={style.SmallTitle}>Our Prices</Typography>
        <Typography sx={style.BigTitle}>Choose Your Class</Typography>
        <Typography sx={style.DescriptionHeader}>
          Make an appoinment for the classes and decide if you want to learn
          individually or with a group of friends!
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          * Group prices are set after consultation with the teacher and depend
          on the number of classes and the number of participants.
        </Typography>
      </Box>
      <Box sx={style.Boxes}>
        <Box sx={style.OneBox}>
          <Typography sx={style.Level}>Fresh</Typography>
          <Typography>
            <span style={style.Price}>300</span>
            <span style={style.PriceTitle}>zł Month</span>
          </Typography>
          <Typography sx={style.Description}>
            <Box component="ul" sx={style.List}>
              <Box component="li" sx={style.Point}>
                4 individual classes a month
              </Box>
              <Box component="li" sx={style.Point}>
                duration of 60 mins per class
              </Box>
              <Box component="li" sx={style.Point}>
                the teacher available only during the classes
              </Box>
              <Box component="li" sx={style.Point}>
                you get notes from the classes
              </Box>
              <Box component="li" sx={style.Point}>
                extra tasks to do on your own
              </Box>
            </Box>
          </Typography>
          <Button sx={style.Button}>Join This Class</Button>
        </Box>

        <Box sx={style.OneBox}>
          <Typography sx={style.Level}>Intermediate</Typography>
          <Typography>
            <span style={style.Price}>500</span>
            <span style={style.PriceTitle}>zł Month</span>
          </Typography>
          <Typography sx={style.Description}>
            <Box component="ul" sx={style.List}>
              <Box component="li" sx={style.Point}>
                8 individual classes a month
              </Box>
              <Box component="li" sx={style.Point}>
                duration of 60 mins per class
              </Box>
              <Box component="li" sx={style.Point}>
                teacher available during classes and homework sessions
              </Box>
              <Box component="li" sx={style.Point}>
                personalized homework assignments
              </Box>
              <Box component="li" sx={style.Point}>
                feedback on extra tasks
              </Box>
            </Box>
          </Typography>
          <Button sx={style.Button}>Join This Class</Button>
        </Box>

        <Box sx={style.OneBox}>
          <Typography sx={style.Level}>Advanced</Typography>
          <Typography>
            <span style={style.Price}>800</span>
            <span style={style.PriceTitle}>zł Month</span>
          </Typography>
          <Typography sx={style.Description}>
            <Box component="ul" sx={style.List}>
              <Box component="li" sx={style.Point}>
                12 individual classes a month
              </Box>
              <Box component="li" sx={style.Point}>
                duration of 90 mins per class
              </Box>
              <Box component="li" sx={style.Point}>
                teacher available for continuous support
              </Box>
              <Box component="li" sx={style.Point}>
                personalized strategies and notes
              </Box>
              <Box component="li" sx={style.Point}>
                feedback on advanced tasks
              </Box>
            </Box>
          </Typography>
          <Button sx={style.Button}>Join This Class</Button>
        </Box>
      </Box>
    </Box>
  );
}
