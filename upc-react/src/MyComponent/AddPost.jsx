
import Axios  from 'axios';
import React, {useState} from 'react';
// import SweetAlert from 'react-bootstrap-sweetalert';

const AddPost = () => {
    const url ="http://localhost:9000/aliens/upost"
    const [books, setBooks] = useState({
        name:"", description:""
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
            name:books.name, description:books.description
            
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
                <label className="form-label">Post Name</label>
                <input value={books.name} onChange={handleInputs} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
            </div>
            <div className="mb-3">
                <label className="form-label">Descriptions</label>
                <input value={books.description} onChange={handleInputs} name="description" type="text" className="form-control" id="exampleInputPassword1"/>
            </div>

            
            <button name="add" type="submit" className="btn btn-primary" >Submit</button>
        </form>
        
        </div>

        
    </>
  )
}

export default AddPost
