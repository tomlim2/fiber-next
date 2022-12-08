import Header from 'components/pages/header'
import Footer from 'components/pages/footer'

interface Props {
  children: React.ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout