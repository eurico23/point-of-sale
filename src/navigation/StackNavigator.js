
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
import PaymentMethod from '../pages/Payment/PaymentMethod';
import PaymentConfirmation from '../pages/Payment/PaymentConfirmation';
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
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default StackNavigator;
