import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
      <Text >{item.text}</Text>
      <MaterialIcons name='delete' size={18} color='red'/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop : 16,
        borderColor : '#bbb',
        borderWidth : 1,
        borderStyle : 'dashed',
        borderRadius : 10,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    }
});
export default TodoItem;

