(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{864:function(e,t,a){"use strict";a.r(t);var n=a(28),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Blueprints, Creating C++ Functions as new Blueprint Nodes - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"blueprints-creating-c-functions-as-new-blueprint-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprints-creating-c-functions-as-new-blueprint-nodes"}},[e._v("#")]),e._v(" Blueprints, Creating C++ Functions as new Blueprint Nodes")]),e._v(" "),a("p",[e._v("From Epic Wiki")]),e._v(" "),a("p",[e._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),a("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#BlueprintCallable"}},[e._v("2 BlueprintCallable")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#BlueprintPure"}},[e._v("3 BlueprintPure")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Static"}},[e._v("4 Static")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Static_With_World_Context"}},[e._v("4.1 Static With World Context")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Creating_Interface_for_BP_Users_To_Access_New_C.2B.2B_Systems"}},[e._v("5 Creating Interface for BP Users To Access New C++ Systems")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Activating_your_new_Blueprint"}},[e._v("6 Activating your new Blueprint")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#The_Power_of_Blueprints"}},[e._v("7 The Power of Blueprints")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Advanced_Display_.28How_to_Hide_Parameters.29"}},[e._v("8 Advanced Display (How to Hide Parameters)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Conclusion"}},[e._v("9 Conclusion")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Advanced_C.2B.2B_Blueprints"}},[e._v("10 Advanced C++ Blueprints")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Sequence"}},[e._v("10.1 Sequence")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Copying_Core_Code"}},[e._v("10.2 Copying Core Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Settings"}},[e._v("10.3 Settings")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Returning_Data"}},[e._v("10.4 Returning Data")])])])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[a("em",[e._v("Original Author:")]),e._v(" "),a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),a("p",[e._v("Dear Community,")]),e._v(" "),a("p",[e._v("This is an explanation of the syntax for a C++ function that you want to also run from blueprints!")]),e._v(" "),a("h2",{attrs:{id:"blueprintcallable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprintcallable"}},[e._v("#")]),e._v(" BlueprintCallable")]),e._v(" "),a("p",[e._v("A BlueprintCallable function will have execution pins so that you can chain your C++ functions together in UE4 Blueprints.")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' /** Activate Fancy New Project-Specific System Created in C++! */ UFUNCTION(BlueprintCallable, Category="SunShine") void ActivateSunShine(); ')])],1),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:Sunshine.jpg"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/f/f9/Sunshine.jpg",alt:"Sunshine.jpg"}})])]),e._v(" "),a("h2",{attrs:{id:"blueprintpure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprintpure"}},[e._v("#")]),e._v(" BlueprintPure")]),e._v(" "),a("p",[e._v("A great efficiency for blueprint users is to be able to access data from your C++ system without having to run the exec chain through it. If a function does not modify the game state, which requires a certain ordering for the rest of Blueprint logic and game logic to occurr correctly, then you can use Blueprint pure!")]),e._v(" "),a("p",[e._v("A simple test for BlueprintPure is to use it for "),a("strong",[e._v("accessor functions")]),e._v(", which are not modifying any variable data at all.")]),e._v(" "),a("p",[e._v("So if you are wondering if you can make a function BlueprintPure, just ask yourself.")]),e._v(" "),a("p",[a("strong",[e._v('"Is this function entirely just an accessor for data, or doing calculations which have no bearing on the rest of the game state?"')])]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' /** What is the current Sun Shine Rotation? ! */ UFUNCTION(BlueprintPure, Category="SunShine") FRotator GetSunShineRotation(); ')])],1),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:Newbpnodes.jpg"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/3/33/Newbpnodes.jpg/800px-Newbpnodes.jpg",alt:"Newbpnodes.jpg"}})])]),e._v(" "),a("h2",{attrs:{id:"static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[e._v("#")]),e._v(" Static")]),e._v(" "),a("p",[e._v("If your functionality is not for a specific actor, or the functionality relates to a specific actor class but does not use member variables, then you can make the function static so that the BP node will show up anywhere in any BP graph:")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' /** Log sunshine status from any BP in your entire game code! */ UFUNCTION(BlueprintCallable, Category="SunShine") static void LogSunShineStatus(); ')])],1),e._v(" "),a("h3",{attrs:{id:"static-with-world-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-with-world-context"}},[e._v("#")]),e._v(" Static With World Context")]),e._v(" "),a("p",[e._v("If you want to use a static BP node anywhere in the game code, but your C++ function wants to modify the state of the game world by creating objects or actors, or performing an action on any instanced data within the game world, then you can pass along a world context object which is an invisible input parameter:")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' /** Make sure to save off the return value as a global variable in one of your BPs or else it will get garbage collected! */ UFUNCTION(BlueprintCallable, Category = "Victory BP Library", meta = (WorldContext = "WorldContextObject")) static UPrimitiveComponent* CreatePrimitiveComponent(UObject* WorldContextObject, TSubclassOf'),a("UPrimitiveComponent",[e._v(" CompClass, FName Name, FVector Location, FRotator Rotation); ")])],1)],1),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" UPrimitiveComponent* UVictoryBPFunctionLibrary::CreatePrimitiveComponent(")])],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("   UObject\\* WorldContextObject, \n")])])]),a("p",[e._v("TSubclassOf"),a("UPrimitiveComponent",[e._v(" CompClass, FName Name, FVector Location, FRotator Rotation ){ if(!CompClass) { return nullptr; } //~~~~~~~~~~~~~~~~~")])],1),e._v(" "),a("p",[e._v("//using a context object to get the world!")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("   UWorld\\* const World = GEngine->GetWorldFromContextObject(WorldContextObject);\n")])])]),a("p",[e._v("if(!World) { return nullptr; } //~~~~~~~~~~~")]),e._v(" "),a("p",[e._v("UPrimitiveComponent* NewComp = NewObject"),a("UPrimitiveComponent",[e._v("(World, Name); if(!NewComp) { return nullptr; } //~~~~~~~~~~~~~")])],1),e._v(" "),a("p",[e._v("NewComp->SetWorldLocation(Location); NewComp->SetWorldRotation(Rotation); NewComp->RegisterComponentWithWorld(World);")]),e._v(" "),a("p",[e._v("return NewComp; } ")]),e._v(" "),a("h2",{attrs:{id:"creating-interface-for-bp-users-to-access-new-c-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-interface-for-bp-users-to-access-new-c-systems"}},[e._v("#")]),e._v(" Creating Interface for BP Users To Access New C++ Systems")]),e._v(" "),a("p",[e._v("This is how you can create the interface in c++ for blueprint users to access your C++ systems!")]),e._v(" "),a("p",[e._v("You can write all the core code in c++, and then give the rest of your team the power to access, modify, and utilize your awesome new C++ system!")]),e._v(" "),a("h2",{attrs:{id:"activating-your-new-blueprint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activating-your-new-blueprint"}},[e._v("#")]),e._v(" Activating your new Blueprint")]),e._v(" "),a("p",[e._v("Just adding the code is not enough to have it show in the editor. You need to go to your main project and click on the Compile icon.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:Compile.png"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/7/7a/Compile.png/178px-Compile.png",alt:"Compile.png"}})])]),e._v(" "),a("p",[e._v("After this you can just right-click in an empty spot in any graph window and type the name of the function, it will show up!")]),e._v(" "),a("p",[e._v('If you don\'t see the function in the list be sure you have deactivated the "Context Sensitive" option.')]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=File:Context_sensitive.png"}},[a("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/c/c3/Context_sensitive.png",alt:"Context sensitive.png"}})])]),e._v(" "),a("h2",{attrs:{id:"the-power-of-blueprints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-power-of-blueprints"}},[e._v("#")]),e._v(" The Power of Blueprints")]),e._v(" "),a("p",[e._v("This for me is the real power of blueprints, you are giving your whole team the power of robust new C++ systems, and the ability to use these new systems with the graphical convenience and fast iteration times of blueprints.")]),e._v(" "),a("h2",{attrs:{id:"advanced-display-how-to-hide-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-display-how-to-hide-parameters"}},[e._v("#")]),e._v(" Advanced Display (How to Hide Parameters)")]),e._v(" "),a("p",[e._v("How to make hidden parameters:")]),e._v(" "),a("p",[e._v("If you want some parameters to only show if you click the arrow to expand the node (like with the UE4 print string node), then use this!")]),e._v(" "),a("p",[e._v("Here 2 means parameter at index 2 in a list of the function parameters that starts with 0.")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' UFUNCTION(BlueprintCallable, Category="Fun", meta=(AdvancedDisplay = "2")) void PerformFunAction(FString Name, int32 Count, bool DebugMode=false); ')])],1),e._v(" "),a("p",[e._v("Advanced options should generally have a proper default value as the user may never expand the node to see what the other options are. That's why I am using DebugMode**=false**")]),e._v(" "),a("p",[e._v("Enjoy!")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Now you know how to make new blueprint nodes!")]),e._v(" "),a("p",[e._v("Enjoy!")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"advanced-c-blueprints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-c-blueprints"}},[e._v("#")]),e._v(" Advanced C++ Blueprints")]),e._v(" "),a("p",[e._v("This section is for those that wish to do more advanced blueprints like what are in the core engine. Our incentive for doing this was to make a custom Session set of nodes. We did this by copying the code from the core for the Create Session blueprint node and then changing it.")]),e._v(" "),a("p",[e._v("Of course, you need to decide if making a custom node set is even a good idea. For example a custom session node set is available at "),a("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?69901-Advanced-Sessions-Plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://forums.unrealengine.com/showthread.php?69901-Advanced-Sessions-Plugin"),a("OutboundLink")],1),e._v(" and might be more suitable for your purposes than making a custom session your self.")]),e._v(" "),a("p",[e._v("(You do have a copy of the core code from GitHub, right? "),a("a",{attrs:{href:"https://www.unrealengine.com/ue4-on-github",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.unrealengine.com/ue4-on-github"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v('If you want to find where blueprint nodes are implemented in the core code you look for "CallbackProxy" and "UOnlineBlueprintCallProxyBase". If looking for the blueprint C++ implementation for CreateSession it is in UnrealEngine/Engine/Source/Runtime/Online/OnlineSubsystemUtils/Classes/CreateSessionCallbackProxy.h')]),e._v(" "),a("p",[e._v("Also BlueprintAsyncActionBase is important. If you are curious about the core blueprint node code, try looking in UnrealEngine/Engine/Source/Runtime/Engine/Classes/Kismet/ and there are the files for things like KismetMathLibrary and the Sqrt blueprint node. Most of those are simple static blueprint calls. I like the headings on these as they show how to do aliases for searching and such...")]),e._v(" "),a("p",[e._v("/* Returns square root of A*/")]),e._v(" "),a("p",[e._v('UFUNCTION(BlueprintPure, Category="Math|Float", meta=(Keywords = "square root", CompactNodeTitle = "SQRT"))')]),e._v(" "),a("p",[e._v("static float Sqrt(float A);")]),e._v(" "),a("p",[e._v("The previous section explained how to do static function single call nodes. Here we describe how to customize nodes that have multiple outputs (like Success and Fail) and wait for results. Network operations and disk read operations can take time and you don't want to stop the game to wait. So instead you start the operation (e.g. the Online subsystem CreateSession call) and then return immediately. Some while later the action is done or fails and you get a Callback to a function saying \"hey, it's done\" and then your blueprint node can return results and continue on the to the next blueprint node.")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"/index.php?title=File:CreateSessionNode.png"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/e/e2/CreateSessionNode.png/120px-CreateSessionNode.png",alt:""}})])]),e._v(" "),a("p",[e._v("A Node that waits...")])])]),e._v(" "),a("h3",{attrs:{id:"sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequence"}},[e._v("#")]),e._v(" Sequence")]),e._v(" "),a("p",[e._v("The sequence in the core CreateSession code is like this...")]),e._v(" "),a("ul",[a("li",[e._v("The node gets created when the blueprint loads into memory. UCreateSessionCallbackProxy::UCreateSessionCallbackProxy(const FObjectInitializer& ObjectInitializer)")]),e._v(" "),a("li",[e._v("Some time later your blueprint hits the node with a 'bead' flowing along the white line, and calls the function: CreateSession(UObject* WorldContextObject, class APlayerController* PlayerController, int32 PublicConnections, bool bUseLAN)")]),e._v(" "),a("li",[e._v("Then the Activate function gets called, and kicks off the session creation. (In our case this is a call to the Online subsystem, which calls the Steam session creation.)")]),e._v(" "),a("li",[e._v("Some time later Steam responds and OnCreateCompleted gets called, which starts the session")]),e._v(" "),a("li",[e._v("Some time later again the start gets done and OnStartCompleted gets called.")]),e._v(" "),a("li",[e._v('OnStartCompleted then decides if you had success of failure and any other data to put on the outputs of the blueprint node. If all is ok then we call OnSuccess.Broadcast(); to "fire a bead" out on the Success white line in the blueprint.')])]),e._v(" "),a("p",[e._v("Luckily all the little details all already work in the core code so you don't have to do much.")]),e._v(" "),a("h3",{attrs:{id:"copying-core-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copying-core-code"}},[e._v("#")]),e._v(" Copying Core Code")]),e._v(" "),a("p",[e._v("When you copy the code out of the core code, you have to do some renaming of the .cpp and .h files and some class names.. We changed the name from CreateSession to CreateCustomSession. That change is both to the file names, and in the files to the class names. Note that the core engine divides files by Public, Private, and Classes so you have to look around a bit.")]),e._v(" "),a("p",[e._v("Another problem we found was that FOnlineSubsystemBPCallHelper is internal and private so you can't get at it (it is in UnrealEngine/Engine/Source/Runtime/Online/OnlineSubsystemUtils/Private/OnlineSubsystemUtilsPrivatePCH.h)")]),e._v(" "),a("p",[e._v("So we copied that into our project and renamed it so we can play with it.")]),e._v(" "),a("h3",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),a("p",[e._v('The whole purpose of making our custom session was to add a password, currentMap and settable lobby name and some other settings. Settings in a session are a key-value pair, such as "password":"supersecret" and always have a FName key, and the value can be string, integer and several other things. We made a SetCustomSessionSetting and a GetCustomSessionSetting blueprint nodes.')]),e._v(" "),a("p",[e._v('In CreateSessionCallbackProxy the code looks like Settings.NumPublicConnections = NumPublicConnections; which then is converted to session setting set calls. We want to add our own so we do calls like Settings.Set(FName("password"), ourpassword, EOnlineDataAdvertisementType::ViaOnlineServer); That ViaOnlineServer is very important. It means that the session setting will get sent to all clients looking at the session.')]),e._v(" "),a("h3",{attrs:{id:"returning-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returning-data"}},[e._v("#")]),e._v(" Returning Data")]),e._v(" "),a("p",[e._v("Sometimes the blueprint node needs to have output, like FindSessions has an array of sessions it found.")]),e._v(" "),a("p",[e._v("You declare the delegate like this...")]),e._v(" "),a("p",[e._v("DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FBlueprintFindSessionsResultDelegate, const TArray"),a("FBlueprintSessionResult",[e._v("&, Results);")])],1),e._v(" "),a("p",[e._v("and then...")]),e._v(" "),a("p",[e._v("In UnrealEngine/Engine/Source/Runtime/Online/OnlineSubsystemUtils/Private/FindSessionsCallbackProxy.cpp you will see that OnComplete has return values like")]),e._v(" "),a("p",[e._v("`if (bSuccess && SearchObject.IsValid())\n{\nfor (auto& Result : SearchObject->SearchResults)\n{\nFBlueprintSessionResult BPResult;\nBPResult.OnlineResult = Result;\nResults.Add(BPResult);\n}")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("\tOnSuccess.Broadcast(Results);\n}\nelse\n{\n\tOnFailure.Broadcast(Results);\n}` \n")])])]),a("p",[a("a",{attrs:{href:"/index.php?title=User:SND_R_Keene&action=edit&redlink=1",title:"User:SND R Keene (page does not exist)"}},[e._v("SND R Keene")]),e._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:SND_R_Keene&action=edit&redlink=1",title:"User talk:SND R Keene (page does not exist)"}},[e._v("talk")]),e._v(") 20:04, 7 June 2016 (UTC) (Advanced C++ Blueprints Section)")]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),a("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(") (Initial Article and Basic Blueprints Section)")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprints,_Creating_C%2B%2B_Functions_as_new_Blueprint_Nodes&oldid=57",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Blueprints,_Creating_C%2B%2B_Functions_as_new_Blueprint_Nodes&oldid=57"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[e._v("Code")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);