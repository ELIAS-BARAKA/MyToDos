import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Header from './components/header';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: '#40513B',
    flex: 1,
  };

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key: any) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = (text: any) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'ToDos must be over 3 characters long');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  list: {
    flex: 1,
    // marginTop: 10,
    // padding: 2,
  },
});

export default App;
