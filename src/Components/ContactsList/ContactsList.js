import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ListItem from "../ListItem";
import s from "./ContactsList.module.css";

function ContactsList() {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    const getVisibleContacts = () => {
        const normalizedFilterText = filter.toLowerCase();
    
            return contacts.filter(({name}) =>
            name.toLocaleLowerCase().includes(normalizedFilterText));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <ul className={s.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <ListItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                />
            ))}
            
        </ul>
    )   
}

ContactsList.propTypes = {
    contactsBook: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default ContactsList;