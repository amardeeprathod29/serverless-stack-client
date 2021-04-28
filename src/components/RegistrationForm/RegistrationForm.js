import React, {useState} from 'react';
function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const [records , setRecords] = useState([]);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const newRecord = {...state, id:new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
    }
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form action="" onSubmit={handleSubmitClick}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       name="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    
          >
                    Register
          </button>
            </form>
        </div>
    )
}
export default RegistrationForm