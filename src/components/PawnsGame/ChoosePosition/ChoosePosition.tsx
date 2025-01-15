import { Box, Button, Grid, Typography } from "@mui/material";
import {
  positionEighth,
  positionFifth,
  positionFirst,
  positionFourth,
  positionNinth,
  positionSecond,
  positionSeventh,
  positionSixth,
  positionThird,
} from "../../../assets/StartingPositionsImages";
import * as style from "./ChoosePosition.style";
import { routes } from "../../../routes";
import { useNavigate } from "react-router-dom";

const POSITIONS = [
  {
    startingFen: "4k3/pppppppp/8/8/8/8/PPPPPPPP/4K3 w - - 0 1",
    image: positionFirst,
    description: "1 position",
  },
  {
    startingFen: "k7/pppppppp/8/8/8/8/PPPPPPPP/K7 w - - 0 1",
    image: positionSecond,
    description: "2 position",
  },
  {
    startingFen: "7k/pppppppp/8/8/8/8/PPPPPPPP/7K w - - 0 1",
    image: positionThird,
    description: "3 position",
  },
  {
    startingFen: "k7/pppppppp/8/8/8/8/PPPPPPPP/7K w - - 0 1",
    image: positionFourth,
    description: "4 position",
  },
  {
    startingFen: "7k/pppppppp/8/8/8/8/PPPPPPPP/K7 w - - 0 1",
    image: positionFifth,
    description: "5 position",
  },
  {
    startingFen: "8/ppkppp1p/8/8/8/8/PKPPPP1P/8 w - - 0 1",
    image: positionSixth,
    description: "6 position",
  },
  {
    startingFen: "4k3/ppp2ppp/8/8/8/8/PPP2PPP/3K4 w - - 0 1",
    image: positionSeventh,
    description: "7 position",
  },
  {
    startingFen: "8/pppppppp/4k3/8/8/3K4/PPPPPPPP/8 w - - 0 1",
    image: positionEighth,
    description: "8 position",
  },
  {
    startingFen: "8/pppppppp/8/8/1K4k1/8/PPPPPPPP/8 w - - 0 1",
    image: positionNinth,
    description: "9 position",
  },
];

export default function ChoosePosition() {
  const navigate = useNavigate();

  const handlePositionSelect = ({ startingFen }: { startingFen: string }) => {
    navigate(routes.pawnsGame, { state: { startingFen } });
  };

  return (
    <Box>
      <Box sx={style.Container}>
        <Grid container spacing={2} justifyContent="center">
          {POSITIONS.map(({ startingFen, image, description }, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <Button
                variant="outlined"
                sx={style.PositionBox}
                onClick={() => handlePositionSelect({ startingFen })}
              >
                <img src={image} alt="chess position" style={style.Image} />
                <Typography variant="subtitle1" sx={style.Description}>
                  {description}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
