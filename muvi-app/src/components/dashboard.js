import React,{Component} from 'react';
import Axios from 'axios';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            info:[]
        }
    }
    componentDidMount(){
        Axios.get(`http://localhost:7000/api/dashboard/${this.props.id}`)
            .then(res=>this.setState({info:res.data}))
             .catch(err=>console.log(err));
    }
    onDeleteClick = (projectId)  => {
        Axios.delete(`http://localhost:7000/api/project/delete/${projectId}`)
            .then((response)=>{
                console.log(response);
                if(response.data.success){
                    window.location.reload();
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    onEditClick = (projectId) => {
        console.log('update project clicked');
    }

    render(){
        console.log(this.state.info);
        const projects = this.state.info;
        let projectInfo;
        projectInfo = projects.map((project, index) => (
                <div className="card m-auto" style={{width: "70%" }} key={index}>
                    {project.image ?  (<img src={project.image} className="card-img-top" alt="..." />): (<img src="https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_305221517.png" className="card-img-top" alt="..." />)}
                    
                    <div className="card-body" style={{marginBottom: '17px'}}>
                        <p className="card-text">{project.description}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn btn-primary" style={{backgroundColor: '#9e9796', color: '#fff', width:'70px', height: '40px'}} onClick={this.onEditClick.bind(this, project._id)}>Edit</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-secondary" style={{backgroundColor: '#e0533f', color: '#fff', width: '70px', height: '40px'}} onClick={this.onDeleteClick.bind(this, project._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        ))
        return(
            <div>
                {projectInfo ? projectInfo : (<h5>You have not posted any project yet</h5>)}
            </div>
        )
    }
}

export default Dashboard;