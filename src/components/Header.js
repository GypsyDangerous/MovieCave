import StyledHeader from "./Styled components/Header";
import styled from "styled-components";

const HeaderContent = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
`;

const Media = styled.div`
	height: 100%;
	flex: 1;
`;

const LogoContainer = styled.div`
	height: 100%;
    width: 320px;
    background: ${props => props.theme.colors.secondary.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        margin: 0;
    }
`;

const Header = () => {
	return (
		<StyledHeader>
			<HeaderContent>
				<LogoContainer><h1>SMFM</h1></LogoContainer>
				<Media></Media>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
