import React, { Component } from 'react'
import CrossfadeImage from 'react-crossfade-image'
//info for each card should come from the cms somehow
//like in the netlify cms blog example

const InfoData = (props) => (
  <div className="card">
    
    {/*<img src={props.data.image} alt=""/>*/}
    <CrossfadeImage src={props.data.image} timingFunction={"ease-in-out"} style={{objectFit: "cover", width: "100%", height: "100%"}}/>

    <div className="card-text">
      <h3>{props.data.heading}</h3>
      <p>{props.data.description}</p>
    </div>
    
  </div>
)

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: this.props.data.cafe
    }
    
  }
  
  toogleInfo = (key) => {
    this.setState({currentItem: this.props.data[key]})
  }
  
  render() {
    const infoItems = []
  
    Object.keys(this.props.data).map ( i => {
      infoItems.push(i)
    })
    
    return (
      <section id="info">
      
        <ul className="menu">
          {infoItems.map( i => {
            if (i === "key") return
            return (
              <li 
                key={i} 
                onClick={() => this.toogleInfo(i)}
              >
                <span  className={this.props.data[i].name === this.state.currentItem.name ? "selected" : ""}>
                  {i}
                </span>
              </li>  
            )
          })}
        </ul>
         
        <InfoData data={this.state.currentItem}/>
        
      </section>
    )  
  }
}

export default Info