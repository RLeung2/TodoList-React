import React, { Component } from 'react'

export class ListItemCard extends Component {
    isCompletedText = () => {
        console.log(this.props.listItem.completed)
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
            <div className='list_item_card'>
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
                    <div className="list_item_card_button" onClick={this.props.moveItemUp.bind(this.props.keyy)}>&#x21e7;</div>
                    <div className="list_item_card_button" onClick={this.props.moveItemDown.bind(this.props.keyy)}>&#x21e9;</div>
                    <div className="list_item_card_button" onClick={this.props.deleteItem.bind(this, this.props.listItem.key)}>&#10005;</div>
                </div>
            </div>
        )
    }
}

export default ListItemCard
