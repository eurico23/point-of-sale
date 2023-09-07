import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import OpenTables from '../components/OpenTables';
import { Text, Box } from '../styles/theme';

const openTables = [
  {
    id: '1',
    table: 'Table 1',
    tableItemCount: '4',
    date: '2 min',
    total: '99.000',
    tableItems: [
      { product: 'Hansaplast Spray Limpeza Feridas 100ml', price: 250, quantity: 99 },
      { product: 'Strepfen Mel Limao Spray 16,2mg/Ml Sol Pulv Bucal 15ml', price: 250, quantity: 5 },
      { product: 'Juice', price: 250, quantity: 5 },
    ],
  },
  {
    id: '2',
    table: 'Table 2',
    tableItemCount: '3',
    date: '2 min',
    total: '300',
    tableItems: [
      { product: 'Fanta', price: 250, quantity: 99 },
      { product: 'Milk', price: 250, quantity: 5 },
      { product: 'Whiskey', price: 250, quantity: 2 },
    ],
  },
  {
    id: '3',
    table: 'Table 3',
    tableItemCount: '4',
    date: '2 min',
    total: '4.000',
    tableItems: [
      { product: 'Fanta', price: 250, quantity: 5 },
      { product: 'Whiskey', price: 250, quantity: 2 },
      { product: 'Milk', price: 250, quantity: 10 },
    ],
  },
];


const NewSales = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Box backgroundColor="mainBackground" flex={1}>
        <ScrollView>
          <View>
         
          <TouchableOpacity onPress={() => navigation.navigate('NewSales')}> 
            <View style={styles.content}>
              <Box borderRadius='xl' bg='cardPrimaryBackground' padding='m'>
                <AntDesign name="pluscircle" size={30} color="#006FFD" />
              </Box>
              <Text variant='headerMedium'>New Sale</Text>
            </View>
            </TouchableOpacity>
          </View>
          <Text variant='textMedium' color='highlight' textAlign='center' marginBottom='m'>Pending Sales: 3</Text>
        
          {openTables.map((item) => (
          <OpenTables key={item.id} data={item} />
        ))}
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default NewSales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  content: {
    alignItems: 'center',
    padding: 16,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C5C6CC',
    marginBottom:15,

  },
});
