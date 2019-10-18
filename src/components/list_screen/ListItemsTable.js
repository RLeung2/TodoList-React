import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    state = {
        todoList: this.props.todoList,
        sortCriteria: ""
    }

    sortByTask = () => {
        if (this.state.sortCriteria === "taskIncreasing") {
            this.setState({sortCriteria: "taskDecreasing"})

            let newTodoList = this.state.todoList
            newTodoList.items = newTodoList.items.sort(this.compare)

            this.setState({todoList: newTodoList})
        }
        else {
            this.setState({sortCriteria: "taskIncreasing"})

            let newTodoList = this.state.todoList
            newTodoList.items = newTodoList.items.sort(this.compare)

            this.setState({todoList: newTodoList})
        }
    }

    sortByDueDate = () => {
        if (this.state.sortCriteria === "dueDateIncreasing") {
            this.setState({sortCriteria: "dueDateDecreasing"})

            let newTodoList = this.state.todoList
            newTodoList.items = newTodoList.items.sort(this.compare)

            this.setState({todoList: newTodoList})
        }
        else {
            this.setState({sortCriteria: "dueDateIncreasing"})

            let newTodoList = this.state.todoList
            newTodoList.items = newTodoList.items.sort(this.compare)

            this.setState({todoList: newTodoList})
        }
    }

    sortByStatus = () => {
        if (this.state.sortCriteria === "statusIncreasing") {
            this.setState({sortCriteria: "statusDecreasing"})

            let newTodoList = this.state.todoList
            newTodoList.items = newTodoList.items.sort(this.compare)

            this.setState({todoList: newTodoList})
        }
        else {
            this.setState({sortCriteria: "statusIncreasing"})

            let newTodoList = this.state.todoList
            newTodoList.items = newTodoList.items.sort(this.compare)

            this.setState({todoList: newTodoList})
        }
        console.log(this.state.sortCriteria)
    }

    compare = (item1, item2) => {
        let criteria = this.state.sortCriteria
        if ( (criteria === "taskDecreasing") || (criteria === "dueDateDecreasing") || (criteria === "statusDecreasing") ) {
            let temp = item1;
            item1 = item2;
            item2 = temp;
        }

        if ( (criteria === "taskDecreasing") || (criteria === "taskIncreasing") ) {
            if (item1.description < item2.description)
                return -1;
            else if (item1.description > item2.description)
                return 1;
            else
                return 0;
        }

        else if ( (criteria === "dueDateDecreasing") || (criteria === "dueDateIncreasing") ) {
            let dueDate1 = item1.due_date
            let dueDate2 = item2.due_date
            let date1 = new Date(dueDate1)
            let date2 = new Date(dueDate2)
            if (date1 < date2)
                return -1;
            else if (date1 > date2)
                return 1;
            else
                return 0;
        }

        else {
            if (item1.completed < item2.completed)
                return -1;
            else if (item1.completed > item2.completed)
                return 1;
            else
                return 0;
        }
    }

    render() {
        return (
            <div id="list_items_container">
                <div className="list_item_header_card">
                    <div className="list_item_task_header" onClick={this.sortByTask}>Task</div>
                    <div className="list_item_due_date_header" onClick={this.sortByDueDate}>Due Date</div>
                    <div className="list_item_status_header" onClick={this.sortByStatus}>Status</div>
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
