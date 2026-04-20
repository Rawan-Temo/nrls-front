import{n as e,r as t}from"./chunk-DECur_0Z.js";import{Dt as n,Ot as r}from"./useTranslation-BKztqEmF.js";function i(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function o(e){if(Array.isArray(e))return i(e)}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function u(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=C(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function d(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function p(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function m(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?g(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){return a(e)||p(e,t)||C(e,t)||m()}function y(e){return o(e)||f(e)||C(e)||h()}function b(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function x(e){var t=b(e,`string`);return typeof t==`symbol`?t:t+``}function S(e){"@babel/helpers - typeof";return S=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},S(e)}function C(e,t){if(e){if(typeof e==`string`)return i(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}var w=function(){},ee={},te={},ne=null,re={mark:w,measure:w};try{typeof window<`u`&&(ee=window),typeof document<`u`&&(te=document),typeof MutationObserver<`u`&&(ne=MutationObserver),typeof performance<`u`&&(re=performance)}catch{}var ie=(ee.navigator||{}).userAgent,ae=ie===void 0?``:ie,T=ee,E=te,oe=ne,se=re;T.document;var D=!!E.documentElement&&!!E.head&&typeof E.addEventListener==`function`&&typeof E.createElement==`function`,ce=~ae.indexOf(`MSIE`)||~ae.indexOf(`Trident/`),le,ue=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,de=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,fe={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},pe={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},me=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],O=`classic`,he=`duotone`,ge=`sharp`,_e=`sharp-duotone`,ve=`chisel`,ye=`etch`,be=`graphite`,xe=`jelly`,Se=`jelly-duo`,Ce=`jelly-fill`,we=`notdog`,Te=`notdog-duo`,Ee=`slab`,De=`slab-press`,Oe=`thumbprint`,ke=`utility`,Ae=`utility-duo`,je=`utility-fill`,Me=`whiteboard`,Ne=`Classic`,Pe=`Duotone`,Fe=`Sharp`,Ie=`Sharp Duotone`,Le=`Chisel`,Re=`Etch`,ze=`Graphite`,Be=`Jelly`,Ve=`Jelly Duo`,He=`Jelly Fill`,Ue=`Notdog`,We=`Notdog Duo`,Ge=`Slab`,Ke=`Slab Press`,qe=`Thumbprint`,Je=`Utility`,Ye=`Utility Duo`,Xe=`Utility Fill`,Ze=`Whiteboard`,Qe=[O,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me];le={},d(d(d(d(d(d(d(d(d(d(le,O,Ne),he,Pe),ge,Fe),_e,Ie),ve,Le),ye,Re),be,ze),xe,Be),Se,Ve),Ce,He),d(d(d(d(d(d(d(d(d(le,we,Ue),Te,We),Ee,Ge),De,Ke),Oe,qe),ke,Je),Ae,Ye),je,Xe),Me,Ze);var $e={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},et={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},tt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),nt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},rt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],it={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},at=[`kit`];d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ot={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},st={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ct={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},lt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ut,dt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ft=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];ut={},d(d(d(d(d(d(d(d(d(d(ut,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),d(d(d(d(d(d(d(d(d(ut,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var pt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},mt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},ht={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},gt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ft,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),_t=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],vt=[1,2,3,4,5,6,7,8,9,10],yt=vt.concat([11,12,13,14,15,16,17,18,19,20]),bt=[].concat(y(Object.keys(mt)),_t,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY],vt.map(function(e){return`${e}x`}),yt.map(function(e){return`w-${e}`})),xt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},k=`___FONT_AWESOME___`,St=16,Ct=`fa`,wt=`svg-inline--fa`,A=`data-fa-i2svg`,Tt=`data-fa-pseudo-element`,Et=`data-fa-pseudo-element-pending`,Dt=`data-prefix`,Ot=`data-icon`,kt=`fontawesome-i2svg`,At=`async`,jt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Mt=[`::before`,`::after`,`:before`,`:after`],Nt=function(){try{return!0}catch{return!1}}();function Pt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[O]}})}var Ft=_({},fe);Ft[O]=_(_(_(_({},{"fa-duotone":`duotone`}),fe[O]),it.kit),it[`kit-duotone`]);var It=Pt(Ft),Lt=_({},nt);Lt[O]=_(_(_(_({},{duotone:`fad`}),Lt[O]),lt.kit),lt[`kit-duotone`]);var Rt=Pt(Lt),zt=_({},ht);zt[O]=_(_({},zt[O]),ct.kit);var Bt=Pt(zt),Vt=_({},pt);Vt[O]=_(_({},Vt[O]),ot.kit),Pt(Vt);var Ht=ue,Ut=`fa-layers-text`,Wt=de;Pt(_({},$e));var Gt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Kt=pe,qt=[].concat(y(at),y(bt)),Jt=T.FontAwesomeConfig||{};function Yt(e){var t=E.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Xt(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}E&&typeof E.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=v(e,2),n=t[0],r=t[1],i=Xt(Yt(n));i!=null&&(Jt[r]=i)});var Zt={styleDefault:`solid`,familyDefault:O,cssPrefix:Ct,replacementClass:wt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jt.familyPrefix&&(Jt.cssPrefix=Jt.familyPrefix);var Qt=_(_({},Zt),Jt);Qt.autoReplaceSvg||(Qt.observeMutations=!1);var j={};Object.keys(Zt).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(t){Qt[e]=t,$t.forEach(function(e){return e(j)})},get:function(){return Qt[e]}})}),Object.defineProperty(j,`familyPrefix`,{enumerable:!0,set:function(e){Qt.cssPrefix=e,$t.forEach(function(e){return e(j)})},get:function(){return Qt.cssPrefix}}),T.FontAwesomeConfig=j;var $t=[];function en(e){return $t.push(e),function(){$t.splice($t.indexOf(e),1)}}var M=St,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tn(e){if(!(!e||!D)){var t=E.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=E.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return E.head.insertBefore(t,r),e}}var nn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function rn(){for(var e=12,t=``;e-- >0;)t+=nn[Math.random()*62|0];return t}function an(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function on(e){return e.classList?an(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function sn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function cn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${sn(e[n])}" `},``).trim()}function ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function un(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function dn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function fn(e){var t=e.transform,n=e.width,r=n===void 0?St:n,i=e.height,a=i===void 0?St:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&ce?c+=`translate(${t.x/M-r/2}em, ${t.y/M-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/M}em), calc(-50% + ${t.y/M}em)) `:c+=`translate(${t.x/M}em, ${t.y/M}em) `,c+=`scale(${t.size/M*(t.flipX?-1:1)}, ${t.size/M*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var pn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function mn(){var e=Ct,t=wt,n=j.cssPrefix,r=j.replacementClass,i=pn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var hn=!1;function gn(){j.autoAddCss&&!hn&&(tn(mn()),hn=!0)}var _n={mixout:function(){return{dom:{css:mn,insertCss:gn}}},hooks:function(){return{beforeDOMElementCreation:function(){gn()},beforeI2svg:function(){gn()}}}},P=T||{};P[k]||(P[k]={}),P[k].styles||(P[k].styles={}),P[k].hooks||(P[k].hooks={}),P[k].shims||(P[k].shims=[]);var F=P[k],vn=[],yn=function(){E.removeEventListener(`DOMContentLoaded`,yn),bn=1,vn.map(function(e){return e()})},bn=!1;D&&(bn=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),bn||E.addEventListener(`DOMContentLoaded`,yn));function xn(e){D&&(bn?setTimeout(e,0):vn.push(e))}function Sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?sn(e):`<${t} ${cn(r)}>${a.map(Sn).join(``)}</${t}>`}function Cn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Tn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:wn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function En(e){return y(e).length===1?e.codePointAt(0).toString(16):null}function Dn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function On(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Dn(t);typeof F.hooks.addPack==`function`&&!r?F.hooks.addPack(e,Dn(t)):F.styles[e]=_(_({},F.styles[e]||{}),i),e===`fas`&&On(`fa`,t)}var kn=F.styles,An=F.shims,jn=Object.keys(Bt),Mn=jn.reduce(function(e,t){return e[t]=Object.keys(Bt[t]),e},{}),Nn=null,Pn={},Fn={},In={},Ln={},Rn={};function zn(e){return~qt.indexOf(e)}function Bn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!zn(i)?i:null}var Vn=function(){var e=function(e){return Tn(kn,function(t,n,r){return t[r]=Tn(n,e,{}),t},{})};Pn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Fn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Rn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in kn||j.autoFetchSvg,n=Tn(An,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});In=n.names,Ln=n.unicodes,Nn=Jn(j.styleDefault,{family:j.familyDefault})};en(function(e){Nn=Jn(e.styleDefault,{family:j.familyDefault})}),Vn();function Hn(e,t){return(Pn[e]||{})[t]}function Un(e,t){return(Fn[e]||{})[t]}function I(e,t){return(Rn[e]||{})[t]}function Wn(e){return In[e]||{prefix:null,iconName:null}}function Gn(e){var t=Ln[e],n=Hn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function L(){return Nn}var Kn=function(){return{prefix:null,iconName:null,rest:[]}};function qn(e){var t=O,n=jn.reduce(function(e,t){return e[t]=`${j.cssPrefix}-${t}`,e},{});return Qe.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Mn[r].includes(e)}))&&(t=r)}),t}function Jn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?O:t,r=It[n][e];if(n===he&&!e)return`fad`;var i=Rt[n][e]||Rt[n][r],a=e in F.styles?e:null;return i||a||null}function Yn(e){var t=[],n=null;return e.forEach(function(e){var r=Bn(j.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Xn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Zn=gt.concat(rt);function Qn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Xn(e.filter(function(e){return Zn.includes(e)})),a=Xn(e.filter(function(e){return!Zn.includes(e)})),o=v(i.filter(function(e){return r=e,!me.includes(e)}),1)[0],s=o===void 0?null:o,c=qn(i),l=_(_({},Yn(a)),{},{prefix:Jn(s,{family:c})});return _(_(_({},l),nr({values:e,family:c,styles:kn,config:j,canonical:l,givenPrefix:r})),$n(n,r,l))}function $n(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Wn(i):{},o=I(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!kn.far&&kn.fas&&!j.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var er=Qe.filter(function(e){return e!==O||e!==he}),tr=Object.keys(ht).filter(function(e){return e!==O}).map(function(e){return Object.keys(ht[e])}).flat();function nr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===he,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&er.includes(n)&&(Object.keys(s).find(function(e){return tr.includes(e)})||l.autoFetchSvg)&&(r.prefix=tt.get(n).defaultShortPrefixId,r.iconName=I(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=L()||`fas`),r}var rr=function(){function e(){s(this,e),this.definitions={}}return l(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=_(_({},e.definitions[n]||{}),t[n]),On(n,t[n]);var r=Bt[O][n];r&&On(r,t[n]),Vn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),ir=[],ar={},or={},sr=Object.keys(or);function cr(e,t){var n=t.mixoutsTo;return ir=e,ar={},Object.keys(or).forEach(function(e){sr.indexOf(e)===-1&&delete or[e]}),ir.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),S(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ar[e]||(ar[e]=[]),ar[e].push(r[e])})}e.provides&&e.provides(or)}),n}function lr(e,t){var n=[...arguments].slice(2);return(ar[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function R(e){var t=[...arguments].slice(1);(ar[e]||[]).forEach(function(e){e.apply(null,t)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return or[e]?or[e].apply(null,t):void 0}function ur(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||L();if(t)return t=I(n,t)||t,Cn(dr.definitions,n,t)||Cn(F.styles,n,t)}var dr=new rr,B={noAuto:function(){j.autoReplaceSvg=!1,j.observeMutations=!1,R(`noAuto`)},config:j,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(R(`beforeI2svg`,e),z(`pseudoElements2svg`,e),z(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,xn(function(){fr({autoReplaceSvgRoot:t}),R(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(S(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:I(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Jn(e[0]);return{prefix:n,iconName:I(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${j.cssPrefix}-`)>-1||e.match(Ht))){var r=Qn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||L(),iconName:I(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=L();return{prefix:i,iconName:I(i,e)||e}}}},library:dr,findIconDefinition:ur,toHtml:Sn},fr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?E:e;(Object.keys(F.styles).length>0||j.autoFetchSvg)&&D&&j.autoReplaceSvg&&B.dom.i2svg({node:t})};function pr(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return Sn(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(D){var t=E.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function mr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(un(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=ln(_(_({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function hr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${j.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:_(_({},i),{},{id:o}),children:r}]}]}function gr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function _r(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[j.replacementClass,a?`${j.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:_(_({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!gr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[A]=``);var v=_(_({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:_({},l.styles)}),y=r.found&&n.found?z(`generateAbstractMask`,v)||{children:[],attributes:{}}:z(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?hr(v):mr(v)}function vr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=_(_({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[A]=``);var l=_({},a.styles);un(i)&&(l.transform=fn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=ln(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function yr(e){var t=e.content,n=e.extra,r=_(_({},n.attributes),{},{class:n.classes.join(` `)}),i=ln(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var br=F.styles;function xr(e){var t=e[0],n=e[1],r=v(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${j.cssPrefix}-${Kt.GROUP}`},children:[{tag:`path`,attributes:{class:`${j.cssPrefix}-${Kt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${j.cssPrefix}-${Kt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Sr={found:!1,width:512,height:512};function Cr(e,t){!Nt&&!j.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function wr(e,t){var n=t;return t===`fa`&&j.styleDefault!==null&&(t=L()),new Promise(function(r,i){if(n===`fa`){var a=Wn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&br[t]&&br[t][e]){var o=br[t][e];return r(xr(o))}Cr(e,t),r(_(_({},Sr),{},{icon:j.showMissingIcons&&e&&z(`missingIconAbstract`)||{}}))})}var Tr=function(){},Er=j.measurePerformance&&se&&se.mark&&se.measure?se:{mark:Tr,measure:Tr},Dr=`FA "7.2.0"`,Or=function(e){return Er.mark(`${Dr} ${e} begins`),function(){return kr(e)}},kr=function(e){Er.mark(`${Dr} ${e} ends`),Er.measure(`${Dr} ${e}`,`${Dr} ${e} begins`,`${Dr} ${e} ends`)},Ar={begin:Or,end:kr},jr=function(){};function Mr(e){return typeof(e.getAttribute?e.getAttribute(A):null)==`string`}function Nr(e){var t=e.getAttribute?e.getAttribute(Dt):null,n=e.getAttribute?e.getAttribute(Ot):null;return t&&n}function Pr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function Fr(){return j.autoReplaceSvg===!0?Br.replace:Br[j.autoReplaceSvg]||Br.replace}function Ir(e){return E.createElementNS(`http://www.w3.org/2000/svg`,e)}function Lr(e){return E.createElement(e)}function Rr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ir:Lr:t;if(typeof e==`string`)return E.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Rr(e,{ceFn:n}))}),r}function zr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Br={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Rr(e),t)}),t.getAttribute(A)===null&&j.keepOriginalSource){var n=E.createComment(zr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~on(t).indexOf(j.replacementClass))return Br.replace(e);var r=RegExp(`${j.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===j.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Sn(e)}).join(`
`);t.setAttribute(A,``),t.innerHTML=a}};function Vr(e){e()}function Hr(e,t){var n=typeof t==`function`?t:jr;if(e.length===0)n();else{var r=Vr;j.mutateApproach===At&&(r=T.requestAnimationFrame||Vr),r(function(){var t=Fr(),r=Ar.begin(`mutate`);e.map(t),r(),n()})}}var Ur=!1;function Wr(){Ur=!0}function Gr(){Ur=!1}var Kr=null;function qr(e){if(oe&&j.observeMutations){var t=e.treeCallback,n=t===void 0?jr:t,r=e.nodeCallback,i=r===void 0?jr:r,a=e.pseudoElementsCallback,o=a===void 0?jr:a,s=e.observeMutationsRoot,c=s===void 0?E:s;Kr=new oe(function(e){if(!Ur){var t=L();an(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Mr(e.addedNodes[0])&&(j.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&j.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Mr(e.target)&&~Gt.indexOf(e.attributeName))if(e.attributeName===`class`&&Nr(e.target)){var r=Qn(on(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Dt,a||t),s&&e.target.setAttribute(Ot,s)}else Pr(e.target)&&i(e.target)})}}),D&&Kr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jr(){Kr&&Kr.disconnect()}function Yr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Xr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Qn(on(e));return i.prefix||=L(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Un(i.prefix,e.innerText)||Hn(i.prefix,En(e.innerText))),!i.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Zr(e){return an(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Qr(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Zr(e),s=lr(`parseNodeAttributes`,{},e);return _({iconName:r,prefix:i,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Yr(e):[],attributes:o}},s)}var ei=F.styles;function ti(e){var t=j.autoReplaceSvg===`nest`?$r(e,{styleParser:!1}):$r(e);return~t.extra.classes.indexOf(Ut)?z(`generateLayersText`,e,t):z(`generateSvgReplacementMutation`,e,t)}function ni(){return[].concat(y(rt),y(gt))}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=E.documentElement.classList,r=function(e){return n.add(`${kt}-${e}`)},i=function(e){return n.remove(`${kt}-${e}`)},a=j.autoFetchSvg?ni():me.concat(Object.keys(ei));a.includes(`fa`)||a.push(`fa`);var o=[`.${Ut}:not([${A}])`].concat(a.map(function(e){return`.${e}:not([${A}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=an(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Ar.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ti(t);n&&e.push(n)}catch(e){Nt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Hr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ti(e).then(function(e){e&&Hr([e],t)})}function ai(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ur(t||{}),i=n.mask;return i&&=(i||{}).icon?i:ur(i||{}),e(r,_(_({},n),{},{mask:i}))}}var oi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?N:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,v=e.iconName,y=e.icon;return pr(_({type:`icon`},e),function(){return R(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),_r({icons:{main:xr(y),mask:s?xr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:_(_({},N),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},si={mixout:function(){return{icon:ai(oi)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ri,e.nodeCallback=ii,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?E:t,r=e.callback;return ri(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([wr(n,r),o.iconName?wr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=v(o,2),u=l[0],d=l[1];t([e,_r({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=ln(a);o.length>0&&(n.style=o);var s;return un(i)&&(s=z(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ci={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return pr({type:`layer`},function(){R(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${j.cssPrefix}-layers`].concat(y(r)).join(` `)},children:n}]})}}}},li={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return pr({type:`counter`,content:e},function(){return R(`beforeDOMElementCreation`,{content:e,params:t}),yr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${j.cssPrefix}-layers-counter`].concat(y(a))}})})}}}},ui={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?N:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return pr({type:`text`,content:e},function(){return R(`beforeDOMElementCreation`,{content:e,params:t}),vr({content:e,transform:_(_({},N),r),extra:{attributes:s,styles:l,classes:[`${j.cssPrefix}-layers-text`].concat(y(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ce){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,vr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},di=RegExp(`"`,`ug`),fi=[1105920,1112319],pi=_(_(_(_({},{FontAwesome:{normal:`fas`,400:`fas`}}),et),xt),st),mi=Object.keys(pi).reduce(function(e,t){return e[t.toLowerCase()]=pi[t],e},{}),hi=Object.keys(mi).reduce(function(e,t){var n=mi[t];return e[t]=n[900]||y(Object.entries(n))[0][1],e},{});function gi(e){return En(y(e.replace(di,``))[0]||``)}function _i(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(di,``),r=n.codePointAt(0),i=r>=fi[0]&&r<=fi[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function vi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(mi[n]||{})[i]||hi[n]}function yi(e,t){var n=`${Et}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=an(e.children).filter(function(e){return e.getAttribute(Tt)===t})[0],o=T.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Wt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=vi(s,l),p=gi(d),m=c[0].startsWith(`FontAwesome`),h=_i(o),g=Hn(f,p),v=g;if(m){var y=Gn(p);y.iconName&&y.prefix&&(g=y.iconName,f=y.prefix)}if(g&&!h&&(!a||a.getAttribute(Dt)!==f||a.getAttribute(Ot)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=Qr(),x=b.extra;x.attributes[Tt]=t,wr(g,f).then(function(i){var a=_r(_(_({},b),{},{icons:{main:i,mask:Kn()},prefix:f,iconName:v,extra:x,watchable:!0})),o=E.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Sn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function bi(e){return Promise.all([yi(e,`::before`),yi(e,`::after`)])}function xi(e){return e.parentNode!==document.head&&!~jt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Si=function(e){return!!e&&Mt.some(function(t){return e.includes(t)})},Ci=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=u(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Si(a)){var o=Mt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var n;if(t)n=e;else if(j.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=u(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=u(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,d=u(Ci(l.selectorText)),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;r.add(p)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){j.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=an(n).filter(xi).map(bi),i=Ar.begin(`searchPseudoElements`);Wr(),Promise.all(r).then(function(){i(),Gr(),e()}).catch(function(){i(),Gr(),t()})})}}var Ti={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=wi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?E:t;j.searchPseudoElements&&wi(n)}}},Ei=!1,Di={mixout:function(){return{dom:{unwatch:function(){Wr(),Ei=!0}}}},hooks:function(){return{bootstrap:function(){qr(lr(`mutationObserverCallbacks`,{}))},noAuto:function(){Jr()},watch:function(e){var t=e.observeMutationsRoot;Ei?Gr():qr(lr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Oi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},ki={mixout:function(){return{parse:{transform:function(e){return Oi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Oi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:_({},a.outer),children:[{tag:`g`,attributes:_({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:_(_({},t.icon.attributes),a.path)}]}]}}}},Ai={x:0,y:0,width:`100%`,height:`100%`};function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Mi(e){return e.tag===`g`?e.children:[e]}cr([_n,si,ci,li,ui,Ti,Di,ki,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Qn(n.split(` `).map(function(e){return e.trim()})):Kn();return r.prefix||=L(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=dn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:_(_({},Ai),{},{fill:`white`})},p=c.children?{children:c.children.map(ji)}:{},m={tag:`g`,attributes:_({},d.inner),children:[ji(_({tag:c.tag,attributes:_(_({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:_({},d.outer),children:[m]},g=`mask-${a||rn()}`,v=`clip-${a||rn()}`,y={tag:`mask`,attributes:_(_({},Ai),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:Mi(u)},y]};return t.push(b,{tag:`rect`,attributes:_({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${g})`},Ai)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;T.matchMedia&&(t=T.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:_(_({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=_(_({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:_(_({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:_(_({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:_(_({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:B}),B.noAuto;var Ni=B.config;B.library,B.dom;var Pi=B.parse;B.findIconDefinition,B.toHtml;var Fi=B.icon;B.layer,B.text,B.counter;var Ii=t(r(),1);n();function Li(e){return e-=0,e===e}function Ri(e){return Li(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function zi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Bi=new Map,Vi=1e3;function Hi(e){if(Bi.has(e))return Bi.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Ri(n);t[e.startsWith(`webkit`)?zi(e):e]=r}}}n=a+1}if(Bi.size===Vi){let e=Bi.keys().next().value;e&&Bi.delete(e)}return Bi.set(e,t),t}function Ui(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>Ui(e,t)),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Hi(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Ri(e)]=t}let{style:o,role:s,"aria-label":c,...l}=n;return o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),e(t.tag,{...a,...l},...r)}var Wi=Ui.bind(null,Ii.createElement),Gi=(e,t)=>{let n=(0,Ii.useId)();return e||(t?n:void 0)},Ki=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}?.FA_VERSION;var qi=`searchPseudoElementsFullScan`in Ni?`7.0.0`:`6.0.0`,Ji=Number.parseInt(qi)>=7,Yi=`fa`,V={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},Xi={left:`fa-pull-left`,right:`fa-pull-right`},Zi={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Qi={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},H={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},$i={default:`fa-layers`};function ea(e){let t=Ni.cssPrefix||Ni.familyPrefix||Yi;return t===Yi?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Yi}-`,`g`),`${t}-`)}function ta(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(V.beat),n&&x.push(V.fade),r&&x.push(V.beatFade),i&&x.push(V.bounce),a&&x.push(V.shake),o&&x.push(V.spin),c&&x.push(V.spinReverse),s&&x.push(V.spinPulse),l&&x.push(V.pulse),u&&x.push(H.fixedWidth),d&&x.push(H.inverse),f&&x.push(H.border),p===!0&&x.push(H.flip),(p===`horizontal`||p===`both`)&&x.push(H.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(H.flipVertical),m!=null&&x.push(Qi[m]),h!=null&&h!==0&&x.push(Zi[h]),g!=null&&x.push(Xi[g]),_&&x.push(H.swapOpacity),Ji?(v&&x.push(H.rotateBy),y&&x.push(H.widthAuto),(Ni.cssPrefix||Ni.familyPrefix||Yi)===Yi?x:x.map(ea)):x}var na=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function ra(e){if(e)return na(e)?e:Pi.icon(e)}function ia(e){return Object.keys(e)}var aa=new Ki(`FontAwesomeIcon`),oa={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},sa=new Set(Object.keys(oa)),ca=Ii.forwardRef((e,t)=>{let n={...oa,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Gi(c,!!i),d=Gi(s,!!o),f=ra(r);if(!f)return aa.error(`Icon lookup is undefined`,r),null;let p=ta(n),m=typeof l==`string`?Pi.transform(l):l,h=ra(i),g=Fi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return aa.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ia(n))sa.has(e)||(v[e]=n[e]);return Wi(_[0],v)});ca.displayName=`FontAwesomeIcon`,`${$i.default}${H.fixedWidth}`;function la(e,t){return function(){return e.apply(t,arguments)}}var{toString:ua}=Object.prototype,{getPrototypeOf:da}=Object,{iterator:fa,toStringTag:pa}=Symbol,ma=(e=>t=>{let n=ua.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),U=e=>(e=e.toLowerCase(),t=>ma(t)===e),ha=e=>t=>typeof t===e,{isArray:ga}=Array,_a=ha(`undefined`);function va(e){return e!==null&&!_a(e)&&e.constructor!==null&&!_a(e.constructor)&&W(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ya=U(`ArrayBuffer`);function ba(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ya(e.buffer),t}var xa=ha(`string`),W=ha(`function`),Sa=ha(`number`),Ca=e=>typeof e==`object`&&!!e,wa=e=>e===!0||e===!1,Ta=e=>{if(ma(e)!==`object`)return!1;let t=da(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(pa in e)&&!(fa in e)},Ea=e=>{if(!Ca(e)||va(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Da=U(`Date`),Oa=U(`File`),ka=U(`Blob`),Aa=U(`FileList`),ja=e=>Ca(e)&&W(e.pipe),Ma=e=>{let t;return e&&(typeof FormData==`function`&&e instanceof FormData||W(e.append)&&((t=ma(e))===`formdata`||t===`object`&&W(e.toString)&&e.toString()===`[object FormData]`))},Na=U(`URLSearchParams`),[Pa,Fa,Ia,La]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(U),Ra=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function za(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),ga(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(va(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function Ba(e,t){if(va(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var G=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Va=e=>!_a(e)&&e!==G;function Ha(){let{caseless:e,skipUndefined:t}=Va(this)&&this||{},n={},r=(r,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=e&&Ba(n,i)||i;Ta(n[a])&&Ta(r)?n[a]=Ha(n[a],r):Ta(r)?n[a]=Ha({},r):ga(r)?n[a]=r.slice():(!t||!_a(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&za(arguments[e],r);return n}var Ua=(e,t,n,{allOwnKeys:r}={})=>(za(t,(t,r)=>{n&&W(t)?Object.defineProperty(e,r,{value:la(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Wa=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ga=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ka=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&da(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qa=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Ja=e=>{if(!e)return null;if(ga(e))return e;let t=e.length;if(!Sa(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Ya=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&da(Uint8Array)),Xa=(e,t)=>{let n=(e&&e[fa]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Za=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Qa=U(`HTMLFormElement`),$a=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),eo=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),to=U(`RegExp`),no=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};za(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},ro=e=>{no(e,(t,n)=>{if(W(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(W(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},io=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return ga(e)?r(e):r(String(e).split(t)),n},ao=()=>{},oo=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function so(e){return!!(e&&W(e.append)&&e[pa]===`FormData`&&e[fa])}var co=e=>{let t=Array(10),n=(e,r)=>{if(Ca(e)){if(t.indexOf(e)>=0)return;if(va(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=ga(e)?[]:{};return za(e,(e,t)=>{let a=n(e,r+1);!_a(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},lo=U(`AsyncFunction`),uo=e=>e&&(Ca(e)||W(e))&&W(e.then)&&W(e.catch),fo=((e,t)=>e?setImmediate:t?((e,t)=>(G.addEventListener(`message`,({source:n,data:r})=>{n===G&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),G.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,W(G.postMessage)),K={isArray:ga,isArrayBuffer:ya,isBuffer:va,isFormData:Ma,isArrayBufferView:ba,isString:xa,isNumber:Sa,isBoolean:wa,isObject:Ca,isPlainObject:Ta,isEmptyObject:Ea,isReadableStream:Pa,isRequest:Fa,isResponse:Ia,isHeaders:La,isUndefined:_a,isDate:Da,isFile:Oa,isBlob:ka,isRegExp:to,isFunction:W,isStream:ja,isURLSearchParams:Na,isTypedArray:Ya,isFileList:Aa,forEach:za,merge:Ha,extend:Ua,trim:Ra,stripBOM:Wa,inherits:Ga,toFlatObject:Ka,kindOf:ma,kindOfTest:U,endsWith:qa,toArray:Ja,forEachEntry:Xa,matchAll:Za,isHTMLForm:Qa,hasOwnProperty:eo,hasOwnProp:eo,reduceDescriptors:no,freezeMethods:ro,toObjectSet:io,toCamelCase:$a,noop:ao,toFiniteNumber:oo,findKey:Ba,global:G,isContextDefined:Va,isSpecCompliantForm:so,toJSONObject:co,isAsyncFn:lo,isThenable:uo,setImmediate:fo,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(G):typeof process<`u`&&process.nextTick||fo,isIterable:e=>e!=null&&W(e[fa])},q=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}};q.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,q.ERR_BAD_OPTION=`ERR_BAD_OPTION`,q.ECONNABORTED=`ECONNABORTED`,q.ETIMEDOUT=`ETIMEDOUT`,q.ERR_NETWORK=`ERR_NETWORK`,q.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,q.ERR_DEPRECATED=`ERR_DEPRECATED`,q.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,q.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,q.ERR_CANCELED=`ERR_CANCELED`,q.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,q.ERR_INVALID_URL=`ERR_INVALID_URL`;function po(e){return K.isPlainObject(e)||K.isArray(e)}function mo(e){return K.endsWith(e,`[]`)?e.slice(0,-2):e}function ho(e,t,n){return e?e.concat(t).map(function(e,t){return e=mo(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function go(e){return K.isArray(e)&&!e.some(po)}var _o=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function vo(e,t,n){if(!K.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!K.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&K.isSpecCompliantForm(t);if(!K.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(K.isDate(e))return e.toISOString();if(K.isBoolean(e))return e.toString();if(!s&&K.isBlob(e))throw new q(`Blob is not supported. Use a Buffer instead.`);return K.isArrayBuffer(e)||K.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(e&&!i&&typeof e==`object`){if(K.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(K.isArray(e)&&go(e)||(K.isFileList(e)||K.endsWith(n,`[]`))&&(s=K.toArray(e)))return n=mo(n),s.forEach(function(e,r){!(K.isUndefined(e)||e===null)&&t.append(o===!0?ho([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return po(e)?!0:(t.append(ho(i,n,a),c(e)),!1)}let u=[],d=Object.assign(_o,{defaultVisitor:l,convertValue:c,isVisitable:po});function f(e,n){if(!K.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),K.forEach(e,function(e,r){(!(K.isUndefined(e)||e===null)&&i.call(t,e,K.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!K.isObject(e))throw TypeError(`data must be an object`);return f(e),t}function yo(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function bo(e,t){this._pairs=[],e&&vo(e,this,t)}var xo=bo.prototype;xo.append=function(e,t){this._pairs.push([e,t])},xo.toString=function(e){let t=e?function(t){return e.call(this,t,yo)}:yo;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function So(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Co(e,t,n){if(!t)return e;let r=n&&n.encode||So,i=K.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):K.isURLSearchParams(t)?t.toString():new bo(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var wo=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){K.forEach(this.handlers,function(t){t!==null&&e(t)})}},To={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Eo={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:bo,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Do=e({hasBrowserEnv:()=>Oo,hasStandardBrowserEnv:()=>Ao,hasStandardBrowserWebWorkerEnv:()=>jo,navigator:()=>ko,origin:()=>Mo}),Oo=typeof window<`u`&&typeof document<`u`,ko=typeof navigator==`object`&&navigator||void 0,Ao=Oo&&(!ko||[`ReactNative`,`NativeScript`,`NS`].indexOf(ko.product)<0),jo=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Mo=Oo&&window.location.href||`http://localhost`,J={...Do,...Eo};function No(e,t){return vo(e,new J.classes.URLSearchParams,{visitor:function(e,t,n,r){return J.isNode&&K.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function Po(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function Fo(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Io(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&K.isArray(r)?r.length:a,s?(K.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!K.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&K.isArray(r[a])&&(r[a]=Fo(r[a])),!o)}if(K.isFormData(e)&&K.isFunction(e.entries)){let n={};return K.forEachEntry(e,(e,r)=>{t(Po(e),r,n,0)}),n}return null}function Lo(e,t,n){if(K.isString(e))try{return(t||JSON.parse)(e),K.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Ro={transitional:To,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=K.isObject(e);if(i&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r?JSON.stringify(Io(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return No(e,this.formSerializer).toString();if((a=K.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return vo(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),Lo(e)):e}],transformResponse:[function(e){let t=this.transitional||Ro.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(e){if(n)throw e.name===`SyntaxError`?q.from(e,q.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:J.classes.FormData,Blob:J.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};K.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{Ro.headers[e]={}});var zo=K.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),Bo=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&zo[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},Vo=Symbol(`internals`);function Ho(e){return e&&String(e).trim().toLowerCase()}function Uo(e){return e===!1||e==null?e:K.isArray(e)?e.map(Uo):String(e)}function Wo(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Go=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ko(e,t,n,r,i){if(K.isFunction(r))return r.call(this,t,n);if(i&&(t=n),K.isString(t)){if(K.isString(r))return t.indexOf(r)!==-1;if(K.isRegExp(r))return r.test(t)}}function qo(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Jo(e,t){let n=K.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Y=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Ho(t);if(!i)throw Error(`header name must be a non-empty string`);let a=K.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Uo(e))}let a=(e,t)=>K.forEach(e,(e,n)=>i(e,n,t));if(K.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(K.isString(e)&&(e=e.trim())&&!Go(e))a(Bo(e),t);else if(K.isObject(e)&&K.isIterable(e)){let n={},r,i;for(let t of e){if(!K.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?K.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Ho(e),e){let n=K.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Wo(e);if(K.isFunction(t))return t.call(this,e,n);if(K.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Ho(e),e){let n=K.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Ko(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Ho(e),e){let i=K.findKey(n,e);i&&(!t||Ko(n,n[i],i,t))&&(delete n[i],r=!0)}}return K.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Ko(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return K.forEach(this,(r,i)=>{let a=K.findKey(n,i);if(a){t[a]=Uo(r),delete t[i];return}let o=e?qo(i):String(i).trim();o!==i&&delete t[i],t[o]=Uo(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return K.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&K.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[Vo]=this[Vo]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Ho(e);t[r]||(Jo(n,e),t[r]=!0)}return K.isArray(e)?e.forEach(r):r(e),this}};Y.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),K.reduceDescriptors(Y.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),K.freezeMethods(Y);function Yo(e,t){let n=this||Ro,r=t||n,i=Y.from(r.headers),a=r.data;return K.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Xo(e){return!!(e&&e.__CANCEL__)}var Zo=class extends q{constructor(e,t,n){super(e??`canceled`,q.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function Qo(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q(`Request failed with status code `+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function $o(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function es(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function ts(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}const ns=(e,t,n=3)=>{let r=0,i=es(50,250);return ts(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a,e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},rs=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},is=e=>(...t)=>K.asap(()=>e(...t));var as=J.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,J.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(J.origin),J.navigator&&/(msie|trident)/i.test(J.navigator.userAgent)):()=>!0,os=J.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];K.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),K.isString(r)&&s.push(`path=${r}`),K.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),K.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.match(RegExp(`(?:^|; )`+e+`=([^;]*)`));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function ss(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function cs(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function ls(e,t,n){let r=!ss(t);return e&&(r||n==0)?cs(e,t):t}var us=e=>e instanceof Y?{...e}:e;function X(e,t){t||={};let n={};function r(e,t,n,r){return K.isPlainObject(e)&&K.isPlainObject(t)?K.merge.call({caseless:r},e,t):K.isPlainObject(t)?K.merge({},t):K.isArray(t)?t.slice():t}function i(e,t,n,i){if(!K.isUndefined(t))return r(e,t,n,i);if(!K.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!K.isUndefined(t))return r(void 0,t)}function o(e,t){if(!K.isUndefined(t))return r(void 0,t);if(!K.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(us(e),us(t),n,!0)};return K.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=K.hasOwnProp(c,r)?c[r]:i,o=a(e[r],t[r],r);K.isUndefined(o)&&a!==s||(n[r]=o)}),n}var ds=e=>{let t=X({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=Y.from(o),t.url=Co(ls(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``))),K.isFormData(n)){if(J.hasStandardBrowserEnv||J.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(K.isFunction(n.getHeaders)){let e=n.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}}if(J.hasStandardBrowserEnv&&(r&&K.isFunction(r)&&(r=r(t)),r||r!==!1&&as(t.url))){let e=i&&a&&os.read(a);e&&o.set(i,e)}return t},fs=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=ds(e),i=r.data,a=Y.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Y.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());Qo(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new q(`Request aborted`,q.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=new q(t&&t.message?t.message:`Network Error`,q.ERR_NETWORK,e,h);r.event=t||null,n(r),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||To;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new q(t,i.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&K.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),K.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=ns(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=ns(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Zo(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=$o(r.url);if(_&&J.protocols.indexOf(_)===-1){n(new q(`Unsupported protocol `+_+`:`,q.ERR_BAD_REQUEST,e));return}h.send(i||null)})},ps=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof q?t:new Zo(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new q(`timeout of ${t}ms exceeded`,q.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>K.asap(o),s}};const ms=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},hs=async function*(e,t){for await(let n of gs(e))yield*ms(n,t)};var gs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}};const _s=(e,t,n,r)=>{let i=hs(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})};var vs=64*1024,{isFunction:ys}=K,bs=(({Request:e,Response:t})=>({Request:e,Response:t}))(K.global),{ReadableStream:xs,TextEncoder:Ss}=K.global,Cs=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ws=e=>{e=K.merge.call({skipUndefined:!0},bs,e);let{fetch:t,Request:n,Response:r}=e,i=t?ys(t):typeof fetch==`function`,a=ys(n),o=ys(r);if(!i)return!1;let s=i&&ys(xs),c=i&&(typeof Ss==`function`?(e=>t=>e.encode(t))(new Ss):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&Cs(()=>{let e=!1,t=new n(J.origin,{body:new xs,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return e&&!t}),u=o&&s&&Cs(()=>K.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new q(`Response type '${e}' is not supported`,q.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(K.isBlob(e))return e.size;if(K.isSpecCompliantForm(e))return(await new n(J.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(K.isArrayBufferView(e)||K.isArrayBuffer(e))return e.byteLength;if(K.isURLSearchParams(e)&&(e+=``),K.isString(e))return(await c(e)).byteLength},p=async(e,t)=>K.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=ds(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=ps([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),ee;try{if(g&&l&&o!==`get`&&o!==`head`&&(ee=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(K.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=rs(ee,ns(is(g)));s=_s(e.body,vs,t,n)}}K.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype,c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=K.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&rs(t,ns(is(h),!0))||[];f=new r(_s(f.body,vs,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let te=await d[K.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{Qo(t,n,{data:te,headers:Y.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new q(`Network Error`,q.ERR_NETWORK,e,C,t&&t.response),{cause:t.cause||t}):q.from(t,t&&t.code,e,C,t&&t.response)}}},Ts=new Map;const Es=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=Ts;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:ws(t)),l=c;return c};Es();var Ds={http:null,xhr:fs,fetch:{get:Es}};K.forEach(Ds,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var Os=e=>`- ${e}`,ks=e=>K.isFunction(e)||e===null||e===!1;function As(e,t){e=K.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!ks(r)&&(i=Ds[(n=String(r)).toLowerCase()],i===void 0))throw new q(`Unknown adapter '${n}'`);if(i&&(K.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new q(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(Os).join(`
`):` `+Os(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var js={getAdapter:As,adapters:Ds};function Ms(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Zo(null,e)}function Ns(e){return Ms(e),e.headers=Y.from(e.headers),e.data=Yo.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),js.getAdapter(e.adapter||Ro.adapter,e)(e).then(function(t){return Ms(e),t.data=Yo.call(e,e.transformResponse,t),t.headers=Y.from(t.headers),t},function(t){return Xo(t)||(Ms(e),t&&t.response&&(t.response.data=Yo.call(e,e.transformResponse,t.response),t.response.headers=Y.from(t.response.headers))),Promise.reject(t)})}const Ps=`1.13.5`;var Fs={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{Fs[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Is={};Fs.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Ps+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new q(r(i,` has been removed`+(t?` in `+t:``)),q.ERR_DEPRECATED);return t&&!Is[i]&&(Is[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},Fs.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Ls(e,t,n){if(typeof e!=`object`)throw new q(`options must be an object`,q.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new q(`option `+a+` must be `+n,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q(`Unknown option `+a,q.ERR_BAD_OPTION)}}var Rs={assertOptions:Ls,validators:Fs},Z=Rs.validators,Q=class{constructor(e){this.defaults=e||{},this.interceptors={request:new wo,response:new wo}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=t.stack?t.stack.replace(/^.+\n/,``):``;try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,``))&&(e.stack+=`
`+n):e.stack=n}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=X(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Rs.assertOptions(n,{silentJSONParsing:Z.transitional(Z.boolean),forcedJSONParsing:Z.transitional(Z.boolean),clarifyTimeoutError:Z.transitional(Z.boolean),legacyInterceptorReqResOrdering:Z.transitional(Z.boolean)},!1),r!=null&&(K.isFunction(r)?t.paramsSerializer={serialize:r}:Rs.assertOptions(r,{encode:Z.function,serialize:Z.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Rs.assertOptions(t,{baseUrl:Z.spelling(`baseURL`),withXsrfToken:Z.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&K.merge(i.common,i[t.method]);i&&K.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Y.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||To;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[Ns.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=Ns.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=X(this.defaults,e),Co(ls(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};K.forEach([`delete`,`get`,`head`,`options`],function(e){Q.prototype[e]=function(t,n){return this.request(X(n||{},{method:e,url:t,data:(n||{}).data}))}}),K.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(X(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}Q.prototype[e]=t(),Q.prototype[e+`Form`]=t(!0)});var zs=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Zo(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Bs(e){return function(t){return e.apply(null,t)}}function Vs(e){return K.isObject(e)&&e.isAxiosError===!0}var Hs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Hs).forEach(([e,t])=>{Hs[t]=e});function Us(e){let t=new Q(e),n=la(Q.prototype.request,t);return K.extend(n,Q.prototype,t,{allOwnKeys:!0}),K.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Us(X(e,t))},n}var $=Us(Ro);$.Axios=Q,$.CanceledError=Zo,$.CancelToken=zs,$.isCancel=Xo,$.VERSION=Ps,$.toFormData=vo,$.AxiosError=q,$.Cancel=$.CanceledError,$.all=function(e){return Promise.all(e)},$.spread=Bs,$.isAxiosError=Vs,$.mergeConfig=X,$.AxiosHeaders=Y,$.formToJSON=e=>Io(K.isHTMLForm(e)?new FormData(e):e),$.getAdapter=js.getAdapter,$.HttpStatusCode=Hs,$.default=$;var Ws=$.create({baseURL:`https://api.nrls.net/api`,withCredentials:!0}),Gs={users:`users/`,authors:`authors/`,tags:`tags/`,email:`email/`,events:`events/`,categories:`categories/`,login:`login/`,me:`me/`,refresh:`token/refresh/`,logout:`logout/`,posts:`posts/`,surveys:`surveys/`,comment:`comments/`,mediaFiles:`media-files/`,surveyOptions:`survey-options/`,vote:`survey-options/vote/`,surveyOptionsById:`survey-options/by-survey/`,postFiles:`media-files/by-post/`,surveyPost:`surveys/by-post/`,backup:`backup/`,statistics:`posts/statistics/`};export{Ws as n,ca as r,Gs as t};