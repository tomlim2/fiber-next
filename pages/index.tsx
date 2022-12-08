import SectionExpLog from '@/components/sections/home/sectionExpLog'

import Layout from 'layouts/layout'

import type { ReactElement } from 'react'

const Home = () => {
  return (
    <main>
      <SectionExpLog />
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
