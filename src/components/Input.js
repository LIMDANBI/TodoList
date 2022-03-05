import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, onSubmitEditing }) => {
    return(
        <TextInput 
            style={styles.input} 
            placeholder= "+ Add a task" 
            maxLength={50}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: Dimensions.get('window').width - 15, // RN에서 제공하는 Hooks중 하나로, 화면의 크기가 변경되면 화면의 크기, 너비, 높이를 자동으로 업데이트
        fontSize: 20,
        backgroundColor: '#f1f3f5',
        borderWidth : 1,
        borderRadius: 5,
        margin: 5,
        padding: 8,
        alignItems: 'center',
    },
});

export default Input;