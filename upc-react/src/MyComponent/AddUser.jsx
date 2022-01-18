
import Axios  from 'axios';
import React, {useState} from 'react';
// import SweetAlert from 'react-bootstrap-sweetalert';

const AddUser = () => {
    const url ="http://localhost:9000/aliens/"
    const [books, setBooks] = useState({
        firstname:"", lastname:"", from:"", age:""
    });

    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setBooks({...books, [name]:value});
    }

    const submit = (e) =>{
        
        e.preventDefault();
        Axios.post(url, {
            // books
            firstname:books.firstname, lastname:books.lastname, from:books.from, age:books.age
            
        }).then(res=>{
            console.log(res.books)
        })
        
    }

  return (
      <>
      <center><h3>Add new User</h3></center>
      <div className='container' style={{width: '50%'}} id='exampleModal'>
        <form onSubmit={(e)=>submit(e)}>
            <div className='mb-3'>
                <label className="form-label">First Name</label>
                <input value={books.firstname} onChange={handleInputs} name="firstname" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input value={books.lastname} onChange={handleInputs} name="lastname" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">From</label>
                <input value={books.from} onChange={handleInputs} name="from" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label className="form-label">Age</label>
                <input value={books.age} onChange={handleInputs} name="age" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            
            
            <button name="add" type="submit" className="btn btn-primary" >Submit</button>
        </form>
        
        </div>

        
    </>
  )
}

export default AddUser
