import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Show = () => {
    const [user, setUser] = useState([]);
    const getUser = async() =>{
        const response = await axios.get('http://localhost:9000/aliens/');
        const data = await response.data;
        // console.log(data)
        setUser(data);

    }

    console.log(user)

    useEffect(() => {
        getUser();
        
    }, []);


    
  return (
    <>

        <center><h3>List of all Users</h3></center>
        <table className='table'>
        <thead>
            <tr>
            
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">From</th>
            <th scope="col">Age</th>
            <th scope="col">Operations</th>

            </tr>
        </thead>
        <tbody>
        {
            user.map((curElem) =>{
                return(
                    <tr>
                    <td>{curElem.firstname}</td>
                    <td>{curElem.lastname}</td>
                    <td>{curElem.from}</td>
                    <td>{curElem.age}</td>

                    
                    <td> <Link to=""className="fas fa-trash-alt" style={{margin:"25px"}}></Link>
                    <Link to=""className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{margin:"25px"}}></Link>
                    {/* <Link to="/addpost" class="fas fa-plus-square"></Link> */}</td>
                    <td><Link to="/addpost" className="nav-link" >Add Post</Link></td>
                    <td><Link to="/allpost" className="nav-link" >All Post</Link></td>

                    {/* <td> <Link to="" onClick={()=>selectBook(curElem._id)} className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal1"></Link></td>
                    <td> <Link to=""className="fas fa-trash-alt" ></Link></td> */}
                    </tr>
                )
            })
        }
            
        </tbody>
        </table>


        
        </>
  )
}

export default Show
