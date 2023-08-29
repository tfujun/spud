import styled from 'styled-components';

interface flexBoxProps {
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

export const FlexBox = styled.div`
    display: flex;
    flex-direction: ${(props: flexBoxProps) => props.flexDirection};
    flex-wrap: ${(props: flexBoxProps) => props.flexWrap};
    justify-content:  ${(props: flexBoxProps) => props.justifyContent};
    align-items: ${(props: flexBoxProps) => props.alignItems};
    min-height: ${(props: flexBoxProps) => props.minHeight};
    max-height: ${(props: flexBoxProps) => props.maxHeight};
    min-width: ${(props: flexBoxProps) => props.minWidth};
    max-width: ${(props: flexBoxProps) => props.maxWidth};
    padding: ${(props: flexBoxProps) => props.padding};
    margin: ${(props: flexBoxProps) => props.margin};
`;