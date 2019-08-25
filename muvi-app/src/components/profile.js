import React,{Component} from 'react';
import Axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            profile:{}
        }
    }

    componentDidMount(){
        Axios.get(`http://localhost:7000/api/${this.props.id}/project-profile`)
             .then(res=>this.setState({profile:res.data}))
             .catch(err=>console.log(err));
    }
    render(){
        console.log(this.state.profile);
        return (
            <div>
<div className="container emp-profile">
                           <div className="card">
                               <img src="https://banner2.kisspng.com/20180615/rtc/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cb002ed52.870627731529056432012.jpg" alt="avtar" style={{borderRadius:"50%"}}/>
                          <div className="row">
                              <div className="col-md-6">
                             <lable htmlFor="company">Company :</lable>
                                    <div id="company">
                                        <h3>{this.state.profile.company}</h3>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                 <label htmlFor="mobile">Mobile no. :</label>
                                 <h3 id="mobile">{this.state.profile.mobile}</h3>
                                 </div>
                                 </div> 

                                 <div className="row">
                                 <label htmlFor="detail">Details</label>
                                 <h3 id="detail">{this.state.profile.details}</h3>
                                     </div>  
                                 </div> 
                           
                        </div>
                    </div>
        )
    }
}
export default Profile;