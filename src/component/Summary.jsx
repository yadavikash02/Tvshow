import React from 'react'

function Summary({ imageUrl, name, summary,genres,mode }) {
    return (
        <div className={`card mb-3 w-100 bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
                    <p className={`card-text mx-1 bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
                            <small className={`bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
                                {
                                    genres
                                }</small>
                        </p>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {name}
                        </h5>
                        <h4>Summary</h4>
                        <p className="card-text">
                            {
                               summary
                            }
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary"></small>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Summary
