import React from "react";
import theme from "theme";
import { Theme, Icon, Image, Box, Link, Text, Em, List } from "@quarkly/widgets";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdClose, MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Box quarkly-title="Wrapper" xs-display="flex" display="flex">
			<Components.ToggleMenu />
			<Box
				quarkly-title="Side"
				id="side"
				xs-width="320px"
				xs-flex="0 0 auto"
				width="100%"
				max-width="240px"
				position="relative"
				z-index="1"
				max-height="100vh"
				background="--color-greyL3"
				min-height="100vh"
				box-sizing="border-box"
				sm-position="fixed"
				sm-z-index="2"
				sm-left="-240px"
				sm-top={0}
				sm-transition="box-shadow 0.3s ease 0s,left 0.3s ease 0s"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				sm-box-shadow="0 0 0 0 rgba(0, 0, 0, 0)"
				overflow-y="auto"
			>
				<Icon
					category="md"
					icon={MdClose}
					quarkly-title="Close"
					id="side-close"
					position="absolute"
					right="16px"
					top="16px"
					color="--greyD3"
					hover-color="--greyD1"
					cursor="pointer"
					display="none"
					sm-display="block"
					transition="color 0.1s ease 0s"
				/>
				<Box flex="1 0 auto">
					<Box quarkly-title="Logo" display="flex" margin="32px 0px 32px 0px" padding="0px 32px 0px 32px">
						<Image
							width="64px"
							height="64px"
							quarkly-title="Image"
							src="https://uploads.quarkly.io/atomize-site/atomize-logo.svg"
							alt="Quarkly / Atomize Logo"
							margin="0px 8px 0px -4px"
						/>
					</Box>
					<Box quarkly-title="Menu" id="menu">
						<Link
							href="#getting-started"
							font="--lead"
							white-space="nowrap"
							text-decoration-line="initial"
							color="--greyD4"
							hover-color="--blue"
							active-color="--blue"
							display="block"
							quarkly-title="Getting Started"
							padding="8px 16px 8px 32px"
							transition="color 0.1s ease 0s"
						>
							Getting Started
						</Link>
						<Link
							href="#advanced-usage"
							font="--lead"
							white-space="nowrap"
							text-decoration-line="initial"
							color="--greyD4"
							hover-color="--blue"
							active-color="--blue"
							display="block"
							quarkly-title="Advanced Usage"
							padding="8px 16px 8px 32px"
							transition="color 0.1s ease 0s"
						>
							Advanced Usage
						</Link>
						<Box
							margin="8px 0px 8px 32px"
							quarkly-title="Advanced Usage"
							border-width="0 0 0 2px"
							border-style="solid"
							border-color="--color-greyL2"
						>
							<Link
								href="#aliases"
								font="normal 400 16px/20px --fontFamily-googleSourceSansPro"
								white-space="nowrap"
								text-decoration-line="initial"
								color="--greyD2"
								hover-color="--blue"
								active-color="--blue"
								display="block"
								quarkly-title="Aliases"
								padding="8px 16px 8px 48px"
								margin="0px 0px 0px -32px"
								transition="color 0.1s ease 0s"
							>
								Aliases
							</Link>
							<Link
								href="#themes"
								font="normal 400 16px/20px --fontFamily-googleSourceSansPro"
								white-space="nowrap"
								text-decoration-line="initial"
								color="--greyD2"
								hover-color="--blue"
								active-color="--blue"
								display="block"
								quarkly-title="Themes"
								padding="8px 16px 8px 48px"
								margin="0px 0px 0px -32px"
								transition="color 0.1s ease 0s"
							>
								Themes
							</Link>
							<Link
								href="#breakpoints"
								font="normal 400 16px/20px --fontFamily-googleSourceSansPro"
								white-space="nowrap"
								text-decoration-line="initial"
								color="--greyD2"
								hover-color="--blue"
								active-color="--blue"
								display="block"
								quarkly-title="Breakpoints"
								padding="8px 16px 8px 48px"
								margin="0px 0px 0px -32px"
								transition="color 0.1s ease 0s"
							>
								Breakpoints
							</Link>
							<Link
								href="#effects"
								font="normal 400 16px/20px --fontFamily-googleSourceSansPro"
								white-space="nowrap"
								text-decoration-line="initial"
								color="--greyD2"
								hover-color="--blue"
								active-color="--blue"
								display="block"
								quarkly-title="Effects"
								padding="8px 16px 8px 48px"
								margin="0px 0px 0px -32px"
								transition="color 0.1s ease 0s"
							>
								Effects
							</Link>
						</Box>
						<Link
							href="#quarkly-widgets"
							font="--lead"
							white-space="nowrap"
							text-decoration-line="initial"
							color="--greyD4"
							hover-color="--blue"
							active-color="--blue"
							display="block"
							quarkly-title="Quarkly Widgets"
							padding="8px 16px 8px 32px"
							transition="color 0.1s ease 0s"
						>
							Quarkly Widgets
						</Link>
						<Link
							href="#api-reference"
							font="--lead"
							white-space="nowrap"
							text-decoration-line="initial"
							color="--greyD4"
							hover-color="--blue"
							active-color="--blue"
							display="block"
							quarkly-title="API Reference"
							padding="8px 16px 8px 32px"
							transition="color 0.1s ease 0s"
						>
							API Reference
						</Link>
					</Box>
				</Box>
				<Box
					quarkly-title="Links"
					display="flex"
					align-items="center"
					margin="32px 0px 16px 0px"
					padding="0px 16px 0px 16px"
					md-padding="0 16px 0px 16px"
				>
					<SocialMedia github="https://github.com/quarkly/atomize" width="32px" height="32px" background="transparent">
						<Override
							slot="icon"
							color="--greyD3"
							font="24px sans-serif"
							width="18px"
							height="18px"
						/>
						<Override slot="link" hover-background="transparent" background="transparent" />
					</SocialMedia>
					<Link
						href="https://github.com/quarkly/atomize"
						quarkly-title="GitHub"
						font="--lead"
						color="--greyD4"
						text-decoration-line="initial"
						target="_blank"
					>
						GitHub
					</Link>
				</Box>
			</Box>
			<Box
				quarkly-title="Content"
				xs-width="100%"
				xs-flex="1 1 auto"
				position="relative"
				z-index="1"
				min-height="100vh"
				box-sizing="border-box"
				padding="88px 5% 56px 5%"
				overflow-y="auto"
				overflow-x="hidden"
				width="100%"
				max-height="100vh"
			>
				<Icon
					category="md"
					icon={MdMenu}
					quarkly-title="Open"
					id="side-open"
					position="absolute"
					top="16px"
					left="16px"
					display="none"
					sm-display="block"
					cursor="pointer"
					transition="color 0.1s ease 0s"
					color="--greyD3"
					hover-color="--greyD1"
					hover-width="36px"
					hover-height="36px"
					hover-font="36px sans-serif"
				/>
				<Box
					id="getting-started"
					position="relative"
					padding="24px 0 24px 0"
					quarkly-title="Getting Started"
					max-width="800px"
					xl-max-width="600px"
				>
					<Text quarkly-title="H1" font="--headline1" margin="0 0px 24px 0px">
						Getting Started
					</Text>
					<Text quarkly-title="P" font="--base">
						Before you start working with Atomize, you need to set up dependencies:
					</Text>
					<Components.Code />
					<Text quarkly-title="P" font="--base">
						Atomize serves as a wrapper around a styled-component and has a similar API.
						<br />
						Just call the method using the name of the required element:
					</Text>
					<Components.Code font="--code">
						import atomize from '@quarkly/atomize';
						<br />
						<br />
						const Box = atomize.div();
					</Components.Code>
					<Text quarkly-title="P" font="--base">
						As a result, we get the React component that can take any CSS in the form of properties:
					</Text>
					<Components.Code font="--code">
						&lt;Box backgroundColor="red" /&gt;
					</Components.Code>
					<Text quarkly-title="P" font="--base">
						The React inheritance mechanism is also provided:
					</Text>
					<Components.Code font="--code">
						const MyComponent = (&#123; className &#125;) =&gt; &#123;
						<br />
						{"    "}// some logic here
						<br />
						{"    "}return &lt;div className=&#123; className &#125; /&gt;;
						<br />
						&#125;;
						<br />
						<br />
						const Box = atomize(MyComponent);
					</Components.Code>
				</Box>
				<Box
					id="advanced-usage"
					position="relative"
					padding="24px 0 24px 0"
					quarkly-title="Advanced Usage"
					max-width="800px"
					xl-max-width="600px"
				>
					<Text quarkly-title="H1" font="--headline1" margin="0 0px 24px 0px">
						Advanced Usage
					</Text>
					<Box id="aliases" position="relative" padding="16px 0 24px 0" quarkly-title="Aliases">
						<Text
							quarkly-title="H2"
							font="--headline2"
							margin="0 0px 20px 0px"
							border-width="0 0 1px 0"
							border-style="solid"
							border-color="--color-lightD2"
						>
							Aliases
						</Text>
						<Text quarkly-title="P" font="--base">
							You can use the system of alias properties to make it easier to use.
							<br />
							For example, bgc === backgroundColor:
						</Text>
						<Components.Code font="--code">
							&lt;Box bgc="red" /&gt;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							To see the full list of properties and aliases, follow this{" "}
							<Link href="https://github.com/quarkly/atomize/blob/master/docs/aliases.md" color="--blue" hover-color="--greyD4" active-color="--greyD4">
								link
							</Link>
							.
						</Text>
					</Box>
					<Box id="themes" position="relative" padding="24px 0 24px 0" quarkly-title="Themes">
						<Text
							quarkly-title="H2"
							font="--headline2"
							margin="0 0px 20px 0px"
							border-width="0 0 1px 0"
							border-style="solid"
							border-color="--color-lightD2"
						>
							Themes
						</Text>
						<Text quarkly-title="P" font="--base">
							By default, Atomize components do not include a theme and you need to set up dependencies:
						</Text>
						<Components.Code font="--code">
							npm i @quarkly/theme
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Quarkly themes are based on CSS variables. The key feature is that variables from themes can be reused both in props and themes. You don’t have to use additional abstractions, like template functions, and no additional editing is needed.
						</Text>
						<Text quarkly-title="P" font="--base">
							To use variables from a theme, just add your theme to an application with a Theme component, describe the property in the theme and call this property using the prefix "--". 
You can also use it in the theme itself:
						</Text>
						<Components.Code font="--code">
							import Theme from "@quarkly/theme";
							<br />
							<br />
							const theme = &#123;
							<br />
							{"    "}color: &#123;
							<br />
							{"        "}dark: "#212121"
							<br />
							{"    "}&#125;,
							<br />
							{"    "}border: &#123;
							<br />
							{"        "}dark: "1px solid --color-dark"
							<br />
							{"    "}&#125;
							<br />
							&#125;;
							<br />
							<br />
							export const MyBox = () =&gt; (
							<br />
							{"    "}&lt;Theme theme=&#123; theme &#125;&gt;
							<br />
							{"        "}&lt;Box
							<br />
							{"            "}width="100px"
							<br />
							{"            "}height="100px"
							<br />
							{"            "}
							<br />
							{"            "}border="--border-dark"
							<br />
							{"            "}color="--color-dark"
							<br />
							{"        "}/&gt;
							<br />
							{"    "}&lt;/Theme&gt;
							<br />
							);
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Shorter syntax is used for colors in the JSX markup:
						</Text>
						<Components.Code font="--code">
							&lt;Box color="--dark" /&gt;
						</Components.Code>
					</Box>
					<Box id="breakpoints" position="relative" padding="24px 0 24px 0" quarkly-title="Breakpoints">
						<Text
							quarkly-title="H2"
							font="--headline2"
							margin="0 0px 20px 0px"
							border-width="0 0 1px 0"
							border-style="solid"
							border-color="--color-lightD2"
						>
							Breakpoints
						</Text>
						<Text quarkly-title="P" font="--base">
							Themes have breakpoints for working with media expressions. 
Any property can be prefixed with a breakpoint key name:
						</Text>
						<Components.Code font="--code">
							import Theme from "@quarkly/theme";
							<br />
							<br />
							const theme = &#123;
							<br />
							{"    \n\n\t\t\t\t\t"}breakpoints: &#123;
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}sm: [&#123; type: "min-width", value: 576 &#125;],
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}md: [&#123; type: "min-width", value: 768 &#125;],
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}lg: [&#123; type: "min-width", value: 992 &#125;]
							<br />
							{"    \n\n\t\t\t\t\t"}&#125;,
							<br />
							{"    \n\n\t\t\t\t\t"}color: &#123;
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}'dark-mobile': "#424242",
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}'dark-tablet': "#212121"
							<br />
							{"    \n\n\t\t\t\t\t"}&#125;
							<br />
							&#125;
							<br />
							<br />
							export const MyBox = () =&gt; (
							<br />
							{"    \n\n\t\t\t\t\t"}&lt;Theme theme=&#123; theme &#125;&gt;
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}&lt;Box
							<br />
							{"    \n\n\n    \n\n\n    \n\n\t\t\t\t\t"}width="100px"
							<br />
							{"    \n\n\n    \n\n\n    \n\t\t\t\t\t"}height="100px"
							<br />
							{"    \n\n\n    \n\n\n    "}
							<br />
							{"    \n\n\n    \n\n\n    \n\n\t\t\t\t\t"}color="--dark-mobile"
							<br />
							{"    \n\n\n    \n\n\n    \n\n\t\t\t\t\t"}md-color="--dark-tablet"
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}/&gt;
							<br />
							{"    \n\n\t\t\t\t\t"}&lt;/Theme&gt;
							<br />
							);
						</Components.Code>
					</Box>
					<Box id="effects" position="relative" padding="24px 0 24px 0" quarkly-title="Effects">
						<Text
							quarkly-title="H2"
							font="--headline2"
							margin="0 0px 20px 0px"
							border-width="0 0 1px 0"
							border-style="solid"
							border-color="--color-lightD2"
						>
							Effects
						</Text>
						<Text quarkly-title="P" font="--base">
							Just pass an object with the configuration to a component when creating it:
							<br />
						</Text>
						<Components.Code font="--code">
							const Button = atomize.button(&#123;
							<br />
							{"    \n\n\t\t\t\t\t"}effects: &#123;
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}hover: ":hover",
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}focus: ":focus",
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}active: ":active",
							<br />
							{"    \n\n\n    \n\n\t\t\t\t\t"}disabled: ":disabled"
							<br />
							{"    \n\n\t\t\t\t\t"}&#125;
							<br />
							&#125;);
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							The key is the prefix in the name of the property, and the value is a CSS selector. This is the same way we implemented pseudo-classes.
						</Text>
						<Text quarkly-title="P" font="--base">
							For example, if you specify the hover prefix for any CSS property, it will be applied to a certain effect:
						</Text>
						<Components.Code font="--code">
							&lt;MySuperButton
							<br />
							{"    "}bgc="red"
							<br />
							{"    "}hover-bgc="yellow"
							<br />
							{"    "}focus-bgc="blue"
							<br />
							/&gt;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							You can also combine effects with media expressions:
						</Text>
						<Components.Code font="--code">
							&lt;Box
							<br />
							{"    "}md-hover-bgc="yellow"
							<br />
							{"    "}lg-hover-bgc="blue"
							<br />
							/&gt;
						</Components.Code>
					</Box>
				</Box>
				<Box
					id="quarkly-widgets"
					position="relative"
					padding="24px 0 24px 0"
					quarkly-title="Quarkly Widgets"
					max-width="800px"
					xl-max-width="600px"
				>
					<Text quarkly-title="H1" font="--headline1" margin="0 0px 24px 0px">
						Quarkly Widgets
					</Text>
					<Text quarkly-title="P" font="--base">
						The second purpose of Atomize is to create widgets in Quarkly based on custom React components.
					</Text>
					<Text quarkly-title="P" font="--base">
						Just wrap your component in Atomize and describe its configuration so that Quarkly can understand which properties can be interactively edited.
					</Text>
					<Text quarkly-title="P" font="--base">
						You do not need to add a Theme to your component when you use it in Quarkly. All the variables from the project will be automatically available in your component.
					</Text>
					<Text quarkly-title="P" font="--base" margin="16px 0px 8px 0px">
						The configuration fields for the component look like this:
					</Text>
					<List margin="8px 0px 24px 0px">
						<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
							<Em>
								effects
							</Em>
							{" "}– defines browser pseudo-classes (hover, focus, etc.)
						</Text>
						<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
							<Em>
								description
							</Em>
							{" "}– component description that will appear when you mouse over its name
						</Text>
						<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
							<Em>
								propInfo
							</Em>
							{" "}– configuration of controls that will be displayed on the right panel
						</Text>
					</List>
					<Components.Code font="--code">
						export default atomize(Box)(
						<br />
						{"    \n\n\t\t\t\t"}&#123;
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}effects: &#123;
						<br />
						{"    \n\n\n    \n\n\n    \n\n\t\t\t\t"}hover: ":hover"
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}&#125;,
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}description: &#123;
						<br />
						{"    \n\n\n    \n\n\n    \n\n\t\t\t\t"}en: "Awesome box component"
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}&#125;,
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}propInfo: &#123;
						<br />
						{"    \n\n\n    \n\n\n    \n\n\t\t\t\t"}someProp: &#123;
						<br />
						{"    \n\n\n    \n\n\n    \n\n\n    \n\n\t\t\t\t"}control: "input"
						<br />
						{"    \n\n\n    \n\n\n    \n\n\t\t\t\t"}&#125;
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}&#125;
						<br />
						{"    \n\n\t\t\t\t"}&#125;,
						<br />
						{"    \n\n\t\t\t\t"}&#123;
						<br />
						{"    \n\n\n    \n\n\t\t\t\t"}someProp: "Hello World!"
						<br />
						{"    \n\n\t\t\t\t"}&#125;
						<br />
						);
					</Components.Code>
					<Text quarkly-title="P" font="--base" margin="16px 0px 8px 0px">
						Possible control options:
					</Text>
					<List margin="8px 0px 24px 0px">
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							<Em />
							input
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							select
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							<Em />
							color
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							font
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							shadow
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							transition
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							transform
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							filter
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							background
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							checkbox-icon
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							radio-icon
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							<Em />
							radio-group
						</Text>
						<Text quarkly-title="Item" font="--base" margin="4px 0px 4px 0px">
							checkbox
						</Text>
					</List>
					<Box quarkly-title="Common properties" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Common properties
						</Text>
						<Text quarkly-title="P" font="--base" margin="16px 0px 8px 0px">
							To specify the props to be displayed on the right panel, use this template:
						</Text>
						<List margin="8px 0px 24px 0px">
							<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
								<Em />
								<Em>
									description
								</Em>
								{" "}– tooltip text based on localization language
							</Text>
							<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
								<Em />
								<Em>
									control
								</Em>
								{" "}– control type (from the list above). It is a required property
							</Text>
							<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
								<Em />
								<Em>
									category
								</Em>
								{" "}– name for your category in the right panel; if there is no category with this name, it will be created automatically
							</Text>
							<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
								<Em />
								<Em>
									weight
								</Em>
								{" "}– control width. The range of values is from 0 to 1, which equals from 0 to 100% of the right panel width. It is possible to show several controls in one line
							</Text>
						</List>
						<Components.Code font="--code">
							someProp: &#123;
							<br />
							{"    \n\n\t\t\t\t\t"}description: &#123; en: "Your text" &#125;,
							<br />
							{"    \n\n\t\t\t\t\t"}control: "input",
							<br />
							{"    \n\n\t\t\t\t\t"}category: 'Main',
							<br />
							{"    \n\n\t\t\t\t\t"}weight: 1
							<br />
							&#125;
						</Components.Code>
					</Box>
					<Box quarkly-title="Radio-icon" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Radio-icon
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with the checked value.{" "}
						</Text>
						<Text quarkly-title="P" font="--base">
							Property "checkedValue" describes the name for the selected option:
						</Text>
						<Components.Code font="--code">
							checkedValue: "valueName"
						</Components.Code>
					</Box>
					<Box quarkly-title="Checkbox-icon" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Checkbox-icon
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with the checked value.
						</Text>
						<Text quarkly-title="P" font="--base">
							Property "checkedValue" describes the name for the selected option.
							<br />
							Property "icon" describes the system name for the icon:
						</Text>
						<Components.Code font="--code">
							checkedValue: "valueName",
							<br />
							icon: "iconName"
						</Components.Code>
					</Box>
					<Box quarkly-title="Select and radio-group" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Select and radio-group
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with the selected value.
						</Text>
						<Text quarkly-title="P" font="--base">
							Property "variants" contains a list of available options:
						</Text>
						<Components.Code font="--code">
							variants: ['one', 'two', 'three']
						</Components.Code>
					</Box>
					<Box quarkly-title="Font" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Font
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with a font styles:
						</Text>
						<Components.Code font="--code">
							italic normal 400 1em/1.5 --fontFamily-googleRoboto
						</Components.Code>
					</Box>
					<Box quarkly-title="Color" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Color
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with a variable or custom value in #HEX or RGBA.
						</Text>
					</Box>
					<Box quarkly-title="Background" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Background
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with a variable or custom color in #HEX or RGBA and image or gradient styles if they were defined:
						</Text>
						<Components.Code font="--code">
							// gradient styles
							<br />
							#000000 repeating-linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)
							<br />
							<br />
							// or image styles
							<br />
							--color-dark url(image.png) center/contain no-repeat fixed border-box
						</Components.Code>
					</Box>
					<Box quarkly-title="Transition, transform, shadow and filter" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Transition, transform, shadow and filter
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with a property styles.
						</Text>
					</Box>
				</Box>
				<Box
					id="api-reference"
					position="relative"
					padding="24px 0 24px 0"
					quarkly-title="API Reference"
					max-width="800px"
					xl-max-width="600px"
				>
					<Text quarkly-title="H1" font="--headline1" margin="0 0px 24px 0px">
						API Reference
					</Text>
					<Box quarkly-title="atomize" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							atomize
						</Text>
						<Components.Code font="--code">
							import atomize from '@quarkly/atomize';
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Default export. This is a wrapper around styled from styled-components.
						</Text>
					</Box>
					<Box quarkly-title="getTransfrom" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							getTransfrom
						</Text>
						<Components.Code font="--code">
							import &#123; getTransform &#125; from '@quarkly/atomize;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Method that returns a function by name to transform the value.
						</Text>
						<Components.Code font="--code" margin="16px 0px 0 0px">
							getTransform(name: string): function
						</Components.Code>
						<List margin="16px 0px 24px 0px">
							<Text quarkly-title="Item" font="--base" margin="8px 0px 8px 0px">
								<Em />
								<Em />
								name - method name for a transform
							</Text>
						</List>
					</Box>
					<Box quarkly-title="transformVar" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							transformVar
						</Text>
						<Components.Code font="--code">
							import &#123; transformVar &#125; from '@quarkly/atomize;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Transform of CSS variables:
						</Text>
						<Components.Code font="--code">
							transformVar(key: string, value: string): string;
						</Components.Code>
					</Box>
					<Box margin="32px 0px 0px 0px" quarkly-title="splitCSSRule">
						<Text quarkly-title="H3" font="--headline3">
							splitCSSRule
						</Text>
						<Components.Code font="--code">
							import &#123; splitCSSRule &#125; from '@quarkly/atomize;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Breaks the CSS string into an array of rules.
						</Text>
						<Components.Code font="--code">
							splitCSSRule&lt;T&gt;(rule: T, separator?: string): Array&lt;T&gt;
						</Components.Code>
					</Box>
					<Box quarkly-title="themeDefault" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							themeDefault
						</Text>
						<Text quarkly-title="P" font="--base">
							Default theme for using CSS variables and defining breakpoints.
						</Text>
						<Components.Code font="--code">
							import &#123; themeDefault &#125; from '@quarkly/atomize;
						</Components.Code>
					</Box>
					<Box quarkly-title="dict" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							dict
						</Text>
						<Components.Code font="--code">
							import &#123; dict &#125; from '@quarkly/atomize;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Dictionary for defining configuration of CSS rules
						</Text>
						<Components.Code font="--code">
							type CSSRule = &#123;
							<br />
							{"    \n\n\t\t\t\t\t"}alias: string;
							<br />
							{"    \n\n\t\t\t\t\t"}type: Array&lt;string&gt; | string;
							<br />
							{"    \n\n\t\t\t\t\t"}&lt;key&gt;: string;
							<br />
							&#125;
						</Components.Code>
					</Box>
					<Box quarkly-title="aliasesDict" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							aliasesDict
						</Text>
						<Components.Code font="--code">
							import &#123; aliasesDict &#125; from '@quarkly/atomize;
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Dictionary of abbreviations generated from dict:
						</Text>
						<Components.Code font="--code">
							type Alias =  Omit&lt;CSSRule, "alias"&gt; & &#123;
							<br />
							{"    "}name: string;
							<br />
							{"    "}&lt;key&gt;: string;
							<br />
							&#125;
						</Components.Code>
					</Box>
				</Box>
			</Box>
		</Box>
	</Theme>;
});