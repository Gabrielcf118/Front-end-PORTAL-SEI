import { Container, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Acesso from "./Acesso";
import Carousel from "./Carousel";
import PaperLink from "./PaperLink";

function body() {
  return (
    <Box>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Carousel />
          <Divider
            orientation="vertical"
            sx={{
              border: "5px solid '#f4f4f4f4'",
              height: 300,
            }}
            flexItem
          />
          <Acesso />

          <PaperLink />
        </Grid>
      </Container>
    </Box>
  );
}

export default body;
