import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    state = {
        todoList: this.props.todoList
    }

    render() {
        return (
            <div id="list_items_container">
                <div className="list_item_header_card">
                    <div className="list_item_task_header">Task</div>
                    <div className="list_item_due_date_header">Due Date</div>
                    <div className="list_item_status_header">Status</div>
                </div>
                {
                    this.props.todoList.items.map((todoItem, index)=>(
                        <ListItemCard
                            todoList={this.state.todoList}
                            editItem={this.props.editItem}
                            index={index}
                            moveItemUp={this.props.moveItemUp} 
                            moveItemDown={this.props.moveItemDown} 
                            deleteItem={this.props.deleteItem} 
                            key={todoItem.key}
                            listItem={todoItem} />
                    ))
                }
            </div>
        )
    }
}

export default ListItemsTable
