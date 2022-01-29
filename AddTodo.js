import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState('')

    const changeHandler = value =>{
        setText(value)
       
    }

  return (
    <View>
      <TextInput
      placeholder='New Todo'
      onChangeText={value => changeHandler(value)}
    style={styles.input}
      />
    <Button color ="coral" title="add Todo" onPress={() => submitHandler(text)}/>
    </View>
  );
};

const styles = StyleSheet.create({
    input : {
            marginBottom : 10,  
            paddingHorizontal : 8,
            paddingVertical : 6,
            borderBottomWidth : 1,
            borderBottomColor : '#ddd'   
        },
});
export default AddTodo;

