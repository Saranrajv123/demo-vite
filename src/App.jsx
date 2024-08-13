import { Button, Typography, useTheme } from "@mui/material";
import "./App.css";
import ThemeProvider from "./theme";
import Routes from './routes/Routes.jsx';

const App = () => {
    const theme = useTheme();

    return (
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    )

};

export default App;
