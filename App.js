import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [name, setName] = useState('Ariful Islam')
  const [age, setAge] = useState('33')
  return (
    <View style={styles.container}>
      <Text> Enter Your Name Please </Text>
      <TextInput placeholder ='e.g. John Doe' onChangeText={val => setName(val) } style={styles.input}/>
      <Text> Enter Your Age Please </Text>
      <TextInput placeholder ='e.g. 19' onChangeText={val => setAge(val) } style={styles.input}/>
      <Text>My name is {name} and I'm {age} years old</Text>
      <Button title='Click Me' onPress={()=> setName('Akash Islam')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderWidth : 1,
    borderColor : '#ccc',
    padding : 10,
    margin : 16,
  }
});
