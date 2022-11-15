import React, { Component } from 'react'
import { useState } from 'react'
import {allUsers} from '../../services/allUsers'
import DataTable from 'react-data-table-component'
import { Link, useNavigate } from 'react-router-dom';
import ProductDetail from '../productDetail/productDetail';
import EditProduct from './editProduct';


const Admin = ({navigation}) => {
    const [data, setData] = useState(allUsers);
    const [popUp, setPopUP] = useState(false);
    const navigate = useNavigate();

    const togglePopUp = () => {
        setPopUP(!popUp);
    }

    const componentChange = (username) => {
        <Link to={`/editproduct/${username}`}></Link>
        navigate(`/editproduct/${username}`, {replace:true})
    }

    const columns = [
        {
            name: "Id",
            selector: "id",
            sortable: true
        },
        {
            name: "Email",
            selector: "email",
            sortable: true
        },
        {
            name: "Username",
            selector: "username",
            sortable: true,
            right: true
        },
        {
            name: "Password",
            selector: "password",
            sortable: true,
            right: true
        },
        {
            name: "Actions",
            button: true,
            cell: (row) => (
                <button
                    className="btn btn-outline btn-xs"
                    onClick={()=>componentChange(row.username)}> Edit
                </button>
            )
        }
    ]

    return ( <div className="p-5">

        <div className='users'>
            <DataTable 
                title="Users"
                columns={columns}
                data={data}
                defaultSortField="title"
                pagination
            />
        </div>

    </div> );
}
 
export default Admin;