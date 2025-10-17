import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        bg: 'bg.elevated',
        minH: '100vh',
        color: 'text.primary',
      },
      '#__next': {
        minH: '100%',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        p: 0,
        m: 0,
        bg: '#ffffff',
        color: '#000000',
      },
    },
    Text: {
      baseStyle: {
        color: '#000000',
      },
    },
    Heading: {
      baseStyle: {
        color: '#000000',
      },
    },
  },
  colors: {
    white: {
      100: '#FFFFFF',
      200: '#FDF9EA',
    },
    black: {
      100: '#222222',
      200: '#333333',
    },
    orange: {
      100: '#FFDABF',
      200: '#FEA801',
      300: '#FF6B00',
    },
    blue: {
      100: '#52D5F2',
      200: '#27AAC7',
      300: '#1877F2',
      500: '#1877F2',
    },
    yellow: {
      100: '#FFFCF1',
      200: '#FFEC9F',
      300: '#FAD12B',
      400: '#FEE500',
    },
    gray: {
      100: '#F6F6F6',
      200: '#DDDDDD',
      300: '#61646B',
      400: '#999999',
    },
    green: {
      100: '#03C75A',
    },
    red: {
      100: '#FF2C2C',
    },
    semantic: {
      background_elevated: '#FFFFFF',
      txt_sub: '#222222',
      dictionary_card: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 1) 100%)',
    },
  },
  textStyles: {
    h1: {
      fontWeight: '700',
      fontSize: '22px',
      letterSpacing: '0px',
      lineHeight: '28px',
    },
    // h2 family
    h2: {
      fontWeight: '500',
      fontSize: '16px',
      letterSpacing: '0px',
      lineHeight: '24px',
    },
    h2_regular: {
      fontWeight: '400',
      fontSize: '16px',
      letterSpacing: '0px',
      lineHeight: '24px',
    },
    h2_medium: {
      fontWeight: '500',
      fontSize: '16px',
      letterSpacing: '0px',
      lineHeight: '24px',
    },
    h2_semibold: {
      fontWeight: '600',
      fontSize: '16px',
      letterSpacing: '0px',
      lineHeight: '24px',
    },
    h2_bold: {
      fontWeight: '700',
      fontSize: '16px',
      letterSpacing: '0px',
      lineHeight: '24px',
    },
    // h3 family
    h3: {
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
    h3_regular: {
      fontWeight: '400',
      fontSize: '15px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
    h3_medium: {
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
    h3_bold: {
      fontWeight: '700',
      fontSize: '15px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
    // h4 family
    h4: {
      fontWeight: '500',
      lineHeight: '18px',
      fontSize: '13px',
      letterSpacing: '0px',
    },
    h4_regular: {
      fontWeight: '400',
      lineHeight: '18px',
      fontSize: '13px',
      letterSpacing: '0px',
    },
    h4_medium: {
      fontWeight: '500',
      lineHeight: '18px',
      fontSize: '13px',
      letterSpacing: '0px',
    },
    h4_bold: {
      fontWeight: '700',
      lineHeight: '18px',
      fontSize: '13px',
      letterSpacing: '0px',
    },
    // h5 family
    h5_regular: {
      fontWeight: '400',
      lineHeight: '16px',
      fontSize: '12px',
      letterSpacing: '0px',
    },
    h5_medium: {
      fontWeight: '500',
      lineHeight: '16px',
      fontSize: '12px',
      letterSpacing: '0px',
    },
    h5_bold: {
      fontWeight: '700',
      lineHeight: '16px',
      fontSize: '12px',
      letterSpacing: '0px',
    },
    // h6 family
    h6_medium: {
      fontWeight: '500',
      lineHeight: '14px',
      fontSize: '11px',
      letterSpacing: '0px',
    },
    body: {
      fontWeight: '400',
      fontSize: '15px',
      lineHeight: '22px',
      letterSpacing: '0px',
    },
  },
  fonts: {
    body: `'Pretendard', sans-serif`,
    heading: `'Pretendard', sans-serif`,
  },
  semanticTokens: {
    colors: {
      'bg.elevated': { default: 'white.100', _dark: '#0E0E0E' },
      'text.primary': { default: 'black.100', _dark: 'white.100' },
      'text.sub': { default: 'black.200', _dark: 'gray.400' },
      'border.muted': { default: 'gray.200', _dark: 'gray.400' },
      'card.dictionary': {
        default:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 1) 100%)',
        _dark:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 1) 100%)',
      },
    },
  },
  // custom gradients (reference via theme as needed)
  gradients: {
    'gradation_orange.200': 'linear-gradient(180deg, #FFFFFF 0%, #FEA801 100%)',
    'gradation_orange.300': 'linear-gradient(270deg, #FF6B00 0%, #FBBF24 100%)',
  },
})
