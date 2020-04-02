(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{609:function(t,e,n){"use strict";n.r(e);var o=n(28),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Blueprint Toggle Visibility Tutorial - Epic Wiki")]),t._v(" "),n("h1",{attrs:{id:"blueprint-toggle-visibility-tutorial"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-toggle-visibility-tutorial"}},[t._v("#")]),t._v(" Blueprint Toggle Visibility Tutorial")]),t._v(" "),n("p",[t._v("1. Begin with the "),n("strong",[t._v("Blank With Starter Content")]),t._v(" project.")]),t._v(" "),n("p",[t._v("2. Click on the "),n("strong",[t._v("Blueprints")]),t._v(" button in the toolbar, and select "),n("strong",[t._v("Class Blueprint: Create...")]),t._v(" from the dropdown menu.")]),t._v(" "),n("p",[t._v("3. Select "),n("strong",[t._v("Actor")]),t._v(" as the parent class in the window that appears.")]),t._v(" "),n("p",[t._v("4. Name your Blueprint, then click "),n("strong",[t._v("OK")]),t._v(". In this example, the Blueprint is named "),n("strong",[t._v("CeilingLampBlueprint")]),t._v(". By default, the Blueprint's save location will be Game/Blueprints.")]),t._v(" "),n("p",[t._v("Your Class Blueprint will open in "),n("strong",[t._v("Components Mode")]),t._v(".")]),t._v(" "),n("p",[t._v("1. Add a "),n("strong",[t._v("Static Mesh Component")]),t._v(" in the Components tab.")]),t._v(" "),n("p",[t._v("2. Set the "),n("strong",[t._v("Static Mesh")]),t._v(" to "),n("strong",[t._v("SM_Lamp_Ceiling")]),t._v(".")]),t._v(" "),n("p",[t._v("3. Add a "),n("strong",[t._v("PointLightComponent")]),t._v(" in the Components tab.")]),t._v(" "),n("p",[t._v("4. Set the "),n("strong",[t._v("PointLightComponent's")]),t._v(" location to [0, 0, -240].")]),t._v(" "),n("p",[t._v("5. In the "),n("strong",[t._v("Details")]),t._v(" panel, uncheck "),n("strong",[t._v("Visible")]),t._v(" under "),n("strong",[t._v("Rendering")]),t._v(" to turn the light off.")]),t._v(" "),n("p",[t._v("6. Add a BoxComponent in the Components tab.")]),t._v(" "),n("p",[t._v("7. Set the BoxComponent's location to [0, 0, -200] and scale to [5, 5, 7].")]),t._v(" "),n("p",[t._v("8. In the Details panel for Box1, find the "),n("strong",[t._v("Add Event")]),t._v(" dropdown menu and select "),n("strong",[t._v("Add OnComponentBeginOverlap")]),t._v(".")]),t._v(" "),n("p",[t._v("9. Find the "),n("strong",[t._v("My Blueprint")]),t._v(" panel.")]),t._v(" "),n("p",[t._v("10. Click and drag from "),n("strong",[t._v("PointLight1")]),t._v(" in the "),n("strong",[t._v("My Blueprint")]),t._v(" panel into the graph.")]),t._v(" "),n("p",[t._v("11. Select "),n("strong",[t._v("Get")]),t._v(" to get a reference to "),n("strong",[t._v("PointLight1")]),t._v(".")]),t._v(" "),n("p",[t._v("12. Click and drag from the blue pin on the "),n("strong",[t._v("PointLight1")]),t._v(" reference node into an empty area of the graph to summon the context menu.")]),t._v(" "),n("p",[t._v("13. Search for Visibility in the context menu, and select Toggle Visibility.")]),t._v(" "),n("p",[t._v("14. Now we need to connect the "),n("strong",[t._v("OnComponentBeginOverlap")]),t._v(" node to the "),n("strong",[t._v("Toggle Visibility")]),t._v(" node, so that the event execution will cause the "),n("strong",[t._v("Toggle Visibility")]),t._v(" node to execute. Click on the output pin of "),n("strong",[t._v("OnComponentBeginOverlap")]),t._v(" and drag a wire to the input execution pin of "),n("strong",[t._v("Toggle Visibility")]),t._v(".")]),t._v(" "),n("p",[t._v("15. Select "),n("strong",[t._v("Box1")]),t._v(" in the "),n("strong",[t._v("My Blueprint")]),t._v(" tab.")]),t._v(" "),n("p",[t._v("16. Right-click in the graph, and expand "),n("strong",[t._v("Add Event")]),t._v(" for "),n("strong",[t._v("Box1 > Collision")]),t._v(" in the context menu.")]),t._v(" "),n("p",[t._v("17. Select "),n("strong",[t._v("Add On Component End Overlap")]),t._v(".")]),t._v(" "),n("p",[t._v("18. Click on the output pin of "),n("strong",[t._v("OnComponentEndOverlap")]),t._v(" and drag a wire to the input execution pin of "),n("strong",[t._v("Toggle Visibility")]),t._v(". You may want to click on the "),n("strong",[t._v("On Actor End Overlap")]),t._v(" and drag it within the graph so it is in a better location.")]),t._v(" "),n("p",[t._v("19. Return to the "),n("strong",[t._v("Level Editor")]),t._v(", and open the "),n("strong",[t._v("Blueprints")]),t._v(" folder in the "),n("strong",[t._v("Content Browser")]),t._v(".")]),t._v(" "),n("p",[t._v("20. Drag and drop "),n("strong",[t._v("CeilingLampBlueprint")]),t._v(" from the "),n("strong",[t._v("Content Browser")]),t._v(" into the level to place an instance of your ceiling light.")]),t._v(" "),n("p",[t._v("21. "),n("strong",[t._v("Play In Editor")]),t._v(" to test your new Blueprint logic!")]),t._v(" "),n("p",[t._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprint_Toggle_Visibility_Tutorial&oldid=2875",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Blueprint_Toggle_Visibility_Tutorial&oldid=2875"),n("OutboundLink")],1),t._v('"')]),t._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/Category:Blueprint",title:"Category:Blueprint"}},[t._v("Blueprint")])])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);