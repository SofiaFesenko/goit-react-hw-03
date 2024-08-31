import { useEffect } from 'react'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'

import ContactList from './components/ContactList/ContactList'
import { useDispatch } from 'react-redux';
import { addContact } from './redux/contactsSlice';


function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const localstorageItems = localStorage.getItem("contactsList")
    if (localstorageItems !== null) {
      const localStorageContacts = JSON.parse(localstorageItems)
      localStorageContacts.map(contact => {
        dispatch(addContact(contact))
      })
    }
  }, [dispatch])


  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </>
  )
}



export default App
