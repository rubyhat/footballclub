import { Container, Grid } from "@mui/material";
import GameCreateForm from "../../components/GameCreateForm";

const GameCreate = () => {
  return (
    <article>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <GameCreateForm />
          </Grid>
        </Grid>
      </Container>
    </article>
  );
};

export default GameCreate;
