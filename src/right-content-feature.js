import React from 'react';
import { context } from './theme-context';
//right-content
class RightContent extends React.Component{
    constructor(props){
        super(props);
        this.handleAddClick=this.handleAddClick.bind(this);
        this.handleDeleteClick=this.handleDeleteClick.bind(this);
    }
    handleAddClick(){
        alert("add");
    }
    handleDeleteClick(){
        alert("delete");
    }
      render(){
          return(
              <div className='content'>
                  <div className='content-operator'><button onClick={this.handleAddClick}>{context.add}</button><button onClick={this.handleDeleteClick}>{context.delete}</button></div>
                  <div className='content-data'>content</div>
              </div>
          )
      }
    }
    export default RightContent;