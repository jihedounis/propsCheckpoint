import React from 'react';
import PropTypes from "prop-types";
import './Profile.css'

const Profile = (props) =>{
    Profile.propTypes ={
        name : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string,
        src : PropTypes.string,
    };
    alert('Hi'.concat(' ',props.fullName));
    return (
        <>
<div className='boxProfile'>
        <h1 >{props.fullName}</h1>
        <h1 className='bioProfile'>{props.bio}</h1>
        <h1 className='proProfile'>{props.profession}</h1>
        <div className="newdiv"><img className="image" src={props.src} alt="child"/>{props.children}</div>
 </div>       
        </>
    );
}


Profile.defaultProps = {fullName :'Jihed Ounis',bio:'Student',profession:'Graphic designer',src:'./photo.jpg'};
export default Profile;

