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

  addItem = (newItem) => {
    this.setState({todoItem: newItem})

    let newCurrentList = this.state.currentList
    newCurrentList.items.push(newItem)

    this.setState({currentList: newCurrentList})

    this.editItem(this.state.todoItem)
  }

  editItem = (itemToEdit) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({todoItem: itemToEdit})

    let newCurrentList = this.state.currentList
    newCurrentList.items.push(itemToEdit)

    this.setState({currentList: newCurrentList})
  }

  deleteList = (key) => {
    this.setState({ todoLists: [...this.state.todoLists.filter(todoList => todoList.key !== key)] });
    this.goHome();
  }

  submitChange = (newTodoItem) => {
    this.setState({todoItem: newTodoItem})
    this.setState({currentScreen: AppScreen.LIST_SCREEN})
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen
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