import React from "react";
import theme from "theme";
import { Theme, Image, Box, Text, Link, Strong } from "@quarkly/widgets";
import * as Components from "components";
import { Helmet } from "react-helmet";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>Atomize</title>
			<meta name="author" content="quarkly" />
			<meta name="description" content="Library for creating atomic react components" />
			<meta name="saashub-verification" content="d54pkijrh3g1" />
			<link itemprop="url" href="https://atomize.quarkly.io/" />
			<meta itemprop="name" content="atomize" />
			<meta itemprop="description" content="Library for creating atomic react components" />
			<meta itemprop="image" content="https://uploads.quarkly.io/atomize-site/atomize-logo-dark.png" />
			<link rel="shortcut icon" href="https://uploads.quarkly.io/atomize-site/atomize-logo-dark.png" />
			<link rel="icon" href="https://uploads.quarkly.io/atomize-site/atomize-logo-dark.png" />
		</Helmet>
		<Box
			min-height="80vh"
			display="flex"
			justify-content="space-between"
			background="rgba(0, 0, 0, 0) linear-gradient(0deg,#0e1317 0%,#22262e 100%) 0% 0% /auto repeat scroll padding-box"
			box-sizing="border-box"
			flex-direction="column"
			position="relative"
			z-index="1"
			quarkly-title="Home"
			overflow-x="hidden"
			overflow-y="visible"
			padding="32px 16px 0px 16px"
			sm-padding="24px 16px 0px 16px"
		>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="40px auto 40px auto"
				height="100%"
				flex="1 0 auto"
				display="flex"
				align-items="center"
				flex-direction="row"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
				xs-flex-direction="column"
				xs-align-items="flex-start"
				xs-margin="40px auto 24px auto"
			>
				<Box display="flex">
					<Image
						width="220px"
						height="220px"
						src="https://uploads.quarkly.io/atomize-site/atomize-logo.svg"
						flex="1 0 auto"
						sm-width="160px"
						sm-height="160px"
					/>
				</Box>
				<Box margin="0px 0px 0px 48px" sm-margin="0px 0px 0px 24px" xs-margin="40px 0px 0px 0">
					<Text font="normal 500 42px/36px --fontFamily-googleSourceSansPro" color="--greyL5" letter-spacing="3px" margin="0 0 17px 0">
						ATOMIZE
					</Text>
					<Text
						font="--base"
						color="--greyL5"
						margin="8px 0 32px 0"
						letter-spacing="1px"
						sm-font="--baseSmall"
						sm-margin="8px 0 24px 0"
					>
						Library for creating atomic react components
						<br />
						Inspired by Tachyons and Styled-system
					</Text>
					<Box margin="16px 0px 0px 0px">
						<Text
							font="--code"
							color="--accentBlue"
							margin="0 0 0 0"
							display="inline-block"
							sm-font="--codeSmall"
						>
							npm i{" "}
						</Text>
						<Text
							font="--code"
							color="--accentGreen"
							margin="0 0 0 0"
							display="inline-block"
							sm-font="--codeSmall"
						>
							@quarkly/atomize styled-components
						</Text>
					</Box>
					<Box display="flex" margin="16px 0px 0px 0px">
						<Link
							href="/docs"
							font="normal 500 18px/20px --fontFamily-googleSourceSansPro"
							color="#FFFFFF"
							background="--color-accentBlue"
							padding="14px 20px 14px 20px"
							border-radius="4px"
							text-decoration-line="initial"
							hover-opacity=".9"
							quarkly-title="Docs"
							transition="opacity .1s ease 0s"
							margin="0px 8px 0px 0px"
							text-shadow="0 1px 0 rgba(0, 0, 0, 0.25)"
							opacity="1"
							sm-font="normal 500 16px/20px --fontFamily-googleSourceSansPro"
							sm-padding="12px 16px 14pxpx 16px"
						>
							Read the docs
						</Link>
						<Link
							href="https://github.com/quarkly/atomize"
							font="normal 500 18px/20px --fontFamily-googleSourceSansPro"
							color="#FFFFFF"
							background="#4F4F4F"
							padding="14px 20px 14px 20px"
							border-radius="4px"
							text-decoration-line="initial"
							hover-opacity=".9"
							quarkly-title="GitHub"
							transition="opacity .1s ease 0s"
							text-shadow="0 1px 0 rgba(0, 0, 0, 0.25)"
							opacity="1"
							sm-font="normal 500 16px/20px --fontFamily-googleSourceSansPro"
							sm-padding="12px 16px 14pxpx 16px"
							target="_blank"
						>
							GitHub
						</Link>
					</Box>
				</Box>
			</Box>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="32px auto 32px auto"
				display="flex"
				justify-content="space-between"
				align-items="center"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
				sm-flex-wrap="wrap"
				sm-margin="24px auto 24px -16p"
				xs-margin="16px -16px 24px -16px"
				xs-font="normal 400 12px/16px --fontFamily-googleSourceSansPro"
			>
				<Box
					position="relative"
					quarkly-title="Getting Started"
					left="-16px"
					sm-width="50%"
					sm-left={0}
					sm-right={0}
					sm-text-align="center"
					xs-width="100%"
				>
					<Link
						href="/docs#getting-started"
						font="--leadSmall"
						color="--greyL2"
						text-decoration-line="initial"
						text-transform="uppercase"
						hover-color="--greyL1"
						padding="8px 16px 8px 16px"
						display="block"
						letter-spacing="2px"
						quarkly-title="Link"
						transition="color .1s ease 0s"
						margin="0px 0px 0px 0px"
						sm-font="normal 400 12px/16px Source Sans Pro, sans-serif"
						xs-text-align="left"
						xs-padding="12px 16px 12px 16px"
					>
						Getting Started
					</Link>
				</Box>
				<Box
					position="relative"
					quarkly-title="Advanced Usage"
					sm-width="50%"
					sm-left={0}
					sm-right={0}
					sm-text-align="center"
					xs-width="100%"
				>
					<Link
						href="/docs#advanced-usage"
						font="--leadSmall"
						color="--greyL2"
						text-decoration-line="initial"
						text-transform="uppercase"
						hover-color="--greyL1"
						padding="8px 16px 8px 16px"
						display="block"
						letter-spacing="2px"
						quarkly-title="Link"
						transition="color .1s ease 0s"
						sm-font="normal 400 12px/16px Source Sans Pro, sans-serif"
						xs-text-align="left"
						xs-padding="12px 16px 12px 16px"
					>
						Advanced Usage
					</Link>
				</Box>
				<Box
					position="relative"
					quarkly-title="Quarkly Widgets"
					sm-width="50%"
					sm-left={0}
					sm-right={0}
					sm-text-align="center"
					xs-width="100%"
				>
					<Link
						href="/docs#quarkly-widgets"
						font="--leadSmall"
						color="--greyL2"
						text-decoration-line="initial"
						text-transform="uppercase"
						hover-color="--greyL1"
						padding="8px 16px 8px 16px"
						display="block"
						letter-spacing="2px"
						quarkly-title="Link"
						transition="color .1s ease 0s"
						sm-font="normal 400 12px/16px Source Sans Pro, sans-serif"
						xs-text-align="left"
						xs-padding="12px 16px 12px 16px"
					>
						Quarkly Widgets
					</Link>
				</Box>
				<Box
					position="relative"
					quarkly-title="API Reference"
					right="-16px"
					sm-width="50%"
					sm-left={0}
					sm-right={0}
					sm-text-align="center"
					xs-width="100%"
				>
					<Link
						href="/docs#api-reference"
						font="--leadSmall"
						color="--greyL2"
						text-decoration-line="initial"
						text-transform="uppercase"
						hover-color="--greyL1"
						padding="8px 16px 8px 16px"
						display="block"
						letter-spacing="2px"
						quarkly-title="Link"
						transition="color .1s ease 0s"
						sm-font="normal 400 12px/16px Source Sans Pro, sans-serif"
						xs-text-align="left"
						xs-padding="12px 16px 12px 16px"
					>
						API Reference
					</Link>
				</Box>
			</Box>
		</Box>
		<Box
			display="flex"
			justify-content="space-between"
			box-sizing="border-box"
			flex-direction="column"
			position="relative"
			z-index="1"
			quarkly-title="Badges"
			background="--color-greyL2"
			overflow-x="hidden"
			overflow-y="visible"
			padding="32px 16px 32px 16px"
			sm-padding="16px 16px 16px 16px"
			md-padding="24px 16px 24px 16px"
			lg-padding="32px 16px 32px 16px"
		>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="0 auto -4px auto"
				display="flex"
				align-items="center"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
				flex-wrap="wrap"
			>
				<Link
					href="https://github.com/quarkly/atomize/workflows/CI/badge.svg"
					display="flex"
					text-decoration-line="initial"
					margin="0px 4px 4px 0px"
					target="_blank"
				>
					<Image src="https://github.com/quarkly/atomize/workflows/CI/badge.svg" />
				</Link>
				<Link
					href="https://codecov.io/github/quarkly/atomize"
					display="flex"
					text-decoration-line="initial"
					margin="0px 4px 4px 0px"
					target="_blank"
				>
					<Image src="https://camo.githubusercontent.com/02e7a15e9adf4139e4af108080c0b9ee2dcd5321/68747470733a2f2f666c61742e62616467656e2e6e65742f636f6465636f762f632f6769746875622f717561726b6c792f61746f6d697a653f63616368653d33303030" />
				</Link>
				<Link
					href="https://npmjs.com/package/@quarkly/atomize"
					display="flex"
					text-decoration-line="initial"
					margin="0px 4px 4px 0px"
					target="_blank"
				>
					<Image src="https://camo.githubusercontent.com/03f43135e80bc5caf43888d25243383a181d7334/68747470733a2f2f666c61742e62616467656e2e6e65742f6e706d2f762f40717561726b6c792f61746f6d697a653f63616368653d33303030" />
				</Link>
				<Link
					href="https://camo.githubusercontent.com/a3d4e61babfb298637d411a8e471072266a17dce/68747470733a2f2f666c61742e62616467656e2e6e65742f62616467652f6c6963656e73652f4d49542f626c7565"
					display="flex"
					text-decoration-line="initial"
					margin="0px 4px 4px 0px"
					target="_blank"
				>
					<Image src="https://camo.githubusercontent.com/a3d4e61babfb298637d411a8e471072266a17dce/68747470733a2f2f666c61742e62616467656e2e6e65742f62616467652f6c6963656e73652f4d49542f626c7565" />
				</Link>
			</Box>
		</Box>
		<Box
			box-sizing="border-box"
			padding="60px 16px 240px 16px"
			background="--color-greyL5"
			position="relative"
			z-index="1"
			quarkly-title="Advantages"
			overflow-x="hidden"
			overflow-y="visible"
			md-padding="40px 16px 220px 16px"
			sm-padding="20px 16px 200px 16px"
			xs-padding="40px 16px 20px 16px"
		>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="0 auto 0 auto"
				display="flex"
				box-sizing="border-box"
				flex-direction="column"
				lg-max-width="970px"
				md-max-width="750px"
			>
				<Box display="flex" flex-wrap="wrap" margin="0px -16px 0px -16px" xs-margin="0px 0 0px 0">
					<Box
						display="flex"
						width="33.33%"
						md-margin="mixed 24px mixed 0"
						sm-margin="10px 0 10px 0"
						margin="20px 0 20px 0"
						padding="0px 16px 0px 16px"
						box-sizing="border-box"
						sm-width="50%"
						sm-order="4"
						xs-width="100%"
						xs-padding="0px 0 0px 16px"
						xs-margin="8px 0 8px 0"
						position="relative"
					>
						<Box
							width="4px"
							height="4px"
							background="--color-greyD4"
							min-width={0}
							min-height={0}
							border-radius="50%"
							overflow-x="hidden"
							overflow-y="hidden"
							position="absolute"
							top="12px"
							display="none"
							xs-display="block"
							left={0}
						/>
						<Text
							font="normal 600 17.5px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							text-align="left"
							sm-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
							margin="0 0 0 0"
						>
							Support for hover and any other pseudo-classes
						</Text>
					</Box>
					<Box
						display="flex"
						width="33.33%"
						md-margin="mixed 24px mixed 24px"
						sm-margin="10px 0 10px 0"
						margin="20px 0 20px 0"
						padding="0px 16px 0px 16px"
						box-sizing="border-box"
						sm-width="50%"
						sm-order="5"
						xs-width="100%"
						xs-padding="0px 0 0px 16px"
						xs-margin="8px 0 8px 0"
						position="relative"
					>
						<Box
							width="4px"
							height="4px"
							background="--color-greyD4"
							min-width={0}
							min-height={0}
							border-radius="50%"
							overflow-x="hidden"
							overflow-y="hidden"
							position="absolute"
							top="12px"
							display="none"
							xs-display="block"
							left={0}
						/>
						<Text
							font="normal 600 17.5px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							text-align="left"
							sm-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
							margin="0 0 0 0"
						>
							Short aliases for each property
						</Text>
					</Box>
					<Box
						display="flex"
						width="33.33%"
						md-margin="mixed 0 mixed 24px"
						sm-margin="10px 0 10px 0"
						margin="20px 0 20px 0"
						padding="0px 16px 0px 16px"
						box-sizing="border-box"
						sm-width="50%"
						sm-order="6"
						xs-width="100%"
						xs-padding="0px 0 0px 16px"
						xs-margin="8px 0 8px 0"
						position="relative"
					>
						<Box
							width="4px"
							height="4px"
							background="--color-greyD4"
							min-width={0}
							min-height={0}
							border-radius="50%"
							overflow-x="hidden"
							overflow-y="hidden"
							position="absolute"
							top="12px"
							display="none"
							xs-display="block"
							left={0}
						/>
						<Text
							font="normal 600 17.5px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							text-align="left"
							sm-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
							margin="0 0 0 0"
						>
							Minimalistic interface
						</Text>
					</Box>
					<Box
						width="33.33%"
						display="flex"
						md-margin="mixed 24px mixed 0"
						sm-margin="10px 0 10px 0"
						margin="20px 0 20px 0"
						padding="0px 16px 0px 16px"
						box-sizing="border-box"
						sm-width="50%"
						sm-order="1"
						xs-width="100%"
						xs-padding="0px 0 0px 16px"
						xs-margin="8px 0 8px 0"
						position="relative"
					>
						<Box
							width="4px"
							height="4px"
							background="--color-greyD4"
							min-width={0}
							min-height={0}
							border-radius="50%"
							overflow-x="hidden"
							overflow-y="hidden"
							position="absolute"
							top="12px"
							display="none"
							xs-display="block"
							left={0}
						/>
						<Text
							font="normal 600 17.5px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							text-align="left"
							sm-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
							margin="0 0 0 0"
						>
							Opportunity to create components that support atomic CSS and themes
						</Text>
					</Box>
					<Box
						display="flex"
						width="33.33%"
						md-margin="mixed 24px mixed 24px"
						sm-margin="10px 0 10px 0"
						margin="20px 0 20px 0"
						padding="0px 16px 0px 16px"
						box-sizing="border-box"
						sm-width="50%"
						sm-order="3"
						xs-width="100%"
						xs-padding="0px 0 0px 16px"
						xs-margin="8px 0 8px 0"
						position="relative"
					>
						<Box
							width="4px"
							height="4px"
							background="--color-greyD4"
							min-width={0}
							min-height={0}
							border-radius="50%"
							overflow-x="hidden"
							overflow-y="hidden"
							position="absolute"
							top="12px"
							display="none"
							xs-display="block"
							left={0}
						/>
						<Text
							font="normal 600 17.5px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							text-align="left"
							sm-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
							margin="0 0 0 0"
						>
							Opportunity to set styles for specific media breakpoints
						</Text>
					</Box>
					<Box
						display="flex"
						width="33.33%"
						md-margin="mixed 0 mixed 24px"
						sm-margin="10px 0 10px 0"
						margin="20px 0 20px 0"
						padding="0px 16px 0px 16px"
						box-sizing="border-box"
						sm-width="50%"
						sm-order="2"
						xs-width="100%"
						xs-padding="0px 0 0px 16px"
						xs-margin="8px 0 8px 0"
						position="relative"
					>
						<Box
							width="4px"
							height="4px"
							background="--color-greyD4"
							min-width={0}
							min-height={0}
							border-radius="50%"
							overflow-x="hidden"
							overflow-y="hidden"
							position="absolute"
							top="12px"
							display="none"
							xs-display="block"
							left={0}
						/>
						<Text
							font="normal 600 17.5px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							text-align="left"
							sm-font="normal 700 16px/1.5 --fontFamily-googleSourceSansPro"
							margin="0 0 0 0"
						>
							Option to use variables from the theme in composite CSS properties
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
		<Box
			min-height={0}
			height={0}
			quarkly-title="Demo"
			overflow-y="visible"
			padding="0px 16px 0px 16px"
			xs-display="none"
		>
			<Box
				width="100%"
				max-width="970px"
				margin="0 auto 0 auto"
				position="relative"
				background="--color-greyL5"
				box-shadow="0 19px 38px 0 rgba(0, 0, 0, 0.3),0 15px 12px 0 rgba(0, 0, 0, 0.22)"
				z-index="2"
				display="flex"
				justify-content="space-around"
				align-items="center"
				transform="translateY(-50%)"
				quarkly-title="Container"
				border-radius="4px"
				overflow-x="hidden"
				overflow-y="hidden"
				box-sizing="border-box"
				lg-max-width="750px"
				md-max-width="750px"
			>
				<Components.CodeSandBox
					border-width={0}
					border-style="none"
					border-radius="4px"
					overflow-x="hidden"
					overflow-y="hidden"
					margin="-2px 0px -2px 0px"
					height="360px"
				/>
			</Box>
		</Box>
		<Box
			quarkly-title="Read the docs"
			padding="200px 16px 60px 16px"
			background="#22262e"
			display="flex"
			justify-content="center"
			align-items="center"
			flex-direction="column"
			overflow-x="hidden"
			overflow-y="visible"
			md-padding="190px 16px 40px 16px"
			xs-padding="40px 16px 40px 16px"
			xs-display="none"
		>
			<Box
				display="flex"
				margin="16px 0px 0px 0px"
				width="100%"
				max-width="1170px"
				quarkly-title="Container"
				lg-max-width="970px"
				md-max-width="750px"
				sm-justify-content="center"
				xs-margin="0px 0px 0px 0px"
			>
				<Box
					quarkly-title="Docs"
					display="flex"
					width="100%"
					justify-content="flex-end"
					margin="0px 4px 0px 0px"
					sm-width="auto"
				>
					<Link
						href="/docs"
						font="normal 500 18px/20px --fontFamily-googleSourceSansPro"
						color="#FFFFFF"
						background="--color-accentBlue"
						padding="14px 20px 14px 20px"
						border-radius="4px"
						text-decoration-line="initial"
						hover-opacity=".9"
						quarkly-title="Link"
						transition="opacity .1s ease 0s"
						text-shadow="0 1px 0 rgba(0, 0, 0, 0.25)"
						opacity="1"
					>
						Read the docs
					</Link>
				</Box>
				<Box
					quarkly-title="GitHub"
					display="flex"
					width="100%"
					justify-content="flex-start"
					margin="0px 0px 0px 4px"
					sm-width="auto"
				>
					<Link
						href="https://github.com/quarkly/atomize"
						font="normal 500 18px/20px --fontFamily-googleSourceSansPro"
						color="#FFFFFF"
						background="#4F4F4F"
						padding="14px 20px 14px 20px"
						border-radius="4px"
						text-decoration-line="initial"
						hover-opacity=".9"
						quarkly-title="Link"
						transition="opacity .1s ease 0s"
						text-shadow="0 1px 0 rgba(0, 0, 0, 0.25)"
						opacity="1"
						target="_blank"
					>
						GitHub
					</Link>
				</Box>
			</Box>
		</Box>
		<Box
			background="--color-greyL2"
			padding="80px 16px 80px 16px"
			display="block"
			overflow-x="hidden"
			overflow-y="visible"
			md-padding="60px 16px 60px 16px"
			sm-padding="40px 16px 40px 16px"
			xs-padding="20px 16px 40px 16px"
			quarkly-title="Molecules"
		>
			<Box
				quarkly-title="Container"
				margin="0px auto 0px auto"
				height="100%"
				flex="1 0 auto"
				display="flex"
				flex-wrap="wrap"
				max-width="1170px"
				width="100%"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
			>
				<Box display="flex" justify-content="space-between" sm-flex-direction="column">
					<Box width="100%" margin="0px 48px 0px 0" sm-margin="40px 0px 0px 0px">
						<Text
							font="normal 700 36px/1.2 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							margin="0 0 24px 0"
							lg-font="normal 700 28px/1.2 --fontFamily-googleSourceSansPro"
							sm-margin="0 0 20px 0"
						>
							<Link
								href="https://molecules.quarkly.io/"
								target="_blank"
								color="--accentBlue"
								text-decoration-line="initial"
								hover-color="--greyD4"
								transition="color 0.1s ease 0s"
							>
								Molecules
							</Link>
							{" "}— a 
