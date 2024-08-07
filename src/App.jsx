import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react'

import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'

import ContactList from './components/ContactList/ContactList'


function App() {

  const [inputValue, setInputValue] = useState("")
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const localstorageItems = localStorage.getItem("contactsList")
    if (localstorageItems !== null) {
      setContacts(JSON.parse(localstorageItems))
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
    setContacts(newContacts)

    localStorage.setItem("contactsList", JSON.stringify(newContacts))
    
    actions.resetForm()
  }

  const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(inputValue.toLowerCase()))

  const onDelete = idToDelete => {
    const afterDeletedContacts = contacts.filter(contact => contact.id != idToDelete)
    setContacts(afterDeletedContacts)
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
