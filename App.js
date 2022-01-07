
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App(){
  return(

    <div className="container-fluid m-0 p-0">
        <Header/>

        <Contains/>

    </div>
  );
}

function Header() {
  const [title, settitle] = useState("MyChatApp")
  const [id, setid] = useState("210940520083")
  const [name, setname] = useState("Sai Rane")

function Contains(){
  const send=async ()=>{
    if(msg==""){
      alert("Empty Message..")
      return;
    }

    const url="https://localhost:4000/send"
    const data={
      msg: msg
    }
    await axios.post(url,data)
    setmsg("")
    alert("sent")
  }

  const [msg,setmsg]=useState("")
  const msgHandler= (event)=>{

    setmsg(event.target.value)
  }

  return (
    <>
      <div
        className="container-fluid row bg-info m-0 p-0 align-items-center "
        style={{ height: "50px" }}
      >
        <div className="col">
          <div>
            <span className="fw-bold text-light" style={{}}>
              {title}
            </span>
            <span className="text-light" style={{ fontSize: "10px" }}>
              by {name}
            </span>
            <span className="text-light" style={{ fontSize: "10px" }}>
              id: {id}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}