UI component library where Atomize is used
						</Text>
						<Text margin="8px 0 0 0" font="normal 400 18px/1.5 --fontFamily-googleSourceSansPro" color="--greyD4">
							<Strong>
								8 elements
							</Strong>
							{" "}for designing an interface for your website or app:
						</Text>
						<Box
							display="flex"
							width="100%"
							justify-content="space-around"
							text-align="center"
							margin="40px 0px 0px 0px"
							md-margin="20px 0px 0px 0px"
							sm-margin="0px 0px 0x 0px"
							sm-justify-content="flex-start"
						>
							<Box text-align="left" width="25%" sm-width="20%" xs-width="25%">
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-box--default"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Box"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
								>
									Box
								</Link>
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-button--submit"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Button"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
									sm-margin="6px 0px 12px 0px"
								>
									Button
								</Link>
							</Box>
							<Box width="25%" sm-width="20%" xs-width="25%">
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-line--default"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Line"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
								>
									Line
								</Link>
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-image--default"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Image"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
									sm-margin="6px 0px 12px 0px"
								>
									Image
								</Link>
							</Box>
							<Box width="25%" sm-width="20%" xs-width="25%">
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-input--default-input"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Input"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
								>
									Input
								</Link>
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-select--default"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Select"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
									sm-margin="6px 0px 12px 0px"
								>
									Select
								</Link>
							</Box>
							<Box text-align="right" width="25%" sm-width="20%" xs-width="25%">
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-list--ul-default"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="List"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
								>
									List
								</Link>
								<Link
									href="https://molecules.quarkly.io/?path=/story/primitives-text--default"
									target="_blank"
									font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
									color="--greyD4"
									margin="12px 0px 0px 0px"
									text-decoration-line="initial"
									hover-color="--accentBlue"
									quarkly-title="Text"
									display="block"
									text-align="left"
									transition="color .1s ease 0s"
									sm-margin="6px 0px 12px 0px"
								>
									Text
								</Link>
							</Box>
						</Box>
					</Box>
					<Box width="100%" display="flex" justify-content="center" align-items="flex-start">
						<Link
							href="https://quarkly.io"
							display="block"
							target="_blank"
							background="rgba(0, 0, 0, 0) url() 0% 0% /contain no-repeat"
							width="100%"
							border-radius="4px"
						>
							<Image width="100%" src="https://uploads.quarkly.io/atomize-site/molecules-quarkly-storybook.png" max-width="560px" />
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
		<Box
			quarkly-title="Quarkly"
			background="--color-greyL5"
			padding="80px 16px 80px 16px"
			display="block"
			overflow-x="hidden"
			overflow-y="visible"
			md-padding="60px 16px 60px 16px"
			sm-padding="40px 16px 40px 16px"
			xs-padding="20px 16px 40px 16px"
		>
			<Box
				quarkly-title="Container"
				margin="0px auto 0px auto"
				height="100%"
				flex="1 0 auto"
				display="flex"
				flex-wrap="wrap"
				max-width="1170px"
				width="100%"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
			>
				<Box display="flex" justify-content="space-between" sm-flex-direction="column">
					<Box width="100%" display="flex" justify-content="center" align-items="flex-start">
						<Link
							href="https://quarkly.io"
							display="block"
							target="_blank"
							background="rgba(0, 0, 0, 0) url() 0% 0% /contain no-repeat"
							width="100%"
							border-radius="4px"
						>
							<Image width="100%" src="https://uploads.quarkly.io/atomize-site/quarkly-ui.png" max-width="560px" />
						</Link>
					</Box>
					<Box width="100%" margin="0px 0px 0px 48px" sm-margin="40px 0px 0px 0px">
						<Text
							font="normal 700 36px/1.2 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							margin="0 0 24px 0"
							lg-font="normal 700 28px/1.2 --fontFamily-googleSourceSansPro"
							sm-margin="0 0 20px 0"
						>
							Atomize is the basis for{" "}
							<Link
								href="https://quarkly.io"
								target="_blank"
								color="--accentBlue"
								text-decoration-line="initial"
								hover-color="--greyD4"
								transition="color 0.1s ease 0s"
							>
								Quarkly.io
							</Link>
							{" "}components
						</Text>
						<Text margin="8px 0 0 0" font="normal 400 18px/1.5 --fontFamily-googleSourceSansPro" color="--greyD4">
							Quarkly is a design tool
