import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained">Hello World</Button>
        </ThemeProvider>
    );
}
