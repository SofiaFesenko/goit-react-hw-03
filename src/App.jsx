import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'

import ContactList from './components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux';
import { addProfile, deleteProfile } from './redux/contactsSlice';


function App() {

  const [inputValue, setInputValue] = useState("")
  // const [contacts, setContacts] = useState([])


  const dispatch = useDispatch()

  const contacts = useSelector((state) => state.items.contacts.items)
  console.log(contacts);
  

  useEffect(() => {
    const localstorageItems = localStorage.getItem("contactsList")
    if (localstorageItems !== null) {
      const localStorageContacts = JSON.parse(localstorageItems)
      localStorageContacts.map(contact => {
        dispatch(addProfile(contact))
      })
      // setContacts(JSON.parse(localstorageItems))
    }
  }, [])

  const hadnleInput = (event) => {
    const value = event.target.value
    
    setInputValue(value)
  }


  const handleSubmit = (values, actions) => {

    let newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    }

    const newContacts = [...contacts, newContact]
    dispatch(addProfile(newContact))
    // setContacts(newContacts)

    localStorage.setItem("contactsList", JSON.stringify(newContacts))
    
    actions.resetForm()
  }

  const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(inputValue.toLowerCase()))

  const onDelete = idToDelete => {
    const afterDeletedContacts = contacts.filter(contact => contact.id != idToDelete)
    dispatch(deleteProfile(idToDelete))
    // setContacts(afterDeletedContacts)
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
