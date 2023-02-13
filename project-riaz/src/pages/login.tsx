import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/FormField'
import FormCheckRadio from '../components/FormCheckRadio'
import BaseDivider from '../components/BaseDivider'
import BaseButtons from '../components/BaseButtons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import { useAdminLogin } from '../hooks/adminHook'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { AppDispatch } from '../stores/store'
import { mdiLoading } from '@mdi/js'
import logo from '../../public/images/logo.png'
import Image from 'next/image'



export default function Login() {
  const { adminLoggedIn, adminError, adminLoading } = useAppSelector((state) => state.admin)

  const router = useRouter()

  const dispatch: AppDispatch = useAppDispatch()

  const handleSubmit = async(values: any) => {
    useAdminLogin(values, dispatch)
  }

  if(adminError) {
    alert("Something went wrong")
  }
  // console.log(adminLoggedIn)
  if(adminLoggedIn) {
    alert("Admin logged In")
    router.push('/dashboard')
  }



  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <div className='flex flex-col md:flex-row min-h-screen items-center justify-center container mx-auto p-4'>

          <Image alt="logo" src={logo} className="w-3/4 md:w-1/2 lg:w-2/6"/>
          
          <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
            <Formik
              initialValues={{ login: 'john.doe@example.com', password: 'bG1sL9eQ1uD2sK3b', remember: true }}
              onSubmit={(values) => handleSubmit(JSON.stringify(values, null, 1))}
            >
              <Form>
                <FormField label="Login" help="Please enter your login email">
                  <Field name="login" />
                </FormField>

                <FormField label="Password" help="Please enter your password">
                  <Field name="password" type="password" />
                </FormField>

                <FormCheckRadio type="checkbox" label="Remember">
                  <Field type="checkbox" name="remember" />
                </FormCheckRadio>

                <BaseDivider />

                <BaseButtons>
                  <BaseButton icon={ adminLoading && mdiLoading } baseIconClassName="animate-spin" type="submit" label="Login" color="info" />
                  <BaseButton href="/dashboard" label="Home" color="info" outline />
                </BaseButtons>
              </Form>
            </Formik>
          </CardBox>
        
      </div>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}
