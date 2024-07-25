import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import LoginContext from '../Context/LoginContext';

function Booklist({ bookdata, DeleteBook }) {
    const logindata = useContext(LoginContext);

    return (
        <>
            <tr>
                <td>{bookdata._id}</td>
                <td style={{ textTransform: "capitalize" }}>{bookdata.title}</td>
                <td>{bookdata.author}</td>
                <td>{bookdata.book_count}</td>
                <td><a href={bookdata.link}>{bookdata.link}</a></td>
                <td><Link className='btn  btn-sm me-1' to={`/portal/bookview/${bookdata._id}`} ><FontAwesomeIcon icon={faEye} color="#810CA8" /></Link>
                    {logindata.isLibrarianVisible ? null : <Link className='btn btn-info btn-sm me-1' to={`/portal/borrowbook/${bookdata._id}`}>Borrow</Link>}
                    {logindata.isLibrarianVisible ? null : <Link className='btn btn-warning btn-sm me-1' to={`/portal/returnbook/${bookdata._id}`}>Return</Link>}
                    {logindata.isLibrarianVisible ? <Link className='btn  btn-sm me-1' to={`/portal/editbook/${bookdata._id}`}><FontAwesomeIcon icon={faPen} color="#0db4b9" /></Link> : null}
                    {logindata.isLibrarianVisible ? <button className='btn  btn-sm me-1' onClick={() => DeleteBook(bookdata._id)}><FontAwesomeIcon icon={faTrash} color="red" /></button> : null}
                </td>
            </tr>
        </>
    )
}

export default Booklist