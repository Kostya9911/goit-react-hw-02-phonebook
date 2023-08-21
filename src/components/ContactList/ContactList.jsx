import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => {
        return (
          <li key={id}>
            <ContactItem name={name} />
          </li>
        );
      })}
    </ul>
  );
};
