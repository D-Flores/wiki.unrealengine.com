(window.webpackJsonp=window.webpackJsonp||[]).push([[929],{1451:function(e,t,o){"use strict";o.r(t);var a=o(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Profiling, How To Count CPU Cycles Of Specific Blocks Of Your Game Code - Epic Wiki")]),e._v(" "),o("h1",{attrs:{id:"profiling-how-to-count-cpu-cycles-of-specific-blocks-of-your-game-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#profiling-how-to-count-cpu-cycles-of-specific-blocks-of-your-game-code"}},[e._v("#")]),e._v(" Profiling, How To Count CPU Cycles Of Specific Blocks Of Your Game Code")]),e._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Pic_of_What_This_Wiki_Enables_You_To_Do"}},[e._v("1.1 Pic of What This Wiki Enables You To Do")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#UE4_Documentation_on_Profiler"}},[e._v("2 UE4 Documentation on Profiler")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Running_The_UE4_Profiler"}},[e._v("2.1 Running The UE4 Profiler")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Opening_Your_Profiled_Game_Session_Data_in_the_Editor"}},[e._v("2.2 Opening Your Profiled Game Session Data in the Editor")])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Self"}},[e._v("3 Self")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Creating_Your_Own_Stat_Group"}},[e._v("4 Creating Your Own Stat Group")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Creating_the_Stat"}},[e._v("5 Creating the Stat")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Using_the_Stat"}},[e._v("6 Using the Stat")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Counting_CPU_Cycles_For_Any_Block_of_Code"}},[e._v("7 Counting CPU Cycles For Any Block of Code")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Example_From_My_Code_Base"}},[e._v("8 Example From My Code Base")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#Conclusion"}},[e._v("9 Conclusion")])])]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[o("strong",[e._v("Author:")]),e._v(" "),o("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),o("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),o("p",[e._v("In this wiki I show you how you can count the CPU cycles of individual blocks of your game code, and expose this information to a very easy-to-use UI in the UE4 Editor!")]),e._v(" "),o("p",[e._v("This wiki shows you how to leverage all the work Epic engineers have put into the UE4 profiler, customizing it to monitor named sections of your game code!")]),e._v(" "),o("p",[e._v("After you're done with this wiki you will be able to check on the performance of any individual lines or functions from your entire project-level code base, assigning your own chosen names to these blocks of code!")]),e._v(" "),o("p",[e._v("Enjoy!")]),e._v(" "),o("p",[e._v("Rama")]),e._v(" "),o("h3",{attrs:{id:"pic-of-what-this-wiki-enables-you-to-do"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pic-of-what-this-wiki-enables-you-to-do"}},[e._v("#")]),e._v(" Pic of What This Wiki Enables You To Do")]),e._v(" "),o("p",[e._v("In this picture you can see I've created my own custom STAT so that the UE4 Profiler can track a specific block of my game code that I called "),o("strong",[e._v('"Joy ~ PerformSphereMovement"')]),e._v(".")]),e._v(" "),o("p",[e._v("I've successfully tracked the CPU cycles of a section of my own project-level code base and exposed this information to the very friendly GUI of the UE4 Profiler!")]),e._v(" "),o("p",[e._v("Yay!")]),e._v(" "),o("p",[e._v("This picture shows that the UE4 Profiler has confirmed my guess that a certain block of my code was causing almost 97% (96.6) of the performance hit for all the character tick code in my entire code base!")]),e._v(" "),o("p",[e._v("It saves me hours of time to be able to easily narrow down what block of code in my rather large character code base is causing "),o("strong",[e._v("literally 97% of the character-code performance hit!")])]),e._v(" "),o("p",[o("a",{attrs:{href:"/File:WeHaveOurOwnStatsNow.jpg"}},[o("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/d6/WeHaveOurOwnStatsNow.jpg/1000px-WeHaveOurOwnStatsNow.jpg",alt:"WeHaveOurOwnStatsNow.jpg"}})])]),e._v(" "),o("h2",{attrs:{id:"ue4-documentation-on-profiler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ue4-documentation-on-profiler"}},[e._v("#")]),e._v(" UE4 Documentation on Profiler")]),e._v(" "),o("p",[e._v("I assume you are familiar with the basics of the UE4 profiler in this tutorial.")]),e._v(" "),o("p",[e._v("If you have not yet seen what the profiler can already do for you, I recommend reading the Epic Documentation and trynig it out!")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Performance/Profiler/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Epic Documentation on the Amazing UE4 Profiler"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("I will however cover a few basics on using the profile to get you up and running:")]),e._v(" "),o("h3",{attrs:{id:"running-the-ue4-profiler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-the-ue4-profiler"}},[e._v("#")]),e._v(" Running The UE4 Profiler")]),e._v(" "),o("p",[e._v("Type in the in-game console to Start Profile:")]),e._v(" "),o("p",[e._v('"stat startfile";')]),e._v(" "),o("p",[e._v("Type in the in-game console To Stop Profile")]),e._v(" "),o("p",[e._v('"stat stopfile";')]),e._v(" "),o("h3",{attrs:{id:"opening-your-profiled-game-session-data-in-the-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-your-profiled-game-session-data-in-the-editor"}},[e._v("#")]),e._v(" Opening Your Profiled Game Session Data in the Editor")]),e._v(" "),o("p",[e._v("Go to Window->Developer Tools->Session Front End")]),e._v(" "),o("p",[e._v("Then click on the profiler button!")]),e._v(" "),o("p",[o("a",{attrs:{href:"/File:SessionFrontProfiler.jpg"}},[o("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/a/af/SessionFrontProfiler.jpg/900px-SessionFrontProfiler.jpg",alt:"SessionFrontProfiler.jpg"}})])]),e._v(" "),o("p",[e._v("Then you can load your file that you saved!")]),e._v(" "),o("p",[e._v("It will be under the Saved/Profiling directory 😃")]),e._v(" "),o("p",[e._v("Always check the date to make sure you are looking at the right file!")]),e._v(" "),o("h2",{attrs:{id:"self"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#self"}},[e._v("#")]),e._v(" Self")]),e._v(" "),o("p",[e._v("Now on to the core of this wiki!")]),e._v(" "),o("p",[e._v('You\'ll notice that in your game code there will be huge blocks called "Self" which indicates code that has not been divided up into cycle-counted sub-sections! This Self block is all of the code running for your in-game class instances.')]),e._v(" "),o("p",[e._v("Well here is how you can sub-divide Self into your own chosen named categories, neatly organizing and cateloging your own code base!")]),e._v(" "),o("h2",{attrs:{id:"creating-your-own-stat-group"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-own-stat-group"}},[e._v("#")]),e._v(" Creating Your Own Stat Group")]),e._v(" "),o("p",[e._v("Let's say you have class hierachy of classes for your in-game Character.")]),e._v(" "),o("p",[e._v("You want to subdivide the inner workings of your entire character code into CPU cycle-counted code blocks.")]),e._v(" "),o("p",[e._v("In the highest level of your class structure, in the .h, declare your category")]),e._v(" "),o("p",[e._v('//For UE4 Profiler ~ Stat Group\nDECLARE_STATS_GROUP(TEXT("JoyBall"), STATGROUP_JoyBall, STATCAT_Advanced);')]),e._v(" "),o("h2",{attrs:{id:"creating-the-stat"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-stat"}},[e._v("#")]),e._v(" Creating the Stat")]),e._v(" "),o("p",[e._v("In the .cpp where you want to track a particular function body, put this at the top just below the #includes")]),e._v(" "),o("p",[e._v('/*\n \nBy Rama\n \n*/\n#include "Joy.h"\n#include "JoyBall.h"\n \n//For UE4 Profiler ~ Stat\nDECLARE_CYCLE_STAT(TEXT("Joy ~ PerformSphereMovement"), STAT_PerformSphereMovement, STATGROUP_JoyBall);')]),e._v(" "),o("p",[e._v("Please note you can create as many CYCLE_STAT's as you want for your particular STATGROUP !")]),e._v(" "),o("p",[e._v("And you should have one DECLARE_CYCLE_STAT for each function body/scope that you want to count cycles for")]),e._v(" "),o("h2",{attrs:{id:"using-the-stat"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-stat"}},[e._v("#")]),e._v(" Using the Stat")]),e._v(" "),o("p",[e._v("At the very top of the scope of the function you want to track, put the SCOPE macro. Everything within the brackets of the scope you put the SCOPE_CYCLE_COUNTER in will be cycle-counted by the profiler!")]),e._v(" "),o("p",[e._v("void AJoyBallMovement::PerformSphereMovement()\n{\nSCOPE_CYCLE_COUNTER(STAT_PerformSphereMovement);\n \n//... your code that you want to test the performance of and have show up in the profiler\n \n} //Cycle count scope ends here -Rama")]),e._v(" "),o("h2",{attrs:{id:"counting-cpu-cycles-for-any-block-of-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#counting-cpu-cycles-for-any-block-of-code"}},[e._v("#")]),e._v(" Counting CPU Cycles For Any Block of Code")]),e._v(" "),o("p",[e._v("Please note your scope can be within a single function, just make sure to give such a stat an appropriate name like YourFunction_Internal or something Again, the SCOPE_CYCLE_COUNTER will cycle-count within its brackets")]),e._v(" "),o("p",[e._v('void AJoyBallMovement::PerformSphereMovement()\n{\n//First part of this function, code that wont be cycle counted\nConsoleCommand("Joy");\n//... etc\n \n//You can scope any lines of code you want by adding brackets!\n{\nSCOPE_CYCLE_COUNTER(STAT_PerformSphereMovement);\nint32 Parameter = 200;\nYourFunctionThatYouThinkMightBeSlow(Parameter);\n//other code to cycle count\n \n} //Cycle count scope ends here -Rama\n \n \n//More code that wont be cycle counted\nConsoleCommand("~~~~~");\n//... etc\n}')]),e._v(" "),o("h2",{attrs:{id:"example-from-my-code-base"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-from-my-code-base"}},[e._v("#")]),e._v(" Example From My Code Base")]),e._v(" "),o("p",[e._v("See the picture in the overview!")]),e._v(" "),o("p",[e._v('In my own code base I had a 10 class inheritance hierarchy for my game character, and the UE4 profiler was simply telling me that the character "Self" was costing 37% of my total performance hit.')]),e._v(" "),o("p",[e._v("I used the info I am sharing with you in this wiki to create a SCOPE_CYCLE_COUNTER for the function that I thought was probably taking all the performance, and I was right!")]),e._v(" "),o("p",[e._v("But the most important thing is that I enabled the awesome UE4 Profiler to help me narrow down the performance hit in my game code to just a single function / block of code, and so with that info I can easily address the performance hit, knowing it is worth the effort to rewrite the code!")]),e._v(" "),o("h2",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("You now know how you can CPU cycle-count individual lines of your game code base, and expose this information to UE4's super awesome GUI Profiler!")]),e._v(" "),o("p",[e._v("Enjoy!")]),e._v(" "),o("p",[o("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),o("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),o("p",[e._v('Retrieved from "'),o("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Profiling,_How_To_Count_CPU_Cycles_Of_Specific_Blocks_Of_Your_Game_Code&oldid=13627",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Profiling,_How_To_Count_CPU_Cycles_Of_Specific_Blocks_Of_Your_Game_Code&oldid=13627"),o("OutboundLink")],1),e._v('"')]),e._v(" "),o("p",[o("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);