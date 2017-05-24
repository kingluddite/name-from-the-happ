import React, { Component } from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

// collections
import { SectionsCollection } from './../../api/sections';

class AddSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleLogout() {

  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.name.value;
    const ownerId = Meteor.userId();

    if (name) {
      SectionsCollection.insert({
        name,
        ownerId,
        presentations: {},
      });
      this.name.value = '';
    }
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="button button--pill" onClick={ this.openModal }>Add Class</button>
        <Modal
          isOpen={ this.state.modalIsOpen }
          contentLabel="Add Class"
          onAfterOpen={ () => this.name.focus() }
          onRequestClose={this.closeModal}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
        >
        <form className="boxed-view__form" onSubmit={this.handleSubmit.bind(this)}>
          {/* <input type="text" ref={(name) => { this.name = name; }} /> */}
          <input type="text" ref={(name) => { this.name = name; }} />
          <button className="button">Add Section</button>
        </form>
        <button className="button button--default" onClick={this.closeModal}>Cancel</button>
      </Modal>
      </div>
    );
  }
}

export default AddSection;
