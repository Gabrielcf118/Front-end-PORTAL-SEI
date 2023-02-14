import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function PaperLink() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: 200,
            height: 180,
            m: 1,
            mt: 6,
          },
        }}
      >
        <Paper
          elevation={14}
          sx={{
            backgroundImage: "url('/public/img/manual.png') ",
            backgroundSize: "100% 100%",
          }}
        />
        <Paper
          elevation={14}
          sx={{
            backgroundImage: "url('/public/img/publica.png') ",
            backgroundSize: "100% 100%",
          }}
        />

        <Paper
          elevation={14}
          sx={{
            backgroundImage: "url('/public/img/15.png') ",
            backgroundSize: "100% 100%",
          }}
        />
        <Paper
          elevation={14}
          sx={{
            backgroundImage: "url('/public/img/perguntas.png') ",
            backgroundSize: "100% 100%",
          }}
        />
      </Box>
    </Grid>
  );
}
