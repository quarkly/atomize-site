import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize";
const customJs = `
	(function() {
		const side = document.querySelector('#side');
		const open = document.querySelector('#side-open');
		const close = document.querySelector('#side-close');
		const overlay = document.querySelector('#side-overlay');
		const links = document.querySelectorAll('[data-type="menu-link"]');
		
		const openSide = () => {
			side.style.left = '0px';
			side.style.boxShadow = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)';
			overlay.style.width = '100%';
			overlay.style.opacity = '1';
		}
		
		const closeSide = () => {
			side.dataset.open = 'close';
			
			side.style.left = '';
			side.style.boxShadow = '';
			overlay.style.width = '';
			overlay.style.opacity = '';
		}
		
		open.onclick = openSide;
		overlay.onclick = closeSide;
		close.onclick = closeSide;
		
		links.forEach(link => link.onclick = closeSide);
	})()
`;

const addStyles = styles => {
	if (typeof document === 'undefined') return;
	const style = document.createElement('style');
	style.type = 'text/css';

	if (style.styleSheet) {
		style.styleSheet.cssText = styles;
	} else {
		style.appendChild(document.createTextNode(styles));
	}

	document.querySelector('head').appendChild(style);
};

let styles = `
	#side::-webkit-scrollbar {
		width: 10px;
	}
	#side::-webkit-scrollbar-thumb {
		background: var(--qtheme-color-greyL1);
	}
	#side::-webkit-scrollbar-thumb {
		border: 4px solid var(--qtheme-color-greyL3);
		border-left-width: 0;
	}
	#side::-webkit-scrollbar-thumb:hover {
		background: var(--qtheme-color-greyL2);
	}
	#side::-webkit-scrollbar-thumb:active {
		background: var(--qtheme-color-greyL1);
	}
`;
addStyles(styles);

const ToggleMenu = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const scrt = document.createElement("script");
		scrt.innerHTML = customJs;
		ref.current.appendChild(scrt);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(ToggleMenu)({
	name: "ToggleMenu",
	normalize: true,
	mixins: true
});