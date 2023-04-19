import React, {useState} from 'react'

const From = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const formulario = (evento) => {
        evento.preventDefault();

    }

    return (
        <div>
            <div>
                <form onSubmit={formulario}  >
                    <div className="formGroup">
                        <label htmlFor="FirstName">First Name: </label>
                        <input onChange={(evento) => setFirstName (evento.target.value) } type="text" id="firstName"/>
                    </div>
                    {(FirstName.length < 2 && FirstName !== "") ? <p className = 'littleText'>Frist Name must be at least 2 character</p> : null}
                    
                    <div className="formGroup">
                        <label htmlFor="LastName">Last Name: </label>
                        <input onChange={(evento) => setLastName (evento.target.value) } type="text" id="lastName"/>
                    </div>
                    {(LastName.length < 2 && LastName !== "") ? <p className = 'littleText'>Last Name must be at least 2 character</p> : null}
                    
                    <div className="formGroup">
                        <label htmlFor="Email">Email: </label>
                        <input onChange={(evento) => setEmail (evento.target.value) } type="email" id="email"/>
                    </div>
                    {(Email.length < 5 && Email !== "") ? <p className = 'littleText'>Email must be at least 5 character</p> : null}

                    <div className="formGroup">
                        <label htmlFor="Password">Password: </label>
                        <input onChange={(evento) => setPassword (evento.target.value) } type="password" id="inputPassword"/>
                    </div>
                    {(Password.length < 8 && Password !== "") ? <p className = 'littleText'>Password must be at least 8 character</p> : null }

                    {(ConfirmPassword.length < 8 && ConfirmPassword !== "") ? <p className = 'littleText'>Password must be at least 8 character</p> : null }
                    <div className="formGroup">
                        <label htmlFor="ConfirmPassword" >Confirm Password: </label>
                        <input onChange={(evento) => setConfirmPassword (evento.target.value) } type="password" id="confirmPassword"/>
                    </div>
                </form>
            </div>
            <br />
        </div>
    )

}

export default From;