import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import {filterContacts, getFilter} from '../../redux/contactsFilter/slice'
import s from "./ContactsFilter.module.css";

function ContactsFilter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(filterContacts(e.currentTarget.value))
    };

    return (
        <div className={s.filterContainer}>
            <label className={s.label}>
                Find contacts by name
                <input
                    className={s.input}
                    type="text"
                    name="filter"
                    value={filter}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={changeFilter}
                />
            </label>
        </div>
        
    )
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
}

export default ContactsFilter;