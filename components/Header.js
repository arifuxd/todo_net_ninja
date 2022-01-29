import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header : {
        height : 80,
        paddingTop : 30,
        backgroundColor : 'coral'
    }, 
    title : {
        fontSize : 20, 
        fontWeight : 'bold',
        color : 'white', 
        textAlign : 'center'
    }
});

export default Header;

