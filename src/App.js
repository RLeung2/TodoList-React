import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    todoItem: null,
    isNewItem: false
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  goList = () => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    this.setState({currentListItems: todoListToLoad.items})
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  addTodoList = (newList) => {
    this.setState({currentList: newList})

    let newTodoLists = this.state.todoLists
    newTodoLists.push(newList)

    this.setState({todoLists: newTodoLists})

    this.setState({currentScreen: AppScreen.LIST_SCREEN})
  }

  addItem = (newItem, isNew) => {
    this.setState({todoItem: newItem})
    this.setState({isNewItem: isNew})

    let newCurrentList = this.state.currentList
    newCurrentList.items.push(newItem)

    this.setState({currentList: newCurrentList})

    this.edit(this.state.todoItem)
  }

  edit = (itemToEdit) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN})
  }

  editItem = (itemToEdit) => {
    this.setState({todoItem: itemToEdit})
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
  }

  deleteList = (key) => {
    this.setState({ todoLists: [...this.state.todoLists.filter(todoList => todoList.key !== key)] });
    this.goHome();
  }

  submitChange = (newTodoItem) => {
    this.setState({todoItem: newTodoItem})
    this.setState({currentScreen: AppScreen.LIST_SCREEN})
    this.setState({isNewItem: false})
  }

  cancelAdd = () => {
    let newCurrentList = this.state.currentList
    newCurrentList.items.pop()

    this.setState({currentList: newCurrentList})
    this.setState({isNewItem: false})
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen
          addTodoList={this.addTodoList.bind(this)}
          loadList={this.loadList.bind(this)} 
          todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          addItem={this.addItem.bind(this)}
          editItem={this.editItem.bind(this)}
          deleteList={this.deleteList}
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList} />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
          cancelAdd={this.cancelAdd}
          isNewItem={this.state.isNewItem}
          goList={this.goList}
          submitChange={this.submitChange}
          currentScreen={this.state.currentScreen}
          todoItem={this.state.todoItem} />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;