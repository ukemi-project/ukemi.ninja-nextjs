import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../theme';
import { ResetCSS } from '../static/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/index.style';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sticky from 'react-stickynode';
import BannerSection from '../containers/Banner';
// Import Navbar from '../containers/Navbar';
// Import { DrawerProvider } from '../contexts/DrawerContext';

const Home = () => {
	return (
		<ThemeProvider theme={mainTheme}>
			<ParallaxProvider>
				<Head>
					<title>UKEMI | Parkour & Movement Specialist Services</title>
					<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
					/>
					{/* <link rel="shortcut icon" href="images/favicon.ico" /> */}
					<meta
						name="description"
						content="Ukemi promote activity in highly urbanised areas and encourage a healthier society through digital design, product creation, and community arts development. Each company member has practised Parkour for over a decade and this is the lens in which we see the world and project our ideas onto."
					/>
					<link
						href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i%7CRaleway:100,200,300,400,500,600,700,800,900%7CDroid+Serif:400,400italic,700"
						rel="stylesheet"
					/>
				</Head>
				<ResetCSS />
				<GlobalStyle />
				<ContentWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
						{/* <DrawerProvider><Navbar /></DrawerProvider> */}...
					</Sticky>
					<BannerSection />
				</ContentWrapper>
			</ParallaxProvider>
		</ThemeProvider>
	);
};

export default Home;
