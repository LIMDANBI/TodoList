import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Title from './src/components/Title';
import Input from './src/components/Input';
import IconButton from './src/components/IconButton'
import { images } from './src/Image';

export default function App() {
  const [newTask, setNewTask] = useState('');

  const addTask = () => { // 완료버튼을 누르면 입력된 내용을 확인하고 Input 컴포넌트를 초기화
    alert(`add: ${newTask}`);
    setNewTask('');
  };

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
      {/* <Button
        title = "enter" // 버튼 내부에 표시할 텍스트
        onPress={()=> { // 사용자가 버튼을 탭할 때 호출되는 핸들러
          addTask();
        }}
      /> */}
      <IconButton type={images.uncompleted}/>
      <IconButton type={images.completed}/>
      <IconButton type={images.delete}/>
      <IconButton type={images.edit}/>
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
