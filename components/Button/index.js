import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './button.style';

const Button = ({
	type,
	title,
	icon,
	disabled,
	iconPosition,
	onClick,
	loader,
	isMaterial,
	isLoading,
	className,
	...props
}) => {
	// Add all classs to an array
	const addAllClasses = [];

	// IsLoading prop checking
	if (isLoading) {
		addAllClasses.push('is-loading');
	}

	// IsMaterial prop checking
	if (isMaterial) {
		addAllClasses.push('is-material');
	}

	// ClassName prop checking
	if (className) {
		addAllClasses.push(className);
	}

	// Checking button loading state
	const buttonIcon =
		isLoading !== false ? <Fragment> {loader}</Fragment> : icon && <span className="btn-icon">{icon}</span>;

	// Set icon position
	const position = iconPosition || 'right';

	return (
		<ButtonStyle
			type={type}
			className={addAllClasses.join(' ')}
			icon={icon}
			disabled={disabled}
			icon-position={position}
			onClick={onClick}
			{...props}
		>
			{position === 'left' && buttonIcon}
			{title && <span className="btn-text">{title}</span>}
			{position === 'right' && buttonIcon}
		</ButtonStyle>
	);
};

Button.propTypes = {
	/** ClassName of the button */
	className: PropTypes.string,

	/** Add icon */
	type: PropTypes.oneOf(['button', 'submit', 'reset']),

	/** Add icon */
	icon: PropTypes.object,

	/** Add loader */
	loader: PropTypes.object,

	/** Add Material effect */
	isMaterial: PropTypes.bool,

	/** Button Loading state */
	isLoading: PropTypes.bool,

	/** Button Loading state */
	loaderColor: PropTypes.string,

	/** If true button will be disabled */
	disabled: PropTypes.bool,

	/** Adjust your icon and loader position [if you use loader] */
	iconPosition: PropTypes.oneOf(['left', 'right']),

	/** Variant change button shape */
	variant: PropTypes.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

	/** Primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
	colors: PropTypes.oneOf([
		'primary',
		'secondary',
		'warning',
		'error',
		'primaryWithBg',
		'secondaryWithBg',
		'warningWithBg',
		'errorWithBg',
	]),

	/**
   * Gets called when the user clicks on the button
   */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	disabled: false,
	isMaterial: false,
	isLoading: false,
	type: 'button',
};

export default Button;
