import Grid from '@mui/material/Grid';
import styled from "styled-components";

export const Container = styled(Grid)`
        margin-bottom: 20px;
        border-bottom:  1px solid #e0e0e0; 
        padding-bottom: 20px;

    &:last-child{
        border-bottom:  1px solid none; 
        margin-bottom: 0;
    }
`;

export const Item = styled.div`
    text-align: center;
`;

export const CountInput = styled.div`
    display: flex;
    align-items: center;
`;

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
`;