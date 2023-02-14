import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function ResponsiveAppBar() {
  return (
    <>
      <Box
        component="header"
        sx={{
          "& > :not(style)": {
            m: -1,
            width: 1519,
            height: 280,
            mt: -10,

            backgroundImage: "url('/public/img/banneranaps.jpg') ",
            backgroundSize: "100% 100%",
          },
        }}
      >
        <Grid
          container
          sx={{
            height: "200px",
          }}
          direction="row"
          alignItems={"flex-end"}
          justifyContent="space-between"
        >
          <Grid item sx={{ mt: 1, ml: 8 }}>
            <Box sx={{ mt: -12 }}>
              <img src="/img/sei2.png" />
            </Box>
          </Grid>
          <Grid item sx={{ mt: 9, mr: 7 }}>
            <Box>{<img src="/img/pref.png" />}</Box>
          </Grid>

          <Grid item>
            <AppBar
              position="relative"
              sx={{
                width: 1519,
                backgroundColor: "rgb(106,186,122)",
                borderBottom: "1px solid rgb(76, 134, 88)",
                borderTop: "1px solid rgb(39, 137, 178)",
              }}
            >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    INÍCIO
                  </Typography>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>

                    {pages.map((page, index) => (
                      <MenuItem key={page.title}>
                        <Link
                          href={page.href}
                          aria-label={page.arialLabel}
                          target="_blank"
                        >
                          <Typography textAlign="center">
                            {page.title}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Box>
                  <AdbIcon
                    sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                  />
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  ></Typography>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page.title}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.title}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
