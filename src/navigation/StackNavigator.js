
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../../src/pages/Home";
import Products from "../../src/pages/Products";
import Expenditure from "../../src/pages/Expenditure";
import Reports from "../../src/pages/Reports";
import AddNewProduct from "../pages/AddNewProduct/AddNewProduct";
import PendingSales from '../pages/PendingSales/PendingSales';
import NewSale from '../pages/NewSale/NewSale';
import EditSale from '../pages/EditSale/EditSale';
import PaymentConfirmation from '../pages/Payment/PaymentConfirmation';
import BuyAndSale from '../pages/ReportBuyAndSale/BuyAndSale';
import ListOfProducts from '../pages/Products/ListOfProducts';
import InfoStock from '../pages/InfoStock/InfoStock';
import OverallBalance from '../pages/OverallBalance/OverallBalance';
import CashierClosing from '../pages/CashierClosing/CashierClosing';
import SalesHistory from '../pages/SalesHistory/SalesHistory';






const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}}  name="Home" component={Home}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Expenditure" component={Expenditure} />
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="NewSale" component={NewSale} />
            <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
            <Stack.Screen name="PendingSales" component={PendingSales} />
            <Stack.Screen name="EditSale" component={EditSale} />
            <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
            <Stack.Screen name="BuyAndSale" component={BuyAndSale} />
            <Stack.Screen name="ListOfProducts" component={ListOfProducts} />
            <Stack.Screen name="InfoStock" component={InfoStock} />
            <Stack.Screen options={{ title: 'Fecho de Caixa' }} name="CashierClosing" component={CashierClosing} />
            <Stack.Screen options={{ title: 'Balanço Geral' }} name="OverallBalance" component={OverallBalance} />
            <Stack.Screen options={{ title: 'Vendas Realizadas' }} name="SalesHistory" component={SalesHistory} />
            
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default StackNavigator;
