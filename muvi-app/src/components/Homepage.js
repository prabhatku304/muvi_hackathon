import React,{Component} from 'react';
import video from 'react-video-cover'
import Footer from '../container/footer';
import Navbar from '../container/navbar';
class Homepage extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
              <img className="homepage" src="https://miro.medium.com/max/2048/1*1lkw7jGZU94XXchjWeD96A.jpeg" alt="homeImage" />
                <Footer />
            </div>
        )
    }
}

export default Homepage;