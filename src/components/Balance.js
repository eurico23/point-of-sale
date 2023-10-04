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
  return (
    <View style={styles.container}>


      <View style={styles.content}>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.baseText}>
          {totalPrice}
        </Text>
        {/* <Text style={styles.itemTitle}>{subTitle}</Text> */}
        <View style={styles.contentbalanco}>
        <Box justifyContent='center' style={styles.item}>
            <Text textAlign='center'>{leftSubtitle}</Text>
            <Text textAlign='center' style={styles.red}>
              {leftValue}
              <Text style={styles.itemcurrency}> Kz</Text>
            </Text>
          </Box>

          <Box justifyContent='center' style={styles.item}>
            <Text textAlign='center'>{righttSubtitle}</Text>
              <Text textAlign='center' style={styles.green}>
                {rightValue}
                <Text style={styles.itemcurrency}> Kz</Text>
              </Text>
          </Box>
        </View>
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
    paddingTop: 16,
    marginStart: 14,
    marginEnd: 14,
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
    gap: 10,
    margin: 5,
    justifyContent: 'center',
    padding: 16,
  
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
