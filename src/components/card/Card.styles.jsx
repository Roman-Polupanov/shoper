import styled from 'styled-components';

export const Good_image = styled.img`
    :hover {
    transform: scale(1.2);
  }`;

export const Good_name = styled.div``;

export const Good_price = styled.div``;

export const Cards_container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 6%;
`;
export const Card_uno = styled.div`
    box-shadow: 15px 15px 15px 10px rgba(0, 0, 0, 0.2);
    width: 350px;
    margin: 100px;
    text-align: center;
    word-break: break-all;
    padding: 10px;
    min-height: 50px;
    
`;

export const Price = styled.div`
    color: rgb(226, 5, 255);
    padding: 15px;
    text-decoration: none;
    :hover {
    color: rgb(19, 0, 22);
    }
`;

export const Button_price = styled.div`
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 180, 60);
    word-break: break-all;
    width: 100%;
`;