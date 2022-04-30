import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/contactsList/slice";
import s from "./ListItem.module.css";

function ListItem({ name, number, id }) {
    const dispatch = useDispatch();
    

    const h = () => {
        console.log(dispatch(removeContact(id)))
        dispatch(removeContact(id))
    }
    return (
        <li className={s.item} >
            <p>{name}</p>
            <a className={s.link} href={`tel:+${number.split('-').join('')}`}>{number}</a>
            <button
                className={s.button}
                type="button"
                onClick={h}
            >
                Delete
            </button>
        </li >
    )
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ListItem;