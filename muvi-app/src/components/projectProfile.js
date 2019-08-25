import React,{Component} from 'react';
import {Profile} from '../store/action/profile';
import Axios from 'axios';

class CompanyProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            company:"",
            mobile:null,
            fund:null,
            details:"",
            video:""

        }
    }

    componentDidMount(){
      const id = this.props.id;
      Axios.get(`http://localhost:7000/api/${id}/project-profile`)
        .then((response)=>{
          console.log(response);
          this.setState({
            company: response.data.company,
            mobile: response.data.mobile,
            fund: response.data.fund,
            details: response.data.details,
            video: response.data.video 
          });
        })
        .catch((err)=>{
          console.log(err);
        });
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        Profile(this.state,this.props.id);
        this.props.history.push('/allproject')
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                   <label htmlFor="company">Company</label>
                   </div>
                   <div className="col-75">
                   <input 
                     id="company"
                     name="company"
                     value={this.state.company}
                     onChange={this.handleChange}
                     type="text"
                     />
                   </div>
                     </div>
                     <div className="row">
                      <div className="col-25">
                    <label htmlFor="mobile">Contact</label>
                    </div>
                    <div className="col-75">
                   <input 
                     id="mobile"
                     name="mobile"
                     value={this.state.mobile}
                     onChange={this.handleChange}
                     type="text"
                     />
                     </div>
                     </div>
                      <div className="row">
      <div className="col-25">
        <label htmlFor="subject">Details</label>
      </div>
      <div className="col-75">
        <textarea 
         id="subject" 
          name="details" 
          value={this.state.details} 
          placeholder="Write something.." 
          onChange={this.handleChange}
          />
      </div>
    </div>

    <div className="row">
      <div className="col-25">
        <label htmlFor="video">video Link</label>
      </div>
      <div className="col-75">
        <input 
         id="video" 
          name="video" 
          value={this.state.video} 
          placeholder="Video link" 
          onChange={this.handleChange}
          type="text"
          />
      </div>
    </div>
    <div className="row">
     <button>submit</button>
    </div>


                </form>

            </div>
        )
    }
}

export default CompanyProfile;