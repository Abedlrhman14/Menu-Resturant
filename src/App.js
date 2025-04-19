import { Container  ,button} from "react-bootstrap";
import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Category from "./components/Category";
import CardList from "./components/CardList";
import { Items } from "./Data";
import React , { useState } from "react";
function App() {
  const [ItemsData,setItemsData] = useState(Items)
  //get all cat 
  const allCat = ['All',...new Set(Items.map((i)=>i.category))]
  console.log(allCat)
  //filter by category
  const filterbyCategory = (cat) => {
    if(cat === 'All'){
     setItemsData(Items)
    }else{
      const newArr=Items.filter((Items)=> Items.category === cat)
      setItemsData(newArr)
    }
  }
  //filter by search from
  const filterbysearch = (word) => {
    if(word !== ''){
      const newArr=Items.filter((Items)=> Items.title === word)
      setItemsData(newArr)
    }
  }
  return (
    <div className="App">
      <NavBar filterbysearch={filterbysearch}/>
      <Container>
      <Header/>
      <Category filterbyCategory={filterbyCategory} allCat={allCat}/>
      <CardList itemsData={ItemsData}/>
      </Container>
    </div>
  );
}

export default App;
