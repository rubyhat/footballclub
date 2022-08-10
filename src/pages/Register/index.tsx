import { Box, Container, Grid } from "@mui/material";
import RegisterForm from "../../components/RegisterForm";
import LinkedText from "../../components/LinkedText";

const Register = () => {
  return (
    <article>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <RegisterForm />
            <Box sx={{ pt: "0.5rem" }}>
              <LinkedText
                link="/login"
                linkText="Авторизоваться"
                variant="accent"
                text="Уже есть аккаунт?"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </article>
  );
};

export default Register;
