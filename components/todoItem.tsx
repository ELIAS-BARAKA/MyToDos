/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default function TodoItem(props: any) {
  const {item, pressHandler} = props;
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
          <Text>{item.text}</Text>
          <FontAwesomeIcon icon={faTrash} style={{color: '#E64848'}} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
