import React from 'react';
import styled from "styled-components";

const StyledCardList = styled.div `
    display: grid;
    padding: 30px;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
`
const CardList = (props) => {
    return (
        <StyledCardList>
            {props.children}
        </StyledCardList>
    );
};

export default CardList;