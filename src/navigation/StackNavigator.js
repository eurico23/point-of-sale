
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
import ListOfProducts from '../pages/ListOfProducts/ListOfProducts';
import InfoStock from '../pages/InfoStock/InfoStock';
import OverallBalance from '../pages/BalanceLandingPage/BalanceLandingPage';
import CashierClosing from '../pages/CashierClosing/CashierClosing';
import SalesHistory from '../pages/SalesHistory/SalesHistory';
import ProductsLandingPage from '../pages/Products/ProductsLandingPage';
import SalesLandingPage from '../pages/SalesLandingPage/SalesLandingPage';
import ExpensesLandingPage from '../pages/Expenses/ExpensesLandingPage';
import DevedoresLandingPage from '../pages/Devedores/DevedoresList';
import NewProduct from '../pages/NewProduct/NewProduct';
import BalanceSalesExpenses from '../pages/BalanceSalesExpenses/BalanceSalesExpenses';
import BalanceLandingPage from '../pages/BalanceLandingPage/BalanceLandingPage';
import ExpensesList from '../pages/Expenses/ExpensesList';
import Category from '../pages/Expenses/Category';
import ExpenseByCategory from '../pages/Expenses/ExpenseByCategory';
import DevedoresList from '../pages/Devedores/DevedoresList';
import LowStockProducts from '../pages/Products/LowStockProducts';
import ExpiredProducts from '../pages/Products/ExpiredProducts';
import ProductsCategory from '../pages/Products/ProductsCategory';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}}  name="Home" component={Home}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Expenditure" component={Expenditure} />
            <Stack.Screen options={{ title: 'Admin' }} name="Reports" component={Reports} />
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
            <Stack.Screen options={{ title: 'Gestão de produtos' }} name="ProductsLandingPage" component={ProductsLandingPage} />
            <Stack.Screen options={{ title: 'Gestão de Vendas' }} name="SalesLandingPage" component={SalesLandingPage} />
            <Stack.Screen options={{ title: 'Despesas' }} name="ExpensesLandingPage" component={ExpensesLandingPage} />
            <Stack.Screen options={{ title: 'Devedores' }} name="DevedoresLandingPage" component={DevedoresLandingPage} />
            <Stack.Screen options={{ title: 'Novo Produto' }} name="NewProduct" component={NewProduct} />
            <Stack.Screen options={{ title: 'BalanceSalesExpenses' }} name="BalanceSalesExpenses" component={BalanceSalesExpenses} />
            <Stack.Screen options={{ title: 'BalanceLandingPage' }} name="BalanceLandingPage" component={BalanceLandingPage} />
            <Stack.Screen options={{ title: 'Lista das despesas' }} name="ExpensesList" component={ExpensesList} />
            <Stack.Screen options={{ title: 'Categorias' }} name="Category" component={Category} />
            <Stack.Screen options={{ title: 'Despesas por categoria' }} name="ExpenseByCategory" component={ExpenseByCategory} />
            <Stack.Screen options={{ title: 'Devedores' }} name="DevedoresList" component={DevedoresList} />
            <Stack.Screen options={{ title: 'Produtos de estoque baixo' }} name="LowStockProducts" component={LowStockProducts} />
            <Stack.Screen options={{ title: 'Produtos Expirados' }} name="ExpiredProducts" component={ExpiredProducts} />
            <Stack.Screen options={{ title: 'Categorias de Produtos' }} name="ProductsCategory" component={ProductsCategory} />
            

          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default StackNavigator;
