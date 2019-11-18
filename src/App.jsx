import React from 'react';
//import {Button, Container} from "react-bootstrap";


function App() {

    return (
        <>
            <div className="container">
                <header className="py-3">
                    <div className="row flex-wrap justify-content-between">
                        <div className="col-9 offset-1 offset-md-0 text-center">
                            <h4 className="text-dark" >#Top-List</h4>
                        </div>
                        <div className="col-2 mb-2 d-flex justify-content-end align-items-end">
                            <input type="button" className="btn btn-sm btn-outline-secondary" value="Sign up"/>
                        </div>
                    </div>
                </header>
            </div>
            <main role="main" className="container">
                <form>
                    <div className="form-row">
                        <div className="col-12 col-md-7 col-sm-9 ">
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">Reset</button>
                                    </div>
                                    <label htmlFor="inputSearch" className="sr-only">Search Input</label>
                                    <input type="text" className="form-control" id="inputSearch" placeholder="Search for a category by a #HashTag"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2 col-sm-3">
                            <button type="submit" className="btn btn-warning btn-block mb-2">Search</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-12 col-md-9 col-sm-12">
                        <p>
                            <a href="#" className="badge badge-secondary">Estonia</a>&nbsp;
                            <a href="#" className="badge badge-secondary">Food</a>&nbsp;
                            <a href="#" className="badge badge-secondary">Italian</a>&nbsp;
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 order-1 order-md-0 order-sm-1">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item</th>
                                <th scope="col">Rating</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Tomato pasta</td>
                                <td>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    &nbsp;
                                    <span className="badge badge-warning badge-pill">4.8</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jummy pasta</td>
                                <td>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    &nbsp;
                                    <span className="badge badge-warning badge-pill">4.7</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jummy pasta</td>
                                <td>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    &nbsp;
                                    <span className="badge badge-warning badge-pill">4.4</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 col-md-3 order-0 order-md-1 order-sm-0">
                        <h4><small className="text-muted">Filter</small></h4>

                        <form>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Example label</label>
                                <input type="text" className="form-control" id="formGroupExampleInput"
                                       placeholder="Example input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="filter_country">Country:</label>
                                <select id="filter_country" className="custom-select">
                                    <option selected>Select country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="filter_category">Category:</label>
                                <select id="filter_category" className="custom-select">
                                    <option selected>Select category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer className="mt-5 text-muted text-center text-small">
                <p className="mb-1">&copy; 2019-2020 Company Name</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </>
    )
}


export default App
