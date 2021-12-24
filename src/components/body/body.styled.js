import styled from 'styled-components';

export const BodyStyle = styled.div`
    @media (min-width: 1440px) {
        background-color: #E5E5E5;
        padding: 0 90px 0 90px;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        background-color: #E5E5E5;
        padding: 0 85px 0 85px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        background-color: #E5E5E5;
        padding: 0 75px 0 75px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        background-color: #E5E5E5;
        padding: 0 35px 0 35px;
    }

    @media (max-width: 374px) {
        background-color: #E5E5E5;
        padding: 0;
    }
`;

export const PostsStyle = styled.div`
    @media (min-width: 1440px) {
        background-color: #6424FF;
        height: 770px;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        background-color: #6424FF;
        height: 770px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        background-color: #6424FF;
        height: 360px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        background-color: #6424FF;
        height: 860px;
    }

    @media (max-width: 374px) {
        background-color: #6424FF;
        height: 800px;
    }
`;

export const ContentStyle = styled.div`
    @media (min-width: 1440px) {
        height: 630px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-top: 40px;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        height: 630px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-top: 40px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        height: 390px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-top: 40px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        height: 320px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-top: 18px;
    }

    @media (max-width: 374px) {
        height: 870px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-top: 8px;
        padding: 0 20px 0 20px;
    }
`;

export const DivR = styled.div`
    @media (min-width: 1440px) {
        height: 550px;
        width: 50%; 
        float:right;
        text-align: right;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        height: 550px;
        width: 50%; 
        float:right;
        text-align: right;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        height: 350px;
        width: 50%; 
        float:right;
        text-align: right;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        height: 300px;
        width: 50%; 
        float:right;
        text-align: right;
    }

    @media (max-width: 374px) {
        height: 520px;
        text-align: right;
        margin-top: 150px;
    }
`;

export const DivL = styled.div`
    @media (min-width: 1440px) {
        height: 550px;
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 0 25px 0 0;
        margin: 0;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        height: 550px;
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 0 25px 0 0;
        margin: 0;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        height: 350px;
        width: 70%;
        display: flex;
        flex-direction: column;
        padding: 0 25px 0 0;
        margin: 0;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        height: 300px;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 0 25px 0 0;
        margin: 0;
    }

    @media (max-width: 374px) {
        height: 350px;
        display: flex;
        flex-direction: column;
        padding: 0 25px 0 0;
        margin: 0;
    }
`;

export const Img = styled.img`
    @media (min-width: 1440px) {
        width: 90%;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        width: 90%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        width: 90%;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        width: 100%;
    }

    @media (max-width: 374px) {
        width: 100%;
    }
`;

export const H1 = styled.h1`
    @media (min-width: 1440px) {
        font-size: 50px;
        margin: 10px 0 10px 0;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 35px;
        margin: 10px 0 10px 0;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 25px;
        margin: 10px 0 10px 0;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        font-size: 13px;
        margin: 10px 0 10px 0;
    }

    @media (max-width: 374px) {
        font-size: 20px;
        margin: 8px 0 8px 0;
        text-align: center;
    }
`;

export const Sub = styled.p`
    @media (min-width: 1440px) {
        font-size: 17px;
        letter-spacing: 2px;
        margin: 70px 0 0 0;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 12px;
        letter-spacing: 2px;
        margin: 30px 0 0 0;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 9px;
        letter-spacing: 2px;
        margin: 20px 0 0 0;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        font-size: 9px;
        letter-spacing: 2px;
        margin: 10px 0 0 0;
    }

    @media (max-width: 374px) {
        font-size: 14px;
        letter-spacing: 2px;
        margin: 20px 0 0 0;
        text-align: center;
    }
`;

export const P = styled.p`
    @media (min-width: 1440px) {
        font-size: 17px;
        letter-spacing: 2px;
        margin: 20px 0 0 0;
        line-height : 30px;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 14px;
        letter-spacing: 2px;
        margin: 7px 0 0 0;
        line-height : 20px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 11px;
        letter-spacing: 2px;
        margin: 2px 0 0 0;
        line-height : 15px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        font-size: 9px;
        margin: 2px 0 0 0;
        line-height : 10px;
    }

    @media (max-width: 374px) {

    }
`;

export const Bar = styled.div`
    @media (min-width: 1440px) {
        background-color: #6424FF;
        height: 110px;
        text-align: center;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        background-color: #6424FF;
        height: 110px;
        text-align: center;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        background-color: #6424FF;
        height: 90px;
        text-align: center;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        background-color: #6424FF;
        height: 100px;
        text-align: center;
    }

    @media (max-width: 374px) {
        background-color: #6424FF;
        height: 180px;
        text-align: center;
        padding-top: 20px
    }
`;

export const P2 = styled.p`
    @media (min-width: 1440px) {
        color: white;
        font-size: 33px;
        letter-spacing: 2px;
        margin: 0px;
        text-align: center;
        padding: 25px 0 10px 0;
        font-weight: 500; 
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        color: white;
        font-size: 33px;
        letter-spacing: 2px;
        margin: 0px;
        text-align: center;
        padding: 25px 0 10px 0;
        font-weight: 500; 
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        color: white;
        font-size: 25px;
        letter-spacing: 2px;
        margin: 0px;
        text-align: center;
        padding: 21px 0 10px 0;
        font-weight: 400;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        color: white;
        font-size: 18px;
        letter-spacing: 2px;
        margin: 0px;
        text-align: center;
        padding: 18px 0 10px 0;
        font-weight: 400;
    }

    @media (max-width: 374px) {
        color: white;
        font-size: 18px;
        letter-spacing: 1px;
        margin: 0px;
        text-align: center;
        padding: 18px 10px 10px 10px;
        font-weight: 500;
    }
`;

export const Button = styled.button`
    @media (min-width: 1440px) {
        background-color: #06F48A;
        border: none;
        width: 25%;
        height: 70px;
        color: white;
        padding: 10px 0 10px 0;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        background-color: #06F48A;
        border: none;
        width: 25%;
        height: 70px;
        color: white;
        padding: 10px 0 10px 0;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        background-color: #06F48A;
        border: none;
        width: 25%;
        height: 60px;
        color: white;
        padding: 10px 0 10px 0;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        background-color: #06F48A;
        border: none;
        width: 25%;
        height: 60px;
        color: white;
        padding: 10px 0 10px 0;
    }

    @media (max-width: 374px) {
        background-color: #06F48A;
        border: none;
        width: 95%;
        height: 70px;
        color: white;
        padding: 0;
        margin-top: 10px;
    }
`;

export const H2 = styled.h2`
    @media (min-width: 1440px) {
        color: white;
        font-size:32px;
        padding: 0px;
        margin: 0px;
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        color: white;
        font-size:32px;
        padding: 0px;
        margin: 0px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        color: white;
        font-size:25px;
        padding: 0px;
        margin: 0px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        color: white;
        font-size:17px;
        padding: 0px;
        margin: 0px;
    }

    @media (max-width: 374px) {
        color: white;
        font-size:32px;
        padding: 0px;
        margin: 0px;
    }
`;