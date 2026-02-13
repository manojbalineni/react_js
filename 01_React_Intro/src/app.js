import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyCmponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyCmponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);

/*
root.render(<App />);
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
