import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const IconButton = ({type, onPressOut, id}) => {

    const _onPressOut = () => {
        onPressOut(id);
    };
    
    return(
        // 터치 기반 입력 처리
        <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
            <Image source={type}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconbutton: {
        margin: 10, // 사용자 편의를 위해 버튼 주변을 클릭해서 정확히 클릭된 것으로 인식하도록 margin을 줌
    },
});

export default IconButton;