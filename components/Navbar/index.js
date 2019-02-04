import React from 'react';
import styled from 'styled-components';
import {
	display,
	alignItems,
	justifyContent,
	flexWrap,
	flexDirection,
	boxShadow,
	color,
	space,
	borderRadius,
	width,
	height,
} from 'styled-system';

const NavbarStyle = styled.nav`
	display: flex;
	align-items: center;
	min-height: 56px;
	padding: 10px 16px;

	${display} ${alignItems} ${justifyContent} ${flexDirection} ${flexWrap} ${width} ${height} ${color} ${space} ${boxShadow} ${borderRadius};
`;

const Navbar = ({ className, children, navbarStyle, ...props }) => {
	return (
		<NavbarStyle className={className} {...props}>
			{children}
		</NavbarStyle>
	);
};

export default Navbar;
