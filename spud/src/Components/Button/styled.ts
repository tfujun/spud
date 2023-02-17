import styled from 'styled-components';

interface buttonProps {
    colour: string;
}

export const button = styled.button`
    display: inline-block;
    color: ${(props: buttonProps) => props.colour || 'black'};
    background-color: 'white';
`