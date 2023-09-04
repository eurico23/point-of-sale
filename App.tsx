import { ThemeProvider } from "@shopify/restyle";
import StackNavigator from "./src/navigation/StackNavigator";
import theme from "./src/styles/theme";


export default function App() {
  return (
     <ThemeProvider theme={theme}>{
      <StackNavigator />
      }</ThemeProvider>
  );
}
