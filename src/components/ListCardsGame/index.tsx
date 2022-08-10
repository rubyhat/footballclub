import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CardGame from "../CardGame";

const ListCardsGames = () => {
  return (
    <section>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CardGame />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardGame />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardGame />
          </Grid>
          <Grid item xs={12} md={4}>
            <CardGame />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ListCardsGames;
