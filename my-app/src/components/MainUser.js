import React from 'react';
import styled from 'styled-components';


function MainUser(props) {
    console.log("Main Card Props", props);
    return(
        <Card>
            <p>Username: {props.mainUser.login}</p>
            <p>Name: {props.mainUser.name}</p>
            <p>Bio: {props.mainUser.bio}</p>
            <p>Followers: {props.mainUser.followers}</p>
            <p>Following: {props.mainUser.following}</p>
    
        </Card>
    )
}

const Card = styled.h2`
    color: red;
    background-color: white;
    border: 1px red solid;
    width: 500px;
    padding: 20px;
    text-align: center;
`;


export default MainUser;