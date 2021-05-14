import React, { Component } from "react";
import {Fa } from "mdbreact";
import "./Items.css";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          categoryName: "Muffins",
          categoryPug: "muffins",
          categoryImg: "muffins-original",
        },
        {
          id: 2,
          categoryName: "Rolls and Wraps",
          categoryPug: "wraps-and-rolls",
          categoryImg: "wraps-and-rolls-original",
        },
        {
          id: 3,
          categoryName: "Porridge and Pancakes",
          categoryPug: "porridge-and-pancakes",
          categoryImg: "pancakes-original",
        },
        {
          id: 3,
          categoryName: "Sweet Snacks",
          categoryPug: "sweet-snacks",
          categoryImg: "sweet-snacks-original",
        },
        {
          id: 4,
          categoryName: "Ice Cream",
          categoryPug: "icecream",
          categoryImg: "ice-cream-original",
        },
        
        {
          id: 5,
          categoryName: "Hot Drinks",
          categoryPug: "hotdrinks",
          categoryImg: "hot-drinks-original",
        },  
        {
          id: 6,
          categoryName: "Milk Shakes",
          categoryPug: "milkshakes",
          categoryImg: "milk-shakes-original",
        },  
        {
          id: 4,
          categoryName: "Fizzy Drinks",
          categoryPug: "fizzydrinks",
          categoryImg: "fizzy-drinks-original",
        },  
        
      ],
      apiUrl: [],
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          {this.state.categories.map((item, index) => (
            <Link
              to={`/items/${item.categoryPug}`}
              className="col-md-4 mt-4"
              key={index}
            >
              <div className="card-cont">
                <div className="img-container">
                  <img
                    src={require(`../images/${item.categoryImg}.jpg`)}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-category-cont">
                    <h4 className="card-cat-name">{item.categoryName}</h4>
                    <Fa icon="chevron-right text-white"></Fa>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
