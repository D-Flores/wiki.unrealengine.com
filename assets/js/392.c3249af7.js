(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{780:function(t,e,a){"use strict";a.r(e);var s=a(28),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Creating A Custom Importable Asset - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"creating-a-custom-importable-asset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-importable-asset"}},[t._v("#")]),t._v(" Creating A Custom Importable Asset")]),t._v(" "),a("p",[t._v("TUTORIAL CURRENTLY UNDER CONSTRUCTION. TIS NOT COMPLETE MY FRIENDS.")]),t._v(" "),a("p",[a("strong",[t._v("Rate this Tutorial:")])]),t._v(" "),a("p",[t._v("3.00")]),t._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t._v(" (2 votes)")]),t._v(" "),a("p",[t._v("Approved for Versions:4.9")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The full source code for this tutorial can be found "),a("a",{attrs:{href:"https://github.com/BGR360/UE4_CustomAssetTutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This tutorial will show you how to create a custom Asset type that can be imported from an XML file using the Content Browser. This Asset will behave like you would expect any Asset to: you can import it, delete it, move it, and even drag and drop it onto components!")]),t._v(" "),a("p",[t._v("This is my first tutorial on the Wiki. If you find ANYTHING on this tutorial to be confusing or unclear, "),a("strong",[t._v("do not hesitate to contact me.")]),t._v(" You can make a post on my Talk page. I hope you enjoy!! 😃")]),t._v(" "),a("h2",{attrs:{id:"custom-asset-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-asset-class"}},[t._v("#")]),t._v(" Custom Asset Class")]),t._v(" "),a("p",[t._v("A good use of this tutorial is to create a sort of in-game asset customization that players can do (e.g. players could create and customize their own levels or characters). In this tutorial, I have created a procedurally-generated city system that uses XML files to store a city's configuration. You can imagine this being used in a city-building game where players can create their own cities and share them with their friends (totally novel, I know).")]),t._v(" "),a("p",[t._v("The city will be grid-based, like this:")]),t._v(" "),a("p",[t._v("(TODO: Insert Sketch) (TODO: Insert Screenshot of generated city in UE4)")]),t._v(" "),a("p",[t._v("You needn't worry about the detailed implementation of the procedurally-generated city. All we are concerned with in this tutorial is how to make the Editor able to import the XML files as assets. However, if you are still curious (I know I would be), check out the code on GitHub (link at top of page).")]),t._v(" "),a("h3",{attrs:{id:"xml-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml-format"}},[t._v("#")]),t._v(" XML Format")]),t._v(" "),a("p",[t._v("The example city's XML file would look like this:")]),t._v(" "),a("p",[t._v('<city>\n<intersection id="0"/>\n<intersection id="0"/>\n<road lanes="0"/>\n<inter id="0"/>\n<inter id="0"/>\n</road>\n<house pos="0,0" size="0"/>\n</city>')]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Creating_A_Custom_Importable_Asset&oldid=16931",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Creating_A_Custom_Importable_Asset&oldid=16931"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])])]),t._v(" "),a("p",[t._v("Hidden category:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[t._v("Templates")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=o.exports}}]);