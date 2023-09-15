// Library Imports
import React from "react";
import { type AppType } from "next/app";

// Component Imports
import Layout from "../components/Layout";

// Styling
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";
import "~/styles/globals.css";

// Data
import { api } from "~/utils/api";

const theme = createTheme();

const App: AppType = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default api.withTRPC(App);
