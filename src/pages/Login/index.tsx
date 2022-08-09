import { Box, Container, Grid } from "@mui/material";
import React from "react";

import LoginForm from "../../components/LoginForm";
import LinkedText from "../../components/LinkedText";

const Login = () => {
  return (
    <article>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <LoginForm />
            <Box sx={{ pt: "0.5rem" }}>
              <LinkedText
                link="/reg"
                linkText="Регистрация"
                variant="accent"
                text="Нет аккаунта?"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </article>
  );
};

export default Login;
