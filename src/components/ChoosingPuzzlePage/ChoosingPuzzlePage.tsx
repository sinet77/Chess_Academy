import { Box, Typography, Grid } from "@mui/material";

export default function ChoosingPuzzlePage() {
  const difficultyLevels = [
    "Beginner",
    "Easy",
    "Intermediate",
    "Challenging",
    "Advanced",
    "Expert",
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Choose difficulty level
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {difficultyLevels.map((level) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={level}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              bgcolor: "#f0f0f0",
              borderRadius: 1,
              boxShadow: 1,
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {level}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
