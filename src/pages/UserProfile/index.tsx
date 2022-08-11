import { Container, Grid } from "@mui/material";
import CardUserProfile from "../../components/CardUserProfile";

const UserProfile = () => {
  return (
    <article>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CardUserProfile />
          </Grid>
          <Grid item xs={12} md={8}>
            Form for edit user info
          </Grid>
        </Grid>
      </Container>
    </article>
  );
};

export default UserProfile;
