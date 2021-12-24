import styled from 'styled-components';

export const FooterStyle = styled.div`
    @media (min-width: 1440px) { 
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 110px 20px 30px 20px;
        background-color: #E5E5E5;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 70px 20px 15px 20px;
        background-color: #E5E5E5;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 50px 20px 10px 20px;
        background-color: #E5E5E5;
    }

    @media (max-width: 374px) {
        display: flex;
        text-align: right;
        height: 70px;
        background-color: #6424FF;
        align-items: center;
        margin-top: 16px;
    }
`;

export const P1 = styled.p`
    @media (min-width: 1440px) { 
        width: 100%;
        font-size: 14px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        font-size: 10px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        width: 100%;
        font-size: 10px;
    }

    @media (max-width: 374px) {
        
        font-size: 18px;
        color: white;
        padding: 0 30px 0 120px;
        align-items: center;
    }
`;

export const P2 = styled.p`
    @media (min-width: 1440px) { 
        width: 100%;
        text-align: center;
        font-size: 14px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        text-align: center;
        font-size: 10px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        width: 100%;
        text-align: center;
        font-size: 10px;
    }

    @media (max-width: 374px) {
        display: none;
    }
`;

export const P3 = styled.p`
    @media (min-width: 1440px) {    
        width: 100%;
        text-align: right;
        font-size: 14px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        text-align: right;
        font-size: 10px;
    }

    @media (min-width: 375px) and (max-width: 767px) {
        width: 100%;
        text-align: right;
        font-size: 10px;
    }

    @media (max-width: 374px) {
        display: none;
    }
`;