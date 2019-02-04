import React from 'react';
import ContainerWrapper from './style';

const Container = ({ children, className, fullWidth, noGutter }) => {
	return (
		<ContainerWrapper className={className} fullWidth={fullWidth} noGutter={noGutter}>
			{children}
		</ContainerWrapper>
	);
};

export default Container;
