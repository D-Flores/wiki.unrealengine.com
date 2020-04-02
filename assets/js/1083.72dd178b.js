(window.webpackJsonp=window.webpackJsonp||[]).push([[1083],{574:function(t,e,a){"use strict";a.r(e);var n=a(28),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Trace Functions - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"trace-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace-functions"}},[t._v("#")]),t._v(" Trace Functions")]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Static"}},[t._v("2 Static")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Overloads"}},[t._v("3 Overloads")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Trace"}},[t._v("4 Trace")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Example_Usage"}},[t._v("4.1 Example Usage")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#FHitResult_Now_Returns_Exact_Distance"}},[t._v("5 FHitResult Now Returns Exact Distance")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Example_Code"}},[t._v("5.1 Example Code")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Trace_With_Ignore_Actors_Array"}},[t._v("6 Trace With Ignore Actors Array")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Example_Usage_2"}},[t._v("6.1 Example Usage")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Trace_Component"}},[t._v("7 Trace Component")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Example_Usage_3"}},[t._v("7.1 Example Usage")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Why_Use_Trace_Component.3F"}},[t._v("8 Why Use Trace Component?")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("9")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Video_of_Component_Level_Tracing"}},[t._v("10 Video of Component Level Tracing")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#_2"}},[t._v("11")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Summary"}},[t._v("12 Summary")])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[a("em",[t._v("Author:")]),t._v(" "),a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v("Dear Community,")]),t._v(" "),a("p",[t._v("I wrote these functions for myself to simplify the process of doing Traces in UE4 C++.")]),t._v(" "),a("p",[t._v("I hope you enjoy them!")]),t._v(" "),a("p",[t._v("I also demonstrate the use of the Distance propery of FHitResult, which I submitted as a pull request that Epic accepted as of 4.9.0")]),t._v(" "),a("h2",{attrs:{id:"static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" Static")]),t._v(" "),a("p",[t._v("If you are just starting out and want to test these functions you can remove the word static,")]),t._v(" "),a("p",[t._v("and put these in the .h file of your choosing.")]),t._v(" "),a("p",[t._v("I recommend that you make a Static Function Library for yourself though and put these functions there.")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"/Static_Function_Libraries,_Your_Own_Version_of_UE4_C%2B%2B,_No_Engine_Compile_Times",title:"Static Function Libraries, Your Own Version of UE4 C++, No Engine Compile Times"}},[t._v("Static Function Library Tutorial")])])]),t._v(" "),a("h2",{attrs:{id:"overloads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overloads"}},[t._v("#")]),t._v(" Overloads")]),t._v(" "),a("p",[t._v("Two of the functions below have the same name because one is an overload of the other.")]),t._v(" "),a("p",[t._v("This means that the two functions differ only by parameters, and the compiler will choose which one you mean based on the parameters that you supply.")]),t._v(" "),a("h2",{attrs:{id:"trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace"}},[t._v("#")]),t._v(" Trace")]),t._v(" "),a("p",[t._v('static FORCEINLINE bool Trace(\nUWorld* World,\nAActor* ActorToIgnore,\t\nconst FVector& Start,\nconst FVector& End,\nFHitResult& HitOut,\nECollisionChannel CollisionChannel = ECC_Pawn,\nbool ReturnPhysMat = false\n) {\nif(!World)\n{\nreturn false;\n}\n \nFCollisionQueryParams TraceParams(FName(TEXT("VictoreCore Trace")), true, ActorToIgnore);\nTraceParams.bTraceComplex = true;\n//TraceParams.bTraceAsyncScene = true;\nTraceParams.bReturnPhysicalMaterial = ReturnPhysMat;\n \n//Ignore Actors\nTraceParams.AddIgnoredActor(ActorToIgnore);\n \n//Re-initialize hit info\nHitOut = FHitResult(ForceInit);\n \n//Trace!\nWorld->LineTraceSingle(\nHitOut,\t\t//result\nStart,\t//start\nEnd , //end\nCollisionChannel, //collision channel\nTraceParams\n);\n \n//Hit any Actor?\nreturn (HitOut.GetActor() != NULL) ;\n}')]),t._v(" "),a("h3",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v('//In player controller class\n \n//location the PC is focused on\nconst FVector Start = GetFocalLocation();\n \n//256 units in facing direction of PC (256 units in front of the camera)\nconst FVector End = Start + GetControlRotation().Vector() * 256;\n \n//The trace data is stored here\nFHitResult HitData(ForceInit);\n \n//If Trace Hits anything\nif(  UMyStaticFunctionLibrary::Trace(GetWorld(),GetPawn(),Start,End,HitData)  )\n{\n//Print out the name of the traced actor\nif(HitData.GetActor())\n{\nClientMessage(HitData.GetActor()->GetName());\n \n//Print out distance from start of trace to impact point\nClientMessage("Trace Distance: " + FString::SanitizeFloat(HitData.Distance));\n}\n}')]),t._v(" "),a("h2",{attrs:{id:"fhitresult-now-returns-exact-distance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fhitresult-now-returns-exact-distance"}},[t._v("#")]),t._v(" FHitResult Now Returns Exact Distance")]),t._v(" "),a("p",[t._v("I made a pull request that Epic has accepted as of 4.9.0 to add a Distance parameter to FHitResult that lets you know the distance from the start of the trace to the ImpactPoint!")]),t._v(" "),a("p",[t._v("PhysX was always returning this information, I did not cause any extra performance impact by implementing this change to the Engine code.")]),t._v(" "),a("h3",{attrs:{id:"example-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-code"}},[t._v("#")]),t._v(" Example Code")]),t._v(" "),a("p",[t._v('//In player controller class\n \n//location the PC is focused on\nconst FVector Start = GetFocalLocation();\n \n//2000 units in facing direction of PC (in front of the camera)\nconst FVector End = Start + GetControlRotation().Vector() * 2000;\n \n//The trace data is stored here\nFHitResult HitData(ForceInit);\n \n//If Trace Hits anything (ignore the controlled pawn)\nif(  UMyStaticFunctionLibrary::Trace(GetWorld(),GetPawn(),Start,End,HitData) && HitData.GetActor()  )\n{\nClientMessage(HitData.GetActor()->GetName());\n \n//Print out the distance from the trace start to the impact point!\nClientMessage("Distance from Trace Start to Impact: " + FString::SanitizeFloat(HitData.Distance));\n}')]),t._v(" "),a("h2",{attrs:{id:"trace-with-ignore-actors-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace-with-ignore-actors-array"}},[t._v("#")]),t._v(" Trace With Ignore Actors Array")]),t._v(" "),a("p",[t._v('//Trace with an Array of Actors to Ignore\n//   Ignore as many actors as you want!\nstatic FORCEINLINE bool Trace(\nUWorld* World,\nTArray<AActor*>& ActorsToIgnore,\nconst FVector& Start,\nconst FVector& End,\nFHitResult& HitOut,\nECollisionChannel CollisionChannel = ECC_Pawn,\nbool ReturnPhysMat = false\n) {\nif(!World)\n{\nreturn false;\n}\n \nFCollisionQueryParams TraceParams(FName(TEXT("VictoryCore Trace")), true, ActorsToIgnore[0]);\nTraceParams.bTraceComplex = true;\n \n//TraceParams.bTraceAsyncScene = true;\nTraceParams.bReturnPhysicalMaterial = ReturnPhysMat;\n \n//Ignore Actors\nTraceParams.AddIgnoredActors(ActorsToIgnore);\n \n//Re-initialize hit info\nHitOut = FHitResult(ForceInit);\n \nWorld->LineTraceSingle(\nHitOut,\t\t//result\nStart,\t//start\nEnd , //end\nCollisionChannel, //collision channel\nTraceParams\n);\n \nreturn (HitOut.GetActor() != NULL) ;\n}')]),t._v(" "),a("h3",{attrs:{id:"example-usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-2"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v('//In player controller class\n \n//location the PC is focused on\nconst FVector Start = GetFocalLocation();\n \n//256 units in facing direction of PC (256 units in front of the camera)\nconst FVector End = Start + GetControlRotation().Vector() * 256;\n \n//The trace data is stored here\nFHitResult HitData(ForceInit);\n \n//Actors to Ignore\n//  Ignore all AFlowers\nTArray<AActor*> ActorsToIgnore;\nfor(TObjectIterator<AFlower> It; It; ++It)\n{\nActorsToIgnore.Add(*It);\n}\n \n//Ignore the player character too!\nActorsToIgnore.Add(GetPawn());\n \n//If Trace Hits anything\nif(  UMyStaticFunctionLibrary::Trace(GetWorld(),GetPawn(),Start,End,ActorsToIgnore)  )\n{\n//Print out the name of the traced actor\nif(HitData.GetActor())\n{\nClientMessage(HitData.GetActor()->GetName());\n \n//Print out distance from start of trace to impact point\nClientMessage("Trace Distance: " + FString::SanitizeFloat(HitData.Distance));\n}\n}')]),t._v(" "),a("h2",{attrs:{id:"trace-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace-component"}},[t._v("#")]),t._v(" Trace Component")]),t._v(" "),a("p",[t._v('//Component-level trace, do a trace against just 1 component\nstatic FORCEINLINE bool TraceComponent(\nUPrimitiveComponent* TheComp,\nconst FVector& Start,\nconst FVector& End,\nFHitResult& HitOut\n) {\nif(!TheComp) return false;\nif(!TheComp->IsValidLowLevel()) return false;\n//~~~~~~~~~~~~~~~~~~~~~\n \nFCollisionQueryParams TraceParams(FName(TEXT("VictoreCore Comp Trace")), true, NULL);\nTraceParams.bTraceComplex = true;\n//TraceParams.bTraceAsyncScene = true;\nTraceParams.bReturnPhysicalMaterial = false;\n \n//Ignore Actors\n//TraceParams.AddIgnoredActors(ActorsToIgnore);\n \n//Re-initialize hit info\nHitOut = FHitResult(ForceInit);\n \nreturn TheComp->LineTraceComponent(\nHitOut,\nStart,\nEnd,\nTraceParams\n);\n}')]),t._v(" "),a("h3",{attrs:{id:"example-usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-3"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v('//In player controller class\n \nACharacter* CharacterToTrace = //set to some character\n \nif(!CharacterToTrace) return;\nif(!CharacterToTrace->IsValidLowLevel()) return;\n//~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//location the PC is focused on\nconst FVector Start = GetFocalLocation();\n \n//256 units in facing direction of PC (256 units in front of the camera)\nconst FVector End = Start + GetControlRotation().Vector() * 256;\n \n//The trace data is stored here\nFHitResult HitData(ForceInit);\n \n//If Trace Hits any part of the Mesh of the Character To Trace\nif(  UMyStaticFunctionLibrary::Trace(CharacterToTrace->GetMesh(),Start,End,HitData)  )\n{\n//Print out the location of the impact on the Character\'s Mesh\nClientMessage(HitData.ImpactPoint.ToString());\n \n//Print out distance from start of trace to impact point\nClientMessage("Trace Distance: " + FString::SanitizeFloat(HitData.Distance));\n}')]),t._v(" "),a("h2",{attrs:{id:"why-use-trace-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-use-trace-component"}},[t._v("#")]),t._v(" Why Use Trace Component?")]),t._v(" "),a("p",[t._v("Regular traces, like the first two, will hit collision capsules, which is not very precise if you are doing sword collision or per-bone accurate hits of any kind.")]),t._v(" "),a("p",[t._v("Once you've identified the actor that has been hit with a regular trace,\nyou can use a TraceComponent on the hit Character's Mesh to get bone-level accurate traces!")]),t._v(" "),a("h2",{attrs:{id:"video-of-component-level-tracing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-of-component-level-tracing"}},[t._v("#")]),t._v(" Video of Component Level Tracing")]),t._v(" "),a("p",[t._v("I used component traces in my "),a("strong",[a("a",{attrs:{href:"/Victory_Game#Per-Bone_Sword_Collision",title:"Victory Game"}},[t._v("Per-Bone Accurate Sword Collision System!")])])]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("I hope you enjoy using my Trace functions, and have enjoyed my examples!")]),t._v(" "),a("p",[a("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),a("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Trace_Functions&oldid=15320",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Trace_Functions&oldid=15320"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);