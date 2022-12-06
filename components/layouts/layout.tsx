import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

import type { FC, ReactElement } from 'react'

interface Props {
  children: ReactElement
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout