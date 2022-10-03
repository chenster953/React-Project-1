import React from "react";
import image from "../components/image.png"

const ContactCard = (props)=> {
    const {id, name, email} = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
    <i className="trash alternate outline icon"
    style={{color:"red", marginTop:"7px"}}
    // onClick function on trash icon
    onClick={()=> props.clickHandler(id)}></i>
  </div>
  )
}

export default ContactCard