import { mdiAccount, mdiBallotOutline, mdiGithub, mdiHome, mdiMail, mdiMapMarker, mdiPhone, mdiPost, mdiUpload } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import BaseButton from '../../components/BaseButton'
import BaseButtons from '../../components/BaseButtons'
import BaseDivider from '../../components/BaseDivider'
import CardBox from '../../components/CardBox'
import FormCheckRadio from '../../components/FormCheckRadio'
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup'
import FormField from '../../components/FormField'
import FormFilePicker from '../../components/FormFilePicker'
import LayoutAuthenticated from '../../layouts/Authenticated'
import SectionMain from '../../components/SectionMain'
import SectionTitle from '../../components/SectionTitle'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { getPageTitle } from '../../config'

const AddClient = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Add New Client')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Add New Client" main></SectionTitleLineWithButton>
          <CardBox>
            <Formik
              initialValues={{
                surname: "",
                forename: "",
                email: "",
                phone: "",
                social_security_number: "",
                address: "",
                post_code: "",
                village: "",
                sex: "male",
                birth_date: "",
                nationality: "",
                id_num: "",
                siret_num: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField label="Enter your name" icons={[mdiAccount, mdiAccount]}>
                  <Field name="surname" placeholder="Surname" />
                  <Field name="forename" placeholder="Forename" />
                </FormField>
                <FormField label="Enter your email" icons={[mdiMail]}>
                  <Field type="email" name="email" placeholder="Email" />
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
                    <Field  type="date" name="birth_date" placeholder="Birth Date" />
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
                  <BaseButton type="reset" color="info" outline label="Reset" />
                </BaseButtons>
              </Form>
            </Formik>
          </CardBox>
      </SectionMain>
    </>
  )
}

AddClient.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default AddClient


