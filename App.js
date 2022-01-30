import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './AddTodo';
export default function App() {

  const [todos, setTodos] = useState([
    {text : 'Buy coffee', id : '1'},
    {text : 'Create an App', id : '2'},
    {text : 'Play on the Switch', id : '3'}
  ]);

  const pressHandler = key => {
    setTodos (prevTodos => {
      return prevTodos.filter(todo => todo.id != key)
    } )
  }

  const submitHandler = text => {
    setTodos((prevTodos)=>{
      return [{text : text, key : Math.random().toString()}, ...prevTodos]
    })
    
  }


  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler ={submitHandler}/>
          <View style={styles.list}>
              <FlatList
                data={todos}
                keyExtractor={key => key.id}
                renderItem ={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
                )}
              />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  content : {
    padding : 40,
  }, 
  list : {
    marginTop : 20,
  }
});
