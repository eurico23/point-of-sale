import { View, StyleSheet, ScrollView } from 'react-native';
import {Text} from '../styles/theme';


const category = [
  {
    id: '1',
    productname: 'Coke Cola',
    table: 'ALL',
    price: 150.00,
  },
  {
    id: '2',
    productname: 'Coke Cola',
    table: 'MOST SOLD',
    price: 200.00,
  },
  {
    id: '3',
    productname: 'Coke Cola',
    table: 'FOOD',
    price: 50.00,
  },
  {
    id: '4',
    productname: 'Coke Cola',
    table: 'HYGIENE',
    price: 60.00,
  },
  {
    id: '5',
    productname: 'Coke Cola',
    table: 'DRINK',
    price: 250.00,
  },
  {
    id: '6',
    productname: 'Coke Cola',
    table: 'XXXX',
    price: 300.00,
  },
];


const Categories =() => {
  return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {category.map((item, index) =>(
            <View key={index} style={styles.scrollCategory}>
              <Text color="blue" fontWeight="bold" fontSize={14}> {item.table}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
  )
};


export default Categories;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    backgroundColor:'#F8F9FE',
    borderRadius:25,
    borderWidth:1,
    borderColor:'#D4D6DD',
    marginBottom:20,
  },
  scrollCategory:{
    backgroundColor:'#EAF2FF',
    marginRight:10,
    marginBottom:15,
    borderRadius:15,
    paddingVertical:8,
    paddingRight:13,
    paddingLeft:10,

  },
})
