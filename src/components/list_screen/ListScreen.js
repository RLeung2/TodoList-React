import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import ListDeleteModal from './ListDeleteModal'
import PropTypes from 'prop-types';
import ItemScreen from '../item_screen/ItemScreen'
import uuid from 'uuid';

export class ListScreen extends Component {
    state = {
        name: this.props.todoList.name,
        owner: this.props.todoList.owner,
        todoList: this.props.todoList,
        newItem: {
            key: uuid.v4(),
            description:'',
            due_date:'',
            assigned_to:'',
            completed: false
        }
    }

    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value});
        this.props.todoList.name = e.target.value
    }

    onChangeOwner = (e) => {
        this.setState({ [e.target.name]: e.target.value});
        this.props.todoList.owner = e.target.value
    }

    processDeleteList = () => {
        let dialog = document.getElementById("modal_yes_no_dialog");
        dialog.classList.add("is_visible")
    }

    confirmDelete = () => {
        this.props.deleteList(this.props.todoList.key)
    }

    cancelDelete = () => {
        let dialog = document.getElementById("modal_yes_no_dialog");
        dialog.classList.remove("is_visible")
    }

    moveItemUp = (index, event) => {
        if ((0 < index) && (index < this.state.todoList.items.length)) {
            let newTodoList = this.state.todoList
            let newListItems = this.state.todoList.items
            let temp = newListItems[index]
            newListItems[index] = newListItems[index-1]
            newListItems[index-1] = temp

            newTodoList.items = newListItems
            this.setState({ todoList: newTodoList })
        }

        event.stopPropagation()
    }

    moveItemDown= (index, event) => {
        if ((this.state.todoList.items.length > 1) && (index < this.state.todoList.items.length-1)) {
            let newTodoList = this.state.todoList
            let newListItems = this.state.todoList.items
            let temp = newListItems[index]
            newListItems[index] = newListItems[index+1]
            newListItems[index+1] = temp

            newTodoList.items = newListItems
            this.setState({ todoList: newTodoList })
        }

        event.stopPropagation()
    }

    deleteItem = (key, event) => {
        let newTodoList = this.state.todoList
        let newListItems = [...newTodoList.items.filter(item => item.key !== key)]
        newTodoList.items = newListItems
        this.setState({ todoList: newTodoList });

        event.stopPropagation()
    }

    

    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash processDeleteList={this.processDeleteList}/>
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            name="name"
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield" 
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            name="owner"
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield" 
                            onChange={this.onChangeOwner}
                        />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} moveItemUp={this.moveItemUp} moveItemDown={this.moveItemDown} 
                deleteItem={this.deleteItem} editItem={this.props.editItem}/>
                <ListDeleteModal confirmDelete={this.confirmDelete} cancelDelete={this.cancelDelete}/>
                <div 
                    className="list_item_add_card" 
                    onClick={this.props.addItem.bind(this, this.state.newItem)}>
                    &#x2b;
                </div>
            </div>
        )
    }
}

export default ListScreen
