import styled from 'styled-components';

export const Good_image = styled.img`
  :hover {
    transform: scale(1.1);
  }
`;

export const Good_name = styled.div``;

export const Good_price = styled.div`
`;
export const Buy_it = styled.button`

  background-color: rgb(255, 185, 72);
  border: none;
  cursor: pointer;
`;

export const Cards_container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 6%;
`;
export const Card_uno = styled.div`
  box-shadow: 15px 15px 15px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  margin: 80px;
  text-align: center;
  word-break: break-all;
  padding: 10px;
  min-height: 50px;
`;

export const Like_it = styled.button`
  background-color: rgb(255, 185, 72);
  border: none;

  text-decoration: none;
  cursor: pointer;
  :hover {
    color: rgb(199, 14, 255);
  }
`;

export const Button_price = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 185, 72);
  word-break: break-all;
  width: 100%;
`;
