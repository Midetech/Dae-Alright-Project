import React, { Component } from 'react';
import './inputTags.css';

 class index extends Component {
    constructor(){
        super()
        this.state ={
            tags:[]
        }
    }

    inputkeyDown =(event)=>{
        const value = event.target.value

        if(event.key === 'Enter' && value){
            this.setState({tags:[...this.state.tags, value]})

            if(this.state.tags.find(tag=>tag.toLowerCase() === value.toLowerCase())){
                return;
            }

            this.tagInput.value = null
        }
        else if(event.key==='Backspace' && !value){
            this.removeTags(this.state.tags.length -1)
        }
    }

    removeTags =(i)=>{
        const newTags =[...this.state.tags]
        newTags.splice(i, 1)

        this.setState({tags:newTags})
    }
    render() {
        return (
            <div className='input-tags'>
                <ul className='input-tags__tags'>

                    { this.state.tags.map((tag,i)=>( 
                    <li key={tag}>
                        {tag}
                        <button type = 'button' onClick={()=>{this.removeTags(i);}}></button>
                    </li>))
                    }

                    <li className='input-tags__tags__input'>
                    <input onKeyDown ={this.inputkeyDown} ref={c => { this.tagInput = c}} type="text"/>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default index
