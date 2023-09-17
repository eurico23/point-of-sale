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
    greyExtraLightest:'#F8F9FE',

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
    blueLight:palette.blueLight,
    blueLightest:palette.blueLightest,
    highlight:palette.blueDarkest,
    black:palette.black,
    textDefaultColor:palette.greyLight,
    headerDefaultColor:palette.black,
    warning:palette.orange,
    success:palette.greenDark,
    greyLightest:palette.greyLightest,
    greyExtraLightest:palette.greyExtraLightest,
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
/*
    textXSmall:{

    },
    textSmall:{
      
    },*/
    textDefault:{
        color:'textDefaultColor',
        fontSize: 14,
    },
    textLarge:{
      fontWeight: 'bold',
      fontSize: 16,
      color:'black',
    },
    textExtraLarge:{
      fontWeight: 'bold',
      fontSize: 18,
      color:'black',
    },
/*
    headerXSmall:{

    },
    headerSmall:{
        
    },*/
    headerMedium:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'headerDefaultColor',
    },
    headerLarge:{   
      fontSize: 22,
        fontWeight: 'bold',
        color:'black',    
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

    buttonInfoText: {
      color: 'white',
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

    buttonInfo: {
      backgroundColor: 'blue',
       borderWidth: 2,
       borderColor:'blue',
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

