// import "./App.css";
// import { useState, useEffect, useCallback } from "react";
// import { useRef } from "react";
// import Message from "./Message.jsx";
// import About from "./About.jsx";
// import Hobbies from "./Hobbies.jsx";
// import Footer from "./Footer.jsx";
// import UserCard from "./UserCard.jsx";
// import ProductCard from "./ProductCard.jsx";
// import UserList from "./UserList.jsx";
// import StatusMessage from "./StatusMessage.jsx";
// import ShippingInfo from "./ShippingInfo.jsx";
// import User from "./User.jsx";
// import Form from "./Form.jsx";
// import Miniprojekat from "./miniProjekat.jsx";
// import Data from "./Data.jsx";
// import ApiSelectorAndCounter from "./ApiSelectorAndCounter.jsx";
// import Timerr from "./Timerr.jsx";
// import KeyPressCounter from "./KeyPressCounter.jsx";
// import MouseBackgroundChanger from "./MouseBackgroundChanger.jsx";
// import ThemeSwitcher from "./ThemeSwitcher.jsx";
// import RestartableInterval from "./RestartableInterval.jsx";
// import FakeApiCall from "./FakeApiCall.jsx";
// import UserDataLoader from "./UserDataLoader.jsx";
// import InstagramFeed from "./InstagramFeed.jsx";
// import PreviousValuesList from "./PreviousValuesList.jsx";
// import AdvancedTimer from "./AdvancedTimer.jsx";
// import NotesApp from "./NotesApp";
// import MaxNumberMemo from "./MaxNumberMemo";
// import HeavyTextCount from "./HeavyTextCount";
// import BlogDetails from "./components/BlogDetails.jsx";
// // import Header from "./components/Header";
// import Home from "./pages/Home";
// import HomeDefault from "./pages/HomeDefault";
// import Dashboard from "./pages/Dashboard";
// import Settings from "./pages/Settings";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
import { Layout } from "./components/Layout.jsx";
import { Card } from "./components/Card.jsx";
import { Alert } from "./components/Alert.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

// function App() {
//   const users = [
//     { name: "snezana", age: 21 },
//     { name: "ajsa", age: 21 },
//   ];

//   // const content = users.map((user) => (
//   //   <UserCard name={user.name} age={user.age} />
//   // ));
//   return (
//     <>
//       <Header />
//       <About />
//       <Hobbies />
//       <Footer />
//       {/* <UserCard name={"Snezana"} age={20} />
//       <UserCard name={"Ajsa"} age={21} /> */}
//       {/* {content} */}
//       {users.map((user, index) => (
//         <UserCard name={user.name} age={user.age} key={index} />
//       ))}
//       ;
//       <ProductCard title={"Film"} price={210} description={"nesto"} />
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function App() {
//   const isLoggedIn = true;
//   const products = [
//     { id: 1, title: "Laptop", price: 1200, inStock: true },
//     { id: 2, title: "Telefon", price: 600, inStock: false },
//     { id: 3, title: "Slusalice", price: 100, inStock: true },
//   ];

//   // const content2 = isLoggedIn ? <Dashboard /> : <LoginForm />;

//   return (
//     <>
//       <ProductCard title="asf" price="12" inStock={false} />
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           title={product.title}
//           price={product.price}
//           inStock={product.inStock}
//         />
//       ))}
//     </>
//   );
// }

// function App() {
//   console.log("App render");

//   const [count, setCount] = useState(0);
//   const [theme, setTheme] = useState("dark");

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);

//     console.log("increment function,count = ", count);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div style={{ backgroundColor: theme == "dark" ? "black" : "white" }}>
//       <button onClick={increment}>+</button>
//       <p>{count}</p>
//       <button onClick={decrement}>-</button>
//       <br /> <br />
//       <button onClick={reset}>Reset</button>
//       <br />
//       <br />
//       <button
//         onClick={() => {
//           setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"));
//         }}
//       >
//         Change to {theme == "dark" ? "light" : "dark"} theme
//       </button>
//     </div>
//   );
// }

// function App() {
//   return <User></User>;
// }

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Hobbies />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Miniprojekat />
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [colorState, setColorState] = useState("green");

//   useEffect(() => {
//     document.title = colorState;
//   }, [colorState]);

//   const changeColor = () => {
//     setColorState((prevValue) => (prevValue === "red" ? "green" : "red"));
//   };

//   return (
//     <div>
//       <p style={{ color: colorState }}>{count}</p>
//       <button onClick={() => setCount((prevValue) => prevValue + 1)}>+</button>
//       <button onClick={() => setCount((prevValue) => prevValue - 1)}>-</button>
//       <br />
//       <button onClick={changeColor}>change color</button>
//     </div>
//   );
// }

// function App() {
//   <Data />;
// }

// function App() {
//   const [showTimer, setShowTimer] = useState(true);
//   const [showKeyCounter, setShowKeyCounter] = useState(true);
//   const [showMouseBg, setShowMouseBg] = useState(true);
//   const [showTheme, setShowTheme] = useState(true);
//   const [showRestartable, setShowRestartable] = useState(true);
//   const [showFakeApi, setShowFakeApi] = useState(true);
//   const [showComponent, setShowComponent] = useState(true);
//   const [useMouse, setUseMouse] = useState(true);
//   const [showUserLoader, setShowUserLoader] = useState(true);

