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
import TableClients from '../../components/TableClients'
import { getPageTitle } from '../../config'
import CardBoxModal from '../../components/CardBoxModal'
import AddClientFormModal from '../../components/Client/AddClientFormModal'
import { getClients } from '../../hooks/clientHook'

import Error500 from '../../components/Error/Error500'


const AllClients = () => {

  const { clients, isLoading, isError } = getClients()

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)

  const handleModalAction = () => {
    alert('confirmed')
    setIsModalInfoActive(false)
  }

  if(isLoading) {
    return (
      <div className="w-full h-40 grid justify-center items-center">
        <p>Loading!</p>
      </div>
    )
  }
 
  if(isError) {
    return (
      <Error500 bg = "pinkRed"/>
    )
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
              label="Add New Client"
              color="contrast"
              roundedFull
              small
              onClick={() => setIsModalInfoActive(true)}
          />
        </SectionTitleLineWithButton>

{/* Click add button and the modal will show */}
        <CardBoxModal
          title="Add New Client"
          isActive={isModalInfoActive}
          onConfirm={handleModalAction}
          onCancel={() => setIsModalInfoActive(false)}
        >
          <AddClientFormModal/>
        </CardBoxModal>
{/* Click add button and the modal will show */}

        {
          !!clients.length &&
          <CardBox className="mb-6" hasTable>
            <TableClients clients={clients}/>
          </CardBox>
        }
        {
          !clients.length &&
          <>
            <NotificationBar color="danger" icon={mdiTableOff}>
              <b>Empty table.</b> There&apos;s nothing to show. Please add data.
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

AllClients.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default AllClients



