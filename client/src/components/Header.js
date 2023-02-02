import styled from "styled-components"

const StyledDiv = styled.div`
    text-align: center;`

const FancyHeader = styled.h1`
    font-family: 'Sassy Frass';
    font-size: 80px;
    font-weight: bolder;
    color: #FFFACD;
    margin-top:50px;
    padding-top: 50px;`

const StyledH2 = styled.h2`
    color:#FFA07A;
    font-family: 'Cormorant Garamond';
    font-size: 35px;`

const Header = () => {
    return (
    <StyledDiv>
        <FancyHeader>Le Grande Fancy Hotel</FancyHeader>
        <StyledH2>Bookings System</StyledH2>
    </StyledDiv>
)}
export default Header