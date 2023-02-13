import { mdiAccountEdit, mdiCheckDecagram, mdiEmoticonConfused } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { UserData } from '../interfaces'
import { useAppSelector } from '../stores/hooks'
import CardBox from './CardBox'
import FormCheckRadio from './FormCheckRadio'
import PillTag from './PillTag'
import UserAvatarCurrentUser from './UserAvatarCurrentUser'

type Props = {
  className?: string,
  userData?: UserData
}

const UserCard = ({ className, userData }: Props) => {
  const userName = useAppSelector((state) => state.main.userName)
  const { pathname } = useRouter()


  return (
    <CardBox className={className}>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-center">
        <UserAvatarCurrentUser avatar={userData?.profile_pic} className="mb-6 lg:mb-0 lg:mx-12" />
        <div className="space-y-3 text-center md:text-left lg:mx-12">
          <div className="flex justify-center md:block">
            <Formik
              initialValues={{
                notifications: ['1'],
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormCheckRadio type="switch" label="Notifications">
                  <Field type="checkbox" name="notifications" value={'1'} />
                </FormCheckRadio>
              </Form>
            </Formik>
          </div>
          <h1 className="text-2xl">
            Howdy, <b>{userData?.surname}</b>!
          </h1>
          <p>
            Last login <b>12 mins ago</b> from <b>127.0.0.1</b>
          </p>
          <div className="flex justify-center md:block">
            <PillTag label={userData?.complete ? "Complete Profile" : "Incomplete Profile"} color={userData?.complete ? "success" : "danger"} icon={userData?.complete ? mdiCheckDecagram : mdiEmoticonConfused} />
           {/* {
            pathname !== "/edit-profile" &&
            <Link href={`/edit/${userData?.id}`}> <PillTag className='ml-2' label="Update Information" color="info" icon={mdiAccountEdit}/></Link>
           } */}
          </div>
        </div>
      </div>
    </CardBox>
  )
}

export default UserCard
