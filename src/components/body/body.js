import React from 'react';
import { BodyStyle, PostsStyle, DivR, DivL, Img, ContentStyle, H1, Sub, P, Bar, P2, H2, Button } from './body.styled';

function Body() {

    return (
        <div>
            <BodyStyle>
                <PostsStyle>
                    <div>
                        <div>
                            <p>Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes. Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg</p>
                            <p>- Author Name</p>
                        </div>
                        <p>Posted: Fri Dec 29 19:15:04</p>
                    </div>
                </PostsStyle>
                <ContentStyle>
                    <DivL>
                        <Sub>WHY IT IS IMPORTANT</Sub>
                        <H1>Knowing Your Online Ads Readiness Raiting...</H1>
                        <P>...will help you understand just how bullish you should be with your ad spend and where your blind spots are.<br></br>
                        <br></br>
                        When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).<br></br>
                        <br></br>
                        Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.</P>
                    </DivL>
                    <DivR>
                        <Img src='https://s3-alpha-sig.figma.com/img/1609/9464/7d14f9f912459692b5c48f4c1d25ad82?Expires=1641168000&Signature=G-5EE5Ax5fhTIQvQ-UHkKqzn0cDHq6NeHt1gLh7Nvn23y2NAeMOZEWxLDpHo~X5JK91v71193hTOM5hNRHU5DtnnRN2Sfx2xDn8I-Yzi4NASVwNlzen-1Zk~PZcTssr8ki-Mlavt04w73Yf51E3lynNIFX9DCJNid38FPOoHPL-TJk7qdBTzX3hBoCYsXD~m1GCn4wbZeYL01L4nCxbIl8RbPmj-A~DoGne9rt4oTn259gm9jJqe3sEDWWjO5eKjrre68rQwTbwRbAEJFc~WzSf5gBHLreDFY-m8pN-MMhAm9YQzSK6oLcaO-1Bs9nRpAPg7zHolpu9ZQM6d9IkGZw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
                    </DivR>
                </ContentStyle>
            </BodyStyle>
            <Bar>
                <P2>Find Out YOUR Online Advertising Readiness Rating!</P2>
                <Button type='submit'><H2>START QUIZ</H2></Button>
            </Bar>
        </div>
    );
}

export default Body;