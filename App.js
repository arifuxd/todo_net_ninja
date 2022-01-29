import { useState } from 'react';
import { FlatList, Alert, StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './AddTodo';
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy coffee', id: '1' },
    { text: 'Create an App', id: '2' },
    { text: 'Play on the Switch', id: '3' }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != key)
    })
  }

  console.log(todos)

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodos]
      })
    } else {
      Alert.alert('Oops', 'Please Enter up minimum 3 characters', [{
        text: 'Understood', onPress: () => console.log('no no no')
      }])
    }


  }


  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={key => key.id}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
