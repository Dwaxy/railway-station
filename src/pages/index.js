import React, {Component} from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import Header from '../components/header.js'
// //import Info from '../components/info.js'
// import OpenHours from '../components/openHours.js'
// import GroupPh from '../components/groupPh.js'
// import Map from '../components/map.js'
// import Footer from '../components/footer.js'

import './main.sass'

export default class Index extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <section id="holder">
        <div>working</div>
        
      </section>
    )
  }
  
}

export const IndexTemplateQuery = graphql`
query IndexQuery {
  allMarkdownRemark(filter: {frontmatter: {key: {eq: "info-section"}}}) {
    edges {
      node {
        frontmatter {
          key
          caffe {
            description
            heading
            image
          }
          collectibles {
            description
            heading
            image
          }
          groceries {
            description
            heading
            image
          }
        }
      }
    }
  }
}
`
