import * as Yup from "yup";
import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ContactForm({ handleSubmit }) {


  const contactValidation = Yup.object().shape({
    name: Yup.string().required("required").min(3, "too short").max(50, "too long"),
    number: Yup.string().min(3, "too short").max(50, "too long").required("required")
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