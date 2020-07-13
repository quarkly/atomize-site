import React from "react";
import theme from "theme";
import { Theme, Image, Box, Text, Link } from "@quarkly/widgets";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
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
			>
				<Box display="flex">
					<Image width="220px" height="220px" src="http://dev8.aesarine.ru/atomize-logo.svg" flex="1 0 auto" />
				</Box>
				<Box margin="0px 0px 0px 40px">
					<Text font="normal 500 42px/36px --fontFamily-googleSourceSansPro" color="--greyL5" letter-spacing="3px" margin="0 0 17px 0">
						ATOMIZE
					</Text>
					<Text font="--base" color="--greyL5" margin="8px 0 32px 0" letter-spacing="1px">
						Library for creating atomic react components
						<br />
						Inspired by tachyons and styled-system
					</Text>
					<Box margin="16px 0px 0px 0px">
						<Text font="--code" color="--accentBlue" margin="0 0 0 0" display="inline-block">
							npm i{" "}
						</Text>
						<Text font="--code" color="--accentGreen" margin="0 0 0 0" display="inline-block">
							@quarkly/atomize styled-components
						</Text>
					</Box>
					<Box display="flex" margin="16px 0px 0px 0px">
						<Link
							href="/doc#getting-started"
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
			>
				<Box position="relative" quarkly-title="Getting Started" left="-16px">
					<Link
						href="/doc#getting-started"
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
					>
						Getting Started
					</Link>
				</Box>
				<Box position="relative" quarkly-title="Advanced Usage">
					<Link
						href="/doc#advanced-usage"
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
					>
						Advanced Usage
					</Link>
				</Box>
				<Box position="relative" quarkly-title="Quarkly Widgets">
					<Link
						href="/doc#quarkly-widgets"
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
					>
						Quarkly Widgets
					</Link>
				</Box>
				<Box position="relative" quarkly-title="API Reference" right="-16px">
					<Link
						href="/doc#quarkly-widgets"
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
			padding="0px 16px 0px 16px"
		>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="32px auto 32px auto"
				display="flex"
				align-items="center"
				box-sizing="border-box"
				lg-max-width="970px"
				md-max-width="750px"
			>
				<Link href="#" display="flex" text-decoration-line="initial" margin="0px 4px 0px 0px">
					<Image src="https://github.com/quarkly/atomize/workflows/CI/badge.svg" />
				</Link>
				<Link href="#" display="flex" text-decoration-line="initial" margin="0px 4px 0px 0px">
					<Image src="https://camo.githubusercontent.com/02e7a15e9adf4139e4af108080c0b9ee2dcd5321/68747470733a2f2f666c61742e62616467656e2e6e65742f636f6465636f762f632f6769746875622f717561726b6c792f61746f6d697a653f63616368653d33303030" />
				</Link>
				<Link href="#" display="flex" text-decoration-line="initial" margin="0px 4px 0px 0px">
					<Image src="https://camo.githubusercontent.com/03f43135e80bc5caf43888d25243383a181d7334/68747470733a2f2f666c61742e62616467656e2e6e65742f6e706d2f762f40717561726b6c792f61746f6d697a653f63616368653d33303030" />
				</Link>
				<Link href="#" display="flex" text-decoration-line="initial" margin="0px 4px 0px 0px">
					<Image src="https://camo.githubusercontent.com/a3d4e61babfb298637d411a8e471072266a17dce/68747470733a2f2f666c61742e62616467656e2e6e65742f62616467652f6c6963656e73652f4d49542f626c7565" />
				</Link>
			</Box>
		</Box>
		<Box
			box-sizing="border-box"
			padding="80px 16px 260px 16px"
			background="--color-greyL5"
			position="relative"
			z-index="1"
			quarkly-title="Advantages"
			overflow-x="hidden"
			overflow-y="visible"
		>
			<Box
				quarkly-title="Container"
				width="100%"
				max-width="1170px"
				margin="0 auto 0 auto"
				display="block"
				box-sizing="border-box"
				flex-direction="column"
				lg-max-width="970px"
				md-max-width="750px"
			>
				<Box quarkly-title="Features">
					<Box display="flex">
						<Text
							font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							display="inline-block"
							width="100%"
							margin="0 32px 0 0"
							text-align="left"
						>
							Поддержка hover и других псевдоклассов
						</Text>
						<Text
							font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							display="inline-block"
							width="100%"
							margin="0 32px 0 32px"
							text-align="left"
						>
							Короткие алиасы на каждое свойство
						</Text>
						<Text
							font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							display="inline-block"
							width="100%"
							margin="0 0 0 32px"
							text-align="left"
						>
							Минималистичный интерфейс
						</Text>
					</Box>
					<Box height="48px" />
					<Box display="flex">
						<Text
							font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							display="inline-block"
							width="100%"
							margin="0 32px 0 0"
							text-align="left"
						>
							Создание компонентов с поддержкой атомарного css и тем
						</Text>
						<Text
							font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							display="inline-block"
							width="100%"
							margin="0 32px 0 32px"
							text-align="left"
						>
							Применение стилей для конкретных медиа-брейкпоинтов
						</Text>
						<Text
							font="normal 700 18px/1.5 --fontFamily-googleSourceSansPro"
							color="--greyD4"
							display="inline-block"
							width="100%"
							margin="0 0 0 32px"
							text-align="left"
						>
							Использование переменных из темы в составных css-свойствах
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
				lg-max-width="970px"
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
		>
			<Box
				display="flex"
				margin="16px 0px 0px 0px"
				width="100%"
				max-width="1170px"
				quarkly-title="Container"
				lg-max-width="970px"
				md-max-width="750px"
			>
				<Box
					quarkly-title="Docs"
					display="flex"
					width="100%"
					justify-content="flex-end"
					margin="0px 4px 0px 0px"
				>
					<Link
						href="/doc#getting-started"
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
					>
						GitHub
					</Link>
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
				<Box display="flex" justify-content="space-between">
					<Box width="100%" display="flex" align-items="center" justify-content="center">
						<Link href="#">
							<Image width="100%" src="http://dev8.aesarine.ru/scr1.png" flex="1 0 auto" border-radius="4px" />
						</Link>
					</Box>
					<Box width="100%" margin="0px 0px 0px 48px">
						<Text font="normal 700 36px/1.2 --fontFamily-googleSourceSansPro" color="--greyD4" max-width="720px" margin="0 0 32px 0">
							Создавайте виджеты для интерактивного редактирования в проекте{" "}
							<Link
								href="https://quarkly.io"
								target="_blank"
								color="--accentBlue"
								text-decoration-line="initial"
								hover-color="--greyD4"
							>
								Quarkly.io
							</Link>
						</Text>
						<Text max-width="640px" margin="0 0 0 0" font="--base" color="--greyD4">
							Quarkly – это гибрид графического редактора, конструктора сайтов и классических IDE. В Quarkly любой 
фронтендер

 и дизайнер могут создать собственный сайт или веб-приложение.
						</Text>
						<Text max-width="640px" margin="8px 0 0 0" font="--base" color="--greyD4">
							При этом, фронтендер может добавлять в систему кастомные компоненты, а дизайнер – управлять ими прямо с холста в визуальном режиме. И наоборот: созданный макет в реальном времени трансформируется в код на React.
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
				>
					GitHub
				</Link>
				<Link
					href="/doc"
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
				>
					Dev.to
				</Link>
			</Box>
		</Box>
	</Theme>;
});