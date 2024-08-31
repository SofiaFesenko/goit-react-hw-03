import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import Contact from '../Contact/Contact'

import css from './ContactList.module.css'

function ContactList() {

  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts.items)
  const filter = useSelector(state => state.filters.filters.name)

  const filteredContacts = contacts.filter( contact => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()))

  const onDelete = idToDelete => {
    dispatch(deleteContact(idToDelete))
  }

  return (
    <div className={css.contactsMainBlock}>
      {filteredContacts.map( contact => {
        return (
          <div className={css.contactBlock}>
            <Contact name={contact.name} number={contact.number} id={contact.id} onDelete={onDelete}/>
          </div>        
        )
      })}
    </div>
  )
}

export default ContactList