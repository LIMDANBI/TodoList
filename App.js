import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Title';
import Input from './src/components/Input';

export default function App() {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    alert(`add: ${newTask}`);
    setNewTask('');
  };

  const handleTextChange = (text) => {
    setNewTask(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="todo list"></Title>
      <Input
        value = {newTask}
        onChangeText = {handleTextChange}
        onSubmitEditing = {addTask}
      />
      <Button
        title = "enter"
        onPress={()=> {
          addTask();
        }}
      />
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
});
