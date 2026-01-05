import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainCode from "./Comp/MainCode";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState, useMemo, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { CssBaseline } from "@mui/material";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 24,
  padding: 0,
  display: "flex",
  alignItems: "center",
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(30px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#4f4f4f",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 26,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiSwitch-track": {
    borderRadius: 30 / 2,
    backgroundColor: "#aab4be",
  },
}));
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [show, setShow] = useState(false);
  function handelAdd() {
    setShow(true);
  }
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      success: {
        main: "#0be73bff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MainCode show={show} setShow={setShow} />
        <Fab
          // color="primary"
          sx={{
            bgcolor: "white",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
          className="addIcon"
          onClick={handelAdd}
        >
          <AddIcon sx={{ color: "primary.main" }} />
        </Fab>
        <ThemeSwitch
          className="switch"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
          icon={<LightModeIcon style={{ fontSize: 20 }} />}
          checkedIcon={<DarkModeIcon style={{ fontSize: 20 }} />}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
