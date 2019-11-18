import React from 'react';
//import {Button, Container} from "react-bootstrap";
import Header from './components/Header'
import Footer from './components/Footer'
import Filters from './components/Filters'
import Table from './components/Table'
import SearchForm from './components/SearchForm'
import SearchParams from './components/SearchParams'


function App() {
    return (
        <>
            <Header/>
            <main role="main" className="container">
                <SearchForm/>
                <SearchParams/>
                <div className="row">
                    <Table/>
                    <Filters/>
                </div>
            </main>
            <Footer/>
        </>
    )
}


export default App
