import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContents = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: ${props => props.theme.colors.orange};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.blue};
`;
const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Card = () => {
  return (
    <StyleCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center"
          alt=""
        />
      </CardImage>
      <CardContents>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/heart.svg" alt="heart" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContents>
    </StyleCard>
  );
};

export default Card;
