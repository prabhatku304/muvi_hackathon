import React ,{Component} from 'react';
import '../projectview.css';
import axios from 'axios';
import Single from './singleproject';
class ProjectView extends Component{

    constructor(props){
        super(props);
        this.state={
             project:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:7000/api/project")
            .then(res=>{this.setState({project:res.data})})
            .catch(err=>console.log(err))
    }

    render(){
        let Allproject = this.state.project.map((r,i)=><Single allProject={r} key={i}/>)
        return(
            <div>
                {Allproject}
                
            </div>
        )
    }
}

export default ProjectView;