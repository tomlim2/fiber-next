import Layout from 'layouts/layout'
import SectionSummary from 'components/sections/home/sectionSummary'
import SectionExpLog from 'components/sections/home/sectionExpLog'

const Home = () => {
  return (
    <main>
      <SectionSummary />
      <SectionExpLog />
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
