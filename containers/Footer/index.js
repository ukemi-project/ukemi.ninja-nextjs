import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../../components/Box';
import Container from '../../components/Container';
import Text from '../../components/Text';

// Import Heading from 'reusecore/src/elements/Heading';
// import Logo from 'reusecore/src/elements/UI/Logo';

import FooterWrapper, { List, ListItem } from './footer.style';

// Import LogoImage from '../../../static/image/hosting/logo.png';

// import { FOOTER_WIDGET } from '../../../data/Hosting/data';

const Footer = ({ row, col, colOne, colTwo, titleStyle, logoStyle, textStyle }) => {
	return (
		<FooterWrapper>
			<Container className="footer-container">
				<Box className="row" {...row}>
					<Box {...colOne}>
						{/* <Logo href="#" logoSrc={LogoImage} title="Hosting" logoStyle={logoStyle} /> */}
						<Text content="hello@isomorphic.com" {...textStyle} />
						<Text content="+97 0267 5923" {...textStyle} />
					</Box>
				</Box>
			</Container>
		</FooterWrapper>
	);
};

// Footer style props
Footer.propTypes = {
	row: PropTypes.object,
	col: PropTypes.object,
	colOne: PropTypes.object,
	colTwo: PropTypes.object,
	titleStyle: PropTypes.object,
	textStyle: PropTypes.object,
	logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
	// Footer row default style
	row: {
		flexBox: true,
		flexWrap: 'wrap',
		ml: '-15px',
		mr: '-15px',
	},
	// Footer col one style
	colOne: {
		width: [1, '35%', '35%', '23%'],
		mt: [0, '13px'],
		mb: ['30px', 0],
		pl: ['15px', 0],
		pr: ['15px', '15px', 0],
	},
	// Footer col two style
	colTwo: {
		width: ['100%', '65%', '65%', '77%'],
		flexBox: true,
		flexWrap: 'wrap',
	},
	// Footer col default style
	col: {
		width: ['100%', '50%', '50%', '25%'],
		pl: '15px',
		pr: '15px',
		mb: '30px',
	},
	// Widget title default style
	titleStyle: {
		color: '#343d48',
		fontSize: '16px',
		fontWeight: '700',
		mb: '30px',
	},
	// Default logo size
	logoStyle: {
		width: '130px',
		mb: '15px',
	},
	// Widget text default style
	textStyle: {
		color: '#0f2137',
		fontSize: '16px',
		mb: '10px',
	},
};

export default Footer;
