import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { createTheme } from "./theme";
import { SettingsConsumer, SettingsProvider } from "./context/settings";
import { ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currUser) {
      return <Navigate to="/login" />;
    }

    return children
  };
  return (
    <>
      <SettingsProvider>
        <SettingsConsumer>
          {(settings) => {
            // Prevent theme flicker when restoring custom settings from browser storage
            if (!settings.isInitialized) {
              // return null;
            }

            const theme = createTheme({
              colorPreset: settings.colorPreset,
              contrast: settings.contrast,
              direction: settings.direction,
              paletteMode: settings.paletteMode,
              responsiveFontSizes: settings.responsiveFontSizes,
            });

            // Prevent guards from redirecting

            return (
              <ThemeProvider theme={theme}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="register" element={<SignUp />} />
                </Routes>
              </ThemeProvider>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </>
  );
}

export default App;
