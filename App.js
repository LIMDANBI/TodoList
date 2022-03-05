import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, View, ScrollView } from 'react-native';

import Title from './src/components/Title';
import Input from './src/components/Input';
import Task from './src/components/Task';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    1: { id: '1', text: 'todo list 1', completed: false }, // example
  });

  const addTask = () => { // 완료버튼을 누르면 입력된 내용을 확인하고 Input 컴포넌트를 초기화
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID] : {id: ID, text: newTask, completed: false },
    }
    setNewTask(''); //  Input 컴포넌트 초기화
    setTasks({ ...tasks, ...newTaskObject }); // 기존 목록을 유지한 상태에서 새로운 항목 추가
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks); // object.assign : 객체를 병합하는 메소드
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  }

  const handleTextChange = (text) => { //  Input 컴포넌트에서 값이 변할 때마다 newTask에 저장
    setNewTask(text);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title title="todo list"></Title>
      <Input
        value = {newTask}
        onChangeText = {handleTextChange} // 텍스트 입력 텍스트가 변경될 때 호출되는 콜백
        onSubmitEditing = {addTask} // 텍스트 입력 제출 버튼을 눌렀을 때 호출되는 콜백
      />
      <ScrollView>
        {Object.values(tasks)
          .reverse() // 최신 항목이 가장 앞에 보이도록 tasks를 역순으로 렌더링
          .map((item) => (
            <Task 
              key={item.id} 
              item = {item} 
              deleteTask={deleteTask}
              toggleTask={toggleTask} />
          ))}
      </ScrollView>
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
