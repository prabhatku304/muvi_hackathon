import React ,{Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {logout} from '../store/action/user'
class Navbar extends Component{

    logout= (e)=>{
        e.preventDefault();
        this.props.logout();
        window.location.href = '/'
    }
      render(){
       return(
         <div>
           <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                  <p href="/" style={{color: '#1d806e', fontSize: '20px'}}>FundMe</p>
                </div>
                <ul className="nav navbar-nav navbar-left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allproject">Projects</Link></li>
                    <li><Link to="/project">Add Project</Link></li>
                    
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/project-profile">Create profile</Link></li>
                </ul>
               
                   {this.props.isAuthenticated ?
                   ( <ul className="nav navbar-nav navbar-right">
                       <li><a onClick={this.logout}>Logout</a></li>
                       </ul>
                   )
                   :
                ( <ul className="nav navbar-nav navbar-right">
                 <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>SignUp</Link></li>
                 <li><Link to='/signin'><span className="glyphicon glyphicon-log-in"></span>SignIn</Link></li>
                  </ul>
                )
                   }
               
            </div>

           </nav>
           </div>
       )
                }
}

function mapStateToProps(state){
  return{
    currentUser:state.set_user.user,
    isAuthenticated : state.set_user.isAuthenticated
  }
}
export default connect(mapStateToProps,{logout})(Navbar);