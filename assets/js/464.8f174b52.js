(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{1494:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Dynamic Depth of Field - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"dynamic-depth-of-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-depth-of-field"}},[t._v("#")]),t._v(" Dynamic Depth of Field")]),t._v(" "),a("p",[a("strong",[t._v("Rate this Article:")])]),t._v(" "),a("p",[t._v("0.00")]),t._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),t._v(" "),a("p",[t._v("Approved for Versions:4.0 to 4.7.5")]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Blueprint_Setup"}},[t._v("2 Blueprint Setup")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Events"}},[t._v("2.1 Events")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Trace_Hit_Result_and_Focus_Distance"}},[t._v("2.2 Trace Hit Result and Focus Distance")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Post_Process_Settings"}},[t._v("2.3 Post Process Settings")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Final_Result_and_Notes"}},[t._v("3 Final Result and Notes")])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:DoF_5.jpg"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/e9/DoF_5.jpg",alt:"DoF 5.jpg"}})])]),t._v(" "),a("p",[t._v("Dynamic depth of field is an effect that can be used in FPS games to blur the background while reloading a weapon or focusing on the target as the player aims through iron sights of their weapon while blurring the rest of the screen. It can also be used to create a camera that you can use for taking screenshots for portfolio or any other reason you would want DoF effect without bothering with all the post process adjustments every time.")]),t._v(" "),a("p",[t._v("Here I'll give you the bare bones of how to implement this effect to a player camera using "),a("strong",[t._v("TP_FirstPersonBP")]),t._v(" template project, which later on you can implement on any camera and change the settings depending on your needs.")]),t._v(" "),a("h2",{attrs:{id:"blueprint-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-setup"}},[t._v("#")]),t._v(" Blueprint Setup")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:DoF_6.JPG"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/6/6e/DoF_6.JPG/360px-DoF_6.JPG",alt:"DoF 6.JPG"}})])]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:DoF_6.JPG",title:"Enlarge"}},[a("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),a("p",[t._v("Here you can see the overall network inside the character blueprint's Event graph, if you have experience with Blueprints and just want to get the network and recreate it right away. Now more details.")]),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:DoF_7.JPG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/21/DoF_7.JPG",alt:"DoF 7.JPG"}})])]),t._v(" "),a("p",[t._v("We are going to be using two events, "),a("strong",[t._v("Event Tick")]),t._v(" and an "),a("strong",[t._v("Input")]),t._v(" event. We don't want to have this effect all the time in this case, so we use "),a("strong",[t._v("Right Mouse Button")]),t._v(" to enable Tick to fire a "),a("em",[t._v("line trace")]),t._v(" from the camera which will tell us if/where/which object is the center of focus. And when we release the input, it will reverse the Timeline and stop the effect. Event Tick will also update the camera's post process settings as we will see in the following sections.")]),t._v(" "),a("p",[t._v("Trace Distance node is a collapsed graph to reduce the crowd in the network. You can see the expanded view down below:")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:Collapsed_TraceDistance.JPG"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/0/0f/Collapsed_TraceDistance.JPG/720px-Collapsed_TraceDistance.JPG",alt:"Collapsed TraceDistance.JPG"}})])]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:Collapsed_TraceDistance.JPG",title:"Enlarge"}},[a("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),a("p",[t._v("Return Value 1 is the camera's location and 5000 is the distance we are going to be tracing.")]),t._v(" "),a("h3",{attrs:{id:"trace-hit-result-and-focus-distance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace-hit-result-and-focus-distance"}},[t._v("#")]),t._v(" Trace Hit Result and Focus Distance")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:DoF_8.JPG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/2a/DoF_8.JPG",alt:"DoF 8.JPG"}})])]),t._v(" "),a("p",[t._v("We are going to use a 1 second long "),a("strong",[t._v("Timeline")]),t._v(" track going from 0.0 to 0.5 to set the intensity of depth of field effect(which basically activates/deactivates the effect) After a trace happens every tick we check the return value(boolean).If it is true then it continues the rest of the calculations. If not, it reverses the Timeline to stop the effect.")]),t._v(" "),a("p",[t._v("Considering the trace hit an object, we break that result so that we can get the "),a("strong",[t._v("Hit Location")]),t._v(". And to get the distance between the camera and the hit location we will use a macro like this:")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:FocusDistance_Macro.JPG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/83/FocusDistance_Macro.JPG",alt:"FocusDistance Macro.JPG"}})])]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:FocusDistance_Macro.JPG",title:"Enlarge"}},[a("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),a("p",[t._v("Or, you can use Vector Length node instead if you prefer. Subtract location of the camera from focus location and get the length of that output, and you will get the distance.")]),t._v(" "),a("p",[t._v("Now that we have the information we need we can use it to manipulate our camera's depth of field settings.")]),t._v(" "),a("h3",{attrs:{id:"post-process-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-process-settings"}},[t._v("#")]),t._v(" Post Process Settings")]),t._v(" "),a("p",[a("a",{attrs:{href:"/File:DoF_9.JPG"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/9/9e/DoF_9.JPG",alt:"DoF 9.JPG"}})])]),t._v(" "),a("p",[t._v("First we get the post process settings of the camera, which will give us the last focal distance so that we can use it for a soft blend when the trace hits points too far from each other.")]),t._v(" "),a("p",[t._v("To get the Break/Make post process nodes;")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Get First Person Camera")])]),t._v(" "),a("li",[t._v("Drag from first person camera and "),a("strong",[t._v("Get Post Process Settings")])]),t._v(" "),a("li",[t._v("Drag from post process settings and you'll see "),a("strong",[t._v("Break and Make PostProcessSettings")]),t._v(" nodes")])]),t._v(" "),a("p",[t._v("Now in the details panel of Break Postprocesssettings node enable only Depth of Field Focal Distance setting. Currently(version 4.1.1) post process setting nodes are a little messy so you'll have to turn all of the rest of the settings manually for easier control. When we drag from Depth of Field Focal Distance and "),a("strong",[t._v("Set")]),t._v(" the variable(named "),a("em",[t._v("Last Focus")]),t._v(") it gets stored as the last focal distance. And finally in order to get a smooth blend between the last focus distance and the current hit location we use "),a("strong",[t._v("FInterp To")]),t._v(" node.")]),t._v(" "),a("h2",{attrs:{id:"final-result-and-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-result-and-notes"}},[t._v("#")]),t._v(" Final Result and Notes")]),t._v(" "),a("p",[t._v("When it's all done, this is what you will get every time you press and hold the right mouse button:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=rEargI8dNFk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Final Result"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("You can download a sample project icluding a character BP with this function "),a("a",{attrs:{href:"https://drive.google.com/file/d/0B0LlbsIm3HuuTzNQZUJSQmkzR0k/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("here")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Notes:")])]),t._v(" "),a("ul",[a("li",[t._v("Setting the interp speed depending on the distance is optional, but highly suggested.")]),t._v(" "),a("li",[t._v("You can adjust Near and Far Transition depending on how you want it to look like. Add distance for softer transition / Subtract distance for sharper transition.")])]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Dynamic_Depth_of_Field&oldid=14724",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Dynamic_Depth_of_Field&oldid=14724"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/Category:Blueprint",title:"Category:Blueprint"}},[t._v("Blueprint")])])]),t._v(" "),a("p",[t._v("Hidden category:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[t._v("Templates")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);