import React from 'react'
import BaseButton from '../BaseButton'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import FormField from '../FormField'
import FormCheckRadio from '../FormCheckRadio'
import BaseDivider from '../BaseDivider'
import BaseButtons from '../BaseButtons'
import { useRouter } from 'next/router'


const AddRoleFormModal = () => {
  const router = useRouter()


  return (
    <>
        <CardBox className="w-full shadow-2xl">
          <Formik
            initialValues={{ email: 'john.doe@gmail.com', password: 'bG1sL9eQ1uD2sK3b'}}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Email" help="Please enter your email">
                <Field name="email" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>
              
              <BaseButtons>
                <BaseButton type="submit" label="Submit" color="info" />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
    </>
  )
}
export default AddRoleFormModal



