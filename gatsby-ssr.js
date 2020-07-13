
const React = require("react");
const QAPI = require("./qapi").default;
const { window, document, extend } = require("ssr-window");

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    },
    pluginOptions
) => {
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source%20Sans%20Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Passion%20One:ital,wght@0,400;0,700;0,900&display=swap" />,
  ]),
  setPostBodyComponents([
        <script
            key="QAPI"
            dangerouslySetInnerHTML={{
                __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
            }}
        />,
  ])
}
