import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';
import Footer from './components/Footer';
import AddItem from'./components/AddItem.js'
import bgImage from './bgImage.jpg';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Payment from './components/Payment.jsx';

function Home() {
  const navigate = useNavigate();
  const products=[
    {
      price:999,
      name:'samsung M11',
      quantity: 0
    },
    {
      price:1999,
      name:'samsung M16',
      quantity: 0
    }
  ]

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const addItem = (name, price) => {
    if (!name || !price) {
      alert("Please fill in all fields");
      return;
    }
    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid price");
      return;
    }
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: Number(price),
      quantity: 0
    });
    setProductList(newProductList);
  }

  const incrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount = totalAmount
    newProductList[index].quantity++
    newTotalAmount+=productList[index].price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }

  const decrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount = totalAmount
    if(newProductList[index].quantity>0){
      newProductList[index].quantity--
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }

  const resetQuantity= () => {
    let newProductList=[...productList];
    newProductList.map((products)=>{
      products.quantity=0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index)=>{
    let newProductList=[...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount-=newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />
      <main className='container main-container mt-5'>
        <AddItem addItem={addItem}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem = {removeItem}/>
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} onPayNow={() => navigate('/payment')}/>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
