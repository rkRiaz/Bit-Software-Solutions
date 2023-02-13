import {
    mdiAccount,
    mdiAsterisk,
    mdiFormTextboxPassword,
    mdiGithub,
    mdiHome,
    mdiMail,
    mdiMapMarker,
    mdiPhone,
    mdiPhoneInTalkOutline,
    mdiPost,
    mdiUpload,
  } from '@mdi/js'
  import { Formik, Form, Field } from 'formik'
  import Head from 'next/head'
  import { ReactElement, useState } from 'react'
  import BaseButton from '../../../components/BaseButton'
  import BaseButtons from '../../../components/BaseButtons'
  import BaseDivider from '../../../components/BaseDivider'
  import CardBox from '../../../components/CardBox'
  import CardBoxComponentBody from '../../../components/CardBoxComponentBody'
  import CardBoxComponentFooter from '../../../components/CardBoxComponentFooter'
  import FormField from '../../../components/FormField'
  import FormFilePicker from '../../../components/FormFilePicker'
  import LayoutAuthenticated from '../../../layouts/Authenticated'
  import SectionMain from '../../../components/SectionMain'
  import SectionTitleLineWithButton from '../../../components/SectionTitleLineWithButton'
  import UserCard from '../../../components/UserCard'
  import type { UserData, UserForm } from '../../../interfaces'
  import { getPageTitle } from '../../../config'
  import { useAppSelector } from '../../../stores/hooks'
import { getClientById } from '../../../hooks/clientHook'
  
  const EditClient = () => {
    // const userName = useAppSelector((state) => state.main.userName)
    // const userEmail = useAppSelector((state) => state.main.userEmail)

    const [file, setFile] = useState(null)

  
    const handleSubmit = (values: UserData) => {
      values.profile_pic = file
      alert(JSON.stringify(values, null, 2))
    }
    const { client }  = getClientById("1")

    return (
      <>
        <Head>
          <title>{getPageTitle('Profile')}</title>
        </Head>
  
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiAccount} title="Profile" main>
          </SectionTitleLineWithButton>
  
          <UserCard className="mb-6" userData={client}/>
  
          <CardBox>
              <Formik
                initialValues={client}
                onSubmit={(values: UserData) => handleSubmit(values)}
              >
                <Form>
                    <FormField label="Change Profile Pic" help="Max 500kb">
                        <FormFilePicker file={file} setFile={setFile} label="Upload" color="info" icon={mdiUpload} />
                    </FormField>
                    
                    <FormField label="Enter your name" icons={[mdiAccount, mdiAccount]}>
                      <Field name="surname" placeholder="Surname" />
                      <Field name="forename" placeholder="Forename" />
                    </FormField>
                    <FormField label="Enter your email" icons={[mdiMail]}>
                      <Field disabled type="email" name="email" placeholder="Email" />
                    </FormField>

                    <FormField
                      label="Enter your phone number"
                      icons={[mdiPhone]}
                      labelFor="phone"
                      help="Help line number if any"
                    >
                      <Field name="phone" placeholder="Phone" id="phone" />
                    </FormField>

                    <BaseDivider />

                    <div className="md:grid grid-cols-3 gap-3">
                    <FormField label="Gender" labelFor="sex">
                        <Field name="sex" id="sex" component="select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        </Field>
                    </FormField>
                    <FormField label="Birth Date" labelFor="birth_date">
                        <Field type="date" name="birth_date" placeholder="Birth Date" />
                    </FormField>
                    <FormField label="Nationality" labelFor="nationality">
                        <Field name="nationality" placeholder="Nationality" />
                    </FormField>
                    </div>

                    <FormField label="Enter your residence information" icons={[mdiMapMarker, mdiHome, mdiPost]}>
                        <Field name="address" placeholder="Address" />
                        <Field name="village" placeholder="Village" />
                        <Field name="post_code" placeholder="Post Code" />
                    </FormField>

                    <div className="md:grid grid-cols-3 gap-3">
                    <FormField label="Social Security Number" labelFor="social_security_number">
                        <Field  name="social_security_number" placeholder="Social Security Number" />
                    </FormField>
                    <FormField label="ID Number" labelFor="id_num">
                        <Field  name="id_num" placeholder="ID Number" />
                    </FormField>
                    <FormField label="Siret Number" labelFor="siret_num">
                        <Field  name="siret_num" placeholder="Siret Number" />
                    </FormField>
                    </div>

                    <BaseDivider />

                    <BaseButtons>
                        <BaseButton type="submit" color="info" label="Submit" />
                    </BaseButtons>
                </Form>
              </Formik>
            </CardBox>
  
        </SectionMain>
      </>
    )
  }
  
  EditClient.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }
  
  export default EditClient
  