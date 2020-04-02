(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{1299:function(e,a,r){"use strict";r.r(a);var t=r(28),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Timer Macros - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"timer-macros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timer-macros"}},[e._v("#")]),e._v(" Timer Macros")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#YourProject.h"}},[e._v("2 YourProject.h")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Examples"}},[e._v("3 Examples")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Dummy_handle"}},[e._v("3.1 Dummy handle")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#SomeActor.h"}},[e._v("3.1.1 SomeActor.h")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#SomeActor.cpp"}},[e._v("3.1.2 SomeActor.cpp")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Predefined_handle"}},[e._v("3.2 Predefined handle")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#YourPlayerController.h"}},[e._v("3.2.1 YourPlayerController.h")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#YourPlayerController.cpp"}},[e._v("3.2.2 YourPlayerController.cpp")])])])])])])]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[r("em",[e._v("Authors:")]),e._v(" "),r("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(", "),r("a",{attrs:{href:"/User:Kris",title:"User:Kris"}},[e._v("Kris")])]),e._v(" "),r("p",[e._v("Convenience macros initially created by Rama and extended by Kris, for working with the timer system introduced from UE4.7 onwards.")]),e._v(" "),r("h2",{attrs:{id:"yourproject-h"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yourproject-h"}},[e._v("#")]),e._v(" YourProject.h")]),e._v(" "),r("p",[e._v("#define SETTIMER(param1, param2, param3) \\\n{ \\\nFTimerHandle TimerHandle; \\\nGetWorldTimerManager().SetTimer(TimerHandle, this, &param1, param2, param3); \\\n}\n \n#define SETTIMERH(handle, param1, param2, param3) (GetWorldTimerManager().SetTimer(handle, this, &param1, param2, param3))\n#define CLEARTIMER(handle) (GetWorldTimerManager().ClearTimer(handle))\n#define ISTIMERACTIVE(handle) (GetWorldTimerManager().IsTimerActive(handle))\n \n#define GETTIMERREMAINING(handle) (GetWorldTimerManager().GetTimerRemaining(handle))\n#define GETTIMERELAPSED(handle) (GetWorldTimerManager().GetTimerElapsed(handle))")]),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"dummy-handle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dummy-handle"}},[e._v("#")]),e._v(" Dummy handle")]),e._v(" "),r("p",[e._v("Use the SETTIMER() macro to create a timer based off a dummy FTimerHandle variable."),r("br"),e._v("\nOnce created, you cannot interact with this kind of timer in any way.")]),e._v(" "),r("p",[e._v("You will find plenty of cases where a dummy handle is used in the UE4 engine code base, this is a common case.")]),e._v(" "),r("p",[e._v("If you need to track a timer in any way, such as clearing it at a time of your choosing, or checking if it is active, make sure to use SETTIMERH() and a handle that you store as a global variable.")]),e._v(" "),r("h4",{attrs:{id:"someactor-h"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#someactor-h"}},[e._v("#")]),e._v(" SomeActor.h")]),e._v(" "),r("p",[e._v("protected:\nUFUNCTION()\nvoid SomeFunction();")]),e._v(" "),r("h4",{attrs:{id:"someactor-cpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#someactor-cpp"}},[e._v("#")]),e._v(" SomeActor.cpp")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("SETTIMER(ASomeActor::SomeFunction, 0.25f, false);\n")])])]),r("h3",{attrs:{id:"predefined-handle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#predefined-handle"}},[e._v("#")]),e._v(" Predefined handle")]),e._v(" "),r("p",[e._v("Use the SETTIMERH() macro when to create a timer based off an existing FTimerHandle variable."),r("br"),e._v("\nOnce created, you can interact with this timer by passing the FTimerHandle variable into other macros, such as CLEARTIMER() or ISTIMERACTIVE().")]),e._v(" "),r("h4",{attrs:{id:"yourplayercontroller-h"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yourplayercontroller-h"}},[e._v("#")]),e._v(" YourPlayerController.h")]),e._v(" "),r("p",[e._v("protected:\nFTimerHandle TimerHandle_Taunt;\nfloat LastTauntTime;\n \nUFUNCTION()\nvoid TauntTimer();")]),e._v(" "),r("h4",{attrs:{id:"yourplayercontroller-cpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yourplayercontroller-cpp"}},[e._v("#")]),e._v(" YourPlayerController.cpp")]),e._v(" "),r("p",[e._v("void AYourPlayerController::ServerTaunt_Implementation()\n{\n// Only allow Taunt its been awhile since we last tried to commit Taunt.\n// TIMEXXX macros from https://wiki.unrealengine.com/Time_Macros\nif (TIMESINCE(LastTauntTime) > 5.0)\n{\nLastTauntTime = TIMENOW;\n// Don't commit Taunt if a Taunt attempt is already pending.\nif (!ISTIMERACTIVE(TimerHandle_Taunt))\n{\n// Delay the Taunt attempt a random amount to prevent trolling.\nSETTIMERH(TimerHandle_Taunt, AYourPlayerController::TauntTimer, FMath::FRandRange(1.5f, 3.0f), false);\n}\n}\n}")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Timer_Macros&oldid=14645",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Timer_Macros&oldid=14645"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);