for creating websites
and web apps, using components, react.js, and atomic CSS.
						</Text>
						<Text margin="8px 0 0 0" font="normal 400 18px/1.5 --fontFamily-googleSourceSansPro" color="--greyD4">
							Atomize allows you to set styles for a specific component depending on a breakpoint, configure their states, add variables from the theme, transfer the desired props on a special panel (Props tab), and more.
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
		<Box
			padding="32px 16px 32px 16px"
			background="#0e1317"
			overflow-x="hidden"
			overflow-y="visible"
			quarkly-title="Footer"
			md-padding="24px 16px 24px 16px"
			sm-margin="0px 0px 80px 0px"
		>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="0px auto 0px auto"
				height="100%"
				flex="1 0 auto"
				display="flex"
				flex-wrap="wrap"
				padding="0px 16px 0px 16px"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
				xs-padding="0px 0 0px 0"
				xs-margin="0px -16px 0px -16px"
			>
				<Link
					font="normal 400 14px/20px --fontFamily-googleSourceSansPro"
					color="--greyL2"
					text-decoration-line="initial"
					text-transform="uppercase"
					hover-color="--greyL1"
					padding="8px 16px 8px 16px"
					display="block"
					href="https://github.com/quarkly/atomize"
					letter-spacing="2px"
					transition="color .1s ease 0s"
					quarkly-title="GitHub"
					target="_blank"
				>
					GitHub
				</Link>
				<Link
					href="/docs"
					font="normal 400 14px/20px --fontFamily-googleSourceSansPro"
					color="--greyL2"
					text-decoration-line="initial"
					text-transform="uppercase"
					hover-color="--greyL1"
					padding="8px 16px 8px 16px"
					display="block"
					letter-spacing="2px"
					transition="color .1s ease 0s"
					quarkly-title="Docs"
				>
					Docs
				</Link>
				<Link
					font="normal 400 14px/20px --fontFamily-googleSourceSansPro"
					color="--greyL2"
					text-decoration-line="initial"
					text-transform="uppercase"
					hover-color="--greyL1"
					padding="8px 16px 8px 16px"
					display="block"
					href="https://quarkly.io"
					letter-spacing="2px"
					transition="color .1s ease 0s"
					quarkly-title="Quarkly"
					target="_blank"
				>
					Quarkly
				</Link>
				<Link
					font="normal 400 14px/20px --fontFamily-googleSourceSansPro"
					color="--greyL2"
					text-decoration-line="initial"
					text-transform="uppercase"
					hover-color="--greyL1"
					padding="8px 16px 8px 16px"
					display="block"
					href="https://molecules.quarkly.io/"
					letter-spacing="2px"
					transition="color .1s ease 0s"
					quarkly-title="Molecules"
					target="_blank"
				>
					Molecules
				</Link>
				<Link
					href="https://dev.to/alex_kols/why-we-gave-up-on-the-idea-of-using-styled-system-to-create-components-and-invented-a-new-wheel-5c4n"
					font="normal 400 14px/20px --fontFamily-googleSourceSansPro"
					color="--greyL2"
					text-decoration-line="initial"
					text-transform="uppercase"
					hover-color="--greyL1"
					padding="8px 16px 8px 16px"
					display="block"
					letter-spacing="2px"
					transition="color .1s ease 0s"
					quarkly-title="Dev.to"
					target="_blank"
				>
					Dev.to
				</Link>
			</Box>
		</Box>
	</Theme>;
});