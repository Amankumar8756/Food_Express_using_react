# PARECEL

- DEV BUILD

- LOCAL SERER
- HMR = HOT MODULE REPLECEMENT FOR REACT

- File watching algorthm - wri=ten in c++

- also  givs faster build  -- Caching - Faster build 

- what parcel does -- Image optimasation , 
- Minification
- Bundling
 - Compressing

- Consistent Hashing 
- Code Splitting
- Differential Bundling - to suport older browsers
- HTTPS
 - TREE shaking- remove unuse  code
- Different dev and production  bundles

- notes ep2
  
// React.element => object =>when you (render) the dom then it become => htmlelelement
//jsx is not html - its looks like xml-like syntax
// const heading = React.createElement("h1", {id: "heading"}, "Aman kumar ?!!!");
// console.log(heading);
// JSX (transpile before it reaches the js enggine)- PARCEL - Babel - is package 
// const jsxHeading = <h1 id="heading"> Hello i am from react using jsx</h1>;
// console.log(jsxHeading);


//  const elm = <span> Aman elemnet</span>


// const Title = () => (
//     <h1 className="head" tabIndex="6">
//         namaste aman using jsx
        
//     </h1>
// );

//  // React functional component
//  const HeadingComponent = () =>(

//     <div className="container">
       
//       {Title() }
//       <h1 className="heading"> Namste react Functionasl Component</h1>

//      </div>
// );

//--------------------- react hooks

 Summary: Hooks Jaruri Kyu Hain?
Hook	Kab Use Kare?
 - useState()	Jab hume component ke andar state manage karni ho
 - useEffect()	Jab hume API call ya side effects handle karne ho
useContext()	Jab multiple components me data share karna ho
useRef()	Jab hume kisi DOM element ko refer karna ho
useReducer()	Jab state complex ho aur multiple actions handle karne ho
🎯 Final Conclusion
✅ React Hooks ka use karke hum code ko simple, chhota aur fast bana sakte hain!
✅ Class Components ki zaroorat nahi, ab sab kuch Functional Components me ho sakta hai!
//------------
  # React Hoks
  - (normal js utility functios)
  - useState() -> superpower 
  - useEffect()



# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build Our Store
 - Connect our store to our App
 - Slice (cartSlice)
 - Dispatch(action)
 - Selectore
 
