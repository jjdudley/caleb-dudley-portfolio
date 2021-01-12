import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";


let HeaderContainer = styled.div`
    display: flex;
    margin: 0;
    width: 100%;
    justify-content: space-between; 
`;

let HeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    
`

let HeaderRight = styled.div`
    display: flex;
    flex-direction: column;
`


const Header = () => (
    <HeaderContainer>
        <HeaderLeft><Link>Home</Link></HeaderLeft>
        <HeaderRight><Link>Archive</Link><Link>Fine Art</Link></HeaderRight>
    </HeaderContainer>
  );

  export default Header;