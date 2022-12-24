import RightGlobalHeader from 'components/pages/RightGlobalHeader'

interface Props {
  children: React.ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <RightGlobalHeader />
      {children}
      
    </>
  )
}

export default Layout