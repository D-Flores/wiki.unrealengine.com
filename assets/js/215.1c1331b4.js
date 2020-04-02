(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{564:function(t,e,n){"use strict";n.r(e);var r=n(28),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Blueprint Inventory - Epic Wiki")]),t._v(" "),n("h1",{attrs:{id:"blueprint-inventory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-inventory"}},[t._v("#")]),t._v(" Blueprint Inventory")]),t._v(" "),n("p",[n("strong",[t._v("Rate this Page:")])]),t._v(" "),n("p",[t._v("5.00")]),t._v(" "),n("p",[n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),t._v(" (2 votes)")]),t._v(" "),n("p",[t._v("Approved for Versions:4.10.0")]),t._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Blueprint_Inventory"}},[t._v("1 Blueprint Inventory")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#BaseItem"}},[t._v("1.1 BaseItem")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#InventorySlot"}},[t._v("1.2 InventorySlot")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#BaseInventory"}},[t._v("1.3 BaseInventory")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Macros"}},[t._v("1.4 Macros")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Functions"}},[t._v("1.5 Functions")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Pick-up_Functionality"}},[t._v("2 Pick-up Functionality")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#BaseItem_2"}},[t._v("2.1 BaseItem")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Your_Character"}},[t._v("2.2 Your Character")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Testing"}},[t._v("2.3 Testing")])])])])]),t._v(" "),n("h2",{attrs:{id:"blueprint-inventory-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-inventory-2"}},[t._v("#")]),t._v(" Blueprint Inventory")]),t._v(" "),n("p",[t._v("This wiki page will teach you how to make a simple inventory system. I based my initial work off the forum post found "),n("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?4011-Basic-Item-System-with-stacking-functionality-Please-Critique!",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". The core features of this system are:")]),t._v(" "),n("ul",[n("li",[t._v("Extendible BaseInventory class\n"),n("ul",[n("li",[t._v("Inventory weight and max slot size")])])]),t._v(" "),n("li",[t._v("Extendible BaseItem class\n"),n("ul",[n("li",[t._v("Item weight")]),t._v(" "),n("li",[t._v("Stackable (optional)")])])]),t._v(" "),n("li",[t._v("Structures for inventory slots")])]),t._v(" "),n("h3",{attrs:{id:"baseitem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#baseitem"}},[t._v("#")]),t._v(" BaseItem")]),t._v(" "),n("p",[t._v("Create an Actor Blueprint and give it a name of BaseItem (or something else if you want).")]),t._v(" "),n("p",[t._v("Add a sphere collision component and rename it to PickUpRadius:")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BluePrintInventory_ItemSphere.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/4/48/BluePrintInventory_ItemSphere.png/275px-BluePrintInventory_ItemSphere.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BluePrintInventory_ItemSphere.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("SphereCollision settings")]),t._v(" "),n("p",[t._v("Add a static mesh component and rename it to ItemMesh:")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_ItemMesh.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/95/BlueprintInventory_ItemMesh.png/275px-BlueprintInventory_ItemMesh.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_ItemMesh.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("StaticMesh settings")]),t._v(" "),n("p",[t._v("Create the following variables:")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_ItemVariables.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/9b/BlueprintInventory_ItemVariables.png/466px-BlueprintInventory_ItemVariables.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_ItemVariables.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("BaseItem variables")]),t._v(" "),n("h3",{attrs:{id:"inventoryslot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inventoryslot"}},[t._v("#")]),t._v(" InventorySlot")]),t._v(" "),n("p",[t._v("Create a Structure Blueprint, name it InventorySlot and add the following two variables:")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_Slot.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/2/2c/BlueprintInventory_Slot.png/643px-BlueprintInventory_Slot.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_Slot.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("InventorySlot structure")]),t._v(" "),n("h3",{attrs:{id:"baseinventory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#baseinventory"}},[t._v("#")]),t._v(" BaseInventory")]),t._v(" "),n("p",[t._v("Create an Actor Blueprint and give it a name. We will use BaseInventory. Add a StaticMesh component and make it the root component.")]),t._v(" "),n("p",[t._v("Add the following variables:")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_InventoryVariables.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/4/48/BlueprintInventory_InventoryVariables.png/732px-BlueprintInventory_InventoryVariables.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_InventoryVariables.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("BaseInventory variables")]),t._v(" "),n("h3",{attrs:{id:"macros"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#macros"}},[t._v("#")]),t._v(" Macros")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_CanItStack.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/2/2b/BlueprintInventory_CanItStack.png/799px-BlueprintInventory_CanItStack.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_CanItStack.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("CanItStack")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_CurrentWeight.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/9c/BlueprintInventory_CurrentWeight.png/799px-BlueprintInventory_CurrentWeight.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_CurrentWeight.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("CurrentWeight")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_HasInventorySpace.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/c/c3/BlueprintInventory_HasInventorySpace.png/800px-BlueprintInventory_HasInventorySpace.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_HasInventorySpace.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("HasInventorySpace")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_HasPartialStack.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/2/20/BlueprintInventory_HasPartialStack.png/800px-BlueprintInventory_HasPartialStack.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_HasPartialStack.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("HasPartialStack")]),t._v(" "),n("h3",{attrs:{id:"functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_AddItemToInventory.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/92/BlueprintInventory_AddItemToInventory.png/800px-BlueprintInventory_AddItemToInventory.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_AddItemToInventory.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("AddItemToInventory")]),t._v(" "),n("h2",{attrs:{id:"pick-up-functionality"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pick-up-functionality"}},[t._v("#")]),t._v(" Pick-up Functionality")]),t._v(" "),n("h3",{attrs:{id:"baseitem-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#baseitem-2"}},[t._v("#")]),t._v(" BaseItem")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_SphereCollisionEvent.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/9c/BlueprintInventory_SphereCollisionEvent.png/800px-BlueprintInventory_SphereCollisionEvent.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_SphereCollisionEvent.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("SphereCollisionEvent")]),t._v(" "),n("h3",{attrs:{id:"your-character"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#your-character"}},[t._v("#")]),t._v(" Your Character")]),t._v(" "),n("p",[t._v("On your character blueprint, add the following variable so that the character has an inventory we can reference.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_CharacterInventory.png"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/03/BlueprintInventory_CharacterInventory.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_CharacterInventory.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("CharacterInventory")]),t._v(" "),n("p",[t._v("Then, spawn an instance of BaseInventory (preferably on BeginPlay) and assign it to the variable we created above.")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_InventorySpawn.png"}},[n("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/5/54/BlueprintInventory_InventorySpawn.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_InventorySpawn.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("InventorySpawn")]),t._v(" "),n("h3",{attrs:{id:"testing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),n("p",[t._v("Place a BaseItem inside your level, and press play. When you walk over the item, you should see a printed message:")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_ItemAdded.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/8/8e/BlueprintInventory_ItemAdded.png/800px-BlueprintInventory_ItemAdded.png",alt:""}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInventory_ItemAdded.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),n("p",[t._v("ItemAdded")]),t._v(" "),n("p",[t._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprint_Inventory&oldid=16789",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Blueprint_Inventory&oldid=16789"),n("OutboundLink")],1),t._v('"')]),t._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/Category:Blueprint",title:"Category:Blueprint"}},[t._v("Blueprint")])])]),t._v(" "),n("p",[t._v("Hidden category:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[t._v("Templates")])])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);