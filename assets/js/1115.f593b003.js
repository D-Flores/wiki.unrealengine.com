(window.webpackJsonp=window.webpackJsonp||[]).push([[1115],{547:function(e,t,r){"use strict";r.r(t);var a=r(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("UMG, Referencing UMG Widgets in Code - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"umg-referencing-umg-widgets-in-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#umg-referencing-umg-widgets-in-code"}},[e._v("#")]),e._v(" UMG, Referencing UMG Widgets in Code")]),e._v(" "),r("p",[e._v("From Epic Wiki")]),e._v(" "),r("p",[e._v("Jump to: "),r("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),r("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Overview:_.28Tested_in_4.7.5.29"}},[e._v("1 Overview: (Tested in 4.7.5)")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Here_is_the_situation:"}},[e._v("2 Here is the situation:")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#The_next_part_of_this_post_will_cover:"}},[e._v("3 The next part of this post will cover:")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Prepare_Project:"}},[e._v("4 Prepare Project:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#1._Create_New_Map:"}},[e._v("4.1 1. Create New Map:")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#2._Create_C.2B.2B_PlayerController_Class:"}},[e._v("4.2 2. Create C++ PlayerController Class:")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#3._Create_UMG_Widget:"}},[e._v("4.3 3. Create UMG Widget:")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#4._Create_GameMode_and_PlayerController_Blueprints:"}},[e._v("4.4 4. Create GameMode and PlayerController Blueprints:")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Visual_Studio:"}},[e._v("5 Visual Studio:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#1._Adding_Modules:"}},[e._v("5.1 1. Adding Modules:")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#2._PlayerController:"}},[e._v("5.2 2. PlayerController:")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Testing"}},[e._v("6 Testing")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Conclusion"}},[e._v("7 Conclusion")])])]),e._v(" "),r("h2",{attrs:{id:"overview-tested-in-4-7-5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview-tested-in-4-7-5"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Overview: (Tested in 4.7.5)")])]),e._v(" "),r("p",[r("em",[e._v("Author:")]),e._v(" "),r("a",{attrs:{href:"/index.php?title=User:Bn_Green&action=edit&redlink=1",title:"User:Bn Green (page does not exist)"}},[e._v("Bn_Green")]),e._v(" ("),r("a",{attrs:{href:"/index.php?title=User_talk:Bn_Green&action=edit&redlink=1",title:"User talk:Bn Green (page does not exist)"}},[e._v("talk")]),e._v(")")]),e._v(" "),r("p",[e._v("This is my first contribution to the Unreal awesome community I hope you find it useful especially for newcomers. While I am coding in C++ I always keep in mind that I am not working alone in the project and there is some people is doing stuff with me and I need to use their content in the project.")]),e._v(" "),r("h2",{attrs:{id:"here-is-the-situation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-the-situation"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Here is the situation:")])]),e._v(" "),r("p",[e._v("An artist is working on the UI using UMG and he made some fancy Widget And now it comes the part where I need to create this widget in C++ and have reference for it so I can use it in future.")]),e._v(" "),r("h2",{attrs:{id:"the-next-part-of-this-post-will-cover"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-next-part-of-this-post-will-cover"}},[e._v("#")]),e._v(" "),r("strong",[e._v("The next part of this post will cover:")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("How to Make a UMG widget blueprint in the Editor.")])]),e._v(" "),r("li",[r("p",[e._v("Create and add to viewport using C++.")])]),e._v(" "),r("li",[r("p",[e._v("Have a reference to it in a Variable for future use.")])]),e._v(" "),r("li",[r("p",[e._v("Add the widget to the viewport.")])])]),e._v(" "),r("h2",{attrs:{id:"prepare-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prepare-project"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Prepare Project:")])]),e._v(" "),r("p",[e._v("First lets create new blank project based on C++ and call it whatever you like."),r("br"),e._v("\nThen make this folder hierarchy:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Content Folder.")])]),e._v(" "),r("li",[r("p",[e._v("Maps Folder -> Create new Blank Map.")])]),e._v(" "),r("li",[r("p",[e._v("Blueprints Folder -> Widgets Folder.")])])]),e._v(" "),r("h3",{attrs:{id:"_1-create-new-map"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-new-map"}},[e._v("#")]),e._v(" "),r("strong",[e._v("1. Create New Map:")])]),e._v(" "),r("p",[e._v('Create new blank map and I called mine "MainMenu" and don\'t forget to save it.')]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:CreatNewMap.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/dd/CreatNewMap.png/700px-CreatNewMap.png",alt:"CreatNewMap.png"}})])]),e._v(" "),r("h3",{attrs:{id:"_2-create-c-playercontroller-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-c-playercontroller-class"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2. Create C++ PlayerController Class:")])]),e._v(" "),r("p",[e._v("Go To C++ Classes Folder->MyProject"),r("br"),e._v("\nAnd Create new C++ PlayerController Class Call it “MyPlayerController”")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:CreatePC.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/c/c5/CreatePC.png/700px-CreatePC.png",alt:"CreatePC.png"}})])]),e._v(" "),r("h3",{attrs:{id:"_3-create-umg-widget"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-umg-widget"}},[e._v("#")]),e._v(" "),r("strong",[e._v("3. Create UMG Widget:")])]),e._v(" "),r("p",[e._v("Now Go to Blueprints Folder -> Widgets Folder. And create new Widget Blueprint Call it “MainMenu”.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:CreateNewWidgetUMG.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/4/47/CreateNewWidgetUMG.png/700px-CreateNewWidgetUMG.png",alt:"CreateNewWidgetUMG.png"}})])]),e._v(" "),r("p",[e._v("Open the “MainMenu” widget and let's make a button Called “QuitBTN” then assign onClicked Event")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:CreateBTN.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/1/1b/CreateBTN.png/700px-CreateBTN.png",alt:"CreateBTN.png"}})])]),e._v(" "),r("p",[e._v("and do the following")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:QuitBTN.png"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/6/6a/QuitBTN.png",alt:"QuitBTN.png"}})])]),e._v(" "),r("p",[e._v("now we have ready widget with a button that exit the game on clicked using Blueprints.")]),e._v(" "),r("h3",{attrs:{id:"_4-create-gamemode-and-playercontroller-blueprints"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-gamemode-and-playercontroller-blueprints"}},[e._v("#")]),e._v(" "),r("strong",[e._v("4. Create GameMode and PlayerController Blueprints:")])]),e._v(" "),r("p",[e._v("We need to create 2 more Blueprints and we are done from the editor for now.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Create Game Mode Blueprint “BP_GameMode” Based on ProjectNameGameMode.")])]),e._v(" "),r("li",[r("p",[e._v("Create Player Controller Blueprint “BP_PlayerController” Based on PlayerController Class we created earlier.")])])]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:PCandGM.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/b/b8/PCandGM.png/400px-PCandGM.png",alt:"PCandGM.png"}})])]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:PCandGM2.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/6/67/PCandGM2.png/700px-PCandGM2.png",alt:"PCandGM2.png"}})])]),e._v(" "),r("h2",{attrs:{id:"visual-studio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Visual Studio:")])]),e._v(" "),r("h3",{attrs:{id:"_1-adding-modules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-adding-modules"}},[e._v("#")]),e._v(" "),r("strong",[e._v("1. Adding Modules:")])]),e._v(" "),r("p",[e._v("in order to use UMG in C++ you need to Add the following Modules in ProjectNameBuild.CS file")]),e._v(" "),r("p",[r("code",[e._v('"UMG", "Slate", "SlateCore')])]),e._v(" "),r("p",[e._v("In this line:")]),e._v(" "),r("p",[r("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" //ProjectNameBuild.CS")])],1),e._v(" "),r("p",[e._v('PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "UMG", "Slate", "SlateCore" });')]),e._v(" "),r("h3",{attrs:{id:"_2-playercontroller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-playercontroller"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2. PlayerController:")])]),e._v(" "),r("p",[e._v("Open your MyPlayerController.h"),r("br"),e._v("\nand we will make some variables and overriding the BeginPlay() function."),r("br"),e._v("\nPS: Better to add our widget reference to a "),r("a",{attrs:{href:"/index.php?title=Global_Data_Access,_Data_Storage_Class_Accessible_From_Any_CPP_or_BP_Class_During_Runtime",title:"Global Data Access, Data Storage Class Accessible From Any CPP or BP Class During Runtime"}},[e._v("singleton class")]),e._v(".")]),e._v(" "),r("syntaxhighlight",{attrs:{lang:"cpp"}},[r("p",[e._v("//MyPlayerController.h")]),e._v(" "),r("p",[e._v("UCLASS() class MYPROJECT_API AMyPlayerController : public APlayerController { GENERATED_BODY()")]),e._v(" "),r("p",[e._v("public: // Note: that I am using forward declaration Because I am not including the // widget in the header and to prevent circular dependency. // You don't need to do that if you include the Widget Class in the .h // Forward declaration is just putting \"class\" before the class name so the compiler know it's a // class but it's not included in the header and don't freak out. Ex. “class UUserWidget”")]),e._v(" "),r("p",[e._v('// Reference UMG Asset in the Editor UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Widgets") TSubclassOf'),r("class",{attrs:{UUserWidget:""}},[e._v(" wMainMenu;")])],1),e._v(" "),r("p",[e._v("// Variable to hold the widget After Creating it. UUserWidget* MyMainMenu;")]),e._v(" "),r("p",[e._v("// Override BeginPlay() virtual void BeginPlay() override;")]),e._v(" "),r("p",[e._v("};")])]),e._v(" "),r("p",[e._v("open your MyPlayerController.cpp")]),e._v(" "),r("p",[e._v("include this file to your cpp")]),e._v(" "),r("p",[r("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" //MyPlayerController.cpp")])],1),e._v(" "),r("p",[e._v("// include")]),e._v(" "),r("ol",[r("li",[e._v('include "Blueprint/UserWidget.h"')])]),e._v(" "),r("p",[e._v("BeginPlay() Function "),r("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" //MyPlayerController.cpp")])],1),e._v(" "),r("p",[e._v("void AMyPlayerController::BeginPlay() { Super::BeginPlay();")]),e._v(" "),r("p",[e._v("if (wMainMenu) // Check if the Asset is assigned in the blueprint. { // Create the widget and store it. MyMainMenu = CreateWidget"),r("UUserWidget",[e._v("(this, wMainMenu);")])],1),e._v(" "),r("p",[e._v("// now you can use the widget directly since you have a referance for it. // Extra check to make sure the pointer holds the widget. if (MyMainMenu) { //let add it to the view port MyMainMenu->AddToViewport(); }")]),e._v(" "),r("p",[e._v("//Show the Cursor. bShowMouseCursor = true; }")]),e._v(" "),r("p",[e._v("}")]),e._v(" "),r("h2",{attrs:{id:"testing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Testing")])]),e._v(" "),r("p",[e._v("Now Open the Editor and Go to world Setting and assign our BP_GameMode As the Current Game Mode for the Level.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:WorldSettingsChange.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/1/1d/WorldSettingsChange.png/700px-WorldSettingsChange.png",alt:"WorldSettingsChange.png"}})])]),e._v(" "),r("p",[e._v("and use our early created “BP_PlayerController” As the Active Controller.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:AssignPC.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/9/98/AssignPC.png/400px-AssignPC.png",alt:"AssignPC.png"}})])]),e._v(" "),r("p",[e._v("Open the “BP_PlayerController” and Assign the widget.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:AssignWidget.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/e/ed/AssignWidget.png/400px-AssignWidget.png",alt:"AssignWidget.png"}})])]),e._v(" "),r("p",[e._v("Press Play and Hurrray we have our Menu Shown.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=File:FinalResult.png"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/8/87/FinalResult.png/700px-FinalResult.png",alt:"FinalResult.png"}})])]),e._v(" "),r("h2",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Conclusion")])]),e._v(" "),r("p",[e._v("Now we are done and you have a working widget that you can control from C++ Code you can add more functionality and control your menu flow from code whenever you need.")]),e._v(" "),r("p",[e._v("From here you can extend your UMG Widgets the same way following this awesome tutorial By WCode:")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=UMG,_How_to_extend_a_UUserWidget::_for_UMG_in_C%2B%2B.",title:"UMG, How to extend a UUserWidget:: for UMG in C++."}},[e._v("UMG,_How_to_extend_a_UUserWidget::_for_UMG_in_C++.")])]),e._v(" "),r("p",[e._v("Posted By "),r("a",{attrs:{href:"/index.php?title=User:Bn_Green&action=edit&redlink=1",title:"User:Bn Green (page does not exist)"}},[e._v("Bn Green")]),e._v(" ("),r("a",{attrs:{href:"/index.php?title=User_talk:Bn_Green&action=edit&redlink=1",title:"User talk:Bn Green (page does not exist)"}},[e._v("talk")]),e._v(")")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=UMG,_Referencing_UMG_Widgets_in_Code&oldid=123",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=UMG,_Referencing_UMG_Widgets_in_Code&oldid=123"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/index.php?title=Category:Tutorials&action=edit&redlink=1",title:"Category:Tutorials (page does not exist)"}},[e._v("Tutorials")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[e._v("Code")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);