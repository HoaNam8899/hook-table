import React from "react";

export default function TBody({ TbodyData, columns }) {
    return (
        <>
            <tbody>
                {TbodyData.map((x, index) => <tr key={index}>
                    {columns.map((col, ind) => <td key={ind}>{x[col.field]}</td>)}
                </tr>)}
            </tbody>
        </>
    )
}