import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import IconButton from './IconButton';
import { images } from '../Image';

const Task = ({item, deleteTask}) => {
    return(
        <View style={styles.container}>
            <IconButton type={images.uncompleted}/>
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