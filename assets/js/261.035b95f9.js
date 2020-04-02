(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{612:function(e,a,t){"use strict";t.r(a);var r=t(28),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Blueprints, Creating Variables in C++ For Use In BP - Epic Wiki")]),e._v(" "),t("h1",{attrs:{id:"blueprints-creating-variables-in-c-for-use-in-bp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blueprints-creating-variables-in-c-for-use-in-bp"}},[e._v("#")]),e._v(" Blueprints, Creating Variables in C++ For Use In BP")]),e._v(" "),t("p",[e._v("From Epic Wiki")]),e._v(" "),t("p",[e._v("Jump to: "),t("a",{attrs:{href:"#mw-navigation"}},[e._v("navigation")]),e._v(", "),t("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),t("h2",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Example:_PlayerMusicSkillLevel"}},[e._v("1.1 Example: PlayerMusicSkillLevel")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Why_Create_a_Variable_in_C.2B.2B_When_It_Is_Used_in_BP.3F"}},[e._v("2 Why Create a Variable in C++ When It Is Used in BP?")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Core_Syntax"}},[e._v("3 Core Syntax")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Comments"}},[e._v("4 Comments")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Restricting_Variable_Access"}},[e._v("5 Restricting Variable Access")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#EditDefaultsOnly"}},[e._v("5.1 EditDefaultsOnly")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#BlueprintReadOnly"}},[e._v("5.2 BlueprintReadOnly")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#VisibleAnywhere"}},[e._v("5.3 VisibleAnywhere")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Fancier_Naming"}},[e._v("6 Fancier Naming")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Category_Name"}},[e._v("6.1 Category Name")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Summary"}},[e._v("7 Summary")])])]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[t("em",[e._v("Original Author:")]),e._v(" "),t("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),t("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),t("p",[e._v("Dear Community,")]),e._v(" "),t("p",[e._v("Here is how you create a property in a c++ base class,")]),e._v(" "),t("p",[e._v("so that it can be accessed in the blueprinted version of your base class that you see in the Editor!")]),e._v(" "),t("h3",{attrs:{id:"example-playermusicskilllevel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-playermusicskilllevel"}},[e._v("#")]),e._v(" Example: PlayerMusicSkillLevel")]),e._v(" "),t("p",[e._v("Let's say you have a blueprinted player controller class,")]),e._v(" "),t("p",[e._v("and you want to add a variable: PlayerMusicSkillLevel")]),e._v(" "),t("p",[t("strong",[e._v("This is a variable that other project members want to be able to read and write to from blueprints!")])]),e._v(" "),t("p",[t("a",{attrs:{href:"/File:Varbpcppnew.jpg"}},[t("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/b/b6/Varbpcppnew.jpg/700px-Varbpcppnew.jpg",alt:"Varbpcppnew.jpg"}})])]),e._v(" "),t("h2",{attrs:{id:"why-create-a-variable-in-c-when-it-is-used-in-bp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-create-a-variable-in-c-when-it-is-used-in-bp"}},[e._v("#")]),e._v(" Why Create a Variable in C++ When It Is Used in BP?")]),e._v(" "),t("p",[e._v("Not everyone in the project will be working in C++, and not everyone will be working all the time in blueprints!")]),e._v(" "),t("p",[e._v("To easily have access to variables in both C++ and blueprints, the variables should be created in the C++ base class, which is then blueprinted.")]),e._v(" "),t("p",[e._v("Then both the C++ programmers and the blueprint programmers can access the variable data any time!")]),e._v(" "),t("h2",{attrs:{id:"core-syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-syntax"}},[e._v("#")]),e._v(" Core Syntax")]),e._v(" "),t("p",[e._v("/** What is the Player's current musical skill level? */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=PlayerMusicSkill)\nint32 MusicSkillLevel;")]),e._v(" "),t("h2",{attrs:{id:"comments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[e._v("#")]),e._v(" Comments")]),e._v(" "),t("p",[e._v("Comments that you write as shown will be very neatly and wonderfully shown when the user hovers the mouse over the variable name in the Editor!")]),e._v(" "),t("p",[e._v("/** What is the Player's current musical skill level? */")]),e._v(" "),t("h2",{attrs:{id:"restricting-variable-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restricting-variable-access"}},[e._v("#")]),e._v(" Restricting Variable Access")]),e._v(" "),t("h3",{attrs:{id:"editdefaultsonly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editdefaultsonly"}},[e._v("#")]),e._v(" EditDefaultsOnly")]),e._v(" "),t("p",[e._v("If you want team members to be able to access and edit a C++ variable, but only prior to runtime, use EditDefaultsOnly")]),e._v(" "),t("p",[e._v("UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category=PlayerMusicSkill)")]),e._v(" "),t("h3",{attrs:{id:"blueprintreadonly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blueprintreadonly"}},[e._v("#")]),e._v(" BlueprintReadOnly")]),e._v(" "),t("p",[e._v("If you do not ever want a variable to be modified via blueprints, but it should be easily read from, use BlueprintReadOnly.")]),e._v(" "),t("p",[e._v("This is important if a variable is part of a system, and a function should be used to modify the variable.")]),e._v(" "),t("p",[e._v("For example, if the blueprint user wants to increase the MusicSkillLevel,")]),e._v(" "),t("p",[e._v("but in the game, "),t("strong",[e._v("the player can only increase their MusicSkillLevel under certain conditions that are only checked in C++")]),e._v(",")]),e._v(" "),t("p",[e._v("then you do not want the blueprint user to just directly increment the MusicSkillLevel,")]),e._v(" "),t("p",[e._v("and they should instead use your C++ function IncreaseMusicSkillLevel().")]),e._v(" "),t("p",[e._v("UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category=PlayerMusicSkill)")]),e._v(" "),t("h3",{attrs:{id:"visibleanywhere"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visibleanywhere"}},[e._v("#")]),e._v(" VisibleAnywhere")]),e._v(" "),t("p",[e._v("If you want a value to be visible in blueprint default properties, but not editable,")]),e._v(" "),t("p",[e._v("UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category=PlayerMusicSkill)")]),e._v(" "),t("h2",{attrs:{id:"fancier-naming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fancier-naming"}},[e._v("#")]),e._v(" Fancier Naming")]),e._v(" "),t("h3",{attrs:{id:"category-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#category-name"}},[e._v("#")]),e._v(" Category Name")]),e._v(" "),t("p",[e._v("If you use quotation marks you can create fancier category names!")]),e._v(" "),t("p",[e._v('UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category="PlayerMusicSkill ~ Yay!")')]),e._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("Now you know how to enable both C++ and Blueprints to access custom variable data specific to your project!")]),e._v(" "),t("p",[e._v("Enjoy!")]),e._v(" "),t("p",[t("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),t("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),t("p",[e._v('Retrieved from "'),t("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprints,_Creating_Variables_in_C%2B%2B_For_Use_In_BP&oldid=3908",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Blueprints,_Creating_Variables_in_C%2B%2B_For_Use_In_BP&oldid=3908"),t("OutboundLink")],1),e._v('"')]),e._v(" "),t("p",[t("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);