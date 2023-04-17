import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';

import { Text, View } from '../components/Themed';

export default function AttendancePage(props) {
  const {
    spanText1,
    cellularConnection,
    iconSignal,
    cap,
    swngLogoTransparentCmyk13,
    unsplashJmurdhtm7Ng,
    spanText2,
    line2,
    icons8ChatMessage5022,
    icons8Checkmark3222,
    iconHome1,
    iconStar1,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    rectangle431,
    rectangle432,
    icons8ChatMessage5024,
    icons8Checkmark3224,
    iconHome2,
    iconStar2,
    icons8ChatMessage5025,
    icons8Checkmark3225,
    iconHome3,
    iconStar3
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image style={styles.image} source={require('../assets/thumbnail_SWNG-white.png')} />
      <Text>Attendance Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: '5%',
    marginBottom: '5%',
    resizeMode: 'contain',
    height: '20%',
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '50%',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c11717',
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