//   return (
//     <div>
//       <ApiSelectorAndCounter />

//       <hr />
//       <h2>1.Timer</h2>
//       <button onClick={() => setShowTimer((prevValue) => !prevValue)}>
//         {showTimer ? "Sakrij timer" : "Prikazi timer"}
//       </button>

//       {showTimer && <Timer />}

//       <hr />

//       <button onClick={() => setShowKeyCounter((prevValue) => !prevValue)}>
//         {showKeyCounter ? "Sakrij KeyCounter" : "Prikazi KeyCounter"}
//       </button>
//       {showKeyCounter && <KeyPressCounter />}

//       <hr />

//       <button onClick={() => setShowMouseBg((prevValue) => !prevValue)}>
//         {showMouseBg ? "Sakrij MouseBG" : "Prikazi MouseBG"}
//       </button>
//       {showMouseBg && <MouseBackgroundChanger />}

//       <hr />

//       <button onClick={() => setShowTheme((prevValue) => !prevValue)}>
//         {showTheme ? "Sakrij ThemeSwitcher" : "Prikazi ThemeSwitcher"}
//       </button>
//       {showTheme && <ThemeSwitcher />}

//       <hr />

//       <button onClick={() => setShowRestartable((prevValue) => !prevValue)}>
//         {showRestartable ? "Sakrij Interval" : "Prikazi Interval"}
//       </button>
//       {showRestartable && <RestartableInterval />}

//       <hr />
//       <button onClick={() => setShowFakeApi((prevValue) => !prevValue)}>
//         {showFakeApi ? "Sakrij FakeAPI" : "Prikazi FakeAPI"}
//       </button>

//       {showFakeApi && <FakeApiCall />}

//       <hr />
//       <h2>7.vidljivo/nevidljivo</h2>
//       <button onClick={() => setShowComponent((prevValue) => !prevValue)}>
//         {showComponent ? "Sakrij komponentu" : "Prikazi komponentu"}
//       </button>
//       <button
//         onClick={() => setUseMouse((prevValue) => !prevValue)}
//         style={{ marginLeft: "10px" }}
//       >
//         {useMouse ? "Koristi MouseTracker" : "Koristi Timer"}
//       </button>

//       {showComponent && (useMouse ? <MouseBackgroundChanger /> : <Timer />)}

//       <hr />
//       <h2>8.Cleanup</h2>
//       <button onClick={() => setShowUserLoader((prevValue) => !prevValue)}>
//         {showUserLoader ? "Sakrij User Loader" : "Prikazi User Loader"}
//       </button>

//       {showUserLoader && <UserDataLoader />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <header>
//         {" "}
//         <button >Instagram feed</button>
//       </header>
//       <InstagramFeed />
//     </div>
//   );
// }

// function App() {
//   const inputRef = useRef(null); //vraca jednu vrednost,to je objekat koji ima current i to ima neku vrednost, onda je 10 vr current-a
//   const [state, setState] = useState(0);
//   const brojRendera = useRef(0);

//   useEffect(() => {
//     brojRendera.current += 1;
//   });

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button
//         onClick={() => {
//           inputRef.current.focus();
//         }}
//       >
//         Fokusiraj input
//       </button>

//       <p>State: {state}</p>
//       <p>Broj rendera: {brojRendera.current}</p>

//       <button
//         onClick={() => {
//           setState((prev) => prev + 5);
//         }}
//       >
//         Menjaj state
//       </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <PreviousValuesList />
//       <AdvancedTimer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <NotesApp />
//       <MaxNumberMemo />
//       <HeavyTextCount />
//       <SquareExample />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// }

// function App() {
//   const products = [
//     { id: 1, name: "Apple", category: "Food" },
//     { id: 2, name: "T-Shirt", category: "Clothes" },
//     { id: 3, name: "Laptop", category: "Tech" },
//     { id: 4, name: "Bread", category: "Food" },
//     { id: 5, name: "Headphones", category: "Tech" },
//     { id: 6, name: "Jeans", category: "Clothes" },
//   ];

//   return (
//     <div>
//       <TaskApp />
//       <Timer />
//       <ProductFilter />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/home" element={<Home />}>
//           <Route index element={<HomeDefault />} />

//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>

//         <Route path="/" element={<HomeDefault />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <div>
//       {/* <Layout>
//         <h1>hello 1</h1>
//         <Layout>hello2</Layout>
//       </Layout> */}

//       {/* <Card>
//         <h1>Card1</h1>
//         <p>Lorem ipsum dolor sit amet.</p>
//       </Card>

//       <Card>
//         <h1>Card2</h1>
//       </Card> */}

//       {/* <Layout>
//         <Card>
//           <h1>prva kartica</h1>
//           <p>helooo</p>
//         </Card>

//         <Card>
//           <button>Click</button>
//         </Card>
//       </Layout> */}
//       <ThemeContext>
//         <Alert type="success">
//           <p>Uspesno ste se ulogovali </p>
//         </Alert>

//         <Alert type="nfo">
//           <p> BRAVO</p>
//         </Alert>

//         <Alert type="error">
//           <p>greska</p>
//         </Alert>
//       </ThemeContext>
//     </div>
//   );
// }

// function App() {
//   return <CartProvider></CartProvider>;
// }

function App() {
  return;
}

export default App;
