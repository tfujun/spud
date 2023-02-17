import React from 'react';
import * as Styled from './styled';

interface buttonProps {
    textColour?: string;
    backgroundColour?: string;
    onClick?: any;
    width?: any;
    height?: any;
    padding?: any;
    text?: any;
    children?: any;
}

const button : React.FunctionComponent<buttonProps> = (props: buttonProps) => {
    const {textColour, backgroundColour, onClick, width, height, padding, text, children} = props;
    return (
        <Styled.button
        onClick={onClick}
        >
            {children}
        </Styled.button>
    )
}

export default button;
