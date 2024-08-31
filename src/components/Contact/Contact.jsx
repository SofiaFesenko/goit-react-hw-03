import { useDispatch } from 'react-redux'
import css from '../ContactForm/ContactForm.module.css'

function Contact({onDelete, name, number, id}) {
    const dispatch = useDispatch()

    return (
        <div className={css.contactBlock}>
            <div>
                <span>🎅 {name}</span> <br/>
                <span>📞 {number}</span> 
            </div>
            <button type="button" onClick={() => onDelete(id)}>delete</button> 
        </div>        
    )
}

export default Contact