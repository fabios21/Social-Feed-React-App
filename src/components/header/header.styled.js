import styled from 'styled-components';

export const HeaderStyle = styled.div`
    background-color: #6424FF;
    height: 770px;
    margin-bottom: 150px;
`;

export const DivL = styled.div`
    background-color: #6424FF;
    height: 770px;
    display: flex;
    flex-direction: column;
    padding: 0 100px 0 100px;
    @media (max-width: 1366px) {
        padding: 0 70px 0 70px;
    }
    @media (max-width: 720px) {
        padding: 0 40px 0 40px;
    }
`;

export const DivR = styled.div`
    height: 770px;
    width: 50%; 
    float:right;
    text-align: right;    
    background-repeat:no-repeat;
    background-size: cover;
    background-image: url('https://s3-alpha-sig.figma.com/img/a521/61d6/5de81ce42749719abd261d8ef2885b07?Expires=1641168000&Signature=SUGayIScvTg~UYDqIRV8lc1MvBQqq3UIiJLIGGC9iDpTXWXDgBmVytdN0SxGEYBlO3Nt88CVNEuloBK~O-HF9ToYxMVL~o5FaqA7hd~6L3gWDFYNm-7Jb3Opgyeg7FHX754SYOiWsOfk8Hs~BBw-SEMYHB4AAIeenDbpfbzVUYB~EoIUe9d1Ix6ip9YewE82mPys021myjuSW5mmKdThWQ56T4ancYYGe9iuwlwaEg9F3osDfFv~4-sk2GDhl8m2YwGo1n7cAUTTrHOG0y4iNI2vITT519El0j~9a1PD6JvToecxvDY~Kx5198jnKbiGJ15LWKi4sf3jYPF3P1n90w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
`;

export const Logo = styled.div`
    color: white;
    margin: 25px 0 50px 0;
    width: 10%;
`;

export const Img = styled.img`
    width: 100px;
`;

export const H1 = styled.h1`
    color: white;
    font-size: 53px;
    padding: 0px;
    margin: 0px;
    @media (max-width: 1366px) {
        font-size: 23px;
    }
    @media (max-width: 720px) {
        font-size: 13px;
    }
`;

export const H2 = styled.h2`
    color: white;
    font-size:32px;
    padding: 0px;
    margin: 0px;
`;

export const H3 = styled.p`
    color: white;
    font-size: 15px;
    padding: 0px;
    margin: 0px;
    letter-spacing: 3px;
`;

export const H2black = styled.h2`
    color: #333333;
    font-size: 20px;
    padding: 0px;
    margin: 0px;
`;

export const P = styled.p`
    color: white;
    font-size: 20px;
`;

export const Button = styled.button`
    background-color: #06F48A;
    border: none;
    width: 70%;
    height: 70px;
    color: white;
    padding: 10px 0 10px 0
`;

export const Button2 = styled.button`
    background-color: white;
    border: none;
    width: 30%;
    height: 50px;
    margin: 30px 90px 0 0;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: none;
    width: 100%;
    height: 50px;
    color: white;
    padding: 50px 0 50px 0;
    justify-content: center;
    background-color: #E5E5E5;
`;

export const Module = styled.img`
    border: none;
    width: 165px;
    color: white;
    padding: auto;
    background-repeat:no-repeat;
    background-size: cover;
    margin: 0 50px 0 50px;
    filter: grayscale(1);
`;