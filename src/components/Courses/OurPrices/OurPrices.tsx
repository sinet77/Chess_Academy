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
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: "50px",
                fontWeight: "700",
              }}
            >
              300
            </span>
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: "23px",
                fontWeight: "550",
                marginLeft: "10px",
              }}
            >
              zł Month
            </span>
          </Typography>
          <Typography sx={style.Description}>
            <ul
              style={{
                padding: 0,
                marginLeft: 0,
                marginBottom: 20,
                gap: 10,
                listStylePosition: "inside",
              }}
            >
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                4 individual classes a month
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                duration of 60 mins per class
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                the teacher avaiable only during the classes
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                you get notes from the classes
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                extra tasks to do on your own
              </li>
            </ul>
          </Typography>
          <Button sx={style.Button}>Join This Class</Button>
        </Box>
        <Box sx={style.OneBox}>
          <Typography sx={{ ...style.Level, color: "#B6740C" }}>
            Premium
          </Typography>
          <Typography>
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: "50px",
                fontWeight: "700",
              }}
            >
              550
            </span>
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: "23px",
                fontWeight: "550",
                marginLeft: "10px",
              }}
            >
              zł Month
            </span>
          </Typography>
          <Typography sx={style.Description}>
            <ul
              style={{
                padding: 0,
                marginLeft: 0,
                marginBottom: 20,
                gap: 10,
                listStylePosition: "inside",
              }}
            >
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                7 individual classes a month
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                duration of 80 mins per class
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                help of the teacher after the classes
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                you get notes from the classes
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                extra tasks to do on your own
              </li>
            </ul>
          </Typography>
          <Button sx={style.Button}>Join This Class</Button>
        </Box>
        <Box sx={style.OneBox}>
          <Typography sx={style.Level}>Medium</Typography>
          <Typography>
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: "50px",
                fontWeight: "700",
              }}
            >
              400
            </span>
            <span
              style={{
                fontFamily: "Playfair Display",
                fontSize: "23px",
                fontWeight: "550",
                marginLeft: "10px",
              }}
            >
              zł Month
            </span>
          </Typography>
          <Typography sx={style.Description}>
            <ul
              style={{
                padding: 0,
                marginLeft: 0,
                marginBottom: 20,
                gap: 10,
                listStylePosition: "inside",
              }}
            >
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                4 individual classes a month
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                duration of 70 mins per class
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                the teacher avaiable only during the classes
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                you get notes from the classes
              </li>
              <li
                style={{
                  textAlign: "justify",
                  marginBottom: "20px",
                }}
              >
                extra tasks to do on your own
              </li>
            </ul>
          </Typography>
          <Button sx={style.Button}>Join This Class</Button>
        </Box>
      </Box>
    </Box>
  );
}
