import styled from 'styled-components';

const BannerWrapper = styled.section`
	padding-top: 210px;
	padding-bottom: 160px;
	background-color: white;
	min-height: 100vh;
	display: flex;
	align-items: center;
	@media (max-width: 990px) {
		padding-top: 170px;
		padding-bottom: 120px;
		min-height: auto;
	}
	@media (max-width: 575px) {
		padding-top: 150px;
		padding-bottom: 60px;
	}
	.banner-container {
		position: relative;
	}
`;

export const BubbleWrapper = styled.div`text-align: center;`;

export const Bubble = styled.button`
	text-align: center;
	font-family: 'Open Sans', sans-serif;
	display: inline-block;
	border-radius: 4em;
	border: 1px solid #f6f6f7;
	padding: 7px 25px;
	box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
	margin-bottom: 30px;
	background-color: #fff;
	@media (max-width: 575px) {
		padding: 7px 10px;
	}
`;

export default BannerWrapper;
