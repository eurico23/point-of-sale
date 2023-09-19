import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, Box} from '../../styles/theme';
import {ProductsDummy} from '../../components/ProductsDummy';
import Button from '../../components/Button';

const BuyAndSale = () => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Box flexDirection="row" gap="s">
          <Text style={{alignSelf: 'center'}} variant="textLarge">
            Balanço
          </Text>
          <Text
            style={{alignSelf: 'center'}}
            variant="headerLarge"
            color="success">
            AOA 10,000
          </Text>
        </Box>
      ),
      headerTitleAlign: 'left',
      headerStyle: {
        borderBottomColor: '#D4D6DD',
        borderBottomWidth: 1,
      },
    });
  }, [navigation]);
  const navigation = useNavigation();

  return (
    <Box backgroundColor="mainBackground" flex={1} position='relative' style={{paddingBottom:80}}>
       <Box style={styles.print}>
      <AntDesign name="printer" color="#fff" size={30} />
      </Box>
      <Box
        borderBottomColor="greyLightest"
        borderBottomWidth={1}
        paddingBottom="s"
        alignContent="space-between"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        gap="s"
        marginTop="s">
        <AntDesign name="arrowleft" color="#000" size={30} />
        <AntDesign name="calendar" color="#000" size={30} />
        <Text variant="textLarge">09 Set 2023 - 10 Set 2023</Text>
        <AntDesign name="arrowright" color="#000" size={30} />
      </Box>

      <Box style={styles.containerCard}>
        <Box style={styles.card}>
          <Box style={styles.cardHeader}>
            <Text variant="textDefault">Compras</Text>
            <Text color="warning" variant="headerMedium">
              AOA 99.000,000
            </Text>
          </Box>
          <Box style={styles.cardBody}>
          <FlatList
          data={ProductsDummy}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return ( 
              <Box borderBottomColor='greyLightest' borderBottomWidth={1}  paddingBottom='s' marginBottom='s'>
              <Text paddingHorizontal='s' marginBottom='s'>{item.productname}</Text>
              <Text paddingHorizontal='s' textAlign='right' color='highlight' fontWeight='bold'>AOA {item.price}</Text>
            </Box>
            );
          }}/>
          </Box>
        </Box>
        <Box style={styles.card}>
          <Box style={styles.cardHeader}>
            <Text variant="textDefault">Vendas</Text>
            <Text color="success" variant="headerMedium">
              AOA 99.000,000
            </Text>
          </Box>
          <Box style={styles.cardBody}>

          <FlatList
          data={ProductsDummy}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return ( 
              <Box borderBottomColor='greyLightest' borderBottomWidth={1}  paddingBottom='s' marginBottom='s'>
              <Text paddingHorizontal='s' marginBottom='s'>{item.productname}</Text>
              <Text textAlign='right' color='highlight' fontWeight='bold'>AOA {item.price}</Text>
            </Box>
            );
          }}/>



            
          </Box>
        </Box>
      </Box>
      
        
     
    </Box>
  );
};

export default BuyAndSale;

const styles = StyleSheet.create({
  containerCard: {
     flex: 1,
    flexDirection: 'row',
    gap: 10,
    margin: 5,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
  },
  cardHeader: {
    backgroundColor: '#EAF2FF',
    paddingVertical: 15,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    alignItems: 'center',
  },
  cardBody: {
    backgroundColor: '#F8F9FE',
    paddingVertical: 10,
  },
  print: {
    position: 'absolute', 
    bottom: 50, 
    left: '80%', 
    width: 50, 
    height: 50, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#006FFD',
    borderRadius:25,
    zIndex:20,
  }
});
