(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{611:function(e,t,r){"use strict";r.r(t);var n=r(28),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Blueprint Troubleshooting Guide - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"blueprint-troubleshooting-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-troubleshooting-guide"}},[e._v("#")]),e._v(" Blueprint Troubleshooting Guide")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#About_This_Guide"}},[e._v("1 About This Guide")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Blueprints"}},[e._v("2 "),r("strong",[e._v("Blueprints")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#TRASHCLASS"}},[e._v("2.1 "),r("strong",[e._v("TRASHCLASS")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Accessed_None"}},[e._v("2.2 "),r("strong",[e._v("Accessed None")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Casting"}},[e._v("2.3 "),r("strong",[e._v("Casting")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Level_Streaming"}},[e._v("2.4 "),r("strong",[e._v("Level Streaming")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Sublevel_Blueprints"}},[e._v("2.4.1 Sublevel Blueprints")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Splines"}},[e._v("2.4.2 "),r("strong",[e._v("Splines")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Editing_at_Runtime"}},[e._v("2.4.2.1 Editing at Runtime")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Instanced_Meshes"}},[e._v("2.4.3 "),r("strong",[e._v("Instanced Meshes")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Updating_Instances_at_Runtime"}},[e._v("2.4.3.1 Updating Instances at Runtime")])])])])])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Additional_Resources"}},[e._v("3 "),r("strong",[e._v("Additional Resources")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Notes_.26_Tips"}},[e._v("4 "),r("strong",[e._v("Notes & Tips")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Acronyms"}},[e._v("4.1 "),r("strong",[e._v("Acronyms")])])])])])]),e._v(" "),r("p",[r("em",[e._v("This page is currently under construction, more errors and solutions will be added over time.")])]),e._v(" "),r("h1",{attrs:{id:"about-this-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about-this-guide"}},[e._v("#")]),e._v(" About This Guide")]),e._v(" "),r("p",[e._v("Blueprints are an incredibly powerful tool, especially for artists and other visually driven individuals. However, there are times when it can be difficult to know what to do or where to go next. This troubleshooting guide is aimed at assisting with some of the more common blueprint related errors and pitfalls. After reading through it, hopefully you will have a better understanding of what limitations are present in blueprints and what may be occurring if you are experiencing an error and do not know why. This guide is not meant to be completely comprehensive, but a live document that will undergo changes over time.")]),e._v(" "),r("h1",{attrs:{id:"blueprints"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blueprints"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Blueprints")])]),e._v(" "),r("h4",{attrs:{id:"trashclass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trashclass"}},[e._v("#")]),e._v(" "),r("strong",[e._v("TRASHCLASS")])]),e._v(" "),r("p",[r("strong",[e._v("TRASHCLASS")]),e._v(" errors typically occur in blueprints when a circular dependency is present. Circular dependencies are when information is requested between two or more blueprints that relies on information from the calling blueprint to complete, this creates a loop that can lead to many errors. "),r("strong",[e._v("TRASHCLASS")]),e._v(" errors are the most common, and are typically fairly simple to fix. All that is required is the circular dependency breaks. If information is needed from the original blueprint, pass that information along with the request so that blueprints down the node chain do not have to loop back to the original blueprint to retrieve. Additionally, use proper interface calls, casting, etc. to communicate between blueprints and alleviate some of the information passing. A sample project explaining blueprint communication can be found here:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Blueprints/HowTo/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blueprint Communication"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("If breaking the circular dependency does not fix the error, then you may have discovered a bug. Please report this information to the "),r("a",{attrs:{href:"https://answers.unrealengine.com/spaces/11/bugs-and-crashes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bug Reports"),r("OutboundLink")],1),e._v(" section of the Answerhub for additional further investigation. If you do not believe this to be a bug, try reaching out to other community members on the "),r("a",{attrs:{href:"https://answers.unrealengine.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Answerhub"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://forums.unrealengine.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forums"),r("OutboundLink")],1),e._v(" for assistance.")]),e._v(" "),r("h4",{attrs:{id:"accessed-none"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessed-none"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Accessed None")])]),e._v(" "),r("p",[r("a",{attrs:{href:"/File:AccessedNoneError.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/f/f1/AccessedNoneError.png",alt:"AccessedNoneError.png"}})])]),e._v(" "),r("p",[e._v("Typically a "),r("strong",[e._v("NULL")]),e._v(" value, often occurs when attempting to use a variable that was referencing an asset that has been destroyed (for instance, calling a function on a projectile after the projectile has been destroyed in play) or attempting to destroy an actor that isn't present.")]),e._v(" "),r("p",[e._v("To fix this, insert an "),r("strong",[e._v("IsValid")]),e._v(" check in front of the nodes referenced by the accessed 'None' error. If the variable isn't populated, it isn't valid and will not run the functionality on the \"Is Valid\" execution pin.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/File:IsValid.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/7/75/IsValid.png",alt:"IsValid.png"}})])]),e._v(" "),r("h4",{attrs:{id:"casting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#casting"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Casting")])]),e._v(" "),r("p",[e._v("If you are receiving an error while casting, check to ensure your value being passed is valid. If it is and you are still receiving an error, ensure that the information you are trying to access is public.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Blueprints/UserGuide/CastNodes/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Casting"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"level-streaming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#level-streaming"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Level Streaming")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Blueprint_Manual_Level_Streaming",title:"Blueprint Manual Level Streaming"}},[e._v("Blueprint Manual Level Streaming")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://docs.unrealengine.com/latest/INT/Engine/LevelStreaming/WorldBrowser/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("World Browser"),r("OutboundLink")],1)])]),e._v(" "),r("h5",{attrs:{id:"sublevel-blueprints"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sublevel-blueprints"}},[e._v("#")]),e._v(" Sublevel Blueprints")]),e._v(" "),r("p",[e._v("While some functions will work out of a sublevel's level blueprint, it is not recommended to rely on this. Any functionality that you need through the level blueprint would be best set in the persistent level. This is especially true for events such as EndPlay, which only run through the persistent level level blueprint.")]),e._v(" "),r("h4",{attrs:{id:"splines"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#splines"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Splines")])]),e._v(" "),r("h5",{attrs:{id:"editing-at-runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editing-at-runtime"}},[e._v("#")]),e._v(" Editing at Runtime")]),e._v(" "),r("p",[e._v("Currently, it is not possible to editor splines at runtime. All editing should take place manually in editor or via the construction script. Spline mesh components, however, can be moved and edited by ensuring the associated mesh is set to movable. You can find more information on this here:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://answers.unrealengine.com/questions/261136/add-spline-mesh-component-doesnt-work-at-runtime.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spline Mesh Component at Runtime"),r("OutboundLink")],1)]),e._v(" "),r("h4",{attrs:{id:"instanced-meshes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#instanced-meshes"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Instanced Meshes")])]),e._v(" "),r("h5",{attrs:{id:"updating-instances-at-runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updating-instances-at-runtime"}},[e._v("#")]),e._v(" Updating Instances at Runtime")]),e._v(" "),r("p",[e._v("Instanced meshes are meant to be a method to create many copies of an asset without increasing performance costs significantly. As such, they are primarily designed for stationary actors. It is not advised that you update an instanced mesh during runtime due to this.")]),e._v(" "),r("h1",{attrs:{id:"additional-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Additional Resources")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Blueprints/index.html%7C",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blueprint Visual Scripting"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Blueprints/QuickStart/index.html%7C",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blueprint Quickstart Guide"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"notes-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes-tips"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Notes & Tips")])]),e._v(" "),r("h4",{attrs:{id:"acronyms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acronyms"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Acronyms")])]),e._v(" "),r("p",[r("strong",[e._v("IWCE")]),e._v(" - 'In World Component Editing' (Editing a component through the Details panel of a blueprint and not in the blueprint editor itself)")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprint_Troubleshooting_Guide&oldid=23524",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Blueprint_Troubleshooting_Guide&oldid=23524"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/index.php?title=Category:Blueprints&action=edit&redlink=1",title:"Category:Blueprints (page does not exist)"}},[e._v("Blueprints")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Epic_Created_Content",title:"Category:Epic Created Content"}},[e._v("Epic Created Content")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Troubleshooting",title:"Category:Troubleshooting"}},[e._v("Troubleshooting")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);