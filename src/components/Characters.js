import React from "react";

const Characters=({characters=[]}) => {
    return(
        <div className="row">
            {characters.map((item,index)=>(
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minWidth:"200px"}}>
                            <img src={item.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title text-justify">{item.name}</h5>
                                <hr/>
                                <p className="text-justify">Species: {item.species}</p>
                                <p className="text-justify">Location: {item.location.name}</p>
                                <p className="text-justify">Status: {item.status}</p>
                                <p className="text-justify text-warning text-font-italic">Gender: {item.gender}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
export default Characters;