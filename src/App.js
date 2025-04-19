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
  //filter by category
  const filterbyCategory = (cat) => {
    if(cat === 'All'){
     setItemsData(Items)
    }else{
      const newArr=Items.filter((Items)=> Items.category === cat)
      setItemsData(newArr)
    }
  }
  return (
    <div className="App">
      <NavBar/>
      <Container>
      <Header/>
      <Category filterbyCategory={filterbyCategory}/>
      <CardList itemsData={ItemsData}/>
      </Container>
    </div>
  );
}

export default App;
