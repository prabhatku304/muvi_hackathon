import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Authform from '../components/Authform';
import Homepage from '../components/Homepage';
import Profile from '../components/profile';
import Project from '../components/project';
import ProjectView from '../components/projectView';
import ProjectInfo from '../components/projectInfo';
import {connect} from 'react-redux';
import {addUser} from '../store/action/user';
import CompanyProfile from '../components/projectProfile';
import Dashboard from '../components/dashboard'



class Main extends Component{
    
    constructor(props){
        super(props);
    }

  

   render(){
       console.log(this.props.user)
       return(
           <Switch>
               <Route exact path="/signup" render={props=><Authform {...props} createUser={this.props.addUser}  signUp/>} />
               <Route exact path="/signin" render={props=><Authform {...props} createUser={this.props.addUser}/>} />
               <Route exact path="/" render={props=><Homepage />} />
               <Route exact path="/profile" render={props=><Profile {...props} id={this.props.user}/>} />
               <Route exact path="/project" render={props=><Project {...props} id={this.props.user}/>} />
               <Route exact path="/allproject" render={props=><ProjectView {...props}/>}/>
               <Route exact path="/project-profile" render={props=><CompanyProfile  {...props} id={this.props.user} />} />
               <Route exact path="/dashboard" render={props=><Dashboard {...props} id={this.props.user} />} />
              
           </Switch>
       )
   }
}

function mapStateToProps(state){
    return{
        user: state.set_user.user.id,
        profile:state.set_user.user
    }
}


export default connect(mapStateToProps,{addUser})(Main);