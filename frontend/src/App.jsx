import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import CreateCustomer from "./pages/CreateCustomers";
import ShowBook from "./pages/ShowBook";
import ShowCustomer from "./pages/ShowCustomer";
import EditBook from "./pages/EditBook";
import EditCustomer from "./pages/EditCustomer";
import DeleteBook from "./pages/DeleteBook";
import DeleteCustomer from "./pages/DeleteCustomer";
import AllBooks from "./pages/AllBooks";
import AllCustomers from "./pages/AllCustomers";

const App = () =>{
  return (
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/books/create' element ={<CreateBook/>}/>
      <Route path = '/customers/create' element ={<CreateCustomer/>}/>
      <Route path = '/books/details/:id' element ={<ShowBook/>}/>
      <Route path = '/customers/details/:id' element ={<ShowCustomer/>}/>
      <Route path = '/books/edit/:id' element ={<EditBook/>}/>
      <Route path = '/customers/edit/:id' element ={<EditCustomer/>}/>
      <Route path = '/books/delete/:id' element ={<DeleteBook/>}/>
      <Route path = '/customers/delete/:id' element ={<DeleteCustomer/>}/>
      <Route path = '/books' element ={<AllBooks/>}/>
      <Route path = '/customers' element ={<AllCustomers/>}/>

    </Routes>
  );
}
export default App