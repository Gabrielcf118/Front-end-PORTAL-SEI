import { Close, Menu } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FC, useState } from "react";
import LogoAnapolis from "../logo/LogoAnapolis";
import LogoSei from "../logo/LogoSei";
import { Navigation } from "./navigation";

export const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/img/banneranaps.jpg') ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "200px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <LogoSei />
          <LogoAnapolis />
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "50px",
          justifyContent: "space-between",
          backgroundColor: "#6aba7a",
        }}
      >
        <Container sx={{ py: { xs: 2, md: 3 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              justifyContent: "space-between",
              backgroundColor: "#6aba7a",
            }}
            // border="1px solid purple"
          >
            <Box
              sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}
            >
              <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                <Menu />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: { xs: "column", md: "row" },

                transition: (theme) => theme.transitions.create(["top"]),
                ...(matchMobileView && {
                  py: 6,
                  backgroundColor: "background.paper",
                  zIndex: "appBar",
                  position: "fixed",
                  height: { xs: "100vh", md: "auto" },
                  top: visibleMenu ? 0 : "-120vh",
                  left: 0,
                }),
              }}
            >
              <Box />
              <Navigation />
              {visibleMenu && matchMobileView && (
                <IconButton
                  sx={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                  }}
                  onClick={() => setVisibleMenu(!visibleMenu)}
                >
                  <Close />
                </IconButton>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
