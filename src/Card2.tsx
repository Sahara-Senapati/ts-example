import React, { Component } from 'react';
import {FaArrowAltCircleUp} from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from 'styled-components'; 

const Card= styled('div')`

width:220px;
min-height: 260px; 
margin: 50px 50px 50px 560px;
align-items: center;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);     
border-radius: 10px;
background-color:#fff;
padding-top:20px;

`;

const H2style= styled('h2') `
    color: #000000;
    overflow: hidden;
    margin:20px auto 10px 0;
    padding:40px auto 30px auto;
    padding-left:25px;
    font-family: Arial;
    font-size:30px;
    font-weight:bold;
    text-align:left;
    letter-spacing: 0.20px;
    
    `;

    const Flex1= styled('div')` 
    padding: 20px 60px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        `;  
        
        const Meta1= styled('p') `
        padding:10px auto 15px auto;
        padding-left:25px;
        font-weight:bold;
        overflow: hidden ;
        color:#000000;
        font-family:Arial;
        letter-spacing: 0.20px;
        font-size:16px;
        text-align:left;
        
        `;

        const Meta2= styled('p') `
        padding:10px auto 15px auto;
        padding-left:25px;
        font-weight:bold;
        overflow: hidden ;
        color: #5f6769;
        font-family:Arial;
        letter-spacing: 0.20px;
        font-size:16px;
        text-align:left;
        
        `;
           
      
     

class Card2 extends Component {
    render() {
            
              
        return (
                <Card>
                 
                 
               <Flex1>
                <div> 
   
 
                  <IconContext.Provider value={{ color: "red", className: "global-class-name" ,size:"3rem" }}>
                     <div>
                     <FaArrowAltCircleUp/>
                     </div>
                   </IconContext.Provider>
    
                  <div>
                 <H2style>+20%</H2style> 
                 <Meta1>Income</Meta1>
                 <Meta2>January 2019</Meta2> 
                </div>

 

                  </div>
     
                  </Flex1> 
 
                 </Card>
 
                 
      
                   
               
        );
      }
}
export default Card2;