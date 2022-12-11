import Layout from 'layouts/layout'
import SectionAbout from 'components/sections/about/sectionAbout'

const About = () => {
    return <main><SectionAbout/></main>
}

export default About

About.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }