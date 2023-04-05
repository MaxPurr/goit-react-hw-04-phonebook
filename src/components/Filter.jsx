import PropTypes from 'prop-types';
import css from '../css/Filter.module.css';

export const Filter = ({ updateFilter }) => {
  return (
    <div className={css.filter_container}>
      <p className={css.filter_text}>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        onChange={updateFilter}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};
