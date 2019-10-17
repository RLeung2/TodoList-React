import React, { Component } from 'react'

export class ListDeleteModal extends Component {

    render() {
        return (
            <div className="modal" id="modal_yes_no_dialog" data-animation="slideInOutLeft">
                <div className="modal_dialog">
                    <header className="dialog_header">
                    Delete list?
                    </header>
                    <section className="dialog_content">
                        <p><strong>Are you sure you want to delete this list?</strong></p>
                    </section>
                    <button id="dialog_yes_button" onClick={this.props.confirmDelete}>Yes</button>
                    <button id="dialog_no_button" onClick={this.props.cancelDelete}>No</button>
                    <footer className="dialog_footer">
                        The list will not be retreivable.
                    </footer>
                    </div>
            </div>
        )
    }
}

export default ListDeleteModal