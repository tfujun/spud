import React from 'react';
import * as Styled from './styled';

interface buttonProps {
    backgroundColour?: string;
    colour?: string;
    padding?: any;
    textAlign?: string;
    fontSize?: any;
    textDecoration?: any;
    border?: any;
    onClick?: any;
    children?: any;
}

const button : React.FunctionComponent<buttonProps> = (props: buttonProps) => {
    const {colour, backgroundColour, onClick, padding, textAlign, fontSize, textDecoration, border, children} = props;
    return (
        <Styled.button
        onClick={onClick}
        backgroundColor={backgroundColour}
        color={colour}
        padding={padding}
        textAlign={textAlign}
        fontSize={fontSize}
        textDecoration={textDecoration}
        border={border}
        >
            {children}
        </Styled.button>
    )
}

export default button;
