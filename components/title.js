import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#374461',
        height: 115, 
        width: '100%'
    },
    containerText: {
        color: 'white',
        fontSize: 40
    }
});


const Title = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.containerText}>
                To Do List
            </Text>
        </View>
    )
}

export default Title;