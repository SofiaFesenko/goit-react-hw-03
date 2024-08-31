import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import css from './ContactForm.module.css'

function ContactForm() {

  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts.items)


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


  const contactValidation = Yup.object().shape({
    name: Yup.string().required("required").min(3, "too short").max(50, "too long"),
    number: Yup.number().required("required")
  });


  const initialValues = {
    name: "", 
    number: ""
  }
  

  return (
    <Formik 
      validationSchema={contactValidation} 
      initialValues={initialValues} 
      onSubmit={handleSubmit}>
        <Form className={ css.formBlock} >
          <label>
            <span>Name</span> <br/>
            <Field type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label> 

          <label>
              <span>Number</span> <br/>
              <Field type="tel" name="number" />
              <ErrorMessage className={css.error} name="number" component="span" />
          </label>
          <button type="submit" className={ css.button }>Add contact</button>
        </Form>

    </Formik>        
  )
}

export default ContactForm