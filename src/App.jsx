import { nanoid } from 'nanoid';
import { useEffect } from 'react'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'

import ContactList from './components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';


function App() {

  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts.items)
  console.log(contacts);
  const filter = useSelector(state => state.filters.filters.name)
  console.log(filter);


  useEffect(() => {
    const localstorageItems = localStorage.getItem("contactsList")
    if (localstorageItems !== null) {
      const localStorageContacts = JSON.parse(localstorageItems)
      localStorageContacts.map(contact => {
        dispatch(addContact(contact))
      })
    }
  }, [dispatch])

  const hadnleInput = (event) => {
    const value = event.target.value
    dispatch(changeFilter(value))
  }


  const handleSubmit = (values, actions) => {

    let newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    }

    dispatch(addContact(newContact))
    localStorage.setItem("contactsList", JSON.stringify([...contacts, newContact]))
    actions.resetForm()
  }

  const filteredContacts = contacts.filter( contact => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()))

  const onDelete = idToDelete => {
    dispatch(deleteContact(idToDelete))
    const afterDeletedContacts = contacts.filter(contact => contact.id != idToDelete)
    localStorage.setItem("contactsList", JSON.stringify(afterDeletedContacts))
  }

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm handleSubmit={handleSubmit}/>
      <SearchBox handleinput={hadnleInput}/>

      <ContactList filteredContacts={filteredContacts} onDelete={onDelete} />
    </>
  )
}



export default App
