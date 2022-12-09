import Layout from 'layouts/layout'

const About = () => {
    return <div>about</div>
}

export default About

About.getLayout = function getLayout(page: React.ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }