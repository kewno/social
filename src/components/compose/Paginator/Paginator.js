import React, {useState} from 'react';
import s from "./Paginator.module.scss";

const Paginator = ({portionSize = 10, ...props}) => {
    //debugger
    let countPage = Math.ceil(props.countUsers / props.sizeUserOfPage);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(1); //portionCount
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((el) => {
                return <span key={el} onClick={() => props.getUsers(el)} className={props.activePage === el ? s.paginationElemActive : s.paginationElem}>{el}</span>
            })}

            {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
            </div>
    )
}

export default Paginator;