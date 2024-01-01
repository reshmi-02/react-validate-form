import React, { useState} from 'react'
// import { useNavigate } from 'react-router-dom'


const Funform = () => {
    let arr = [
        {
            name: "Reshmi-02",
            pwd: "harleyquinn1234"
        },
        {
            name: "Hashini",
            pwd: "harleyquinn"
        },
        {
            name: "Preetha",
            pwd: "535371"
        },
        {
            name: "Vjitha",
            pwd: "rta5353"
        },
        {
            name: "Ganga",
            pwd: "asalajay"
        }

    ]
    const [name, setname] = useState("")
    const [pwd, setpwd] = useState("")
    const [check, setcheck] = useState(false)
    // let loginnav=useNavigate()

    const handle = (e) => {


        if (e.target.name === "usrna") {
            console.log(e.target.value, e.target.name);
            setname(e.target.value)
        }
        else if (e.target.name === "usrpsw") {
            console.log(e.target.value, e.target.name);
            setpwd(e.target.value)
        }

    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(pwd);
        if (name === "" || pwd === "") {
            setcheck(true)
        }
        else{
            let x=false;
            let y=false;
            
            let filter=arr.find((e)=>{
                return e.name===name?e.pwd===pwd?x=true:y=true:""
            })

            if(x===false && y===false){
                alert("wrong username")
            }
            else if(y===true){
                alert("wrong password")
            }
            else if(x===true){
                alert("Login Successful")
                // loginnav("/about")
            }
        }
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>user name</label>
                    <input type="text" onChange={handle} name="usrna" value={name}></input>
                    {name === "" && check ? <p>Enter correct name</p> : ""}

                    
                    
                </div>
                <div>
                    <label >password</label>
                    <input type="password" onChange={handle} name="usrpsw" value={pwd}></input>
                    {pwd === "" && check ? <p>Enter correct password</p> : ""}
                    

                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Funform