import React, {Component} from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/header.js'
import Info from '../components/info.js'
import OpenHours from '../components/openHours.js'
//import GroupPh from '../components/groupPh.js'
import Map from '../components/map.js'
import Footer from '../components/footer.js'

import heroImage from '../img/IMG_7524.jpg'
// import groupPh from '../img/D.jpg'

import './main.sass'

export default class Index extends Component {
  // constructor(props) {
  //   super(props)
  // 

  render() {
    
    const infoData = this.props.data.markdownRemark.frontmatter
    
    return (
      <section id="holder">
        <div id="one" className="scrollSection" style={{backgroundImage: `url(${heroImage})`}}>
          <Header />
        </div>
        
        <div id="two" className="scrollSection">
          <Info data={infoData} />
        </div>
        
        {/*
        <div id="three" className="scrollSection" style={{backgroundImage: `url(${groupPh})`}}>
          <h1>Group Photo</h1>
        </div>
        */}
        
        <div id="four" className="scrollSection">
          <Map />
        </div>
        
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
