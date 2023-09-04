import {createBox, createText, createTheme, createRestyleComponent, SpacingProps, VariantProps, spacing, createVariant} from '@shopify/restyle';

const palette = {

    blueDarkest: '#006FFD',
    blueDark: '#2897FF',
    blueMedium: '#6FB9FF',
    blueLight: '#B3DAFF',
    blueLightest: '#EAF2FF',



    greyDarkest: '#1E1E1E',
    greyDark: '#2F3036',
    greyMedium: '#494A50',
    greyLight: '#71727A',
    greyLightest: '#D4D6DD',

    red: '#ED3241',
    redLight: '#FF616D',

    orange: '#E86339',
    orangeLight: '#FFB37C',

  greenLight: '#E7F4E8',
  greenDark: '#3AC0A0',
  greenDarkest: '#298267',

  black: '#000000',
  white: '#FFF',
  transparent: 'rgba(0,0,0,0)',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.blueLightest,
    blue:palette.blueDarkest,
    highlight:palette.blueDarkest,
    black:palette.black,
    textDefaultColor:palette.greyLight,
    headerDefaultColor:palette.black,
    warning:palette.orange,
    success:palette.greenDark,
    greyLightest:palette.greyLightest,
    white: palette.white,
    transparent:palette.transparent,
  },
  spacing: {
    xs:5,
    s: 10,
    m: 15,
    l: 20,
    xl: 25,
  },

  borderRadii: {
    xs:5,
    s: 10,
    m: 15,
    l: 20,
    xl: 25,
  },

  
  textVariants: {

    header: {
      fontWeight: 'bold',
      fontSize: 64,
      
    },

    textXSmall:{

    },
    textSmall:{
      
    },
    textMedium:{
        
    },
    textLarge:{
      fontWeight: 'bold',
      fontSize: 16,
    },
    textExtraLarge:{
      
    },

    headerXSmall:{

    },
    headerSmall:{
        
    },
    headerMedium:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'headerDefaultColor',
    },
    headerLarge:{       
    },
    headingXlarge:{
        
    },


    borderBottom: {
      borderBottomWidth: 1,
      marginBottom: 'm',
      paddingBottom: 'm',
      borderColor: 'greyLightest',
    },


    buttonSuccessText:{
      color: 'white',
    //  textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
    },

    buttonWarningText:{
      color: 'white',
    //  textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
    },

    buttonDefaultText:{
      color: 'blue',
      fontWeight: 'bold',
    },

    defaults: {
      fontSize: 14,
      color:'textDefaultColor',

    },
  },


  buttonVariants: {

    rowSpaceBetween:{
      fontSize: 38,
    },

    buttonWarning: {
      backgroundColor: 'warning',
      borderWidth: 2,
      borderColor:'warning',
    },
    buttonSuccess: {
      backgroundColor: 'success',
       borderWidth: 2,
       borderColor:'success',
    },

    defaults: {
      backgroundColor: 'transparent',
      padding: 's',
      borderRadius: 's',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:'m',
      borderWidth: 2,
      borderColor:'blue',
    },
  },



  cardVariants: {
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
    regular: {
      // We can refer to other values in the theme here, and use responsive props
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {width: 0, height: 5},
      shadowRadius: 15,
      elevation: 5,
    }
  }






});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();


export type BoxCustomProps = SpacingProps<Theme> & VariantProps<Theme, 'buttonVariants'>

export const BoxCustom = createRestyleComponent<BoxCustomProps, Theme>([
  spacing,
  
  createVariant({themeKey: 'buttonVariants'})
]);




export default theme;

