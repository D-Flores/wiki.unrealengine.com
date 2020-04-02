(window.webpackJsonp=window.webpackJsonp||[]).push([[1054],{1362:function(t,e,a){"use strict";a.r(e);var r=a(28),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Templates in C++ - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"templates-in-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templates-in-c"}},[t._v("#")]),t._v(" Templates in C++")]),t._v(" "),a("p",[t._v("From Epic Wiki")]),t._v(" "),a("p",[t._v("(Redirected from "),a("a",{attrs:{href:"/index.php?title=Templates_in_UE4_C%2B%2B&redirect=no",title:"Templates in UE4 C++"}},[t._v("Templates in UE4 C++")]),t._v(")")]),t._v(" "),a("p",[t._v("Jump to: "),a("a",{attrs:{href:"#mw-navigation"}},[t._v("navigation")]),t._v(", "),a("a",{attrs:{href:"#p-search"}},[t._v("search")])]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Spawn_Actor_From_Blueprint"}},[t._v("2 Spawn Actor From Blueprint")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Static"}},[t._v("2.1 Static")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#.H"}},[t._v("2.2 .H")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Template_Return_Type"}},[t._v("2.3 Template Return Type")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Calling_SpawnBP_Function"}},[t._v("3 Calling SpawnBP Function")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Base_Class_for_the_Template.2C_not_the_BP"}},[t._v("4 Base Class for the Template, not the BP")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Summary"}},[t._v("5 Summary")])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Dear Community,")]),t._v(" "),a("p",[t._v("Here's how you make template classes!")]),t._v(" "),a("p",[t._v("Basic format:")]),t._v(" "),a("p",[t._v("You put templates in your .h file, not the .cpp")]),t._v(" "),a("p",[t._v("This means they should be FORCEINLINE.")]),t._v(" "),a("p",[t._v('FORCEINLINE is actually a great optimization, look up "c++ inline functions"')]),t._v(" "),a("p",[t._v("So using the method I am showing, these are the core parts of the delcaration and definition:")]),t._v(" "),a("p",[t._v("template <typename YourTemplateType>\nFORCEINLINE void YourFunction()\n{\n//function body\n}")]),t._v(" "),a("h2",{attrs:{id:"spawn-actor-from-blueprint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spawn-actor-from-blueprint"}},[t._v("#")]),t._v(" Spawn Actor From Blueprint")]),t._v(" "),a("p",[t._v("I wrote a templated SpawnBP function to simplify and streamline the process of spawning actors from a blueprint!")]),t._v(" "),a("p",[t._v("I put this function in the .h of a static library of functions I created.")]),t._v(" "),a("p",[t._v("template <typename VictoryObjType>\nstatic FORCEINLINE VictoryObjType* SpawnBP(\nUWorld* TheWorld,\nUClass* TheBP,\nconst FVector& Loc,\nconst FRotator& Rot,\nconst bool bNoCollisionFail = true,\nAActor* Owner = NULL,\nAPawn* Instigator = NULL\n){\nif(!TheWorld) return NULL;\nif(!TheBP) return NULL;\n//~~\n \nFActorSpawnParameters SpawnInfo;\nSpawnInfo.bNoCollisionFail \t\t= bNoCollisionFail;\nSpawnInfo.Owner \t\t\t\t= Owner;\nSpawnInfo.Instigator\t\t\t\t= Instigator;\nSpawnInfo.bDeferConstruction \t= false;\n \nreturn TheWorld->SpawnActor<VictoryObjType>(TheBP, Loc ,Rot, SpawnInfo );\n}")]),t._v(" "),a("h3",{attrs:{id:"static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" Static")]),t._v(" "),a("p",[t._v("You could remove the static keyword and put this function in any .h file of your choosing, if that class is actually instanced, such as HUD, PlayerController, or Character (perhaps just for testing).")]),t._v(" "),a("h3",{attrs:{id:"h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[t._v("#")]),t._v(" .H")]),t._v(" "),a("p",[t._v("Again keep in mind this is all occurring in a .h file somewhere, no .cpp involved.")]),t._v(" "),a("h3",{attrs:{id:"template-return-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-return-type"}},[t._v("#")]),t._v(" Template Return Type")]),t._v(" "),a("p",[t._v("Notice I am returning the templated type as a pointer")]),t._v(" "),a("h2",{attrs:{id:"calling-spawnbp-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calling-spawnbp-function"}},[t._v("#")]),t._v(" Calling SpawnBP Function")]),t._v(" "),a("p",[t._v("From a Static Library, in an actor class (for use of GetWorld())")]),t._v(" "),a("p",[t._v('"SpawnLoc" and "SpawnRot" are calculated by you based on your needs')]),t._v(" "),a("p",[t._v("AActorBaseClass* NewActor = UFunctionLibrary::SpawnBP<AActorBaseClass>(GetWorld(), TheActorBluePrint, SpawnLoc, SpawnRot);")]),t._v(" "),a("p",[t._v("From an instanced Actor class")]),t._v(" "),a("p",[t._v("AActorBaseClass* NewActor = SpawnBP<AActorBaseClass>(GetWorld(), TheActorBluePrint, SpawnLoc, SpawnRot);")]),t._v(" "),a("p",[t._v("Specific UE4 example:")]),t._v(" "),a("p",[t._v("AStaticMeshActor* NewActor = SpawnBP<AStaticMeshActor>(GetWorld(), TheSMABluePrint, SpawnLoc, SpawnRot);")]),t._v(" "),a("h2",{attrs:{id:"base-class-for-the-template-not-the-bp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-class-for-the-template-not-the-bp"}},[t._v("#")]),t._v(" Base Class for the Template, not the BP")]),t._v(" "),a("p",[t._v("Note that I am using the Base Class from which the BP was made as the templated type!")]),t._v(" "),a("p",[t._v("TheActorBluePrint was made in the Editor, from the Base Class.")]),t._v(" "),a("p",[t._v("In order to use the spawn function in a templated way I have to use the base class which is known at compile time as the templated type.")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("Now you know how to make C++ templates!")]),t._v(" "),a("p",[t._v("And you also have a convenient helper function for spawning actors from a BP !")]),t._v(" "),a("p",[t._v("Enjoy!")]),t._v(" "),a("p",[a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Templates_in_C%2B%2B&oldid=2335",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Templates_in_C%2B%2B&oldid=2335"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);