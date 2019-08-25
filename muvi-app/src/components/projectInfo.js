import React,{Component} from 'react';
import Axios from 'axios';
import {newImage} from '../store/action/project';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';




class ProjectInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            image:"",
            isProject:false
        }
    }

  handleSubmit=(e)=>{
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("myImage",this.state.image);
      const config={
          headers:{
            'content-type': 'multipart/form-data'
        }
    }
        newImage(this.props.projectInfo._id,formdata,config);
       
        this.props.setFalse();
        window.location.reload();
      
  }

  componentDidMount(){
      Axios.get(`http://localhost:7000/api/${this.props.userId}/user`)
           .then(res=>{
               console.log(res)
                   let isMatch = res.data.project.find(r=>r===this.props.projectInfo._id);

                   this.setState({isProject:isMatch})
           })
           .catch(err=>console.log(err));

    
  }

   handleChange=(e)=>{
    this.setState({image:e.target.files[0]});
    
    
    

   }

    render(){
console.log(this.props.userId)
        return(
            <div className="card1">
                
            {this.props.projectInfo.image ? (<img src={this.props.projectInfo.image} alt="Denim Jeans" />) : (<img src="https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_305221517.png" alt="Denim Jeans" />)}
            <h1>{this.props.projectInfo.title}</h1>
            <i  className="fa">&#xf087;</i>
            <p>{this.props.projectInfo.description}</p>
            <p className="contact">{this.props.projectInfo.mobile}</p>
              {this.state.isProject ? 
              (<div>
                   <input type="file" name="myImage" onChange= {this.handleChange} />
              <button onClick={this.handleSubmit}>upload</button>
              </div>
              ) :
              (<a href="https://securegw.paytm.in/link/14283/LL_8584257"
              target='_blank' rel='im-checkout' data-behaviour='remote'
              data-style='light' data-text="Pay with Paytm" >
              <span>Pay  with Paytm</span>
                  </a> )  
            }
            
           
            <p><button onClick={this.props.setFalse}>Back</button></p>
            
          </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userId :state.set_user.user.id
    }
}

export default connect(mapStateToProps,null)(ProjectInfo);