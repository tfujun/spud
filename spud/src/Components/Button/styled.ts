import styled from 'styled-components';

interface buttonProps {
    backgroundColor?: string;
    colour?: string;
    padding?: any;
    textAlign?: any;
    fontSize?: any;
    textDecoration?: any;
    border?: any;
}

export const button = styled.button`
    display: inline-block;
    background-color: ${(props: buttonProps) => props.backgroundColor || 'white'};
    color: ${(props: buttonProps) => props.colour || 'black'};
    padding: ${(props: buttonProps) => props.padding || '15px 32px'};
    text-align: ${(props: buttonProps) => props.textAlign || 'center'};
    font-size: ${(props: buttonProps) => props.fontSize || '16px'};
    text-decoration: ${(props: buttonProps) => props.textDecoration || 'none'};
    
`