import React from "react"
import "./search-input.scss"
const lookup = {
    "nigeria": [
        {id: '1', place: 'Nigeria'},
        {id: '2', place: 'Ghana'},
        {id: '3', place: 'Usa'},
    ],
    "ghana": [
        {id: '1', place: 'Kumasi'},
        {id: '2', place: 'Ghana'},
        {id: '3', place: 'Bida'},
    ],
    "usa": [
        {id: '1', place: 'Chicago'},
        {id: '2', place: 'New York'},
        {id: '3', place: 'Georgia'},
    ]
}
class SearchInput extends React.Component {
    state = {
        location: [],
        dataValue: 'nigeria'
      }
  
    onChange = ({ target: { value } }) => {
      this.setState({ dataValue: value });
    }
    handleChange = ({ target: { value } }) => {
      this.setState({ location: value });
    }
  
    render() {
      const { dataValue } = this.state;
      const options = lookup[dataValue];
      return (
        <div className="search-input">
          <select className="search-select" onChange={this.onChange}>
            <option className='option' value="select">Select Country</option>
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="usa">USA</option>
          </select>
          <hr />
          <select className="search-select2" onChange={this.handleChange}>
            <option value="select">Select Location</option>
            {options.map(o => <option key={o.id} value={o.place}>{o.place}</option>)}
          </select>
            <input className="search-button" type="button" value="Find Food" />
            
        </div>
        )
    }
}

export default SearchInput



