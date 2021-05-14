import React, { Component } from "react";
import { Container, Fa } from "mdbreact";

import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processOrder: false,
      name: "",
      address: "",
      phone: "",
    };
  }

  finalizeOrder = () => {
    this.setState({ processOrder: true });
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  handlePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  render() {
    return (
      <Container className="cart-container my-3">
        <div className="cart-items-cont" style={{ display: "flex !important" }}>
          {this.props.cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-imgCont">
                <img
                  className="cart-item-img"
                  src={require(`../images/${item.image}.jpg`)}
                  alt="Item"
                />
                <button
                  onClick={() => this.props.handleDelete(index)}
                  className="cart-item-removeBtn"
                >
                  <Fa icon="times" className="text-white"></Fa>
                </button>
              </div>
              <div className="cart-item-detail">
                <div className="cart-item-halfTop">{item.name}</div>
                <div className="cart-item-halfBottom">$ {item.price}</div>
              </div>
              <div className="cart-item-actions">
                <div className="cart-item-less">
                  <Fa icon="minus" className="text-white"></Fa>
                </div>
                <div className="cart-item-quantity">{item.quantity}</div>
                <div className="cart-item-add">
                  <Fa icon="plus" className="text-white"></Fa>
                </div>
              </div>
            </div>
          ))}
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: "10px",
              width: "100%",
            }}
          >
            Total Payable Amount{" "}
            <span style={{ color: "#f00" }}>$ {this.props.totalPrice}</span>
          </p>
          <input
            type="text"
            placeholder="Coupon Code"
            style={{ width: "80%" }}
          />
          <button
            style={{ backgroundColor: "#f00", color: "#fff", width: "20%" }}
          >
            Apply
          </button>

          <h4
            style={{
              textAlign: "center",
              color: "#f00",
              fontSize: "16px",
              width: "100%",
              marginTop: "30px",
            }}
          >
            Payment Details
          </h4>
        </div>
        <div className="orderPreview-itemSubTotal">
          <div className="orderPreview-itemName">
            <p>Subtotal</p>
          </div>
          <div className="orderPreview-itemPrice">
            <p>$ {this.props.totalPrice}</p>
          </div>
        </div>
        <div className="orderPreview-itemSubTotal">
          <div className="orderPreview-itemName">
            <p>Grand Total</p>
          </div>
          <div className="orderPreview-itemPrice">
            <p>$ {this.props.totalPrice}</p>
          </div>
        </div>

        <div className="cart-billing-button">
          <button
            onClick={() => this.props.history.push("/checkout")}
            className="cart-confirm-btn"
          >
            Checkout
          </button>
        </div>
      </Container>
    );
  }
}

export default Cart;
