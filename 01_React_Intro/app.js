import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/cutlery-coming-out-from-chef-hat-3947ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="image-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/735b4a81-4bd2-4bdd-a606-be5fd03d9890_11094.JPG"
        alt=""
      />
      <h3>Pizza Hut</h3>
      <h4>Rating : 4.3</h4>
      <h4>25-30 minutes</h4>
      <h3>Pizzas</h3>
    </div>
  );
};

const BodyCmponent = () => {
  return (
    <div className="body">
      <div className="search-input">Search Box</div>

      <div className="restaurant-component">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <BodyCmponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
/*

const TitleComponent = () => {
  return <h1> This is hello from the Title Component</h1>;
};

Component Composition 
const HeadingComponent = () => {
  return (
    <div id="heading">
      <TitleComponent />
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      <h1>This is hello from the heading component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

*/

/*

const jsxHeading = <h1>Hello from Manoj Babu using JSX Syntax</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

*/

/*

The below is the old code 


const heading = React.createElement(
  "h1",
  { id: "sample-h1", dummy: "manoj" },
  "Hello World from the react",
);
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

console.log(heading); // JS Object => React Element

{
  
  <div id="parent">
    <div id="child">
      <h1>This is heading </h1>
    </div>
</div>; 
}



const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is the heading in nested structure"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{
  
  <div id="parent">
    <div id="child">
      <h1>This is heading </h1>
      <h2> This is Second heading </h2>
    </div>
</div>;
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is the heading in nested structure"),
    React.createElement(
      "h2",
      {},
      "This is the second heading in nested structure",
    ),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{

  <div id="parent">
    <div id="child1">
      <h1>This is heading </h1>
      <h2> This is Second heading </h2>
    </div>
     <div id="child2">
      <h1>This is heading </h1>
      <h2> This is Second heading </h2>
    </div>
</div>; 
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child01" }, [
    React.createElement("h1", {}, "This is the heading in nested structure"),
    React.createElement(
      "h2",
      {},
      "This is the second heading in nested structure",
    ),
  ]),
  React.createElement("div", { id: "child02" }, [
    React.createElement("h1", {}, "This is the heading in nested structure"),
    React.createElement(
      "h2",
      {},
      "This is the second heading in nested structure",
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 The above structure the code is becoming more and more complex. To avoid this we are using JSX 

 */
