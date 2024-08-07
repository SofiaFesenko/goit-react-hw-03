import css from './ContactList.module.css'

function ContactList({filteredContacts, onDelete}) {
  return (
    <div className={css.contactsMainBlock}>
      {filteredContacts.map( contact => {
        return (
          <div className={css.contactBlock}>
            <div>
              <span>🎅 {contact.name}</span> <br/>
              <span>📞 {contact.number}</span> 
            </div>
            <button type="button" onClick={() => onDelete(contact.id)}>delete</button> 
          </div>        
        )
      })}
    </div>
  )
}

export default ContactList