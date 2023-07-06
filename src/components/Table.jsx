import React, { useState } from "react";
import THead from "./tableComponents/Thead";
import TBody from "./tableComponents/Tbody";
export default function Table() {
    // tạo hook, truyền hook xuống component THead
    // THead hiển thị nội dung ở hook
    // thuận tiện khi thêm hoặc xóa phần tử trong hook
    const columns = [
        { lable: 'id', field: 'id' },
        { lable: 'name', field: 'name' },
        { lable: 'address', field: 'address' },
        { lable: 'birthday', field: 'birthday' },
        { lable: 'phone', field: 'phone' }



    ]
    const [isCheck, setIsCheck] = useState(false)
    const [dataS, setData] = useState([
        { id: '1', name: 'C', address: '12', birthday: '20/2/1990', phone: '1234567890' },
        { id: '2', name: 'D', address: '123', birthday: '7/9/2000', phone: '1998899898' },
        { id: '3', name: 'A', address: '123456', birthday: '3/5/1992', phone: '1234567890' },
        { id: '4', name: 'Q', address: '12', birthday: '15/1/1998', phone: '1234567890' },
        { id: '5', name: 'E', address: '11', birthday: '24/9/2004', phone: '1234567890' },
        // { id: '6', name: 'B', address: '12345', birthday: '12/12/2003', phone: '1234567890' },
        // { id: '7', name: 'O', address: '12345', birthday: '12/12/2003', phone: '1234567890' },
        // { id: '7', name: 'OO', address: '12345', birthday: '12/12/2003', phone: '1234567890' },
    ]
    )



    // const [isSort, setIsSort] = useState('')
    // lấy các lable
    // viết hàm có đối số const handleSort = (param) => {} truyền hàm xuống component rồi sử dụng
    // ở hàm con trong map buộc phải dùng arrow function nếu không bị vòng lặp vô hạn
    // dùng lable kiểm tra để sort

    const handleSort = (field, toggle) => {
        console.log(toggle)
        let a = toggle ? 1 : -1

        let _data = dataS.sort((u1, u2) => u1[field].localeCompare(u2[field]) * a)

        setData([..._data])
    }
    // updateBooks([...books, { name: 'A new Book', id: '...'}]);

    return (
        <>
            <h1>Table Hook</h1>
            <table border={1} cellPadding={5} cellSpacing={0} width={'100%'}>
                <THead columns={columns} handleSort={handleSort} />
                <TBody TbodyData={dataS} columns={columns} />
            </table>
        </>
    )
}