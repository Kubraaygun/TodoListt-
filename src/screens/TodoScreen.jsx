import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoScreen = () => {
  //inputun icerisinde ki deger
  const [todo, setTodo] = useState('');
  //eklenilen todolar
  const [todos, setTodos] = useState([]);

  //TodoScreen yuklendiginde AsyncStorage'den todolari kaydetmek

  const saveTodos = async saveTodo => {
    try {
      // AsyncStorage ekleme yaparken setItem metodu ile ekleme yapariz
      // Bizden 2 deger ister:
      //1.deger: key(string;) | 2.deger: value(string)
      //objeyi stringe cevirebilmek icin json.stringify metodu kullaniriz
      await AsyncStorage.setItem('todos', JSON.stringify(saveTodo));
    } catch (error) {
      console.log(error);
    }
  };

  //AsyncStorage'den todolari yuklemek icin verileri almak
  const loadTodos = async () => {
    try {
      const storedData = await AsyncStorage.getItem('todos');
      if (storedData) {
        setTodos(JSON.parse(storedData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  //silme
  const deleteTodo = async id => {
    //id'si esit olmayanlari cikar ve bize dizi olarak dondur
    const updatedTodos = todos.filter(item => item.id !== id);
    //state guncelle
    setTodos(updatedTodos);
    //asyncstorage guncelle
    saveTodos(updatedTodos);
  };

  //guncelleme

  const updatedTodos = id => {
    // id'sini bildigimiz elemani todos dizisi icerisinde bulmak icin find methodu kullandik
    const exitingTodo = todos?.find(item => item.id === id);
    //id'li eleman dizide yoksa fonksiyonu durdur
    if (!exitingTodo) return;

    Alert.prompt(
      'Edit Todo', //kullaniciya gosterilecek baslik
      'Update', //kullaniciya yonlendirme

      newUpdateText => {
        if (newUpdateText) {
          const updateTodos = todos.map(item =>
            item?.id === id ? {...item, text: newUpdateText} : item,
          );
          setTodos(updateTodos);
          saveTodos(updateTodos);
        }
      },
      'plain-text',
      exitingTodo.text,
    );
  };

  //useEffect hooku, butun render islemlerinin sonunda calisir

  useEffect(() => {
    loadTodos();
  });

  //add butonuna basildiginda calisacak olan fonksiyon
  const addTodo = () => {
    //yeni bir todo objesi olurstur ve todo stateine aktar
    const updatedTodos = [...todos, {id: uuid.v4(), text: todo}];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headerText}>React Native Async Storage</Text>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={text => setTodo(text)}
            placeholder="Type a Todo"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={addTodo}
            style={[styles.button, styles.addButton]}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item}) => (
            <View style={styles.todoItem}>
              <Text style={{color: '#000000'}}>{item?.text}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => deleteTodo(item?.id)}
                    style={[styles.button, styles.deleteButton]}>
                    <Text style={styles.buttonText}> Delete</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => updatedTodos(item?.id)}
                    style={[styles.button, styles.updateButton]}>
                    <Text style={styles.buttonText}> Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },
  button: {
    marginLeft: 10,

    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  buttonText: {
    color: 'white',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  buttonContainer: {},
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
  },
  updateButton: {
    backgroundColor: 'green',
    padding: 10,
  },
});
