import React from 'react';

function Table() {
    return (
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
    );
}

export default Table;
