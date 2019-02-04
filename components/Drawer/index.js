import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';

const Drawer = ({ className, children, closeButton, drawerHandler, toggleHandler, open, ...props }) => {
	// Add all classs to an array
	const addAllClasses = ['reusecore__drawer'];

	// ClassName prop checking
	if (className) {
		addAllClasses.push(className);
	}

	return (
		<Fragment>
			<RcDrawer open={open} onMaskClick={toggleHandler} className={addAllClasses.join(' ')} {...props}>
				<div className="reusecore-drawer__close" onClick={toggleHandler}>
					{closeButton}
				</div>
				{children}
			</RcDrawer>
			<div className="reusecore-drawer__handler" style={{ display: 'inline-block' }} onClick={toggleHandler}>
				{drawerHandler}
			</div>
		</Fragment>
	);
};

Drawer.defaultProps = {
	width: '300px',
	handler: false,
	level: null,
};

export default Drawer;
