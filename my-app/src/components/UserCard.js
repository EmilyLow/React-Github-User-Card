import React from 'react';
import styled from 'styled-components';


function UserCard(props) {

    return(
        <Card>
            Username: {props.userData.login}
        </Card>
    )
}

const Card = styled.h2`
    color: white;
    background-color: red;
    border: 1px grey solid;
`;


export default UserCard;