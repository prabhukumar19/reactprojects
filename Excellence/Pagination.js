import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState((Math.ceil(total / showPerPage))
    );
    useEffect(() => {
        const value = showPerPage * counter;
        // console.log(value);
        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    };
    let array = new Array(numberOfButtons).fill('');
    // console.log(array);
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item mx-2">
                        <a className="page-link" href="!#" onClick={() => onButtonClick("prev")}>Previous</a>
                    </li>

                    {array.map((el, index) => (

                        <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
                            <a className="page-link" href="!#" onClick={() => setCounter(index + 1)}>{index+1}</a>
                        </li>
                    ))}
                    <li className="page-item mx-2">
                        <a className="page-link" href="!#" onClick={() => onButtonClick("next")}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;