import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'

interface Props {
  children: React.ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout