import React from "react"
import "./foodlist.scss"
import * as action from "../../redux/reducers/foodListRedux/food-list-action"
import { connect } from 'react-redux'
import Button from "../Button"


class FoodList extends React.Component {

        componentDidMount(){
            this.props.fetchVendor()
        }

        render() {

            const { vendorList } = this.props
            return (
                <div className="food-list">
                    <h1 className="foodlist-header">Choose from most popular</h1>
                    <p className="foodlist-paragraph">Explore restaurants, bars, and cafés by locality</p>
    
                    <div className="food-div">
                        {
                            vendorList.map(item => 
                                <div className="food-sub-div">
                                    <img className="food-images" src={item.image} alt="" />
                                    <h1 className="food-name">{item.vendor}</h1>
                                    <p className="food-item">{item.product}</p>
                                    <div className="food-sub-div2">
                                        <p className="food-amount"><strong>Min Order</strong>: #{item.order}</p>
                                        <p className="food-delivery"><strong>Delivery</strong>: {item.delivery}min</p>
                                    </div>
                                </div>
                                )
                        }
                    </div>
                    <div className="food-button">
                        <Button name="Load More"/>
                    </div>
                </div>
            )
        }
        
    
}

const mapStateToProps = state => ({
    vendorList: state.vendor.vendorList
})

export default connect(mapStateToProps, action)(FoodList)