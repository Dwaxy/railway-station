import React, {Component} from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/header.js'
import Info from '../components/info.js'
import OpenHours from '../components/openHours.js'
import GroupPh from '../components/groupPh.js'
import Map from '../components/map.js'
import Footer from '../components/footer.js'

import './main.sass'

export default class Index extends Component {
  // constructor(props) {
  //   super(props)
  // 

  render() {
    
    const infoData = this.props.data.markdownRemark.frontmatter
    
    return (
      <section id="holder">
        <Header />
        <div className="infoOpenhoursHolder">
          <Info data={infoData} />
          <OpenHours />
        </div>
        <GroupPh />
        <Map />
        
        <Footer />
        
      </section>
    )
  }
  
}

export const IndexTemplateQuery = graphql`
query IndexQuery {
  markdownRemark {
    frontmatter {
      key
      groceries {
        description
        heading
        image
        name
      }
      cafe {
        description
        heading
        image
        name
      }
      collectibles {
        description
        heading
        image
        name
      }
    }
  }
}

`
