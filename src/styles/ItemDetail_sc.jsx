import styled from "styled-components";

const DetailContainer = styled.div`
    height:90vh;

    @media(max-width: 768px) {
        height:100%;
    }
`;

const WrapperDetail = styled.div`
    height:100%;
    display: flex;
    justify-content:space-around;
    align-items:center;
    margin: 20px 0 50px 0;
    @media(max-width: 768px) {
        flex-direction: column;
        justify-content:space-between;
    }
}

`;

const ImgContainer = styled.div`
    flex:1;

    @media(max-width: 768px) {
        padding-top:10%;
    }
    
`;

const ImageDetail = styled.img`
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;

    @media(max-width: 768px) {
        width: 200px;
        height: 200px;
        // object-fit: cover;
    }

`;

const InfoContainer = styled.div`
    flex:1;
    padding: 50px 0px;

    @media(max-width: 768px) {
        flex-direction: column;
        text-align:center;
        padding: 0 2rem;
    }

`;

const PriceContainer = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:center;

    @media(max-width: 768px) {
        flex-direction: column;
    }

`;

const Title = styled.h1`
    // text-align:center;
    font-weight: 50px;
    font-size:3.5rem;

    @media(max-width: 1000px) {
            font-size: 2.5rem;
        }
    }
`;

const Desc = styled.p`
    // text-align:center;
    margin: 20px 0px;
    font-size:1.2rem;
    // font-weight: bold;

    @media(max-width: 768px) {
        width: 80vw;
        margin: 0 auto;
        margin: 1rem 2rem;
        font-size:1rem;
        text-align:center;
        padding:1em;
        // font-weight: bold;
    }
`;

const Units = styled.p`
    // text-align:center;
    margin: 20px 0px;
    font-size:1.2rem;
    font-weight: bold;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

export { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price, PriceContainer, Units }
