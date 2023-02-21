import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface ButtonProps {
    theme:DefaultTheme;
}

const Button = styled.button<ButtonProps>`
    padding: 10px;
    border:none;
    border-radius: 5px;
    background-color: ${({theme})=>theme.colors.lightestColor};
    color: ${({theme})=>theme.colors.darkestColor};

`;

export default Button;