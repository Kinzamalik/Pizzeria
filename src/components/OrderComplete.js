import React, { Component } from "react";
import { Container } from "mdbreact";
import "./OrderComplete.css";

class OrderComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: `Ap${Math.floor(Math.random()*999999999)}`
    };
  }
  
  sendNotification = () =>{
    window.OneSignal.sendSelfNotification(
     /* Title (defaults if unset) */
     `Your Order# ${this.state.orderId}  has been recieved.`,
     /* Message (defaults if unset) */
     "Thank you for ordering. Your order.will be ready as soon as possible",  
       /* URL (defaults if unset) */
      '#',
      /* Icon */
      'https://onesignal.com/images/notification_logo.png',
      {
        /* Additional data hash */
        notificationType: 'news-feature'
      }, 
      []
    );
    setTimeout(()=>{
      this.props.history.push("/")
    },3000)
  }
  render() {
    return (
      <Container className="orderPreview-container my-3">
        <div className="orderPreview-type-billing">
          <h4 className="orderPreview-heading">Order Confirmation</h4>
          <h4 className="orderPreview-heading">
            Your Order has been successfully placed and a reciept for your
            purchase has been sent to your Email ID
          </h4>
          <h4 className="orderPreview-heading-white">
            Order ID: {this.state.orderId} <br /> Payment Type Cash On Delivery
          </h4>
          <div className="orderPreview-itemContainer">
            {this.props.cart.map((item) => (
              <div className="orderPreview-itemDetails">
                <div className="orderPreview-itemName">
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                </div>
                <div className="orderPreview-itemPrice">
                  <p>$ {item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="orderPreview-paymentHeading">Payment Details</h4>
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
          <h4 className="orderPreview-deliveryDetails">Delivery Details</h4>
          <p className="orderPreview-deliveryDetailItem">
            Name: {this.props.checkoutDetails.name}
          </p>
          <p className="orderPreview-deliveryDetailItem">
            Order Date: {new Date().toLocaleDateString()}
          </p>
          <p className="orderPreview-deliveryDetailItem">
            Estimated Time: {new Date().toLocaleTimeString()}
          </p>
          <p className="orderPreview-deliveryDetailItem">
            Mobile No: {this.props.checkoutDetails.phoneNumber}
          </p>
          <p className="orderPreview-deliveryDetailItem">
            Email ID: {this.props.checkoutDetails.email}
          </p>
          <p className="orderPreview-deliveryDetailItem">
            Billing Address: {this.props.checkoutDetails.address}
          </p>

          <div className="orderPreview-billing-button">
            <button
              id="myBtn"
              className="orderPreview-confirm-btn"
              onClick={()=> this.sendNotification()}
            >
              Place Order
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default OrderComplete;
