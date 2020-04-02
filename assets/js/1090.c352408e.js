(window.webpackJsonp=window.webpackJsonp||[]).push([[1090],{1284:function(e,t,a){"use strict";a.r(t);var i=a(28),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Two-Sided Foliage Material - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"two-sided-foliage-material"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#two-sided-foliage-material"}},[e._v("#")]),e._v(" Two-Sided Foliage Material")]),e._v(" "),a("p",[e._v("From Epic Wiki")]),e._v(" "),a("p",[e._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),a("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("This tutorial assumes the user has a basic understanding of Materials.\n")])])]),a("p",[e._v("In this tutorial you will learn how to create a simple two-sided foliage material for your projects. Nearly every output will be converted into a parameter for instancing.")]),e._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("p",[e._v("1. Create a new blank project with Starter Content.")]),e._v(" "),a("p",[e._v("2. Create a new Default Level")]),e._v(" "),a("p",[e._v("3. Place two of the 'SM_Bush' actors (found in the Content Browser) side by side on the floor within the level.")]),e._v(" "),a("p",[e._v("4. Locate and duplicate the Material used for the 'SM_bush' and rename it to something like 'M_TwoSided'")]),e._v(" "),a("p",[e._v("5. Set the Blend Mode to Masked, the Shading Model to Two Sided, and check the Two Sided option.")]),e._v(" "),a("p",[e._v("6. Now create a Vector Parameter by pressing the 'V' key and clicking in the material graph. Name this Subsurface Color.")]),e._v(" "),a("p",[e._v("7. Create a Multiply node and plug the Subsurface Color into the 'B' input and the Diffuse Texture Sample into the 'A' input.")]),e._v(" "),a("p",[e._v("8. Plug the result of your Multiply into the Subsurface Color input of your material.")]),e._v(" "),a("p",[e._v("9. Create another Multiply node and plug the Alpha channel from the Diffuse Texture Sample into the 'A' input.")]),e._v(" "),a("p",[e._v("10. Create a Scalar Parameter by holding the 'S' key and clicking in the material graph. Name this 'Opacity' and plug this into the 'B' input of your multiply.")]),e._v(" "),a("p",[e._v("11. Plug the output of your multiply into the Opacity input of your material.")]),e._v(" "),a("p",[e._v("12. Create two scalar parameters and name one Specular and one Roughness. Plug them into their respective inputs of your material. Apply and Save!")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:MaterialCreation.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/d/de/MaterialCreation.png",alt:""}})])]),e._v(" "),a("p",[e._v("Final Material Connections and Properties")]),e._v(" "),a("h2",{attrs:{id:"final-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-result"}},[e._v("#")]),e._v(" Final Result")]),e._v(" "),a("p",[e._v("Below are the results you should get when applied as a Material Instance after slightly tweaking the parameters.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:FinalOutcome.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/24/FinalOutcome.png",alt:""}})])]),e._v(" "),a("p",[e._v("Left: Default Material Right: Two-Sided Material")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:ParameterSettings.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/c/cc/ParameterSettings.png",alt:""}})])]),e._v(" "),a("p",[e._v("Material Parameter settings")]),e._v(" "),a("p",[e._v("Thanks for following along! I have written some more tutorials you can check out by following the links within my Wiki Profile page found below.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:AndrewHurley",title:"User:AndrewHurley"}},[e._v("Andrew Hurley Wiki Profile Page")])]),e._v(" "),a("p",[a("strong",[e._v("Written by:")])]),e._v(" "),a("p",[e._v("Andrew Hurley")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Two-Sided_Foliage_Material&oldid=325",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Two-Sided_Foliage_Material&oldid=325"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Tutorials&action=edit&redlink=1",title:"Category:Tutorials (page does not exist)"}},[e._v("Tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/index.php?title=Category:Material",title:"Category:Material"}},[e._v("Material")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/index.php?title=Category:Epic_Created_Content",title:"Category:Epic Created Content"}},[e._v("Epic Created Content")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);