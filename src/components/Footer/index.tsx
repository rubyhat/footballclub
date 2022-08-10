import { Grid, Typography, Container, Box } from "@mui/material";
import { isMobile } from "react-device-detect";

import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface IProps {
  isHome: boolean;
}

const Footer = (props: IProps) => {
  const { isHome } = props;
  const cn = classNames.bind(styles);

  return (
    <footer
      className={cn([
        "footer",
        isHome && isMobile && "footer_extended-padding",
      ])}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className={cn("box")}>
              <Typography variant="h6" component="p">
                Football App
              </Typography>
              <Typography variant="caption" className={cn("caption")}>
                Alpha
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
