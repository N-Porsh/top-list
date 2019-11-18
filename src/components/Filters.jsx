import React from 'react';

function Filters() {
    return (
        <div className="col-12 col-md-3 order-0 order-md-1 order-sm-0">
            <h4>
                <small className="text-muted">Filter</small>
            </h4>

            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Example input"/>
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
    );
}

export default Filters;
