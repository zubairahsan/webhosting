import React,{Component} from "react";

class Hello extends Component{
    
    render(){
        let {arr,handleDel} = this.props
        return(
            <div>
                {
                    arr.map((a,i)=> <h1 onClick={()=>{handleDel(a.id)}}> {a.id} </h1>)
                }
            </div>  
        )
    }
}

export default Hello