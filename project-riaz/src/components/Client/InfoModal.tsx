import React from 'react'
import BaseButton from '../BaseButton'
import CardBox from '../CardBox'
import { Field, Form, Formik } from 'formik'
import FormField from '../FormField'
import FormCheckRadio from '../FormCheckRadio'
import BaseDivider from '../BaseDivider'
import BaseButtons from '../BaseButtons'
import { useRouter } from 'next/router'


const InfoModal = () => {
  const router = useRouter()


  return (
    <>
        <CardBox className="w-full shadow-2xl">
          <Formik
            initialValues={{ login: 'john.doe', password: 'bG1sL9eQ1uD2sK3b'}}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
          >
            <Form>
              <FormField label="Login" help="Please enter your login">
                <Field name="login" />
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
export default InfoModal



