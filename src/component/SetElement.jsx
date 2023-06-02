import React from 'react'
import { Link } from 'react-router-dom'
function SetElement({ imageUrl, name, showID, clickhandler,mode }) {
    return (
        <div className={`card h-100 bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <Link to="/summary" onClick={() => { clickhandler(showID) }} className="btn btn-primary">GetMore..</Link>
            </div>
        </div>
    )
}
export default SetElement
