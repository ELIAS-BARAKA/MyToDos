/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function AddTodo(props: any) {
  const {submitHandler} = props;
  const [text, setText] = useState('');
  const changeHandler = (value: any) => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => submitHandler(text)}>
        <FontAwesomeIcon icon={faPlus} style={{color: '#ffffff'}} />
        <Text style={styles.addBtnText}>add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  addBtn: {
    backgroundColor: '#9DC08B',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
