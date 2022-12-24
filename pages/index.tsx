import Layout from 'layouts/layout'
import SectionSummary from '@/components/pages/home/sectionSummary'
import SectionExpLog from '@/components/pages/home/sectionExpLog'
import SectionFramer from '@/components/pages/home/sectionFramer'

const Home = () => {
  return (
    <main>
      <SectionSummary />
      <SectionExpLog />
      <SectionFramer />
    </main>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
