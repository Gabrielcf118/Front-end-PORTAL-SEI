import DvrIcon from "@mui/icons-material/Dvr";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
export default function Acesso() {
  return (
    <Grid item sx={{ mt: -39, ml: -10 }}>
      <Box>
        <Paper
          sx={{
            width: 400,
            m: 1,
            height: 160,
            display: "grid",
            justifySelf: "center",
            p: 2,
            bgcolor: "#f4f4f4f4",
          }}
        >
          <Typography sx={{ ml: 1 }} color="#333333">
            ACESSO AO SEI!
          </Typography>
          <Link
            href="#"
            underline="none"
            color="#333333"
            fontFamily="Montserrat, sans-serif"
          >
            <GroupIcon /> Servidores (Internos e Externos)
          </Link>
          <Link
            fontFamily="Montserrat, sans-serif"
            href="#"
            underline="none"
            color="#333333"
          >
            <PersonIcon /> Público Externo (Usuários Externos)
          </Link>
          <Link
            fontFamily="Montserrat, sans-serif"
            href="#"
            underline="none"
            color="#333333"
          >
            <DvrIcon /> Publicações Eletrônicas
          </Link>
          <Link
            fontFamily="Montserrat, sans-serif"
            href="#"
            underline="none"
            color="#333333"
          >
            <FactCheckRoundedIcon /> Conferência de Documentos
          </Link>
        </Paper>
      </Box>
    </Grid>
  );
}
