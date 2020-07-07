import React, { Component } from 'react';
import {FaChartBar, FaChartLine} from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from 'styled-components'; 

const Card1= styled('div')`

width:314.3px;
min-height: 200px; 
margin: 50px 50px 50px 560px;
align-items: center;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);     
border-radius: 10px;
background-color:#202a3b;
`;

const H2style= styled('h2')`
margin-top: 0;
margin-right: 5px;
color: #eeeeee;
font-weight: bold;
overflow: hidden;
font-family:Arial;
font-size:22px;                
text-align:left;
letter-spacing: .05rem;
`;

const Hrstyle= styled('hr')`
display:block;
border: none;

padding:auto 10px auto 10px;
height: 1px;
background-color: #8091ab;
margin: 0px;
text-align:center;
`
;  

const Flex1= styled('div')`
padding: 20px 60px 0 0;
display: flex;
align-items: center;
justify-content: space-between;

`;

const Meta1= styled('p')`
margin-top: 0;
margin-right:14px;
font-weight: bold;
overflow: hidden;
color:#8091ab;
font-family:Arial;
font-size:16px;

`;

const Icons= styled('ul')`
float: "right";
list-style-type: none;
`;

const Social= styled('li')`
display:"inline-block";
    padding: "5px 0";
    size:20px;
    `;

    const IconDiv= styled('div')` 
      color: #f5a31a;
      text-align:left;
       size:20px;
       margin:40px 10px 40px auto ;
       `;
       const NoStyle= styled('ul')`
       list-style-type: none;
           `;   

   
                
   
  
class Card extends Component {
    render() {
            
        return (
            <div>
            
                 <Card1>
                 
                 
                 <Flex1>
                 <Icons>
                    <Social>
                   
                      
                    <IconContext.Provider value={{ color: "red", className: "global-class-name" ,size:"3rem"}}>
                      <div>
                      <FaChartBar />
                      </div>
                    </IconContext.Provider>
                     
                    
                    </Social>
                
                  </Icons>
                  <div> 
                  <NoStyle>
                  <li> <Meta1>Visitors</Meta1></li>
                  <li> <H2style> 10432 </H2style></li>
                  </NoStyle>
                  </div>

                  </Flex1>

                  <Hrstyle></Hrstyle>

                  <Flex1>
                  <Icons>
                    <Social>
                    
                    <IconContext.Provider value={{ color: "yellow", className: "global-class-name" ,size:"3rem"}}>
                      <div>
                      <FaChartLine />
                      </div>
                    </IconContext.Provider>
                    
                    </Social>
              
                  </Icons>
                  <div> <NoStyle>
                  <li> <Meta1> Orders </Meta1> </li>
                  <li> <H2style> 4532 </H2style></li>
                  </NoStyle></div>
                  
                  
                  </Flex1>
                  </Card1>
                  </div>
      
                   
               
        );
      }
}
export default Card;