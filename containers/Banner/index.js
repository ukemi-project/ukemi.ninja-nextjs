import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from './../../components/Box';
import Heading from './../../components/Heading';
import Text from './../../components/Text';
import Container from './../../components/Container';
import ParticlesComponent from './../../components/Particle';
import BannerWrapper, { Bubble, BubbleWrapper } from './banner.style';

const BannerSection = ({ row, title, description, textArea, bubbleHead, bubbleText }) => {
	return (
		<BannerWrapper id="banner-section">
			<ParticlesComponent />
			<Container className="banner-container">
				<Box {...row}>
					<Box {...textArea}>
						<BubbleWrapper>
							<Link to="">
								<Bubble
									as="a"
									href="https://ukemi.ninja/shop/ukemi-card-game-parkour-freerunning-project"
								>
									<Text {...bubbleHead} content="In Stock!" />
									<Text {...bubbleText} content="Click to discover the Ukemi card game" />
								</Bubble>
							</Link>
						</BubbleWrapper>
						<Heading {...title} content="LEARN • PLAY • CREATE" />
						<Text
							{...description}
							content="
              Ukemi promote activity in highly urbanised areas and encourage a healthier society through digital design, product creation, and community arts development."
						/>
					</Box>
				</Box>
			</Container>
		</BannerWrapper>
	);
};

BannerSection.propTypes = {
	row: PropTypes.object,
	title: PropTypes.object,
	description: PropTypes.object,
	textArea: PropTypes.object,
	bubbleHead: PropTypes.object,
	bubbleText: PropTypes.object,
};

BannerSection.defaultProps = {
	row: {
		flexBox: true,
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: ['26px', '32px', '42px', '46px', '55px'],
		fontWeight: '400',
		color: '#0f2137',
		letterSpacing: '-0.025em',
		mb: ['20px', '25px', '25px', '25px', '25px'],
		lineHeight: '1.31',
		textAlign: 'center',
	},
	description: {
		fontSize: ['15px', '16px', '16px', '16px', '16px'],
		color: '#343d48cc',
		lineHeight: '1.75',
		mb: '0',
		textAlign: 'center',
	},
	textArea: {
		width: ['100%', '100%', '90%', '100%', '55%'],
	},
	bubbleHead: {
		fontSize: ['13px', '14px', '14px', '14px', '14px'],
		fontWeight: '600',
		color: 'green',
		mb: 0,
		as: 'span',
		mr: '0.4em',
	},
	bubbleText: {
		fontSize: ['13px', '14px', '14px', '14px', '14px'],
		fontWeight: '400',
		color: '#0f2137',
		mb: 0,
		as: 'span',
	},
};

export default BannerSection;
