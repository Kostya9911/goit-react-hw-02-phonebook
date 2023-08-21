import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ onDelete, contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactItem
              onDelete={() => {
                onDelete(id);
              }}
              name={name}
              number={number}
            />
          </li>
        );
      })}
    </ul>
  );
};
