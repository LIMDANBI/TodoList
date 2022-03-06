import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import IconButton from './IconButton';
import { images } from '../Image';
import Input from './Input';

const Task = ({item, deleteTask, toggleTask, updateTask}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const _handleUpdateButtonPress = () => {
        setIsEditing(true);
    };

    const _onSubmitEditing = () => {
        if(isEditing){
            const editedTask = Object.assign({}, item, {text});
            setIsEditing(false);
            updateTask(editedTask);
        }
    }

    IconButton.defaultProps = { // props로 onPressOut이 전달되지 않았을 경우에도 문제가 발생하지 않도록 defaultProps를 이용해 onPressOut의 기본값 지정
        onPressOut: () => {},
    };

    return isEditing ? (
        <Input
            value={text}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={_onSubmitEditing}
        />
    ) : (
        <View style={styles.container}>
            <IconButton 
                type={item.completed ? images.completed : images.uncompleted} 
                id={item.id} 
                onPressOut={toggleTask}/>
            <Text style={item.completed ? styles.completed : styles.text}> {item.text} </Text>
            {/* 완료된 항목은 수정 버튼이 나타나지 않음 */}
            {item.completed || 
            <IconButton type={images.edit} onPressOut={_handleUpdateButtonPress} />} 
            <IconButton type={images.delete} id={item.id} onPressOut={deleteTask}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향, 역방향) 지정
        width: Dimensions.get('window').width - 15,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'space-around', // 아이템들의 “둘레(around)”에 균일한 간격을 만들어 줌
    },
    text: {
        fontSize: 20,
        flex: 1,
        color: 'black',
    },
    completed: {
        fontSize: 20,
        flex: 1,
        color: 'gray',
        textDecorationLine: 'line-through',
    },
});

export default Task;