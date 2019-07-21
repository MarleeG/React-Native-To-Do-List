import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#374461',
        marginTop: 50,
        marginRight: 10,
        marginLeft: 10,
        height: 'auto',
        borderRadius: 15,
        width: '95%',
        paddingBottom: 30
    },
    toDoHeader: {
        color: 'white',
        fontSize: 20,
        marginTop: 0,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    todosText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
    todoContainer: {
        width: 100,
        height: 50,
        // backgroundColor: 'blue',
        marginTop: 15,
        justifyContent: 'center',

    },
    deleteContainer: {
        marginLeft: 10,
        borderColor: '#DB373A',
        borderStyle: 'solid',
        borderWidth: 0.5,
        width: '10%',
        height: 'auto',
        borderRadius: 10,
        marginTop: 22
    },
    toDosContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    editContainer: {
        marginLeft: 10,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 0.5,
        width: '20%',
        height: 'auto',
        borderRadius: 10,
        marginTop: 22,
    },
});

const Todo = props => {
    showToDoList = (todos) => {
        return (
            todos.map((e, i) => {
                return (
                    <View key={i} style={styles.toDosContainer}>

                        <View style={styles.todoContainer}>
                            <Text style={styles.todosText}>
                                {e}
                            </Text>
                        </View>

                        <View style={styles.deleteContainer}>
                            <Button
                                onPress={() => props.deleteOneTodo(i)}
                                title="X"
                                style={styles.deleteButton}
                                color={props.deleteButtonColor}
                            />
                        </View>

                        <View style={styles.editContainer}>
                            <Button
                                onPress={() => props.editToDo(e, i)}
                                title="Edit"
                                style={styles.editButton}
                                color={props.editButtonColor}
                            />
                        </View>
                    </View>
                )
            })
        )
    }

    return(
        <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View>
                        <Text style={styles.toDoHeader}>
                            My To Do List
                    </Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        {this.showToDoList(props.todos)}
                    </View>
                </View>
            </View>
    )
}

export default Todo;