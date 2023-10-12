import { Box, Text } from '../styles/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Calendar = () => {
  return (
    <Box
    borderBottomColor="greyLightest"
    borderBottomWidth={1}
    borderTopColor="greyLightest"
    borderTopWidth={1}
    paddingVertical="s"
    alignContent="space-between"
    alignItems="center"
    justifyContent="center"
    flexDirection="row"
    gap="s"
    marginBottom='s'>
    <AntDesign name="arrowleft" color="#000" size={30} />
    <AntDesign name="calendar" color="#000" size={30} />
    <Text variant="textLarge">09 Set 2023 - 10 Set 2023</Text>
    <AntDesign name="arrowright" color="#000" size={30} />
  </Box>

  );
};

export default Calendar;

