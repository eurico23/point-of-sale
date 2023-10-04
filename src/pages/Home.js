import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import {Text} from '../styles/theme';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

const list = [
  {
    id: '1',
    label: 'Finasterida Cantabria 2,275mg/ml Solução Cutânea 18ml',
    value: '2.500',
    date: '17/09/2023',
    quantity: 9000,
    type: 1
    
  },
  {
    id: '2',
    label: 'INALGEX GEL 50MG/G 100G',
    value: '98.587',
    date: '17/09/2025',
    quantity: 2000,
    type: 1
  },
  {
    id: '3',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 9000,
    type: 1
  },
  {
    id: '4',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 20,
    type: 1
  },
  {
    id: '5',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 20,
    type: 1
  },
  {
    id: '6',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 20,
    type: 1
  },
  {
    id: '7',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 20,
    type: 1
  },
  {
    id: '8',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 20,
    type: 1
  },
  {
    id: '9',
    label: 'second label',
    value: '68.550',
    date: '17/09/2023',
    quantity: 20,
    type: 1
  },
];


export default function Home ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar/>
    <View>
    <ScrollView>
      
        <Header name="Eurico costa" />

        <Actions navigation={navigation} />

        <View style={styles.title}>
          <Text textAlign='center' color="textDefaultColor">Janeiro 2023</Text>
        </View>
        <Balance title="Balanço Atual" subTitle="" totalPrice="100.000,00 kz" leftSubtitle ="Gastos" leftValue="100.000" righttSubtitle ="Gastos" rightValue="25.000" />

        <Text style={styles.title}>5 Mais Vendidos</Text>

        {list.map((item) => (
          <Movements key={item.id} data={item} />
        ))}
        </ScrollView>
      </View>
      </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color:'#71727A',
  },
  title:{
    fontWeight: 'bold',
    fontSize:18,
    marginStart: 14,
    marginEnd: 14,
    marginTop: 10,
    marginBottom: 10,
  },
});
