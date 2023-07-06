import React, { useState } from "react";

export default function THead({ columns, handleSort }) {
    // console.log(columns)
    // const handleSort = (lable) => {
    //     console.log(lable)
    // }
    const [toggle, setToggle] = useState(false)
    const handleSortTh = (param) => {
        setToggle(!toggle)
        handleSort(param, toggle)
    }
    return (
        <>
            <thead>
                <tr>
                    {columns.map((col, index) => <th key={index} onClick={() => handleSortTh(col.lable)}>{col.lable}</th>)}
                </tr>
            </thead>
        </>
    )
}
// export default function THead(columns) {
//     console.log(columns)
//     return (
//         <>
//             <thead>
//                 <tr>
//                     {columns.columns.map((col, index) => <th key={index}>{col.lable}</th>)}
//                 </tr>
//             </thead>
//         </>
//     )
// }