import React from 'react';

function SearchForm() {
    return (
        <form>
            <div className="form-row">
                <div className="col-12 col-md-7 col-sm-9 ">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button">Reset</button>
                            </div>
                            <label htmlFor="inputSearch" className="sr-only">Search Input</label>
                            <input type="text" className="form-control" id="inputSearch"
                                   placeholder="Search for a category by a #HashTag"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-3">
                    <button type="submit" className="btn btn-warning btn-block mb-2">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
