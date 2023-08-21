import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactItem name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};
