import React, {Component} from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header.js'
//import Info from '../components/info.js'
import OpenHours from '../components/openHours.js'
import GroupPh from '../components/groupPh.js'
import Map from '../components/map.js'
import Footer from '../components/footer.js'

import './main.sass'

class Index extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <section id="holder">
      
        <Header />
      
        <OpenHours />
        <GroupPh />
        <Map />
        <Footer />
        
      </section>
    )
  }
  
}

export default Index
// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
