import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteList from "./RouterList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";
import { Suspense } from "react";
import StickMenu from "./components/StickMenu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#14b890",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Router>
          <Header />
          <main className="content">
            <Container>
              <Suspense>
                <RouteList />
              </Suspense>
            </Container>
          </main>
          <StickMenu />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
