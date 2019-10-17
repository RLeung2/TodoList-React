import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import ListDeleteModal from './ListDeleteModal'
import PropTypes from 'prop-types';

export class ListScreen extends Component {
    state = {
        name: this.props.todoList.name,
        owner: this.props.todoList.owner,
        todoListItems: this.props.todoList.items
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

    moveItemUp = () => {
        
    }

    moveItemDown() {

    }

    deleteItem = (key) => {
        console.log(key)
        this.setState({ todoListItems: [...this.state.todoListItems.filter(item => item.key !== key)] });
        console.log(this.state.todoListItems)
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
                <ListItemsTable todoList={this.props.todoList} moveItemUp={this.moveItemUp} moveItemDown={this.moveItemDown} deleteItem={this.props.deleteItem}/>
                <ListDeleteModal confirmDelete={this.confirmDelete} cancelDelete={this.cancelDelete}/>
            </div>
        )
    }
}

export default ListScreen
