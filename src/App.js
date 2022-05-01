import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import ContactsFilter from "./Components/ContactsFilter";
import Notification from "./Components/Notification";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contactsList/slice";

function App() {
  const contacts = useSelector(getContacts);

  return (
      <>
        <Section title="Phone book">
          <ContactForm />   
        </Section>

        <Section title="Contacts"> 
          {
            contacts.length === 0 ? 
            <Notification message="Contacts book is empty!" /> :
            <>
              <ContactsFilter/>
              <ContactsList/> 
            </> 
          }
        </Section>
      </>  
    )
}

export default App;
