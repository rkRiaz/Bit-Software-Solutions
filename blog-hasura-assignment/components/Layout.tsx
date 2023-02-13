import { FC } from 'react'
import Footer from './Footer'
import Menu from './Menu'

const Layout: FC <any> = ({ children }) => {
  return (
    <>
        <Menu/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout