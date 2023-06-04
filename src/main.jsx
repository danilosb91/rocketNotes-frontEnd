import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import GlobalStyles from "./Styles/global";
import theme from "./Styles/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
