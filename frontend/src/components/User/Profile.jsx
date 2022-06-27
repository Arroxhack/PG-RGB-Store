import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserProfile } from "../../redux/actions/index";

function Profile() {
    const dispatch = useDispatch();
    let { username } = useParams();
    
    useEffect(() => {
        dispatch(getUserProfile(username));
      }, []);

      const userProfile = useSelector((state) => state.profile);
      
  return (
    <div>
        {userProfile.image? <img src={userProfile.image} height='400px'
                width='400px'/>: null}
        <img />
       
        <p>{userProfile.name}</p>
        <p>{userProfile.lastname}</p>
        <p>{userProfile.username}</p>
        <p>{userProfile.email}</p>
        <p>{userProfile.address}</p>
        <p>{userProfile.cellphone}</p>
        <Link to={`/profile/edit/${userProfile.username}`}>
            <button>Editar</button>
        </Link>
    </div>
  )
}

export default Profile