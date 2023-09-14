import React from 'react';
import {TouchableOpacity} from 'react-native';
import {BoxCustom, Text} from '../styles/theme';

const Button = ({title, variant, onPress }) => {
  let buttonVariantText;
  switch (variant) {
    case 'buttonSuccess':
      buttonVariantText = 'buttonSuccessText';
      break;
    case 'buttonWarning':
      buttonVariantText = 'buttonWarningText';
      break;
    case 'buttonInfo':
      buttonVariantText = 'buttonInfoText';
      break;
    default:
      // Default styling for other cases
      buttonVariantText = 'buttonDefaultText';
      break;
  }

  return (
    <TouchableOpacity  activeOpacity={0.7} onPress={onPress} style={{flex:1}}>
      <BoxCustom variant={variant}>
        <Text variant={buttonVariantText}>{title}</Text>
      </BoxCustom>
    </TouchableOpacity>
  );
};

export default Button;
