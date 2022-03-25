import React from "react";
import styled from "styled-components";

import icon_trash from "../assets/black-icons/trash.png";

const ScrollViewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5px; 
`;

const ScrollViewHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  margin : 6px 0px 10px 0px;
`;

const ScrollViewDate = styled.div`
  font-size: 9px;
  font-weight: 300;
  color: white;

  padding : 4px 8px;
  border-radius: 15px;
  background : #93a5b3;
`;

const ScrollViewContent = styled.main`
  display: flex;
  flex-direction: column;

  margin-bottom: 5px;
`;

const ScrollViewListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin : 6px 6px;
`;

const ScrollViewListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  max-width : 225px;

  border-radius : 10px;

  background : #fee30d;
`;

const ScrollViewListItemContentText = styled.div`
  margin : 8px 12px;

  text-align: right;
  font-size: 11px;
  font-weight: 500;
  color: #333333;
`;

const ScrollViewListItemContentDelete = styled.img`
  width : 15px;
  height : 15px;
  margin: 0px 8px;
`;

const ScrollViewListItemDate = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
  margin: 0px 4px;

  font-size: 10px;
  font-weight: 300;
  color: #999999;
`;

const TodoScrollView = (props) => {
  return (
    <ScrollViewWrapper>
      <ScrollViewHeader>
        <ScrollViewDate>Friday, March 25, 2022</ScrollViewDate>
      </ScrollViewHeader>

      <ScrollViewContent>

        <ScrollViewListItem>
          <ScrollViewListItemDate>10:55</ScrollViewListItemDate>
          <ScrollViewListItemContent>
            <ScrollViewListItemContentDelete src={icon_trash} />
            <ScrollViewListItemContentText>
              아주 짧은 일정
            </ScrollViewListItemContentText>
          </ScrollViewListItemContent>
        </ScrollViewListItem>

        <ScrollViewListItem>
          <ScrollViewListItemDate>10:55</ScrollViewListItemDate>
          <ScrollViewListItemContent>
            <ScrollViewListItemContentDelete src={icon_trash} />
            <ScrollViewListItemContentText>
              아주 조금 약간 더 자세한 일정
            </ScrollViewListItemContentText>
          </ScrollViewListItemContent>
        </ScrollViewListItem>

        <ScrollViewListItem>
          <ScrollViewListItemDate>10:55</ScrollViewListItemDate>
          <ScrollViewListItemContent>
            <ScrollViewListItemContentDelete src={icon_trash} />
            <ScrollViewListItemContentText>
              일정 길이를 넘어서 두 줄까지도 넘겨서 표시해야 하는 일정
            </ScrollViewListItemContentText>
          </ScrollViewListItemContent>
        </ScrollViewListItem>

      </ScrollViewContent>
    </ScrollViewWrapper>
  );
};

export default TodoScrollView;
