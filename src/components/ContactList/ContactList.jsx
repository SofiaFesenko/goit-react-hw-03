import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

function ContactList({filteredContacts, onDelete}) {
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