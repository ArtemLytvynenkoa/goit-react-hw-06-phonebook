import { useState, useEffect } from "react";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import ContactsFilter from "./Components/ContactsFilter";
import Notification from "./Components/Notification";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const formSubmitHandler = data => {
    const checkSameName =
      contacts.some(({ name }) => name.toLowerCase() === data.name.toLowerCase());
    
    const message = `${data.name} is already in contacts!`;

    setContacts(state => {
      return checkSameName ? (alert(message), state) :
        [data, ...contacts]
    });
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilterText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilterText));
  };

  const deleteContact = contactId => {
    setContacts(state => {
      return state.filter(contact => contact.id !== contactId)
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
      <>
        <Section title="Phone book">
          <ContactForm onSubmit={formSubmitHandler} />   
        </Section>

        <Section title="Contacts"> 
          {
            contacts.length === 0 ? 
            <Notification message="Contacts book is empty!" /> :
            <>
              <ContactsFilter
                value={filter}
                onChange={changeFilter}
              />
              <ContactsList
                contactsBook={visibleContacts}
                onClickDelete={deleteContact}
              /> 
            </>
              
          }
        </Section>
      </>  
    )
}

export default App;
