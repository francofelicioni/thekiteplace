import styled from "styled-components";

const NavContainer = styled.nav`
// heigth: 1200px;
background-color: #242429;
display:flex;
// justify-content:space-between;
align-items:center; 


@media(max-width: 767px) {
justify-content:space-between;
}

a{
    color:black;
    text-decoration: none;
    margin-right: 1rem;
}

.links {
    position: absolute;
    top: -700px;
    left:-2000px;
    margin-left: auto;
    margin-rigth: auto;
    text-align: center;
    
    a {
        color: black;
        font-size: 2rem;
        display: block;
    }

    @media(min-width: 768px) {
        position:initial;
        margin: 0;

        a {
            font-size: 1.4rem;
            color:white;
            display: inline;
            padding-rigth: 10px;
        }
    }
}

.links.active {
    background: white;
    width:100%;
    height:100vh;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-rigth: auto;
    top: 120px;
    left: 0;
    rigth: 0;
    text-align:center;
    color: black;
    z-index: 100;
    a {
        padding: .2rem .5rem;
        color: black;
        font-size: 2.5rem;
        display: block;

        &:first-child {
            padding-top:35px;
        }
    }
}

.burger {
    @media(min-width: 768px) {
        display:none;
    }
}
`
/* const NavContainer = styled.div`
    padding-top:500px;
    width:100%;
` */
const Wrapper = styled.div`
    background: #242429;
    padding:0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content:center;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center; 

    .logo {
        @media(max-width: 768px) {
            display: none;
        }
    }

    .logo-responsive {
        @media(min-width: 767px) {
            display: none;
        }
    }
    
`;

const Center = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center; 
`;

const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center; 
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
`;

export { NavContainer, Center, Left, MenuItem, Right, Wrapper }