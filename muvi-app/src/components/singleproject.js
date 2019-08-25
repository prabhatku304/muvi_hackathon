import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import ProjectInfo from './projectInfo';



  class Single extends Component{
      constructor(props){
          super(props);
          this.state={
              isClicked:false
          }
      }
     
    
  setClick = ()=>{
      this.setState({isClicked:true})
  }
  setFalse = ()=>{
      this.setState({isClicked:false})
  }
  
      render(){
        if(this.state.isClicked){
            return(
               
              <ProjectInfo projectInfo={this.props.allProject} setFalse={this.setFalse}/>
           
                
            )
        }else{
           return(
              
            <div className="card">
                <button onClick={this.setClick}>
                  {this.props.allProject.image ? ( <img src={this.props.allProject.image} alt="Denim Jeans" className="image-responsive" style={{height: '150px', width: '300px'}}/>)
                   :( <img src="https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_305221517.png" alt="Denim Jeans" style={{height: '150px', width: '300px'}} />)}
  
  <h1>{this.props.allProject.title}</h1>

  <i  className="fa">&#xf087;</i>
  <p>Description: {" " + this.props.allProject.description}</p>
  
  </button>
  <hr></hr>
</div>
           )
        }
  }
}

  export default Single