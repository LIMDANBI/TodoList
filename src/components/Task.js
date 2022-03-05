import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import IconButton from './IconButton';
import { images } from '../Image';

const Task = ({item, deleteTask, toggleTask}) => {

    IconButton.defaultProps = { // props로 onPressOut이 전달되지 않았을 경우에도 문제가 발생하지 않도록 defaultProps를 이용해 onPressOut의 기본값 지정
        onPressOut: () => {},
    };

    return(
        <View style={styles.container}>
            <IconButton 
                type={item.completed ? images.completed : images.uncompleted} 
                id={item.id} 
                onPressOut={toggleTask}/>
            <Text style={{fontSize:20, flex:1 }}> {item.text} </Text>
            <IconButton type={images.edit} />
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
});

export default Task;