import styled from "styled-components";

const NavContainer = styled.nav`
    background-color: #242429;
    display:flex;
    justify-content:space-between;
    align-items:center; 
   
    a{
        // color:black;
        text-decoration: none;
        margin-right: 1rem;
    } 

    .links {
        position: absolute;
        top: -700px;
        left:-2000px;
        right:0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
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
                padding-right: 10px;
            }
        }
    }

.links.active {

    @media(max-width: 768px) {
        background-color: #222; 
        position: absolute;
        top: 130px;
        left: 0;
        width:100%;
        height:100%;
        display: block;
        margin-left: auto;
        margin-rigth: auto;
        rigth: 0;
        text-align:center;
        transition: all .6s ease;
        // color: black;
        z-index: 100;
        a {
            // padding: .2rem .5rem;
            color: white;
            font-size: 2rem;
            margin-top: 1rem;
            display: block;

            &:first-child {
                padding-top:35px;
            }
        }

        &.active {
            border-radius: 0 0 80% 0;
            top:130px;
            left:0;
            width: 100%;
            height:100%;
        }
    }

    @media(max-width: 568px) {
        
        top: 100px;
        
        &.active {
            top:100px;
        }
    }
}

.burger {
    @media(min-width: 768px) {
        display:none;
    }
}
`

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
    justify-content: left; 

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
    justify-content: right; 
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
`;

export { NavContainer, Center, Left, MenuItem, Right, Wrapper }