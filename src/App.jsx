import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'

import ContactList from './components/ContactList/ContactList'


function App() {

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
