import React, { useContext } from 'react';
import Link from 'next/link';
import NavbarWrapper from '../../components/Navbar';
// Import Drawer from '../../components/Drawer';
// import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Box from '../../components/Box';
// Import HamburgMenu from '../../components/HamburgMenu';
import Container from '../../components/Container';
// Import { DrawerContext } from '../../../contexts/DrawerContext';

// import { MENU_ITEMS } from '../../../data/Hosting/data';
// import ScrollSpyMenu from '../../../components/ScrollSpyMenu';

import LogoImage from '../../static/img/logo.png';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
	// Const { state, dispatch } = useContext(DrawerContext);

	// // Toggle drawer
	// const toggleHandler = () => {
	// 	dispatch({
	// 		type: 'TOGGLE',
	// 	});
	// };

	return (
		<NavbarWrapper {...navbarStyle}>
			<Container>
				<Box {...row}>
					<Logo href="#" logoSrc={LogoImage} title="Agency" logoStyle={logoStyle} />
					<Box {...menuWrapper}>
						{/* <ScrollSpyMenu className="main_menu" menuItems={MENU_ITEMS} offset={-70} /> */}
						<Link href="#">
							<a className="navbar_button">{/* <Button {...button} title="BUY NOW" /> */}</a>
						</Link>
						{/* <Drawer
							width="420px"
							placement="right"
							drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
							open={state.isOpen}
							toggleHandler={toggleHandler}
						>
							<ScrollSpyMenu className="mobile_menu" menuItems={MENU_ITEMS} drawerClose offset={-100} /> */}
						<Link href="#">
							<a className="navbar_drawer_button">{/* <Button {...button} title="BUY NOW" /> */}</a>
						</Link>
						{/* </Drawer> */}
					</Box>
				</Box>
			</Container>
		</NavbarWrapper>
	);
};

export default Navbar;
