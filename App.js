
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import DetectContactInfo from './src/utils';

function App() {
  const [textInput, setTextInput] = useState('');
  const dc = new DetectContactInfo();

  const detectContactInfo = (text) => {
    setTextInput(text);
    const textArr = text.split(' ');

    const sortedTextArr = dc.mergeSort(textArr);
    console.log(sortedTextArr);

    sortedTextArr.forEach(element => {
      const { isPhoneNumber,
        isEmail,
        text } = dc.detectContactInfo(element);
      if (isPhoneNumber || isEmail) {
        Alert.alert('Contact Info Detected', isPhoneNumber ? 'Phone Number: ' + text : 'Email: ' + text);

      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Enter text to detect contact info</Text>
      <TextInput
        placeholder="Enter text..."
        style={styles.textInput}
        onChangeText={(text) => {
          detectContactInfo(text);
        }}
        value={textInput}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default App