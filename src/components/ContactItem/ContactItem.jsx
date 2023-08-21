import PropTypes from 'prop-types';

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

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
