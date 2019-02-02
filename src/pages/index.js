import React, {Component} from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header.js'
import Info from '../components/info.js'
// import OpenHours from '../components/openHours.js'
//import GroupPh from '../components/groupPh.js'
import Map from '../components/map.js'
import SEO from '../components/SEO.js'
import Img from "gatsby-image"

import heroImage from '../img/IMG_7524.jpg'
import fbIcon from '../img/fb.png'
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
        
        <SEO />
        
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
        
        <div id="five" className="fotter">
        
          <div className="fb">
              <a href="https://www.facebook.com/73connection/">
                <img src={fbIcon} alt=""/>
              </a>
          </div> 
          
          <div className="phCred">
            <a href=""></a>
          </div>
          
          <div className="address">
            <span>Springfield Railway Station, King St, 7681</span>
          </div>
          
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
