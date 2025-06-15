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
 

# 🍔 Food Express - A React App with Parcel, Redux Toolkit & Gemini API

This is a full-featured food ordering application built using **React**, **Redux Toolkit**, and **Parcel** as the bundler. It utilizes **Gemini API** for smart features and is bundled with performance-focused tools like **pnpm** and **Babel**.

---

## 🚀 Features

### ⚙️ Development Environment
- **Parcel** for fast and zero-config builds
  - Hot Module Replacement (HMR)
  - File Watching (written in C++ for speed)
  - Caching for faster rebuilds
  - Bundling, Minification, Compression
  - Image Optimization
  - Tree Shaking
  - Differential Bundling for browser support
  - HTTPS & Environment-specific bundles

### 📦 Project Setup
- **pnpm** used as a package manager for faster installs and disk efficiency
- Uses **Babel** for JSX transpilation
- React development with modern **React Hooks**

---

## 🧠 React Concepts Used

### 🔤 JSX
```jsx
const heading = React.createElement("h1", { id: "heading" }, "Aman kumar ?!!!");
const jsxHeading = <h1 id="heading">Hello I am from React using JSX</h1>;
```

### 🔁 Functional Components
```jsx
const Title = () => (
  <h1 className="head" tabIndex="6">Namaste Aman using JSX</h1>
);

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
```

### 🧩 React Hooks Summary

| Hook         | When to Use                                             |
|--------------|----------------------------------------------------------|
| `useState()` | To manage state within components                        |
| `useEffect()`| For API calls or side effects                            |
| `useContext()`| For sharing data between components                     |
| `useRef()`   | To reference DOM elements                                |
| `useReducer()`| For complex state with multiple actions                 |

---

## 📦 Redux Toolkit Integration

1. Install:
   ```bash
   pnpm add @reduxjs/toolkit react-redux
   ```

2. Setup:
   - Create your Redux Store
   - Connect the Store to React App
   - Define a `Slice` (e.g., cartSlice)
   - Dispatch actions and use Selectors in components

---


## 🧰 Tech Stack

- React (JSX + Hooks)
- Redux Toolkit
- Parcel (bundler)
- pnpm (package manager)
- Gemini API (AI integration)
- Babel (JSX transpiler)

---

## 🛠️ Getting Started

```bash
pnpm install         # Install dependencies
pnpm run dev         # Start development server with HMR
pnpm run build       # Create optimized production build
```

---

## 📁 .gitignore Recommendations

```bash
node_modules
dist
.env
.cache
.DS_Store
```

---

## 📸 Screenshots

(Add screenshots of your app UI here)
![alt text](image.png)
---

## 📬 Contact

 [GitHub](https://github.com/Amankumar8756)

---
