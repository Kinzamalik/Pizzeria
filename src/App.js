import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import firebase from "./firebase";
import Categories from "./components/Categories";
import Checkout from "./components/Checkout";
import PaymentOptions from "./components/PaymentOptions";
import OrderPreview from "./components/OrderPreview";
import OrderComplete from "./components/OrderComplete";
import OneSignal from 'react-onesignal';
 
// e7324f44-17ee-4b80-a576-83bcfa96b96f
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "https://reacteats-backend.herokuapp.com/items",
      cart: [],
      totalPrice: 0,
      totalQuantity: 0,
      cartLimit: 20000,
      geolocation: "",
      items: [
        {
          id: 1,
          itemName: "Brown and Egg Muffin",
          itemImg: "bacon-and-egg-muffin-original",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 2,
          itemName: "BBQ Roll",
          itemImg: "BBQ-roll-original",
          itemCategory: "wraps-and-rolls",
          itemPrice: 500,
        },
        {
          id: 3,
          itemName: "Muffin",
          itemImg: "Muffin",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 4,
          itemName: "Muffins",
          itemImg: "muffins-original",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 5,
          itemName: "Muffins With Jam",
          itemImg: "muffin-with-jam-original",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 6,
          itemName: "Bacon Roll",
          itemImg: "Bacon-roll-original",
          itemCategory: "wraps-and-rolls",
          itemPrice: 500,
        },
        {
          id: 7,
          itemName: "Blue Moon Ice-cream",
          itemImg: "Blue-moon-ice cream-original",
          itemCategory: "icecream",
          itemPrice: 500,
        },
        {
          id: 8,
          itemName: "Cappuccino",
          itemImg: "Cappuccino-original",
          itemCategory: "hotdrinks",
          itemPrice: 500,
        },
        {
          id: 9,
          itemName: "Chai",
          itemImg: "Chai-original",
          itemCategory: "hotdrinks",
          itemPrice: 500,
        },
        {
          id: 10,
          itemName: "Chocolate Milkshake",
          itemImg: "chocolate-milkshake-original",
          itemCategory: "milkshakes",
          itemPrice: 500,
        },
        {
          id: 11,
          itemName: "Classic Milkshake",
          itemImg: "classic-milkshake-orginal",
          itemCategory: "milkshakes",
          itemPrice: 500,
        },
        {
          id: 12,
          itemName: "Cocacola",
          itemImg: "cocacola-original",
          itemCategory: "fizzydrinks",
          itemPrice: 500,
        },
        {
          id: 13,
          itemName: "Cookie Milkshake",
          itemImg: "cookie-milkshake-original",
          itemCategory: "milkshakes",
          itemPrice: 500,
        },
        {
          id: 14,
          itemName: "Diet Coke",
          itemImg: "diet-coke-original",
          itemCategory: "fizzydrinks",
          itemPrice: 500,
        },

        {
          id: 15,
          itemName: "Double Bacon",
          itemImg: "doubleBacon",
          itemCategory: "bacon",
          itemPrice: 500,
        },
        {
          id: 16,
          itemName: "Double Bacon Egg Muffin",
          itemImg: "double-bacon-and-egg-muffin-original",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 17,
          itemName: "Doughnut",
          itemImg: "doughnut-original",
          itemCategory: "sweet-snacks",
          itemPrice: 500,
        },
        {
          id: 18,
          itemName: "Dr Pepper",
          itemImg: "Dr-Pepper-original",
          itemCategory: "fizzydrinks",
          itemPrice: 500,
        },
        {
          id: 19,
          itemName: "Egg and Cheese Muffin",
          itemImg: "egg-and-cheese-muffin-original",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 20,
          itemName: "Flapjack",
          itemImg: "Flapjack-original",
          itemCategory: "sweet-snacks",
          itemPrice: 500,
        },
        {
          id: 21,
          itemName: "Fruit Winders",
          itemImg: "Fruit-winders-original",
          itemCategory: "sweet-snacks",
          itemPrice: 500,
        },
        {
          id: 22,
          itemName: "Green Tea",
          itemImg: "green-tea-original",
          itemCategory: "hotdrinks",
          itemPrice: 500,
        },
        {
          id: 23,
          itemName: "Hasty Pudding Original",
          itemImg: "hasty-pudding-original",
          itemCategory: "porridge-and-pancakes",
          itemPrice: 500,
        },
        {
          id: 24,
          itemName: "Hot Chocolate",
          itemImg: "hot-chocolate-original",
          itemCategory: "hotdrinks",
          itemPrice: 500,
        },
        {
          id: 25,
          itemName: "Hot Drinks",
          itemImg: "hot-drinks-original",
          itemCategory: "softdrink",
          itemPrice: 500,
        },
        {
          id: 26,
          itemName: "Ice cream",
          itemImg: "ice-cream-original",
          itemCategory: "icecream",
          itemPrice: 500,
        },
        {
          id: 27,
          itemName: "Jaffa Cake",
          itemImg: "jaffa-cake-original",
          itemCategory: "sweet-snacks",
          itemPrice: 500,
        },
        {
          id: 28,
          itemName: "vanilla Milkshake",
          itemImg: "vanilla-milkshake-original",
          itemCategory: "milkshakes",
          itemPrice: 500,
        },
        {
          id: 29,
          itemName: "Mint Tea",
          itemImg: "Mint-tea-original",
          itemCategory: "hotdrinks",
          itemPrice: 500,
        },
        {
          id: 30,
          itemName: "Oatmeal Pancake",
          itemImg: "oatmeal-pancake-original",
          itemCategory: "porridge-and-pancakes",
          itemPrice: 500,
        },
        {
          id: 31,
          itemName: "Oreo Milkshake",
          itemImg: "oreo-milkshake-original",
          itemCategory: "milkshakes",
          itemPrice: 500,
        },
        {
          id: 32,
          itemName: "Pepsi",
          itemImg: "Pepsi-original",
          itemCategory: "fizzydrinks",
          itemPrice: 500,
        },
        {
          id: 33,
          itemName: "Pistachio Ice-cream",
          itemImg: "pistachio-ice-cream-original",
          itemCategory: "icecream",
          itemPrice: 500,
        },
        {
          id: 34,
          itemName: "Raspberry Ripple",
          itemImg: "Raspberry-ripple-original",
          itemCategory: "icecream",
          itemPrice: 500,
        },
        {
          id: 35,
          itemName: "Russian Blini Pancake",
          itemImg: "Russian-blini-pancake",
          itemCategory: "porridge-and-pancakes",
          itemPrice: 500,
        },
        {
          id: 36,
          itemName: "Sausage and Egg Muffin",
          itemImg: "sausage-and-egg-muffin-original",
          itemCategory: "muffins",
          itemPrice: 500,
        },
        {
          id: 37,
          itemName: "Scotch Pancakes",
          itemImg: "Scotch-Pancakes-original",
          itemCategory: "porridge-and-pancakes",
          itemPrice: 500,
        },
        {
          id: 38,
          itemName: "Scottish Porridge",
          itemImg: "scottish-porridge-original",
          itemCategory: "porridge-and-pancakes",
          itemPrice: 500,
        },
        {
          id: 39,
          itemName: "Spicy Veggie Wrap",
          itemImg: "Spicy-Veggie-wrap-original",
          itemCategory: "wraps-and-rolls",
          itemPrice: 500,
        },
        {
          id: 40,
          itemName: "Sprite",
          itemImg: "sprite-original",
          itemCategory: "fizzydrinks",
          itemPrice: 500,
        },
        {
          id: 41,
          itemName: "spumoni",
          itemImg: "spumoni-original",
          itemCategory: "icecream",
          itemPrice: 500,
        },
        {
          id: 42,
          itemName: "Sweet Chilli Wrap",
          itemImg: "Sweet-chilli-wrap-original",
          itemCategory: "wraps-and-rolls",
          itemPrice: 500,
        },
        {
          id: 43,
          itemName: "Sweet Popcorn",
          itemImg: "Sweet-popcorn-original",
          itemCategory: "sweet-snacks",
          itemPrice: 500,
        },
        {
          id: 44,
          itemName: "Tandoori Wrap",
          itemImg: "Tandoori-wrap-original",
          itemCategory: "wraps-and-rolls",
          itemPrice: 500,
        },
        {
          id: 45,
          itemName: "Twister",
          itemImg: "Twister",
          itemCategory: "icecreams",
          itemPrice: 500,
        },
        
      ],

    };
  }
