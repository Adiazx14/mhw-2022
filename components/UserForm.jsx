import { useState } from "react"

const UserForm = ()=> {

    const [name, setName] = useState("")
    const [schoolEmail, setSchoolEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [school, setSchool] = useState("")
    const [major, setMajor] = useState("")
    const [interests, setInterests] = useState("")
    const [terms, setTerms] = useState(false)
    

    return (
        <form id="UserForm">
        <h1>Create your account</h1>
            <div className="form-item">
                <label>Name</label>
                <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" />    
            </div>
            <div className="form-item">
                <label>School Email</label>
                <input onChange={(e)=>{setSchoolEmail(e.target.value)}} value={schoolEmail} type="text" />
            </div>
            <div className="form-item">
                <label>Phone Number</label>
                <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} type="text" />
            </div>
            <div className="form-item">
                <label>School</label>
                <input onChange={(e)=>{setSchool(e.target.value)}} value={school} type="text" />
            </div>
            <div className="form-item">
                <label>Major</label>
                <input onChange={(e)=>{setMajor(e.target.value)}} value={major} type="text" />
            </div>
            <div className="form-item">
                <label htmlFor="">Interests</label>
                <textarea onChange={(e)=>{setInterests(e.target.value)}} value={interests} name="" id="" cols="30" rows="4"></textarea>
            </div>
            <div id="check-container">
                <input onChange={(e)=>{setTerms(e.target.checked)}} checked={terms} type="checkbox" />
                <label htmlFor=""> I agree to the <a href="">terms and conditions.</a></label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default UserForm