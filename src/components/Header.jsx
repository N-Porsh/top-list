import React from 'react';

function Header() {
    return (
        <div className="container">
            <header className="py-3">
                <div className="row flex-wrap justify-content-between">
                    <div className="col-9 offset-1 offset-md-0 text-center">
                        <h4 className="text-dark">#Top-List</h4>
                    </div>
                    <div className="col-2 mb-2 d-flex justify-content-end align-items-end">
                        <input type="button" className="btn btn-sm btn-outline-secondary" value="Sign up"/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
