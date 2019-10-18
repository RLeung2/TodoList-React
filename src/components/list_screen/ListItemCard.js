import React, { Component } from 'react'

export class ListItemCard extends Component {
    checkDisabledMoveUp = (i) => {
        if (i === 0) {
            return "list_item_card_button disabled"
        } 
        return "list_item_card_button"
    }

    checkDisabledMoveDown = (i) => {
        if (i === this.props.todoList.items.length - 1) {
            return "list_item_card_button disabled"
        }
        return "list_item_card_button"
    }

    isCompletedText = () => {
        if (this.props.listItem.completed){
            return "Completed"
        }
        return "Pending"
    }

    isCompletedStyle = () => {
        return {
            color: this.props.listItem.completed ? 'green' : 'red'
        }
    }

    render() {
        return (
            <div className='list_item_card' onClick={this.props.editItem.bind(this, this.props.listItem)}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed' style={this.isCompletedStyle()}>
                    < this.isCompletedText />
                </div>
                <div className="list_item_card_toolbar">
                    <div 
                        className={this.checkDisabledMoveUp(this.props.index)} 
                        onClick={this.props.moveItemUp.bind(this, this.props.index)}>
                        &#x21e7;
                    </div>
                    <div 
                        className={this.checkDisabledMoveDown(this.props.index)} 
                        onClick={this.props.moveItemDown.bind(this, this.props.index)}>
                        &#x21e9;
                    </div>
                    <div className={"list_item_card_button"} onClick={this.props.deleteItem.bind(this, this.props.listItem.key)}>&#10005;</div>
                </div>
            </div>
        )
    }
}

export default ListItemCard