async componentDidMount() {
     await this.requestMessaging();
  }
  handleAddToCart = (itemName, itemPrice, itemImg) => {
    let addedItems = {
      name: itemName,
      price: itemPrice,
      image: itemImg,
      quantity: 1,
    };
    let duplicate = false;
    if (this.state.totalPrice + addedItems.price > this.state.cartLimit) {
      return alert("Cart Limit Exceeded");
    }
    if (addedItems.name !== undefined) {
      this.state.cart.forEach((item, index) => {
        if (addedItems.name === item.name) {
          duplicate = true;
          this.setState(
            (prevState) => {
              const updatedCart = [...prevState.cart];
              updatedCart[index].quantity++;
              return { cart: updatedCart };
            },
            () => this.getCartQuantity()
          );
        }
      });

      if (duplicate === false) {
        this.setState(
          (prevState) => ({
            cart: [...prevState.cart, addedItems],
          }),
          () => this.getCartQuantity()
        );
      }
    }
  };

  getCartQuantity = () => {
    this.getTotalPrice();
    const updatedCart = [...this.state.cart];
    let quant = [];
    updatedCart.forEach((element) => {
      quant.push(element.quantity);
    });
    quant = quant.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    this.setState(() => ({
      totalQuantity: quant,
    }));
  };

  getTotalPrice = () => {
    const updatedCart = [...this.state.cart];
    let total = [];
    updatedCart.forEach((element) => {
      total.push(element.price * element.quantity);
    });
    total = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    this.setState(() => ({
      totalPrice: total,
    }));
  };

  handleDelete = (index) => {
    const updatedCart = [...this.state.cart];
    updatedCart.splice(index, 1);
    this.setState(
      () => ({
        cart: updatedCart,
      }),
      () => this.getCartQuantity()
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      quantity: event.target.dataset.orderquantity,
      price: event.target.dataset.orderprice,
      name: event.target.dataset.name,
      address: event.target.dataset.address,
      phone: event.target.dataset.phone,
    };

    fetch("https://reacteats-backend.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 201) {
        alert("Order submitted succesfully!");
        this.setState(
          () => ({
            cart: [],
          }),
          () => this.getCartQuantity()
        );
      }
    });
  };
  requestMessaging = async() => {
//     try {
//       var options = {
//         notifyButton: {
//           enable: true,
//        }
//       }
//       OneSignal.initialize('e7324f44-17ee-4b80-a576-83bcfa96b96f', options);
//       // const playerId = await OneSignal.getPlayerId();
//       const permissions = OneSignal.notificationPermission;
 
// // Check current permission state
// const currentState = await OneSignal.getNotificationPermission();
 
// // Ask the user for notification permissions, if not granted yet
// await OneSignal.registerForPushNotifications();
//       console.log(permissions,currentState)
//     } catch (error) {
//       console.log(error)
//     }
    // const messaging = firebase.messaging();
    // messaging
    //   .requestPermission()
    //   .then(() => {
    //     return messaging.getToken();
    //   })
    //   .then((token) => {
    //     sessionStorage.setItem("quizAppToken", JSON.stringify(token));
    //   })
    //   .catch((err) => {
    //     console.log("User refused to recieve notifications");
    //   });
    window.OneSignal = window.OneSignal || [];
    window.OneSignal.push(function () {
      window.OneSignal.init({
        appId: "e7324f44-17ee-4b80-a576-83bcfa96b96f",
        autoRegister: true,
        autoResubscribe: false,
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
      window.OneSignal.showNativePrompt();
      
    });
    window.OneSignal.push(["getNotificationPermission", function(permission) {
      console.log("Site Notification Permission:", permission);
      // (Output) Site Notification Permission: default
  }]);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={true}
                    titleText="TL, Pizzaleria"
                    cart={this.state.cart}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ marginTop: "100px" }}>
                    <Categories
                      subText={true}
                      {...props}
                      apiUrl={`${this.state.apiUrl}`}
                      handleAddToCart={this.handleAddToCart}
                    />
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/items/:category"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={true}
                    titleText="TL, Pizzaleria"
                    cart={this.state.cart}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ marginTop: "100px" }}>
                    <Items
                      {...props}
                      apiUrl={`${this.state.apiUrl}`}
                      items={this.state.items}
                      handleAddToCart={this.handleAddToCart}
                    />
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/checkout"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={false}
                    titleText="Check Out"
                    cart={this.state.cart}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ paddingTop: "40px" }}>
                    <Checkout
                      {...props}
                      handleCheckout={(data) =>
                        this.setState({ checkoutDetails: data })
                      }
                      apiUrl={`${this.state.apiUrl}`}
                      handleAddToCart={this.handleAddToCart}
                    />
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/paymentOptions"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={false}
                    titleText="Payment Options"
                    cart={this.state.cart}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ paddingTop: "40px" }}>
                    <PaymentOptions
                      {...props}
                      apiUrl={`${this.state.apiUrl}`}
                      handleAddToCart={this.handleAddToCart}
                    />
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/orderPreview"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={false}
                    titleText="Order Preview"
                    cart={this.state.cart}
                    totalPrice={this.state.totalPrice}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ paddingTop: "40px" }}>
                    <OrderPreview
                      checkoutDetails={this.state.checkoutDetails}
                      cart={this.state.cart}
                      totalPrice={this.state.totalPrice}
                      {...props}
                      apiUrl={`${this.state.apiUrl}`}
                      handleAddToCart={this.handleAddToCart}
                    />
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/orderComplete"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={false}
                    titleText="Thanks"
                    cart={this.state.cart}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ paddingTop: "40px" }}>
                    <OrderComplete
                      checkoutDetails={this.state.checkoutDetails}
                      {...props}
                      apiUrl={`${this.state.apiUrl}`}
                      cart={this.state.cart}
                      totalPrice={this.state.totalPrice}
                      handleAddToCart={this.handleAddToCart}
                    />
                  </div>
                </div>
              )}
            />
            <Route
              exact
              path="/cart"
              render={(props) => (
                <div>
                  <Nav
                    showSearch={false}
                    titleText="Cart"
                    cart={this.state.cart}
                    totalQuantity={this.state.totalQuantity}
                  />
                  <div style={{ paddingTop: "40px" }}>
                    <Cart
                      {...props}
                      totalQuantity={this.state.totalQuantity}
                      totalPrice={this.state.totalPrice}
                      handleDelete={this.handleDelete}
                      handleSubmit={this.handleSubmit}
                      cart={this.state.cart}
                    />
                  </div>
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
