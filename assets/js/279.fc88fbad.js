(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{858:function(t,e,r){"use strict";r.r(e);var a=r(28),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Bouncepad Tutorial - Epic Wiki")]),t._v(" "),r("h1",{attrs:{id:"bouncepad-tutorial"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bouncepad-tutorial"}},[t._v("#")]),t._v(" Bouncepad Tutorial")]),t._v(" "),r("p",[t._v("Author: Adam Davis")]),t._v(" "),r("p",[t._v("1. Create a new Actor blueprint. This is a blueprint that derives from the parent class 'Actor', which means it will get all of the attributes of the Actor parent."),r("br"),t._v(" "),r("a",{attrs:{href:"/File:ClassActor.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/ab/ClassActor.png",alt:"ClassActor.png"}})]),r("br"),t._v('\n2. Name the blueprint "Bouncepad" and open it by double clicking on the icon in your content browser.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Renamed.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/ee/Renamed.png",alt:"Renamed.png"}})]),r("br"),t._v('\n3. Add a Static Mesh component by going to "Add Component" in the Components window and selecting "Static Mesh component" from the list.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Staticmesh.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/07/Staticmesh.png",alt:"Staticmesh.png"}})]),r("br"),t._v("\n4. In the Details pane, select a suitable static mesh to form the base of your bounce pad."),r("br"),t._v(" "),r("a",{attrs:{href:"/File:SelectMesh.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/f/fa/SelectMesh.png",alt:"SelectMesh.png"}})]),r("br"),t._v("\n5. Create a Box Collision component. This will be what we use to determine whether or not to activate."),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Collision.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/aa/Collision.png",alt:"Collision.png"}})]),r("br"),t._v("\n6. Move the collision box to just above the static mesh. Make sure to size it so that the box is not too large or else you will launch well before it looks like you have touched the bounce pad."),r("br"),t._v("\n7. Add an arrow component. Move and rotate the arrow component to face straight upwards from the static mesh and have it sit slight above the mesh on the Z axis. While this won't show up while playing, it will give you an idea of which direction your bounce pad will be launching when you are setting them up."),r("br"),t._v(" "),r("a",{attrs:{href:"/File:SetArrow.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/a3/SetArrow.png",alt:"SetArrow.png"}})]),r("br"),t._v("\n8. Compile the blueprint, now open your event graph."),r("br"),t._v('\n9. Find the node "Event Overlap". Your blueprint should have one already set in the event graph.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Overlap.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/ed/Overlap.png",alt:"Overlap.png"}})]),r("br"),t._v('\n10. Drag off of the "Other Actor" pin and create a "cast to" node. The way to do this is to type in "Cast to" and, in this case, use the name of your player character blueprint. For my example it was MyCharacter, so I would type in "Cast to MyCharacter". A Cast to node is a way for blueprints to check who/what they are interacting with and respond accordingly. In many cases, you only want certain blueprints to do specific functions under specific circumstances. This is the case with the bounce pad. We only want it to trigger when the player overlaps the bouncepad, so we use a cast to the character to check what object is overlapping and see if that is or is not the character. If it is, you can continue, if not, do something else or do nothing.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Casttocharacter.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/4/4b/Casttocharacter.png",alt:"Casttocharacter.png"}})]),r("br"),t._v('\n11. Drag off of the "as '),r("blueprintname",[t._v('_C" node and type in "is falling", then select the node on the list. This will get the players state as to whether or not they are in the air. The "Is Falling" state automatically sets when jumping with most of the template pawns provided in the editor.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Isfalling.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/9/9c/Isfalling.png",alt:"Isfalling.png"}})]),r("br"),t._v('\n12. From the return value, drag off and create a branch node. Plug the execution pin that is unlabeled from the cast to node into the execution of the branch. This setup will check to see if the object that overlaps your bouncepad is the character, then check to see if the character is set to state "falling" or if the player is on the ground.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Branch_-_Copy.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/7/70/Branch_-_Copy.png",alt:"Branch - Copy.png"}})]),r("br"),t._v('\n13. From the "as '),r("blueprintname",[t._v('_C" pin, drag off and type in "launch character" into the context menu. Connect this nodes execution pin to the "True" execution from your branch node. So now, if the overlap detects a player and the player is set to state "is falling", launch the character.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:LaunchCharacter.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/5/55/LaunchCharacter.png",alt:"LaunchCharacter.png"}})]),r("br"),t._v('\n14. As you may have noticed, while we\'ve told the bouncepad to launch the player, we haven\'t really given it any other information to go off of! The first thing you will want to do is press the checkboxes next to "XYOverride" and "ZOverride". This will eliminate the players movement once they are launched, forcing the pawn to accept the launch velocity as the only input until they are no longer falling or you tell it to do something else.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:CheckBools.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/c/c6/CheckBools.png",alt:"CheckBools.png"}})]),r("br"),t._v('\n15. Next, create a new variable in the "My Blueprint" section. Call this "Bounce Height" and set it to type "Vector" in the Details Pane.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:NewVar.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/f/fe/NewVar.png",alt:"NewVar.png"}})]),r("br"),t._v(" "),r("a",{attrs:{href:"/File:ChangeVar.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/5/5f/ChangeVar.png",alt:"ChangeVar.png"}})]),r("br"),t._v('\n16. In the "My Blueprint" section, click the closed eye next to BounceHeight. This makes the variable editable so that it can be interacted with by other blueprints or outside of the event graph.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:EditableVar.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/9/9c/EditableVar.png",alt:"EditableVar.png"}})]),r("br"),t._v('\n17. In "My Blueprint", select the "Box" component, Left Mouse Button and hold to drag this into the event graph. When you let go, press "Get".'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:GetNode_Component.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/ee/GetNode_Component.png",alt:"GetNode Component.png"}})]),r("br"),t._v('\n18. Drag off of this and type in "Get Up Vector", drag off of the box again to create a "Get World Rotation". This gets the Z axis of your bouncepad and the rotation you have set the pad in the world.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:UpVector_Rotation.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/5/5e/UpVector_Rotation.png",alt:"UpVector Rotation.png"}})]),r("br"),t._v('\n19. Drag off of your Get Up Vector and type "+ vector", select "vector + vector".'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Vectorplus.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/0c/Vectorplus.png",alt:"Vectorplus.png"}})]),r("br"),t._v('\n20.Left mouse button and drag your bounce height variable from the "My Blueprint" pane to the empty pin on your add node. What you are doing is taking your up vector information and adding the bounce height variable to it. so if the up vector was 1,0,1 and your bounce height was set to 0,1,0, your total would end up as 1,1,1.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:DragPin.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/b/b0/DragPin.png",alt:"DragPin.png"}})]),r("br"),t._v('\n21. Drag from the output of your add node and type "rotate vector". Create the rotate vector node and plug in your world rotation. This will rotate your up vector + BounceHeight to the direction your bouncepad is set to. This is what makes those arrows so handy!'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Rotatevector.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/f/f1/Rotatevector.png",alt:"Rotatevector.png"}})]),r("br"),t._v('\n22. Plug the return value from your rotate vector into your "launch velocity" for your launch character node.'),r("br"),t._v(" "),r("a",{attrs:{href:"/File:Launchvelocity.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/4/42/Launchvelocity.png",alt:"Launchvelocity.png"}})]),r("br"),t._v("\n23. Your blueprint should look something like this when you are done:"),r("br"),t._v(" "),r("a",{attrs:{href:"/File:FullGraph.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/4/44/FullGraph.png",alt:"FullGraph.png"}})]),r("br"),t._v("\n24. Compile, save, and close your blueprint."),r("br"),t._v("\n25. Place a copy of your blueprint into the level and rotate it so that the arrow points in the direct you want your player to bounce."),r("br"),t._v(" "),r("a",{attrs:{href:"/File:ContentbrowserDrag.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/04/ContentbrowserDrag.png",alt:"ContentbrowserDrag.png"}})]),r("br"),t._v("\n26. In the details pane when you have the bounce pad selected, set your bounceheight to the desired velocity. A good test number is (0,0,1500). Remember that you are affecting your Up vector, so you will want to make your adjustments to the Z axis, not the X or Y."),r("br"),t._v(" "),r("a",{attrs:{href:"/File:ChangeBounce.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/83/ChangeBounce.png",alt:"ChangeBounce.png"}})]),r("br"),t._v("\n27. Press Play in editor and jump on the bouncepad")])],1)],1),t._v(" "),r("p",[t._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Bouncepad_Tutorial&oldid=13538",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Bouncepad_Tutorial&oldid=13538"),r("OutboundLink")],1),t._v('"')]),t._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Epic_Created_Content",title:"Category:Epic Created Content"}},[t._v("Epic Created Content")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=o.exports}}]);