import React, { Component } from 'react'
//info for each card should come from the cms somehow
//like in the netlify cms blog example

const InfoData = (props) => (
  <div className="card">
    <div className="left">
      <img src={props.data.image} alt=""/>
    </div>
    <div className="right">
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
      
        <div className="menu">
          {infoItems.map( i => {
            if (i === "key") return
            return (
              <span 
                key={i} 
                onClick={() => this.toogleInfo(i)}
                className={this.props.data[i].name === this.state.currentItem.name ? "selected" : ""}
                >{i}</span>  
            )
          })}
        </div>
         
        <InfoData data={this.state.currentItem}/>
        
      </section>
    )  
  }
}

export default Info