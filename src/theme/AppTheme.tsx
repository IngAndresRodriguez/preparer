import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { greenTheme } from ".";

interface AppThemeProps {
  children: JSX.Element | JSX.Element[]
}

export const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={greenTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
