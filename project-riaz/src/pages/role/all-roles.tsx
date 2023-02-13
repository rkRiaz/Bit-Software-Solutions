import { mdiGithub, mdiMonitorCellphone, mdiPenPlus, mdiTableBorder, mdiTableOff } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import BaseButton from '../../components/BaseButton'
import CardBox from '../../components/CardBox'
import CardBoxComponentEmpty from '../../components/CardBoxComponentEmpty'
import LayoutAuthenticated from '../../layouts/Authenticated'
import NotificationBar from '../../components/NotificationBar'
import SectionMain from '../../components/SectionMain'
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton'
import { getPageTitle } from '../../config'
import CardBoxModal from '../../components/CardBoxModal'
import AddRoleFormModal from '../../components/Role/AddRoleFormModal'
import TableRole from '../../components/TableRole'
import { useRoleData } from '../../hooks/clientHook'

const AllRole = () => {

  const { clients } = useRoleData()

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)


  const handleModalAction = () => {
      alert('confirmed')
      setIsModalInfoActive(false)
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('All Clients')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="All Clients" main>
          <BaseButton
              target="_blank"
              icon={mdiPenPlus }
              label="Add New Role"
              color="contrast"
              roundedFull
              small
              onClick={() => setIsModalInfoActive(true)}
          />
        </SectionTitleLineWithButton>

{/* Click add button and the modal will show */}
        <CardBoxModal
          title="Add New Role"
          isActive={isModalInfoActive}
          onConfirm={handleModalAction}
          onCancel={() => setIsModalInfoActive(false)}
        >
          <AddRoleFormModal/>
        </CardBoxModal>
{/* Click add button and the modal will show */}

        <CardBox className="mb-6" hasTable>
          <TableRole clients={clients}/>
        </CardBox>

      {
        !clients.length &&
        <>
            <SectionTitleLineWithButton icon={mdiTableOff} title="Empty variation" />

            <NotificationBar color="danger" icon={mdiTableOff}>
              <b>Empty card.</b> When there&apos;s nothing to show
            </NotificationBar>

            <CardBox>
              <CardBoxComponentEmpty />
            </CardBox>
        </>
      }

      </SectionMain>
    </>
  )
}

AllRole.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default AllRole



