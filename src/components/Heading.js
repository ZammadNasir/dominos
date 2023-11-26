import React from 'react'

const Heading = (props) => {
    return (
        <div className="container">
            <div className="category-heading">
                <div></div>
                <h2
                    style={{
                        whiteSpace: "nowrap"
                    }}
                >{props.heading}</h2>
                <div></div>
            </div>
        </div>
    )
}

export default Heading
