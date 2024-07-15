import React from 'react';

export default function header() {
    
    return (
        <>
            <header className="p-0 container-fluid justify-content-center d-flex flex-row border-bottom border-primary bd-highlight">
                <div className='p-0 container-fluid d-flex flex-row align-items-center'>
                   <p className='m-0 p-0'> hi </p>
                   <h1 className='m-0 p-0'>Example heading <span className="badge text-bg-secondary">New</span></h1>
                </div>
                <div className='container-fluid d-flex justify-content-start'>
                    <button type="button" className="btn btn-primary">Button</button>
                </div>
            </header>
        </>
    )
}