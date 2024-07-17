import { ThemeProvider } from "@shopify/restyle";
import StackNavigator from "./src/navigation/StackNavigator";
import theme from "./src/styles/theme";
import {Provider} from 'react-redux';
import store from './store';



export default function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>{
      <StackNavigator />
      }</ThemeProvider>
    </Provider>
     
  );
}
