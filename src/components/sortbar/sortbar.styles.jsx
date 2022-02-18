import styled from 'styled-components';

export const Sortbar_cont = styled.div`
    `;

export const Sort = styled.div`
    color: #000000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    background-color:  rgb(255, 185, 72);
    :hover {color: rgb(199, 14, 255);}
    `;

export const Dropbtn_content = styled.div`
    color: #000000;
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
    :hover {display: block;};
    `;

export const Dropbtn = styled.button`
    background-color: rgb(255, 185, 72);
    color: #000000;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    :hover {display: block;};
    `;

export const Dropdown = styled.div`
    padding-right: 50px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    &:hover ${Dropbtn} {background-color: rgb(255, 185, 72);}
    &:active ${Dropbtn_content} {display: block;}
    `;

export const All_button = styled.div`
    padding-left: 50%;
    text-decoration: none;
    color: inherit;
    font-size: larger;
    :hover {
    opacity: 0.7;
    }
`;

export const Sort_cont = styled.div`
    display: flex;
    justify-content: space-between;
`;