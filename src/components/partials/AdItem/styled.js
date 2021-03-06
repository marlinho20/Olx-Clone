import styled from 'styled-components';

export const Item = styled.div`
a {
    display: block;
    border: 1px solid #fff;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transition: all ease .3s;

    &:hover {
        background-color: #eee;
        border: 1px solid #ccc;
    }

    .itemImage {
        width: 100%;
        border-radius: 5px;

        img {
            width: 100%;
        }
    }

    .itemName {
        font-weight: bold;
    }

}
`;