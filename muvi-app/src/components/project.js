import React,{Component} from 'react';
import '../project.css';
import axios from 'axios';
import {newProject} from '../store/action/project'




class Project extends Component{
      constructor(props){
          super(props);
          this.state={
              title:"",
              description:"",
              image:"",
              video:"",
              fundRequired:"",
              raisedFund:"",
              mobile:"",
              isProfile:false
              
          }
      }

      handleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value});
      }
      componentDidMount(){
        axios.get(`http://localhost:7000/api/${this.props.id}/user`)
             .then(res=>{
                console.log(res.data.profile);
              if(Boolean(res.data.profile)){
                    this.setState({isProfile:true})
             }})
             .catch(err=>console.log(err))
      }
     redirect = ()=>{
       this.props.history.push('/')
     }

      handleSubmit=(e)=>{
          e.preventDefault();
        console.log(this.props.id);
         newProject(this.props.id,this.state);
         this.props.history.push('/allproject')
      }
    render(){
  console.log(this.state.isProfile)
      if(this.state.isProfile){
        return(
            <div>
                <div className="container">
  <form onSubmit={this.handleSubmit}>
    <div className="row">
      <div className="col-25">
        <label htmlFor="Title">Title Of Project</label>
      </div>
      <div className="col-75">
        <input 
            type="text" 
            id="Title" 
            name="title" 
            value={this.state.title} 
            placeholder="Project title" 
            onChange={this.handleChange}
            />
      </div>
    </div>

    <div className="row">
      <div className="col-25">
        <label htmlFor="mobile">mobile</label>
      </div>
      <div className="col-75">
        <input 
           type="text" 
            id="mobile" 
            name="mobile" 
            value = {this.state.mobile} 
            placeholder="Your mobile no." 
            onChange={this.handleChange}
            />
      </div>
    </div>

    {/* <div className="row">
      <div className="col-25">
        <label htmlFor="photo">Image</label>
      </div>
      <div className="col-75">
        <input 
           type="text" 
            id="photo" 
            name="image" 
            value = {this.state.image} 
            placeholder="Your Image" 
            onChange={this.handleChange}
            />
      </div>
    </div> */}
    {/* <div className="row">
      <div className="col-25">
        <label htmlFor="youtube">Video Link</label>
      </div>
      <div className="col-75">
        <input 
          type="text" 
           id="youtube" 
           name="video" 
           value={this.state.video} 
           placeholder="Your videolink" 
           onChange={this.handleChange}
           />
      </div>
    </div> */}
    <div className="row">
      <div className="col-25">
        <label htmlFor="fundRequired">Fund Required</label>
      </div>
      <div className="col-75">
        <input 
          type="text" 
           id="fundRequired" 
           name="fundRequired" 
           value={this.state.fundRequired} 
           placeholder="enter require fund ..." 
           onChange={this.handleChange}
           />
      </div>
    </div>
    
    <div className="row">
      <div className="col-25">
        <label htmlFor="subject">Description</label>
      </div>
      <div className="col-75">
        <textarea 
         id="subject" 
          name="description" 
          value={this.state.description} 
          placeholder="Write something.." 
          onChange={this.handleChange}
          />
      </div>
    </div>
    <div className="row">
     <button>Submit</button>
    </div>
  </form>
</div>
            </div>
        )
      }else{
        return(
          <div>
            <h1>Please make profile first</h1>
            {this.redirect}
          </div>
        )
      }
    }
}

export default Project;