import React from 'react';
import UserCard from './UserCard.js';
import MainUser from './MainUser.js';
import styled from 'styled-components';


function UserList(props) {

    //Question: Why is it not centering main user?
    return(
        <CardHolder>
            <MainUser mainUser = {props.mainUser}/>
            <h1>Followers</h1>
            <FollowerHolder>
            {props.followers.map( user => {
                // console.log("User data", user)
                return <UserCard userData = {user}/>
            }
                
                )}

            </FollowerHolder>
            

        </CardHolder>
    )
}

const CardHolder = styled.div`
    text-align: center;
    display: flex:
    flex-direction: column:
    align-items: center;
    color: red;
  
    
`;

const FollowerHolder = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    text-align: center;

`;

export default UserList;