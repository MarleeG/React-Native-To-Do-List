import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Title from './components/title';
import Todo from './components/todo';
import Form from './components/form';


export default class App extends Component {
  state = {
    todos: ['Do laundry', 'wash dishes'],
    todo: '',
    showEditButton: false,
    index: -1,
    deleteButtonColor: '#DB373A',
    editButtonColor: '#FFFFFF'
  }

  addItem = newToDo => {
    this.setState({
      todos: [newToDo, ...this.state.todos],
      todo: ''
    })
  }

  updateToDo = todo => {
    this.setState({ todo })
  }

  updatePreviousToDo = () => {
    var toDoItems = this.state.todos;

    toDoItems[this.state.index] = this.state.todo;

    this.setState({
      todos: toDoItems,
      todo: '',
      showEditButton: false,
    })
  }

  deleteToDo = index => {
    const todos = this.state.todos;
    var new_todos_list = []

    todos.map((item, i) => {
      if (index !== i) {
        new_todos_list.push(item);
      }
    })

    this.setState({
      todos: new_todos_list
    })
  }

  editToDo = (item, index) => {
    this.setState({
      showEditButton: true,
      todo: item,
      index: index
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Title />
          {/* <Form
            updatePreviousToDo={this.updatePreviousToDo} <
            updateToDo={(todo) => this.updateToDo(todo)}  <
            addItem={this.addItem} < 
            showEditButton={this.state.showEditButton} <
            todo={this.state.todo} <
          /> */}
          
          <Form 
            updateToDo={(todo) => this.updateToDo(todo)}
            todo={this.state.todo}
            showEditButton={this.state.showEditButton}
            updatePreviousToDo={this.updatePreviousToDo}
            addItem={this.addItem}
          />
         <Todo
            todos={this.state.todos}
            editToDo={(item, index) => this.editToDo(item, index)}
            deleteOneTodo={(i) => this.deleteToDo(i)}
            deleteButtonColor={this.state.deleteButtonColor}
            editButtonColor={this.state.editButtonColor}
          />


        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});