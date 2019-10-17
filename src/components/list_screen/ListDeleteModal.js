import React, { Component } from 'react'

export class ListDeleteModal extends Component {

    render() {
        return (
            <div id="list_trash" onClick={this.props.processDeleteList}>&#128465;</div>
        )
    }
}

export default ListDeleteModal