import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const styles = StyleSheet.create({
    containerText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 20
    },
    buttonContainer: {
        borderColor: '#374461',
        borderStyle: 'solid',
        borderWidth: 0.5,
        width: 100,
        height: 'auto',
        borderRadius: 10,
        alignSelf: 'center'
    },
    button: {
        marginLeft: 20,
        textAlign: 'center',
    },
    textInputContainer: {
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderBottomColor: '#374461',
        marginBottom: 10,
        width: 375,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 0.2,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        width: '95%',
        textAlign: 'center'
    }
});

const Form = props => {
    addNewToDo = () => {
        props.addItem(props.todo);
    }

    return (
        <View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add a to do'
                    onChangeText={todo => props.updateToDo(todo)}
                    value={props.todo}
                />
            </View>

            <View style={styles.buttonContainer}>
                {/* if */}
                {props.showEditButton ?
                    <Button
                        onPress={props.updatePreviousToDo}
                        title='Update'
                        style={styles.button}
                        color='#374461'
                    />
                    :
                    // else
                    <Button
                        style={styles.button}
                        onPress={this.addNewToDo}
                        title='Add'
                        color='#374461'
                    />
                }
            </View>
        </View>
    )
}
export default Form;
