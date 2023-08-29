import React from 'react';
import * as Styled from './styled';

interface FlexBoxProps {
    children?: any;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    minHeight?: string;
    maxHeight?: string;
    minWidth?: string;
    maxWidth?: string;
    padding?: string;
    margin?: string;
}

const FlexBox: React.FunctionComponent<FlexBoxProps> = (props: FlexBoxProps) => {
    const { children, flexDirection, flexWrap, justifyContent, alignItems, minHeight, maxHeight, minWidth, maxWidth, padding, margin } = props;

    return(
        <Styled.FlexBox
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            minHeight={minHeight}
            maxHeight={maxHeight}
            minWidth={minWidth}
            maxWidth={maxWidth}
            padding={padding}
            margin={margin}>
                {children}
        </Styled.FlexBox>
    );
};

export default FlexBox;