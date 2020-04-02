(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{979:function(e,t,r){"use strict";r.r(t);var a=r(28),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("How To Prevent Crashes Due To Dangling Actor Pointers - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"how-to-prevent-crashes-due-to-dangling-actor-pointers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-prevent-crashes-due-to-dangling-actor-pointers"}},[e._v("#")]),e._v(" How To Prevent Crashes Due To Dangling Actor Pointers")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#UPROPERTY.28.29_UObjects_Clear_References_Properly"}},[e._v("2 UPROPERTY() UObjects Clear References Properly")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#TWeakObjectPtr"}},[e._v("3 TWeakObjectPtr")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Conclusion"}},[e._v("4 Conclusion")])])]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[r("strong",[e._v("Author")]),e._v(" "),r("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),r("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),r("p",[e._v("While working on "),r("a",{attrs:{href:"http://www.abatrongame.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Abatron"),r("OutboundLink")],1),e._v(", an RTS/FPS hybrid game with tons of character units to keep track of, I created a lot of arrays of Actors:")]),e._v(" "),r("p",[e._v("TArray<AActor*> UnitArray;")]),e._v(" "),r("p",[e._v("During multiplayer testing especially, stale / dangling AActor pointers were causing a lot of crashes!")]),e._v(" "),r("p",[e._v("The problem with stale pointers is that just checking ActorPtr != nullptr is not enough, a stale pointer will return true but wont actually still be pointing to a valid AActor, which is what causes the crash.")]),e._v(" "),r("h2",{attrs:{id:"uproperty-uobjects-clear-references-properly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uproperty-uobjects-clear-references-properly"}},[e._v("#")]),e._v(" UPROPERTY() UObjects Clear References Properly")]),e._v(" "),r("p",[e._v("A less-advertised feature of UObject pointers that are made UPROPERTY() is that they are properly updated to NULL when the object is destroyed, unlike raw pointers like I was using above.")]),e._v(" "),r("p",[e._v("Automatic Updating of UObject References "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Programming/UnrealArchitecture/Objects/Optimizations/index.html#automaticupdatingofreferences",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.unrealengine.com/latest/INT/Programming/UnrealArchitecture/Objects/Optimizations/index.html#automaticupdatingofreferences"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("So the "),r("strong",[e._v("simple solution")]),e._v(" if you are having issues with dangling / stale actor pointers is to make sure all AActor pointers are marked with UPROPERTY().")]),e._v(" "),r("p",[e._v("UPROPERTY() //<~~~ That's it! This now makes the pointers much more stable! -Rama\nTArray<AActor*> UnitArray;")]),e._v(" "),r("h2",{attrs:{id:"tweakobjectptr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tweakobjectptr"}},[e._v("#")]),e._v(" TWeakObjectPtr")]),e._v(" "),r("p",[e._v("For UObjects especially, having lots of UPROPERTY() references to them can prevent them from getting "),r("a",{attrs:{href:"https://wiki.unrealengine.com/Garbage_Collection_%26_Dynamic_Memory_Allocation",target:"_blank",rel:"noopener noreferrer"}},[e._v("garbage collected"),r("OutboundLink")],1),e._v(" properly. For this situation you can use TWeakObjectPtr which will still give you additional validity option using IsValid() but will not prevent GC from running.")]),e._v(" "),r("h2",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("If you are encountering AActor* pointers that are going stale and crashing your game, make sure they are marked with UPROPERTY() and you will be taking advantage of a rather essential feature of UObjects in UE4, which is that all UPROPERTY() references get updated to NULL when a UObject is destroyed.")]),e._v(" "),r("p",[e._v("Have fun today!")]),e._v(" "),r("p",[e._v("Rama")]),e._v(" "),r("p",[r("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),r("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=How_To_Prevent_Crashes_Due_To_Dangling_Actor_Pointers&oldid=22575",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=How_To_Prevent_Crashes_Due_To_Dangling_Actor_Pointers&oldid=22575"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);