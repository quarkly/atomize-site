import React from 'react';
import atomize from "@quarkly/atomize";

const CodeSandBox = props => <iframe
	{...props}
	width="100%"
	height="264px"
	title="Atomize demo"
	src="https://codesandbox.io/embed/atomize-demo-skhjw?fontsize=14&hidenavigation=1&view=split&theme=light"
	sandbox="allow-autoplay allow-same-origin allow-scripts"
></iframe>;

export default atomize(CodeSandBox)({
	name: "CodeSandBox",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "CodeSandBox — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});