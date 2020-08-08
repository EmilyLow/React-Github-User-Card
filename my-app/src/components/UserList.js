import React from 'react';
import UserCard from './UserCard.js';
import styled from 'styled-components';


function UserList(props) {

    return(
        <CardHolder>
            <h1>Followed User: Name Here</h1>
            {props.gitUsers.map( user => {
                console.log("User data", user)
                return <UserCard userData = {user}/>
            }
                
                )}

        </CardHolder>
    )
}

const CardHolder = styled.h2`
    color: red;
    
`;

export default UserList;