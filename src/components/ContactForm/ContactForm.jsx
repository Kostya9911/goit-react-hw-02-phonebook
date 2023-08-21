import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = evt.target.elements;

    if (this.props.contacts.find(contact => contact.name === name.value)) {
      alert(`${name.value} is already in contacts!`);
      evt.currentTarget.reset();
      return;
    }

    this.props.onSubmit(name.value);
    evt.currentTarget.reset();
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
