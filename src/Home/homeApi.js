import React,{Component} from 'react'
import Axios from 'axios';



class homeApi extends Component {

    constructor(props){
        super(props);
        this.state ={
            arr :[],
        };
    }

    componentDidMount(){
        Axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
        .then(response => response.data)
        // .then((data)=> {
        //     this.setState({arr: data});
        //   }
        // );
    }
  render(){  
   return (
       

    
     <table className="table-element">
      <thead>
        <tr>
          <th>ASSET</th>
          <th>AMOUNT</th>
          <th>USER ACOUNT</th>
          <th>REFERRAL EARNING</th>
        </tr>
      </thead>
      <tbody>
      {this.state.arr.map((val,key)=>{
        return(
           <tr key={key}>{""}
             <td><h5>{val.asset}guru</h5></td>
           </tr>
        );
      })}
      </tbody>
      </table>

  );
}
}





      

export default homeApi;