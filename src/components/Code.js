import React from "react";
import cn from "classnames";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Code",
	"overflow-y": "hidden",
	"overflow-x": "auto",
	"margin": "16px 0px 28px 0px",
	"padding": "16px 16px 16px 16px",
	"background": "--color-greyD4",
	"border-radius": "4px",
	"color": "--greyL5"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"quarkly-title": "Text",
			"font": "--code",
			"margin": "0 0 0 0",
			"white-space": "nowrap",
			"children": <>
				npm i @quarkly/atomize styled-components{"\n\n"}
			</>
		}
	}
};
const defaultClass = 'code-box';

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
	.code-box::-webkit-scrollbar {
		height: 10px;
	}
	.code-box::-webkit-scrollbar-thumb {
		background: var(--qtheme-color-greyD3);
	}
	.code-box::-webkit-scrollbar-thumb {
		border: 4px solid var(--qtheme-color-greyD4);
		border-top-width: 0;
		border-radius: 0 0 4px 4px;
	}
	.code-box::-webkit-scrollbar-thumb:hover {
		background: var(--qtheme-color-greyD2);
	}
	.code-box::-webkit-scrollbar-thumb:active {
		background: var(--qtheme-color-greyD3);
	}
`;
addStyles(styles);

const Code = ({
	className = "",
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest} className={cn(className, defaultClass)}>
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(Code, { ...Box,
	defaultProps,
	overrides
});
export default Code;