"use strict";(self.webpackChunkgeostyler_site=self.webpackChunkgeostyler_site||[]).push([[251],{5163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(4848),s=t(8453);const o={},l="Converting Styles",a={id:"beginner-workshop/style-parser/convert",title:"Converting Styles",description:"Since every Style Parser can both read and write, we are also able to convert between different formats.",source:"@site/docs/beginner-workshop/style-parser/convert.md",sourceDirName:"beginner-workshop/style-parser",slug:"/beginner-workshop/style-parser/convert",permalink:"/geostyler-site/docs/beginner-workshop/style-parser/convert",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Style Parsers",permalink:"/geostyler-site/docs/beginner-workshop/style-parser/"},next:{title:"Parsing an OpenLayers Style",permalink:"/geostyler-site/docs/beginner-workshop/style-parser/parse-ol"}},i={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"converting-styles",children:"Converting Styles"}),"\n",(0,r.jsx)(n.p,{children:"Since every Style Parser can both read and write, we are also able to convert between different formats.\nThis can come in very handy if you already have a bunch of styles in a certain styling format, but you now want to use\nanother styling format."}),"\n",(0,r.jsx)(n.p,{children:"In this section, we will convert OpenLayers styles to SLD, in order to persist them as files."}),"\n",(0,r.jsx)(n.p,{children:"In order to convert styles, we have to first read the input style and create thereby a GeoStyler style object. This object can\nthen be used to convert to the output style format, by using the appropriate Style Parser."}),"\n",(0,r.jsxs)(n.p,{children:["Imagine you want to translate a text from English to French but you only have a ",(0,r.jsx)(n.code,{children:"English <-> German"})," and a ",(0,r.jsx)(n.code,{children:"German <-> French"})," dictionary.\nYou cannot directly translate from English to French, but you can translate from English to German in a first and from German to French in\na second step. With GeoStyler we do exactly the same. At first, we translate from any input style to the internal GeoStyler format. Then,\nwe translate from our internal GeoStyler format to any output style. In contrast to translating texts, we do not have to care for grammar,\nas can thereby be sure that the translations actually make sense."]}),"\n",(0,r.jsx)(n.p,{children:"Let's import the required parsers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import OlParser from 'geostyler-openlayers-parser';\nimport SldParser from 'geostyler-sld-parser';\n"})}),"\n",(0,r.jsx)(n.p,{children:"and instantiate them"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const olParser = new OlParser();\nconst sldParser = new SldParser();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, we need an OpenLayers style that we want to convert"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Stroke, Fill, Style, Circle } from 'ol/style';\n\nconst olStyle = new Style({\n    stroke: new Stroke({\n        color: 'rgba(255, 255, 255, 1.0)',\n        width: 1\n    }),\n    fill: new Fill({\n        color: 'rgba(0, 0, 0, 1)'\n    }),\n    image: new Circle({\n        fill: new Fill({\n            color: 'rgba(255, 0, 0, 1.0)'\n        }),\n        radius: 5\n    })\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["At first, we read the OpenLayers style with the ",(0,r.jsx)(n.code,{children:"geostyler-openlayers-parser"})," and use the output as argument for the\nwrite method of the ",(0,r.jsx)(n.code,{children:"geostyler-sld-parser"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"olParser.readStyle(olStyle)\n    .then((geostylerStyle) => {\n        return sldParser.writeStyle(geostylerStyle.output);\n    })\n    .then((sld) => {\n        // Run your actions with the converted style here\n        console.log(sld.output);\n    });\n"})}),"\n",(0,r.jsx)(n.p,{children:"For our application, it will work as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React, { useState, useEffect } from 'react';\nimport { Stroke, Fill, Style, Circle } from 'ol/style';\n\nimport SldParser from 'geostyler-sld-parser';\nimport OlParser from 'geostyler-openlayers-parser';\n\nconst sldParser = new SldParser();\nconst olParser = new OlParser();\n\nfunction App() {\n\n  const originalOlStyle = new Style({\n      stroke: new Stroke({\n          color: 'rgba(255, 255, 255, 1.0)',\n          width: 1\n      }),\n      fill: new Fill({\n          color: 'rgba(0, 0, 0, 1)'\n      }),\n      image: new Circle({\n          fill: new Fill({\n              color: 'rgba(255, 0, 0, 1.0)'\n          }),\n          radius: 5\n      })\n  });\n\n  const [sld, setSld] = useState('');\n  const [style, setStyle] = useState();\n\n  useEffect(() => {\n    olParser.readStyle(originalOlStyle)\n      .then((gsStyle) => {\n        setStyle(gsStyle.output);\n        return sldParser.writeStyle(gsStyle.output);\n      })\n      .then((sldStyle) => {\n        setSld(sldStyle.output);\n      });\n  }, []);\n\n  return (\n    <div>\n      <p>\n        {JSON.stringify(originalOlStyle)}\n      </p>\n      <p>\n        {JSON.stringify(style)}\n      </p>\n      <p>\n        {sld}\n      </p>\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(7507).A+"",children:(0,r.jsx)(n.img,{alt:"To SLD converted OpenLayers style",src:t(5177).A+"",width:"1417",height:"219"})})}),"\n",(0,r.jsx)(n.p,{children:"The first section shows the original OpenLayers style. The second section the parsed OpenLayers style as GeoStyler style. The third section shows\nthe written SLD style."})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7507:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/converted-089e301478b111da67ec8f73b72f0f57.png"},5177:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/converted-089e301478b111da67ec8f73b72f0f57.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);