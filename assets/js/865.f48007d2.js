(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1381:function(e,t,a){"use strict";a.r(t);var r=a(28),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Modular Pawn - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"modular-pawn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modular-pawn"}},[e._v("#")]),e._v(" Modular Pawn")]),e._v(" "),a("p",[e._v("From Epic Wiki")]),e._v(" "),a("p",[e._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),a("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#MyCharacter.h"}},[e._v("2 MyCharacter.h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#MyCharacter.cpp"}},[e._v("3 MyCharacter.cpp")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Usage"}},[e._v("4 Usage")])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Contains code to create a basic modular pawn/character with separate head, body & legs.")]),e._v(" "),a("p",[e._v("NOTE: Created with & tested on UE4 beta. May be slight difference between it and public build.")]),e._v(" "),a("h2",{attrs:{id:"mycharacter-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mycharacter-h"}},[e._v("#")]),e._v(" MyCharacter.h")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" class AMyCharacter : public AMyCharacter {")])],1),e._v(" "),a("p",[e._v("GENERATED_UCLASS_BODY()")]),e._v(" "),a("p",[e._v("/**\n*  The skeletal mesh used for the body.\n*  Mesh (inherited from ACharacter) will act as characters head.\n*/\nUPROPERTY(Category=Character, VisibleAnywhere, BlueprintReadOnly)\nTSubobjectPtr"),a("class",{attrs:{USkeletalMeshComponent:""}},[e._v(" Body;")])],1),e._v(" "),a("p",[e._v("/**\n*  Name of the BodyComponentName.\n*  Use this name if you want to prevent creation of the component (with PCIP.DoNotCreateDefaultSubobject).\n*/\nstatic FName BodyComponentName;")]),e._v(" "),a("p",[e._v("/**\n*  The skeletal mesh used for the legs.\n*  Mesh (inherited from ACharacter) will act as characters head.\n*/\nUPROPERTY(Category=Character, VisibleAnywhere, BlueprintReadOnly)\nTSubobjectPtr"),a("class",{attrs:{USkeletalMeshComponent:""}},[e._v(" Legs;")])],1),e._v(" "),a("p",[e._v("/**\n*  Name of the BodyComponentName.\n*  Use this name if you want to prevent creation of the component (with PCIP.DoNotCreateDefaultSubobject).\n*/\nstatic FName LegsComponentName;")]),e._v(" "),a("p",[e._v("} ")]),e._v(" "),a("h2",{attrs:{id:"mycharacter-cpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mycharacter-cpp"}},[e._v("#")]),e._v(" MyCharacter.cpp")]),e._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(' FName AMyCharacter::BodyComponentName(TEXT("CharacterBody0")); FName AMyCharacter::LegsComponentName(TEXT("CharacterLegs0"));')])],1),e._v(" "),a("p",[e._v("AMyCharacter::AMyCharacter(const class FPostConstructInitializeProperties& PCIP)")]),e._v(" "),a("p",[e._v(": Super(PCIP)")]),e._v(" "),a("p",[e._v("{")]),e._v(" "),a("p",[e._v('static FName CollisionProfileName(TEXT("IgnoreOnlyPawn"));')]),e._v(" "),a("p",[e._v("Body = PCIP.CreateOptionalDefaultSubobject"),a("USkeletalMeshComponent",[e._v("(this, AMyCharacter::BodyComponentName);\nif (Body)\n{\nBody->AlwaysLoadOnClient = true;\nBody->AlwaysLoadOnServer = true;\nBody->bOwnerNoSee = false;\nBody->MeshComponentUpdateFlag = EMeshComponentUpdateFlag::AlwaysTickPose;\nBody->bCastDynamicShadow = true;\nBody->PrimaryComponentTick.TickGroup = TG_PrePhysics;\nBody->bChartDistanceFactor = true;\nBody->SetCollisionProfileName(CollisionProfileName);\nBody->bGenerateOverlapEvents = false;")])],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("   // Mesh acts as the head, as well as the parent for both animation and attachment.\n   Body->AttachParent = Mesh;\n   Body->SetMasterPoseComponent(Mesh);\n\n   Components.Add(Body);\n")])])]),a("p",[e._v("}")]),e._v(" "),a("p",[e._v("Legs = PCIP.CreateOptionalDefaultSubobject"),a("USkeletalMeshComponent",[e._v("(this, AMyCharacter::LegsComponentName);\nif (Legs)\n{\nLegs->AlwaysLoadOnClient = true;\nLegs->AlwaysLoadOnServer = true;\nLegs->bOwnerNoSee = false;\nLegs->MeshComponentUpdateFlag = EMeshComponentUpdateFlag::AlwaysTickPose;\nLegs->bCastDynamicShadow = true;\nLegs->PrimaryComponentTick.TickGroup = TG_PrePhysics;\nLegs->bChartDistanceFactor = true;\nLegs->SetCollisionProfileName(CollisionProfileName);\nLegs->bGenerateOverlapEvents = false;")])],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("   // Mesh acts as the head, as well as the parent for both animation and attachment.\n   Legs->AttachParent = Mesh;\n   Legs->SetMasterPoseComponent(Mesh);\n\n   Components.Add(Legs);\n")])])]),a("p",[e._v("}")]),e._v(" "),a("p",[e._v("} ")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ul",[a("li",[e._v("Create a blueprint based on this character.")]),e._v(" "),a("li",[e._v("Under the components tab, find the body & legs components")]),e._v(" "),a("li",[e._v("Set the skeletal meshes the body & legs should use.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=User:Kris&action=edit&redlink=1",title:"User:Kris (page does not exist)"}},[e._v("Kris")])]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Modular_Pawn&oldid=797",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Modular_Pawn&oldid=797"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[e._v("Code")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);