import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import '../authform.css';
import {logout} from '../store/action/user'

class Authform extends Component{
         constructor(props){
             super(props);
             this.state={
                 username:"",
                 email:"",
                 password:"",
                 company:"",
                 mob:""
             }
         }

         handleChange = (e)=>{
             this.setState({[e.target.name]:e.target.value})
         }
         handleSubmit = (e)=>{
             e.preventDefault();
            if(this.props.signUp){
                this.props.createUser("signup",this.state);
               this.props.history.push('/');
            }else{
                this.props.createUser('signin',this.state);
                this.props.history.push('/');
            }
            }
       
           
 
         render(){
            if(this.props.signUp){
                return(
                    <div className="card">
                    
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="form-group">
                            <label htmlFor="username" >Username</label>
                             <input 
                             value={this.state.username}
                             placeholder="username"
                             id="username"
                             name="username"
                             type="text"
                             className="form-control"
                             onChange={this.handleChange}
                             />
                             </div>
                             <div className="form-group">
                             <label htmlFor="email">Email</label>
                             <input 
                             value ={this.state.email}
                             palceholder="email"
                             id="email"
                             name='email'
                             onChange={this.handleChange}
                             type="text"
                             className="form-control"
                             />
                             </div>
                             <div className="form-group">
                             <label htmlFor="password">Password</label>
                             <input 
                             value ={this.state.password}
                             palceholder="password"
                             id="password"
                             type="password"
                             name="password"
                             onChange={this.handleChange}
                             className="form-control"
                             />
                            
                             <div className="form-group">
                              <label htmlFor="company">Company(optional)</label>   
                              <input
                                id="company"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.company}
                                name="company"
                                className="form-control"
                                />
                              </div>
                              <div className="form-group">
                              <label htmlFor="mob_no">Mobile</label>
                              <input 
                                type="text"
                                value={this.state.mob} 
                                onChange={this.handleChange}
                                id="mob_no"
                                name="mob"
                                className="form-control"
                                />   
                                  
                              </div>
                             
                          
                             </div>
                             <button>Register</button>
                        </form>
                    </div>
                )
                }else{
                    return(
                        <div className="card">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                            <label htmlFor="username" >Username</label>
                             <input 
                             value={this.state.username}
                             placeholder="username"
                             id="username"
                             name="username"
                             type="text"
                             onChange={this.handleChange}
                             className="form-control"
                             />
                             </div>
                             <div>
                             <label htmlFor="password">Password</label>
                             <input 
                             value ={this.state.password}
                             palceholder="password"
                             id="password"
                             name="password"
                             className="form-control"
                             type="password"
                             onChange={this.handleChange}
                             />
                             </div>
                             <button>Login</button>
                        </form>
                    </div>
                    )
                }
         }

}



export default Authform;