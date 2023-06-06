import styled from 'styled-components';

export const Actions = styled.div`
    margin-top: 24px;

    button, button:hover {
        border-color: #000;
    }

    button:first-child{
        color: #000;
        margin-right: 16px;
    }

    button:last-child{
        background-color: #000;
    }
`;

export const ImageZoom = styled.div`
    width: 500px;
    background-repeat: no-repeat;

    &:hover img {
        opacity: 0;
    }
  
    img {
        display: block;
        width: 100%;
        pointer-events: none;
    }
`;
