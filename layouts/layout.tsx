import GlobalHeader from '@/components/pages/globalHeader'

interface Props {
  children: React.ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      {children}
      
    </>
  )
}

export default Layout