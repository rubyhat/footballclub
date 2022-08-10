import { Divider } from "@mui/material";
import FilterGames from "../../components/FilterGames";
import ListCardsGames from "../../components/ListCardsGame";

const Home = () => {
  return (
    <article>
      <FilterGames />
      <Divider sx={{ margin: "1rem 0" }} />
      <ListCardsGames />
    </article>
  );
};

export default Home;
