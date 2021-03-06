import React, { Component, Fragment } from "react";
import logo from "./logo.png";
import methods from "./methods_statement_cards.png";
import oxxopay from "./oxxopay.svg";
import paypal from "./paypal.svg";
import cheese from "./cheese.jpg";
import zana from "./zana.jpg";
import tarta from "./tarta.png";
import "./App.css";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/productos/:id" component={Item} />
          <Route path="/" exact strict component={Item} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

class Item extends Component {
  styles = {
    itemContainer: {
      display: "flex",
      height: "50rem",
      paddingTop: "5rem",
      paddingLeft: "15rem",
      paddingRight: "10rem"
    },
    navContainer: {
      position: "fixed",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "4rem",
      width: "100%",
      backgroundColor: "white",
      borderBottom: "1px solid rgba(0,0,0,.1)"
    },
    navLogo: {
      height: "80%"
    },
    navLinksContainer: {
      display: "flex",
      paddingRight: "4rem"
    },
    navLink: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "1.1rem",
      wordWrap: "break-word",
      textDecoration: "none",
      color: "inherit",
      marginRight: "1rem"
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100%",
      flexGrow: 3
    },
    itemImage: {
      height: "80%",
      width: "auto"
    },
    detailsContainer: {
      paddingLeft: "6rem",
      paddingTop: "4rem",
      overflow: "auto",
      flexGrow: 7
    },
    title: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "2rem",
      wordWrap: "break-word"
    },
    description: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "400",
      fontSize: "1.1rem",
      wordWrap: "break-word"
    },
    details: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "1.1rem",
      wordWrap: "break-word"
    },
    price: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: "1.2rem",
      fontWeight: "400",
      wordWrap: "break-word"
    },
    shipping: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: "1.3rem",
      fontWeight: "500",
      wordWrap: "break-word"
    }
  };
  products = [
    {
      id: "1",
      title: "Cheesecake de caramelo",
      description: "Cheesecake con un toque dulce y fácil de hacer",
      price: 280.0,
      image: cheese,
      shipping:
        "Envio de 4 a 5 dias hábiles en pedidos mayores a $100. Y envios de 2 a 3 dias hábiles en pedidos mayores a $300"
    },
    {
      id: "2",
      title: "Pastel de zanahoria",
      description:
        "¿Quién habría adivinado que una piña, compota de manzana y zanahorias podrían ser parte de un postre tan sabroso?",
      price: 300.0,
      image: zana,
      shipping:
        "Envio de 4 a 5 dias hábiles en pedidos mayores a $100. Y envios de 2 a 3 dias hábiles en pedidos mayores a $300"
    },
    {
      id: "3",
      title: "Torta Rellena Cremosa",
      description:
        "¡La combinación perfecta del dulce en un pastel esponjoso y sabroso!",
      price: 200.0,
      image: tarta,
      shipping: `Envio de 4 a 5 dias hábiles en pedidos mayores a $100. Y envios de 2 a 3 dias hábiles en pedidos mayores a $300`
    }
  ];
  render() {
    const { styles, products } = this;
    const product = products.find(p => p.id == this.props.match.params.id) || {
      ...products[Math.floor(Math.random() * products.length)]
    };
    return (
      <Fragment>
        <div style={styles.navContainer}>
          <img style={styles.navLogo} src={logo} alt="calithecat" />
          <div style={styles.navLinksContainer}>
            <a style={styles.navLink} href="http://lareposteriagdl.com/">
              INICIO
            </a>
            <a style={styles.navLink} href="http://lareposteriagdl.com/about/">
              ACERCA DE...
            </a>
            <a
              style={styles.navLink}
              href="http://lareposteriagdl.com/contact/"
            >
              CONTACTO
            </a>
          </div>
        </div>
        <div style={styles.itemContainer}>
          <div style={styles.imageContainer}>
            <img style={styles.img} src={product.image} alt="Product Image" />
          </div>
          <div style={styles.detailsContainer}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>${product.price} MXN</p>
            <p style={styles.shipping}>Shipping Info</p>
            <p style={styles.details}>{product.shipping}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
