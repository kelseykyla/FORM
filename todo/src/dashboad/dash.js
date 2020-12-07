import React from 'react';
import {UserContext  } from "../App";
export default class Dashboard  extends React.Component{

    render(){
        
        return <UserContext.Consumer>
            {
                user=>{
                    return JSON.stringify(user)
                }
            }

        </UserContext.Consumer>  ;

    }
    
}