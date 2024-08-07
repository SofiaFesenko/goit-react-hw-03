import css from './Contact.module.css'


function Contact({ id, name, number, getKey }) {
    return (
      <div className={css.contactBlock}>
        <div>
           <span>🎅 {name}</span> <br/>
            <span>📞 {number}</span> 
        </div>
        <button type="button" onClick={() => getKey(id)}>delete</button>        
      </div>
    )
  }

export default Contact
