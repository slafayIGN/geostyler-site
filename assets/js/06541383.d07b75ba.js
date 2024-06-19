"use strict";(self.webpackChunkgeostyler_site=self.webpackChunkgeostyler_site||[]).push([[449],{422:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(4848),s=t(8453);const l={},o="Connect Style Parsers with UI",i={id:"beginner-workshop/edit-ui/parser-to-ui",title:"Connect Style Parsers with UI",description:"We can connect Style Parsers with the UI in order to display and edit existing styles in the UI.",source:"@site/docs/beginner-workshop/edit-ui/parser-to-ui.md",sourceDirName:"beginner-workshop/edit-ui",slug:"/beginner-workshop/edit-ui/parser-to-ui",permalink:"/geostyler-site/docs/beginner-workshop/edit-ui/parser-to-ui",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PreviewMap Component",permalink:"/geostyler-site/docs/beginner-workshop/edit-ui/preview"},next:{title:"Data Parsers",permalink:"/geostyler-site/docs/beginner-workshop/data-parser/"}},a={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connect-style-parsers-with-ui",children:"Connect Style Parsers with UI"}),"\n",(0,r.jsx)(n.p,{children:"We can connect Style Parsers with the UI in order to display and edit existing styles in the UI."}),"\n",(0,r.jsxs)(n.p,{children:["In this section, we will connect an ",(0,r.jsx)(n.a,{href:"https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html",children:"OpenLayers style"})," with the UI. We will make use of the\n",(0,r.jsx)(n.code,{children:"geostyler-openlayers-parser"})," in order to read the OpenLayers style. The general approach is the same for all parsers."]}),"\n",(0,r.jsxs)(n.p,{children:["At first, we have to import the ",(0,r.jsx)(n.code,{children:"geostyler-openlayers-parser"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import OlParser from 'geostyler-openlayers-parser';\n"})}),"\n",(0,r.jsx)(n.p,{children:"and then instantiate it"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const olParser = new OlParser();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then, we need an OpenLayers style object"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Stroke, Fill, Style, Circle } from 'ol/style';\n\nconst olStyle = new Style({\n    stroke: new Stroke({\n        color: 'rgba(255, 255, 255, 1.0)',\n        width: 1\n    }),\n    fill: new Fill({\n        color: 'rgba(0, 0, 0, 1)'\n    }),\n    image: new Circle({\n        fill: new Fill({\n            color: 'rgba(255, 0, 0, 1.0)'\n        }),\n        radius: 5\n    })\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"which we then can parse into the GeoStyler style format."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"olParser.readStyle(olStyle)\n    .then((geostylerStyle) => {\n        // Run your actions with the parsed style here\n    });\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In our application we make use of React's state-variables. Please notice the renaming of the OpenLayers class\n",(0,r.jsx)(n.code,{children:"Style"})," to ",(0,r.jsx)(n.code,{children:"OlStyle"})," to avoid naming conflicts with the GeoStyler ",(0,r.jsx)(n.code,{children:"Style"})," component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React, { useState, useEffect } from 'react';\nimport { Stroke, Fill, Style as OlStyle, Circle } from 'ol/style';\nimport { Style, PreviewMap } from 'geostyler';\nimport OlParser from 'geostyler-openlayers-parser';\n\nimport 'antd/dist/antd.css';\n\nconst olParser = new OlParser();\n\nfunction App() {\n\n  const olStyle = new OlStyle({\n      stroke: new Stroke({\n          color: 'rgba(255, 255, 255, 1.0)',\n          width: 1\n      }),\n      fill: new Fill({\n          color: 'rgba(0, 0, 0, 1)'\n      }),\n      image: new Circle({\n          fill: new Fill({\n              color: 'rgba(255, 0, 0, 1.0)'\n          }),\n          radius: 5\n      })\n  });\n\n  const [style, setStyle] = useState();\n\n  useEffect(() => {\n    olParser.readStyle(olStyle)\n      .then((geostylerStyle) => {\n        setStyle(geostylerStyle.output);\n      });\n  }, []);\n\n  return (\n    <div>\n        <Style\n          compact={true}\n          onStyleChange={(newStyle) => {setStyle(newStyle)}}\n        />\n        {\n          style && (\n            <PreviewMap\n              style={style}\n            />\n          )\n        }\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Afterwards we set the ",(0,r.jsx)(n.code,{children:"style"})," property of the ",(0,r.jsx)(n.code,{children:"Style"})," component to the parsed style."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React, { useState, useEffect } from 'react';\nimport { Stroke, Fill, Style as OlStyle, Circle } from 'ol/style';\nimport { Style, PreviewMap } from 'geostyler';\nimport OlParser from 'geostyler-openlayers-parser';\n\nimport 'antd/dist/antd.css';\n\nconst olParser = new OlParser();\n\nfunction App() {\n\n  const olStyle = new OlStyle({\n      stroke: new Stroke({\n          color: 'rgba(255, 255, 255, 1.0)',\n          width: 1\n      }),\n      fill: new Fill({\n          color: 'rgba(0, 0, 0, 1)'\n      }),\n      image: new Circle({\n          fill: new Fill({\n              color: 'rgba(255, 0, 0, 1.0)'\n          }),\n          radius: 5\n      })\n  });\n\n  const [style, setStyle] = useState();\n\n  useEffect(() => {\n    olParser.readStyle(olStyle)\n      .then((geostylerStyle) => {\n        setStyle(geostylerStyle.output);\n      });\n  }, []);\n\n  return (\n    <div>\n        <Style\n          style={style}\n          compact={true}\n          onStyleChange={(newStyle) => {setStyle(newStyle)}}\n        />\n        {\n          style && (\n            <PreviewMap\n              style={style}\n            />\n          )\n        }\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The style defined in the variable ",(0,r.jsx)(n.code,{children:"olStyle"})," will now be displayed directly in the ",(0,r.jsx)(n.code,{children:"Style"})," component of our application, on startup."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1693).A+"",children:(0,r.jsx)(n.img,{alt:"The OpenLayers style will be displayed directly in the GeoStyler UI.",src:t(3539).A+"",width:"1414",height:"504"})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1693:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/parser-to-ui-f724d23f0158da8b231477a545bf5f07.png"},3539:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/parser-to-ui-f724d23f0158da8b231477a545bf5f07.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);