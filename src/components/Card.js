import { Box } from '../styles/theme';

const Card = (props) => {
  return (
  <Box bg='cardPrimaryBackground' marginBottom='m' borderRadius='s' paddingHorizontal='s' paddingVertical='m' marginHorizontal='s'>
    {props.children}
  </Box>
  );
};

export default Card;

