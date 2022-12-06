import Layout from '@/components/layouts/layout'

import type { ReactElement } from 'react'

const Home = () => {
  return (
    <>
    home
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
          {page}
      </Layout>
  )
}

export default Home