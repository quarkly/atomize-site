import React from "react";
import theme from "theme";
import { Theme, Box, Icon, Image, Link, Text, Em, List } from "@quarkly/widgets";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdClose, MdMenu } from "react-icons/md";
import { Helmet } from "react-helmet";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>Getting Started | Atomize</title>
			<meta name="author" content="quarkly" />
			<meta name="description" content="Learn how to create your react components with atomize" />
			<link itemprop="url" href="http://atomize.quarkly.io/docs/" />
			<meta itemprop="name" content="Atomize: Documentation" />
			<meta itemprop="description" content="Learn how to create your react components with atomize" />
			<meta itemprop="image" content="https://uploads.quarkly.io/atomize-site/atomize-logo-dark.png" />
			<link rel="shortcut icon" href="https://uploads.quarkly.io/atomize-site/atomize-logo-dark.png" />
			<link rel="icon" href="https://uploads.quarkly.io/atomize-site/atomize-logo-dark.png" />
		</Helmet>
		<Box quarkly-title="Wrapper" xs-display="flex" display="flex" max-height="100vh">
			<Components.ToggleMenu />
			<Box
				quarkly-title="Overlay"
				position="fixed"
				z-index="2"
				width="0"
				height="100%"
				background="rgba(0, 0, 0, 0.1)"
				id="side-overlay"
				opacity="0"
				min-width={0}
				min-height={0}
				transition="opacity 0.3s ease 0s"
			/>
			<Box
				quarkly-title="Side"
				id="side"
				xs-width="320px"
				xs-flex="0 0 auto"
				width="100%"
				max-width="240px"
				position="relative"
				z-index="3"
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
						<Link href="/" display="flex">
							<Image
								width="64px"
								height="64px"
								quarkly-title="Image"
								src="https://uploads.quarkly.io/atomize-site/atomize-logo.svg"
								alt="Quarkly / Atomize Logo"
							/>
						</Link>
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
			>
				<Icon
					category="md"
					icon={MdMenu}
					quarkly-title="Open"
					id="side-open"
					position="absolute"
					top={0}
					left={0}
					display="none"
					sm-display="flex"
					cursor="pointer"
					transition="color 0.1s ease 0s"
					color="--greyD3"
					hover-color="--greyD1"
					width="24px"
					height="24px"
					padding="16px 16px 16px 16px"
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
					<Components.Code>
						<Override slot="text">
							npm i @quarkly/atomize styled-components
						</Override>
					</Components.Code>
					<Text quarkly-title="P" font="--base">
						Atomize serves as a wrapper around a styled-component and has a similar API.
						<br />
						Just call the method using the name of the required element:
					</Text>
					<Components.Code>
						<Override slot="text">
							import atomize from '@quarkly/atomize';
							<br />
							<br />
							const Box = atomize.div();
						</Override>
					</Components.Code>
					<Text quarkly-title="P" font="--base">
						As a result, we get the React component that can take any CSS in the form of properties:
					</Text>
					<Components.Code>
						<Override slot="text">
							&lt;Box backgroundColor="red" /&gt;
						</Override>
					</Components.Code>
					<Text quarkly-title="P" font="--base">
						The React inheritance mechanism is also provided:
					</Text>
					<Components.Code>
						<Override slot="text">
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
						</Override>
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
						<Components.Code>
							<Override slot="text">
								&lt;Box bgc="red" /&gt;
							</Override>
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
						<Components.Code>
							<Override slot="text">
								npm i @quarkly/theme
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Quarkly themes are based on CSS variables. The key feature is that variables from themes can be reused both in props and themes. You don’t have to use additional abstractions, like template functions, and no additional editing is needed.
						</Text>
						<Text quarkly-title="P" font="--base">
							To use variables from a theme, just add your theme to an application with a Theme component, describe the property in the theme and call this property using the prefix "--". 
