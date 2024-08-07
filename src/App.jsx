import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react'

import ContactForm from './components/ContactForm'
import SearchBox from './components/SearchBox'

import ContactList from './components/Contacts/ContactList'
import Contact from './components/Contacts/Contact'



function App() {

  const [inputValue, setInputValue] = useState("")
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const localstorageItems = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)))
    setContacts(localstorageItems)
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

    localStorage.setItem(newContact.id, JSON.stringify(newContact))

    setContacts([...contacts, newContact])
    
    actions.resetForm()
  }

  const filteredContacts = contacts.filter( contact => contact.name.toLowerCase().includes(inputValue))

  const getKey = idToDelete => {
    localStorage.removeItem(idToDelete)
    setContacts(() => {
      return filteredContacts.filter(contact => contact.id != idToDelete)
    })
    
  }

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm handleSubmit={handleSubmit}/>
      <SearchBox onchange={hadnleInput}/>

      <ContactList>
        {filteredContacts.map( contact => {
          return <Contact key={contact.id} name={contact.name} number={contact.number} id={contact.id} getKey={getKey}/>
        })}
      </ContactList>
    </>
  )
}

export default App
