import React from 'react';


class SearchBar extends React.Component{
  state={
    term:''
  };
  
  onInputChange = (e)=>{
    this.setState({
      term:e.target.value
    })
  };
  onFormSubmit = e =>{
    //prevent a refresh or reload of the page
     e.preventDefault();

    //here todo callback parent component
    this.props.onRunSubmit(this.state.term);
  };
  render(){
    return(
    <div className='search-bar ui segment'>
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className='field'>
          <label>Video Search</label>
          <input 
            value={this.state.term}  
            tyoe='text' 
            placeholder='Searching.....'
            onChange={this.onInputChange}
            />
        </div>
      </form>
    </div>
    );
  }

}


export default SearchBar;