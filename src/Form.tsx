import * as React from 'react';
import {StyleButton, H1style} from "./Styles/StyleButton";
interface IProps{
    text:string;
    age?:number;
}

interface IState{
    email:string;
    name:string;
}

class Form extends React.Component<IProps,IState>{
    state: IState ={
        email:"",
        name:""
    };

    handleChange=() => (e: React.FormEvent<HTMLInputElement>) => {
    const { name,value }: any=e.target;
    this.setState({
       name: value
    });
    };
    
    public render(){
        const {text} = this.props;
        const {name} = this.state;
        return(
            <div>
                 <H1style> {text}  </H1style> 
                <input name="email" type="text"/><br/>
                 <input name="name" value={name} onChange={this.handleChange}/><br/>
                 <StyleButton> Submit </StyleButton>
            </div>

        );
    }
}
export default Form;