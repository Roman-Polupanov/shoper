import styled from 'styled-components';

export const All_container = styled.div``;

export const Cards_container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 6%;
`;

export const Navi_list = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Navi_link = styled.li`
    color: inherit;
    padding-inline: 1em;
    text-decoration: none;
    :hover {
        opacity: 0.7;
      }
`;

export const All_button = styled.li`
display: flex;
    justify-content: space-between;
    padding-left: 50%;
    text-decoration: none;
    color: inherit;
    font-size: larger;
    :hover {
        opacity: 0.7;
      }
`;