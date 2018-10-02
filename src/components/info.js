
import React, { Component } from 'react'

//info for each card should come from the cms somehow
//like in the netlify cms blog example

const infoData = (props) = (
  <div className="right">
    <h3>{props.title}</h3>
    <ul>{props.points.map( point => (
      <li>{point}</li>
      ))}
    </ul>
  </div>
)

export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      menuItems: 
        [
          "Caffe",
          "Coll",
          "Gros",
        ],
    }
  }
  
  changeCard = (item) => {
    this.setState({})
  }
  
  render() {  
    return (
      <section id="info">
      
        <div className="menu">
          {this.state.menuItems.map( i => (
            <span key={i} onClick={this.changeCard.bind(this, i)}>{i}</span>  
            
          ))}
        </div>
        
        <div className="card">
          <div className="left"></div>
          
          <infoData
            title
            points
          />
          
        </div>
      
      </section>
    )
  }
}

export default Info