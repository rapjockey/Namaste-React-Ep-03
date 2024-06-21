import React from "react";
import ReactDOM from "react-dom/client"


// Core Syntax Of  JSX
const jsxHeading = <h1 id="heading">Namaste React from JSX</h1>

// Print In Console
console.log(jsxHeading);

//Create Root
// const root = ReactDOM.createRoot(document.getElementById("root"));

// Render It 
// root.render(jsxHeading);

// *** IMP*** //
/* 
1. JSX Is Not HTMl
2. JSX Is Not HTML In Javascript
3. JSX Is Not Part Of React
5. JSX Is Have HTMl And Xml Like Syntax
*/

/* Very IMP */
/*
1. Javascript Engine Can Not Be Understand JSX 
2. Bable Is Transpiler That Coverts JSX Into React (create.Element)
*/



const Title = () => (
    <h1 className="head">Namaste React from JSX 🚀</h1>
);
 
// How To Add JS in JSx  => Using {} It Will Execute All Js Code, Component And Element..

const num = 1000;

const HeadingComponent = () => (
     <div>
        {num}
        <Title/> This Component Composition
        <h1 className="heading">
            Namaste React From Functional Component
        </h1>
     </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

// Bonus Tip => JSX Will Care Of Malvare When We Call JS api OR Any Data, JSX Will Check And Take Care Of It..