You can also use it in the theme itself:
						</Text>
						<Components.Code>
							<Override slot="text">
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
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Shorter syntax is used for colors in the JSX markup:
						</Text>
						<Components.Code>
							<Override slot="text">
								&lt;Box color="--dark" /&gt;
							</Override>
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
						<Components.Code>
							<Override slot="text">
								import Theme from "@quarkly/theme";
								<br />
								<br />
								const theme = &#123;
								<br />
								{"    "}breakpoints: &#123;
								<br />
								{"        "}sm: [&#123; type: "min-width", value: 576 &#125;],
								<br />
								{"        "}md: [&#123; type: "min-width", value: 768 &#125;],
								<br />
								{"        "}lg: [&#123; type: "min-width", value: 992 &#125;]
								<br />
								{"    "}&#125;,
								<br />
								{"    "}color: &#123;
								<br />
								{"        "}'dark-mobile': "#424242",
								<br />
								{"        "}'dark-tablet': "#212121"
								<br />
								{"    "}&#125;
								<br />
								&#125;
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
								<br />
								{"            "}color="--dark-mobile"
								<br />
								{"            "}md-color="--dark-tablet"
								<br />
								{"        "}/&gt;
								<br />
								{"    "}&lt;/Theme&gt;
								<br />
								);
							</Override>
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
						<Components.Code>
							<Override slot="text">
								const Button = atomize.button(&#123;
								<br />
								{"    "}effects: &#123;
								<br />
								{"        "}hover: ":hover",
								<br />
								{"        "}focus: ":focus",
								<br />
								{"        "}active: ":active",
								<br />
								{"        "}disabled: ":disabled"
								<br />
								{"    "}&#125;
								<br />
								&#125;);
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							The key is the prefix in the name of the property, and the value is a CSS selector. This is the same way we implemented pseudo-classes.
						</Text>
						<Text quarkly-title="P" font="--base">
							For example, if you specify the hover prefix for any CSS property, it will be applied to a certain effect:
						</Text>
						<Components.Code>
							<Override slot="text">
								&lt;MySuperButton
								<br />
								{"    "}bgc="red"
								<br />
								{"    "}hover-bgc="yellow"
								<br />
								{"    "}focus-bgc="blue"
								<br />
								/&gt;
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							You can also combine effects with media expressions:
						</Text>
						<Components.Code font="--code">
							<Override slot="text">
								&lt;Box
								<br />
								{"    "}md-hover-bgc="yellow"
								<br />
								{"    "}lg-hover-bgc="blue"
								<br />
								/&gt;
							</Override>
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
					<Components.Code>
						<Override slot="text">
							export default atomize(Box)(
							<br />
							{"    "}&#123;
							<br />
							{"        "}effects: &#123;
							<br />
							{"            "}hover: ":hover"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}description: &#123;
							<br />
							{"            "}en: "Awesome box component"
							<br />
							{"        "}&#125;,
							<br />
							{"        "}propInfo: &#123;
							<br />
							{"            "}someProp: &#123;
							<br />
							{"                "}control: "input"
							<br />
							{"            "}&#125;
							<br />
							{"        "}&#125;
							<br />
							{"    "}&#125;,
							<br />
							{"    "}&#123;
							<br />
							{"        "}someProp: "Hello World!"
							<br />
							{"    "}&#125;
							<br />
							);
						</Override>
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
						<Components.Code>
							<Override slot="text">
								someProp: &#123;
								<br />
								{"    "}description: &#123; en: "Your text" &#125;,
								<br />
								{"    "}control: "input",
								<br />
								{"    "}category: 'Main',
								<br />
								{"    "}weight: 1
								<br />
								&#125;
							</Override>
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
						<Components.Code>
							<Override slot="text">
								checkedValue: "valueName"
							</Override>
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
						<Components.Code>
							<Override slot="text">
								checkedValue: "valueName",
								<br />
								icon: "iconName"
							</Override>
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
						<Components.Code>
							<Override slot="text">
								variants: ['one', 'two', 'three']
							</Override>
						</Components.Code>
					</Box>
					<Box quarkly-title="Font" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							Font
						</Text>
						<Text quarkly-title="P" font="--base">
							Returns a string with a font styles:
						</Text>
						<Components.Code>
							<Override slot="text">
								italic normal 400 1em/1.5 --fontFamily-googleRoboto
							</Override>
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
						<Components.Code>
							<Override slot="text">
								// gradient styles
								<br />
								#000000 repeating-linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)
								<br />
								<br />
								// or image styles
								<br />
								--color-dark url(image.png) center/contain no-repeat fixed border-box
							</Override>
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
						<Components.Code>
							<Override slot="text">
								import atomize from '@quarkly/atomize';
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Default export. This is a wrapper around styled from styled-components.
						</Text>
					</Box>
					<Box quarkly-title="getTransfrom" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							getTransfrom
						</Text>
						<Components.Code>
							<Override slot="text">
								import &#123; getTransform &#125; from '@quarkly/atomize;
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Method that returns a function by name to transform the value.
						</Text>
						<Components.Code>
							<Override slot="text">
								getTransform(name: string): function
							</Override>
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
						<Components.Code>
							<Override slot="text">
								import &#123; transformVar &#125; from '@quarkly/atomize;
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Transform of CSS variables:
						</Text>
						<Components.Code>
							<Override slot="text">
								transformVar(key: string, value: string): string;
							</Override>
						</Components.Code>
					</Box>
					<Box margin="32px 0px 0px 0px" quarkly-title="splitCSSRule">
						<Text quarkly-title="H3" font="--headline3">
							splitCSSRule
						</Text>
						<Components.Code>
							<Override slot="text">
								import &#123; splitCSSRule &#125; from '@quarkly/atomize;
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Breaks the CSS string into an array of rules.
						</Text>
						<Components.Code>
							<Override slot="text">
								splitCSSRule&lt;T&gt;(rule: T, separator?: string): Array&lt;T&gt;
							</Override>
						</Components.Code>
					</Box>
					<Box quarkly-title="themeDefault" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							themeDefault
						</Text>
						<Text quarkly-title="P" font="--base">
							Default theme for using CSS variables and defining breakpoints.
						</Text>
						<Components.Code>
							<Override slot="text">
								import &#123; themeDefault &#125; from '@quarkly/atomize;
							</Override>
						</Components.Code>
					</Box>
					<Box quarkly-title="dict" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							dict
						</Text>
						<Components.Code>
							<Override slot="text">
								import &#123; dict &#125; from '@quarkly/atomize;
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Dictionary for defining configuration of CSS rules
						</Text>
						<Components.Code>
							<Override slot="text">
								type CSSRule = &#123;
								<br />
								{"    "}alias: string;
								<br />
								{"    "}type: Array&lt;string&gt; | string;
								<br />
								{"    "}&lt;key&gt;: string;
								<br />
								&#125;
							</Override>
						</Components.Code>
					</Box>
					<Box quarkly-title="aliasesDict" margin="32px 0px 0px 0px">
						<Text quarkly-title="H3" font="--headline3">
							aliasesDict
						</Text>
						<Components.Code>
							<Override slot="text">
								import &#123; aliasesDict &#125; from '@quarkly/atomize;
							</Override>
						</Components.Code>
						<Text quarkly-title="P" font="--base">
							Dictionary of abbreviations generated from dict:
						</Text>
						<Components.Code>
							<Override slot="text">
								type Alias =  Omit&lt;CSSRule, "alias"&gt; & &#123;
								<br />
								{"    "}name: string;
								<br />
								{"    "}&lt;key&gt;: string;
								<br />
								&#125;
							</Override>
						</Components.Code>
					</Box>
				</Box>
			</Box>
		</Box>
	</Theme>;
});