import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../App.css';
import Button from '@material-ui/core/Button';

export class QuestionItem extends Component {

    products = [
        'Desktops',
        'Laptops',
        'Cell Phones',
        'Tablets',
        'Headphones',
        'Accessories',
    ]
    usages = [
        'Video Gaming',
        'Programming',
        'Business',
    ]

    render() {
        // Product Array
        let element0 = null
        let prodArr = []
        for (let i = 0; i < this.products.length; i++) {
            element0 = (
                <option value={this.products[i]}> {this.products[i]} </option>
            )
            prodArr.push(element0)
        }

        // Usages Array
        let element1 = null
        let usageArr = []
        for (let i = 0; i < this.usages.length; i++) {
            element1 = ( 
                <option value={this.usages[i]}> {this.usages[i]} </option>
            )
            usageArr.push(element1)
        }

/*      I don't know how to implement this part;
        My goal is to have the third question be dynamic based on what the user selects for question 1.

        function prodChange(event) {
            let element = null;
            let usageArr = [];
            if (event === this.products[0] || event === this.products[1]) {
                for (let i = 0; i < this.usages.length; i++) {
                    if (this.usages[i].id === 1) {
                        element = this.usages[i].title;
                    }
                }
                usageArr.push(element);
            };
        }
*/
        return(
            <form action="test2" method="get">
                <div style={questionStyle}>
                    <label className="labelStyle"> What kind of device are you looking for? </label>
                    <select name="productName">
                        {prodArr}
                    </select>
                </div>
                <div style={questionStyle}>
                    <label className="labelStyle"> What is your overall budget? </label>
                    <input type="number" name="budget" min="0" placeholder="Ex. '1800'" required/>
                </div>
                <div style={questionStyle}>
                    <label className="labelStyle"> What is the primary usage for this product? </label>
                    <select name="usage">
                        {usageArr}
                    </select>
                </div>
                <div style={questionStyle}>
                    <Button variant="contained" color="primary" type="submit" value="Submit" formaction="/recommendation"> Submit </Button>
                </div>
            </form>
        )
    }
}

const questionStyle = {
    backgroundColor: '#f4f4f4',
    fontSize: 18,
    padding: "10px",
    borderBottom: "1px gray dotted",
}

QuestionItem.propTypes = {
    question: PropTypes.object.isRequired
}

export default QuestionItem
