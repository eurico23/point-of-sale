import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Box} from '../styles/theme';

export default function Balance({
  title,
  subTitle,
  totalPrice,
  leftSubtitle,
  leftValue,
  righttSubtitle,
  rightValue,
}) {


  /* card icon or text value
  let subTitleProps;
    if (subTitle !== undefined) {
      textOrIcon = <IconComponent  name={icon} color="#006FFD" size={30} />;
    } else {
      textOrIcon = <Text color='black' fontWeight='bold'>{value}</Text>;
    }
*/

  return (
    <View style={styles.container}>


      <View style={styles.content}>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.baseText}>
          {totalPrice}
        </Text>

        {/* Ternary Operator render component only if props {subTitle} has value */}
        {subTitle ?  <Text color='blueLight'>{subTitle}</Text>  : ""}

        {/* Ternary Operator render component only if props {leftSubtitle} has value */}
        {leftSubtitle ? (
        
        <View style={styles.contentbalanco}>
        <Box justifyContent='center' style={styles.item}>
            <Text textAlign='center'>{leftSubtitle}</Text>
            <Text textAlign='center' style={styles.red}>
              {leftValue}
              <Text style={styles.itemcurrency}></Text>
            </Text>
          </Box>

          <Box justifyContent='center' style={styles.item}>
            <Text textAlign='center'>{righttSubtitle}</Text>
              <Text textAlign='center' style={styles.green}>
                {rightValue}
                <Text style={styles.itemcurrency}></Text>
              </Text>
          </Box>
      </View> 
         
          ): ""
        }



        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#1F6CFF',
    paddingVertical: 16,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 8,
  },

  title: {
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 16,
  },

  subtitle: {
    fontSize: 14,
    color: '#AECAFF',
  },
  baseText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    color: '#AECAFF',
    fontSize: 14,
  },

  contentbalanco: {
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop:16,
  
  },

  item: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    minWidth: 160,
    alignItems: 'center',
    textAlign:'center',
  },
  itemcurrency: {
    color: '#BDB8B8',
    fontSize: 12,
    fontWeight: 'normal',
  },
  green: {
    color: '#17D85C',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
});
