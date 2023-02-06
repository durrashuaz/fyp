import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const windowHeight = dimensions.height;
const windowWidth = dimensions.width;
// sdfdsf

const styles = StyleSheet.create({
  button: {
      alignItems: 'center',
      backgroundColor: '#ECECF3',
      borderRadius: 8,
      height: 40,
      justifyContent: 'center',
    },
    buttonTitle: {
      color: '#000000',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    form: {
      alignItems: 'center',
      backgroundColor: '#ECECF3',
      borderRadius: 8,
      flexDirection: 'row',
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: '#000000',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: '#AFC4CB',
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
      marginBottom: windowHeight * .25,
    },
    safeAreaViewAlt: {
      flex: 1,
      marginBottom: windowHeight * .15,
    },
    subtitle: {
      color: 'rgba(235, 235, 245, 0.6)',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 22,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
      textAlign: 'center',
    },
    textInput: {
      color: '#000000',
      flex: 1,
    },
    title: {
      fontFamily: 'Signika',
      color: '#FFFFFF',
      fontSize: 46,
      fontWeight: '700',
      lineHeight: 46,
      textAlign: 'center',
    },
    textContainer: {
      justifyContent: 'center',
    },
    mb: {
      marginBottom:32,
    },
    logo: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left:0,
      width: windowWidth,
    },
    logoAlt: {
      position: 'absolute',
      bottom: -130,
      right: 0,
      left:0,
      width: windowWidth,
    }
});

export { styles }