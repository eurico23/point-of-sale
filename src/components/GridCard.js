import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Box} from '../styles/theme';


// Card gap
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize - 2 * 10) / itemPerRow;



const GridCard = ({iconType, link, title, icon, value}) => {
  const navigation = useNavigation();

  let IconComponent;
  // Determine which icon component to use based on the iconType prop
  switch (iconType) {
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'FontAwesome6':
      IconComponent = FontAwesome6;
      break;
    case 'MaterialCommunityIcons':
        IconComponent = MaterialCommunityIcons;
        break;
    default:
      IconComponent = AntDesign; // Default to AntDesign if no valid iconType is provided
  }

  // card icon or text value
  let textOrIcon;
    if (icon !== undefined) {
      textOrIcon = <IconComponent  name={icon} color="#006FFD" size={30} />;
    } else {
      textOrIcon = <Text color='black' fontWeight='bold'>{value}</Text>;
    }
   
  return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(link)}>
          {textOrIcon}   
          <Text textAlign='center' color="highlight" fontWeight='bold' marginVertical="xs">
            {title}
          </Text>
        </TouchableOpacity>

  );
};

export default GridCard;

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
    marginTop:10,
    padding: 10,
  },
});
