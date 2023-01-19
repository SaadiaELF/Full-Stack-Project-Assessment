import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

function Header() {
  return (
    <AppBar
      position="static"
      color="error"
      sx={{ height: { xs: "80px", md: "100px" } }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <SmartDisplayIcon
            sx={{
              fontSize: { xs: 30, md: 55 },
              display: { md: "flex" },
              mr: 2,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontSize: { xs: 25, md: 30 },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Videorary
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
