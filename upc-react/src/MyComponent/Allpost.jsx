import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Allpost = () => {
    const [user, setUser] = useState([]);
    const getUser = async() =>{
        const response = await axios.get('http://localhost:9000/aliens/upost');
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

        <center><h3>All Post</h3></center>
        <table className='table'>
        <thead>
            <tr>
            
            <th scope="col">Name</th>
            <th scope="col">Descriptions</th>
           

            </tr>
        </thead>
        <tbody>
        {
            user.map((curElem) =>{
                return(
                    <tr>
                    <td>{curElem.name}</td>
                    <td>{curElem.description}</td>
                    </tr>

                    
                    // <td> <Link to=""className="fas fa-trash-alt" style={{margin:"25px"}}></Link>
                    // <Link to=""className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{margin:"25px"}}></Link>
                    // {/* <Link to="/addpost" class="fas fa-plus-square"></Link> */}</td>
                    // <td><Link to="/addpost" className="nav-link" >Add Post</Link></td>
                    // <td><Link to="/allpost" className="nav-link" >All Post</Link></td>

                    // <td> <Link to="" onClick={()=>selectBook(curElem._id)} className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#exampleModal1"></Link></td>
                    // <td> <Link to=""className="fas fa-trash-alt" ></Link></td>
                    
                )
            })
        }
            
        </tbody>
        </table>


        
        </>
  )
}

export default Allpost
