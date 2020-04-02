(window.webpackJsonp=window.webpackJsonp||[]).push([[1078],{1305:function(e,t,r){"use strict";r.r(t);var a=r(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Time Macros - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"time-macros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-macros"}},[e._v("#")]),e._v(" Time Macros")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#YourProject.h"}},[e._v("2 YourProject.h")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Examples"}},[e._v("3 Examples")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Actor_Tick"}},[e._v("3.1 Actor Tick")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#SomeActor.h"}},[e._v("3.1.1 SomeActor.h")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#SomeActor.cpp"}},[e._v("3.1.2 SomeActor.cpp")])])])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Credits"}},[e._v("4 Credits")])])]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Convenience macros for creating and working with values based on GetWorld()->GetTimeSeconds().")]),e._v(" "),r("h2",{attrs:{id:"yourproject-h"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yourproject-h"}},[e._v("#")]),e._v(" YourProject.h")]),e._v(" "),r("p",[e._v("#define TIMENOW            (GetWorld() ? GetWorld()->GetTimeSeconds() : 0.0f)\n#define TIMESINCE(Time)    (GetWorld()->GetTimeSeconds() - Time)")]),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"actor-tick"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actor-tick"}},[e._v("#")]),e._v(" Actor Tick")]),e._v(" "),r("h4",{attrs:{id:"someactor-h"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#someactor-h"}},[e._v("#")]),e._v(" SomeActor.h")]),e._v(" "),r("p",[e._v("protected:\nfloat SomeTime;")]),e._v(" "),r("h4",{attrs:{id:"someactor-cpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#someactor-cpp"}},[e._v("#")]),e._v(" SomeActor.cpp")]),e._v(" "),r("p",[e._v("void ASomeActor::Tick(float DeltaSeconds)\n{\nSuper::Tick(DeltaSeconds);\n \nif (TIMESINCE(SomeTime) >= 1.0f)\n{\nSomeTime = TIMENOW;\nDoSomething();\n}\n}")]),e._v(" "),r("h2",{attrs:{id:"credits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),r("p",[r("a",{attrs:{href:"/User:Kris",title:"User:Kris"}},[e._v("Kris")])]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Time_Macros&oldid=14093",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Time_Macros&oldid=14093"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);