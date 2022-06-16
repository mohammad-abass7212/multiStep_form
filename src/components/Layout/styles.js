import {
  createTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core";
import { cyan } from "@material-ui/core/colors";
let theme = createTheme({
  palette: { type: "dark", primary: cyan, secondary: cyan },
});
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));
export { theme, useStyles };
