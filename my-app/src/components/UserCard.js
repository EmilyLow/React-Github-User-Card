import React from 'react';
import styled from 'styled-components';


function UserCard(props) {
    

    return(
        <Card>
           {props.userData.login}
        </Card>
    )
}

const Card = styled.h2`
   
    color: white;
    background-color: red;
    border: 1px grey solid;
    height: 40px;
    margin: 8px;
    padding: 16px;
    width: 220px;
    text-align: center;
`;


export default UserCard;