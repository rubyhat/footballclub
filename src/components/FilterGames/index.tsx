import { Button, Container, Grid } from "@mui/material";
import React, { useState } from "react";

const FilterGames = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Button
            sx={{ width: "100%" }}
            onClick={() => setIsActive(1)}
            size="small"
            variant={isActive === 1 ? "contained" : "text"}
          >
            Открытые сборы
          </Button>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button
            sx={{ width: "100%" }}
            onClick={() => setIsActive(2)}
            size="small"
            variant={isActive === 2 ? "contained" : "text"}
          >
            Прошедшие сборы
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FilterGames;
