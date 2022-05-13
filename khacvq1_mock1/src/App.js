import React from "react";
import FilterComponent from "./components/FilterComponent";
import ListComponent from "./components/ListComponent";
import SearchComponent from "./components/SearchComponent";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

function App() {
  const data = [{"img" : "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg", "name" : "Nguyễn Văn A", "age" : 20, "phone" : "123456789"}, 
  {"img" : "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg", "name" : "Nguyễn Văn A", "age" : 20, "phone" : "123456789"}, 
  {"img" : "https://i.pinimg.com/564x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.jpg", "name" : "Nguyễn Văn A", "age" : 20, "phone" : "123456789"}];
  const filterArray = ["< 20 tuổi", "< 40 tuổi", "< 60 tuổi"];
  return (
    <div class="container">
      <h3>Mock Project 1 - KhacVQ1</h3>
      <div>
        <div id="searchBar">
          <SearchComponent />
          <FilterComponent param={filterArray} />
        </div>
        <div id="result">
          <ListComponent param = {data}/>
        </div>
      </div>
    </div>
  );
}

export default App;