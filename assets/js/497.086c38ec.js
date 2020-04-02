(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{910:function(e,t,n){"use strict";n.r(t);var a=n(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Expose an interface to blueprint - Epic Wiki")]),e._v(" "),n("h1",{attrs:{id:"expose-an-interface-to-blueprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#expose-an-interface-to-blueprint"}},[e._v("#")]),e._v(" Expose an interface to blueprint")]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInterface.png"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/5/5a/BlueprintInterface.png/180px-BlueprintInterface.png",alt:"BlueprintInterface.png"}})])]),e._v(" "),n("p",[n("a",{attrs:{href:"/File:BlueprintInterface.png",title:"Enlarge"}},[n("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),e._v(" "),n("p",[n("strong",[e._v("Rate this Article:")])]),e._v(" "),n("p",[e._v("3.00")]),e._v(" "),n("p",[n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),n("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e._v(" (one vote)")]),e._v(" "),n("p",[e._v("Approved for Versions:(please verify)")]),e._v(" "),n("p",[n("strong",[e._v("NOTE: This tutorial is largely out of date, recommend reading this instead")]),e._v(" "),n("a",{attrs:{href:"https://wiki.unrealengine.com/Interfaces_in_C%2B%2B#The_Interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/Interfaces_in_C%2B%2B#The_Interface"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("We will create a simple interface that you can use in your blueprints. As you can see in the picture above we will create a simple event called "),n("em",[e._v("On Interact")]),e._v(' which exposes your interface "clicked" with argument type '),n("strong",[e._v("ITargetInterface")]),e._v(". Note that this argument is only needed in this specific example. If you make your own class with your own event, you can make events with an optional number of arguments. With this interface in place we will be able to call it's functions like "),n("em",[e._v("GetHealth")]),e._v(".")]),e._v(" "),n("p",[e._v("Header file:")]),e._v(" "),n("p",[e._v('#pragma once\n#include "TargetInterface.generated.h"\nUINTERFACE(MinimalAPI)\nclass UTargetInterface :\npublic UInterface\n{\nGENERATED_UINTERFACE_BODY()\n};\n \nclass ITargetInterface{\nGENERATED_IINTERFACE_BODY()\npublic:\nUFUNCTION(BlueprintImplementableEvent, meta=(FriendlyName = "On Interact"))\nvoid OnInteract(const TScriptInterface<ITargetInterface> &clicked);\nvirtual float GetHealth();\n \n};')]),e._v(" "),n("p",[e._v(".cpp file:")]),e._v(" "),n("p",[e._v('#include "YourProject.h"\n#include "TargetInterface.h"\n \nUTargetInterface::UTargetInterface(const class FPostConstructInitializeProperties& PCIP) : Super(PCIP){\n \n}\n// Give GetHealth a default implementation\nfloat ITargetInterface::GetHealth(){\nreturn 0.0f;\n}')]),e._v(" "),n("p",[e._v("The important part here is")]),e._v(" "),n("p",[e._v('UFUNCTION(BlueprintImplementableEvent, meta=(FriendlyName = "On Interact"))\nvoid OnInteract(const TScriptInterface<ITargetInterface> &clicked);')]),e._v(" "),n("p",[e._v("1.) BlueprintImplementableEvent turns your function into a blueprint event. This event will be called in blueprint when ever you call it in c++.")]),e._v(" "),n("p",[e._v("2.) "),n("em",[e._v("void OnInteract(const TScriptInterface"),n("ITargetInterface",[e._v(" &clicked);")])],1),e._v(" . Sometimes simple events are not enough for example in this case we want to know who has started the OnInteract event.")]),e._v(" "),n("p",[e._v('3.) The most important part is "'),n("em",[e._v("const TScriptInterface"),n("ITargetInterface",[e._v(" &clicked")])],1),e._v('". We have to wrap our interface inside of an TScriptInterface to expose it to blueprint.')]),e._v(" "),n("p",[e._v("To trigger the event you can from within your C++ code call the function Execute_OnInteract. It always takes the instance of your class as an argument + the optional arguments you defined. In our case this is a TScriptInterface"),n("ITargetInterface",[e._v(' object. Below is the example code, where we have created an instance named actor. We will generate the necessary argument "s" and then call the Execute_OnInteract function.')])],1),e._v(" "),n("p",[e._v("auto t = InterfaceCast<ITargetInterface>(actor);\nif (t != nullptr){\t\t\nTScriptInterface<ITargetInterface> s = TScriptInterface<ITargetInterface>();\ns.SetObject(actor);\ns.SetInterface(t);\nt->Execute_OnInteract(actor,s);\n}")]),e._v(" "),n("p",[e._v('InterfaceCast tries to convert your actor to an ITargetInterface. In this case the variable "t" will be null if the cast has failed. The next step is to wrap our actor who implements our ITargetInterface in an TScriptInterface. You do this by creating an TScriptInterface with the default consturctor and use the '),n("em",[e._v("SetObject")]),e._v(" method.")]),e._v(" "),n("p",[e._v("Now the most important part here is that you should not call the method "),n("em",[e._v("OnInteract")]),e._v(" because this will result in an runtime error. Instead you need to call the generated utility function which is called "),n("em",[e._v("Execute_YourFunctionName")]),e._v(" in this case it is called "),n("em",[e._v("Execute_OnInteract")]),e._v(". The first argument is always the UObject and the following argument are the arguments of your function.")]),e._v(" "),n("p",[e._v("In our case we defined")]),e._v(" "),n("p",[e._v("void OnInteract(const TScriptInterface<ITargetInterface> &clicked)")]),e._v(" "),n("p",[e._v("So the type signature will look like this")]),e._v(" "),n("p",[e._v("Execute_OnInteract(UObject *object, const TScriptInterface<ITargetInterface> &clicked);")]),e._v(" "),n("p",[e._v("At this point you can already use your event in your blueprints. The problem is that you have no functions that are working with your newly created interface. Let's fix this.")]),e._v(" "),n("p",[e._v("Header code:")]),e._v(" "),n("p",[e._v('#pragma once\n \n#include "GameFramework/Actor.h"\n#include "TargetInterface.h"\n#include "TargetInterfaceBPFunctionLibrary.generated.h"\n \n/**\n*\n*/\nUCLASS()\nclass UTargetInterfaceBPFunctionLibrary : public UBlueprintFunctionLibrary\n{\nGENERATED_UCLASS_BODY()\n \nUFUNCTION(BlueprintCallable, Category="TargetInterface")\nstatic float GetHealth(const TScriptInterface<ITargetInterface> &target);\n};')]),e._v(" "),n("p",[e._v(".cpp code:")]),e._v(" "),n("p",[e._v('#include "project.h"\n#include "TargetInterfaceBPFunctionLibrary.h"\n \n \nUTargetInterfaceBPFunctionLibrary::UTargetInterfaceBPFunctionLibrary(const class FPostConstructInitializeProperties& PCIP)\n: Super(PCIP)\n{\n \n}\n \nfloat UTargetInterfaceBPFunctionLibrary::GetHealth(const TScriptInterface<ITargetInterface> &target)\n{\nreturn target->GetHealth();\n}')]),e._v(" "),n("p",[e._v("That's it. Now you can access your interface inside of your blueprints.")]),e._v(" "),n("p",[n("a",{attrs:{href:"/index.php?title=User:Maikklein&action=edit&redlink=1",title:"User:Maikklein (page does not exist)"}},[e._v("Maikklein")])]),e._v(" "),n("p",[e._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Expose_an_interface_to_blueprint&oldid=15398",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Expose_an_interface_to_blueprint&oldid=15398"),n("OutboundLink")],1),e._v('"')]),e._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),n("p",[e._v("Hidden category:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);