
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../../src/pages/Home";
import Products from "../../src/pages/Products";
import Expenditure from "../../src/pages/Expenditure";
import Reports from "../../src/pages/Reports";
import AddNewProduct from "../../src/pages/AddNewProduct";
import CurrentSales from '../pages/CurrentSales';
import NewSales from '../pages/NewSales';
import EditSale from '../pages/EditSale';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}}  name="Home" component={Home}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Expenditure" component={Expenditure} />
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="NewSales" component={NewSales} />
            <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
            <Stack.Screen name="CurrentSales" component={CurrentSales} />
            <Stack.Screen name="EditSale" component={EditSale} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default StackNavigator;
