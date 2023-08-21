export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div>
      <p>{name}:</p>
      <p>{number}</p>

      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
