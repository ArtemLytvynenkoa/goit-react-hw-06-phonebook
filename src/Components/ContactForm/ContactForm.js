import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/contactsList/slice";
import s from "./ContactForm.module.css";

function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts)
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const checkSameName = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    const message = `${name} is already in contacts!`;

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = e => {
        e.preventDefault();

        checkSameName ? (alert(message)) : dispatch(addContact({ name, number }));

        reset()
    };

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        };
    };

    return (
            <div className={s.formContainer}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <label className={s.label}>
                        Name
                        <input
                            className={s.input}
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={handleInputChange}
                        />
                    </label>

                    <label className={s.label}>
                        Number
                        <input
                            className={s.input}
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={handleInputChange}
                        />
                    </label>
                    
                    <button className={s.button} type="submit">Add contact</button>

                </form>

            </div>
        )

}

export default ContactForm;