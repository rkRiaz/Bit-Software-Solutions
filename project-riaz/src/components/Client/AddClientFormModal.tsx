import React from 'react'
import BaseButton from '../BaseButton'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import FormField from '../FormField'
import FormCheckRadio from '../FormCheckRadio'
import BaseDivider from '../BaseDivider'
import BaseButtons from '../BaseButtons'
import { useRouter } from 'next/router'


const AddClientFormModal = () => {
  const router = useRouter()


  return (
    <>
        <CardBox className="w-full shadow-2xl">
          <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Email" help="Enter new client's email">
                <Field name="email" />
              </FormField>

              <FormField label="Password" help="Enter new clinet's password">
                <Field name="password" type="password" />
              </FormField>
              
              <BaseButtons>
                <BaseButton type="submit" label="Create Client" color="info" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
    </>
  )
}
export default AddClientFormModal



