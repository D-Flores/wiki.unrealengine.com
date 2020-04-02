(window.webpackJsonp=window.webpackJsonp||[]).push([[1183],{1047:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Using AsyncTasks - Epic Wiki")]),t._v(" "),a("h1",{attrs:{id:"using-asynctasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-asynctasks"}},[t._v("#")]),t._v(" Using AsyncTasks")]),t._v(" "),a("p",[t._v("From Epic Wiki")]),t._v(" "),a("p",[t._v("Jump to: "),a("a",{attrs:{href:"#mw-head"}},[t._v("navigation")]),t._v(", "),a("a",{attrs:{href:"#p-search"}},[t._v("search")])]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Template:Rating&action=edit&redlink=1",title:"Template:Rating (page does not exist)"}},[t._v("Template:Rating")])]),t._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#What_You_Will_Learn"}},[t._v("1.1 What You Will Learn")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Async_Tasks_Explained"}},[t._v("2 Async Tasks Explained")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Why_is_this_helpful.3F"}},[t._v("2.1 Why is this helpful?")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Types_of_Async_Tasks"}},[t._v("3 Types of Async Tasks")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#FAsyncTask"}},[t._v("3.1 FAsyncTask")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#FAutoDeleteAsyncTask"}},[t._v("3.2 FAutoDeleteAsyncTask")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#How_to_Declare_and_Define_an_Async_Task"}},[t._v("4 How to Declare and Define an Async Task")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Organization"}},[t._v("4.1 Organization")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#The_Actual_Code"}},[t._v("4.2 The Actual Code")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#How_to_Instantiate_and_Run_an_Async_Task"}},[t._v("5 How to Instantiate and Run an Async Task")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#Advanced_Topics"}},[t._v("6 Advanced Topics")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Returning_Data"}},[t._v("6.1 Returning Data")])])])])]),t._v(" "),a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("I have been asked about my work with successfully creating FAsyncTasks. It has come up enough in Slack chat that I finally broke down and I want to make a really fantastic article about it. Hopefully I will succeed.")]),t._v(" "),a("h2",{attrs:{id:"what-you-will-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-you-will-learn"}},[t._v("#")]),t._v(" What You Will Learn")]),t._v(" "),a("ol",[a("li",[t._v("What Async Tasks are")]),t._v(" "),a("li",[t._v("Types of Async Tasks")]),t._v(" "),a("li",[t._v("How to Declare and Define an Async Task")]),t._v(" "),a("li",[t._v("How to Instantiate and Run an Async Task")])]),t._v(" "),a("h1",{attrs:{id:"async-tasks-explained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-tasks-explained"}},[t._v("#")]),t._v(" Async Tasks Explained")]),t._v(" "),a("p",[t._v("A so called "),a("strong",[t._v("Async Task")]),t._v(" is a way of running non-blocking asynchronous code on a thread which is removed from the main 'Game Thread'")]),t._v(" "),a("h2",{attrs:{id:"why-is-this-helpful"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-this-helpful"}},[t._v("#")]),t._v(" Why is this helpful?")]),t._v(" "),a("p",[t._v("Well, if you need to take a long time to complete a task, chunk something up into multiple parts, or generally not interfere with the regular tick and render cycle of a game for any reason, then this is one of the best methods available to you in Unreal Engine.")]),t._v(" "),a("p",[t._v("If you run the same code "),a("strong",[t._v("Synchronously")]),t._v(" or have it "),a("strong",[t._v("Blocking")]),t._v(", it will generally halt your game logic and rendering and cause major performance issues! No fun.")]),t._v(" "),a("p",[t._v("Also, you can "),a("em",[t._v("vastly")]),t._v(" increase performance for Asynchronous tasks that can make use of multi-threaded systems.")]),t._v(" "),a("h1",{attrs:{id:"types-of-async-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-async-tasks"}},[t._v("#")]),t._v(" Types of Async Tasks")]),t._v(" "),a("p",[t._v("The classes that are referred to as Async Tasks are 'friend' classes used in conjunction with FNonAbandonableTask and come in two flavors: FAsyncTask and FAutoDeleteAsyncTask.")]),t._v(" "),a("h2",{attrs:{id:"fasynctask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fasynctask"}},[t._v("#")]),t._v(" FAsyncTask")]),t._v(" "),a("p",[t._v("This task type requires some manual attention in order to stop, or delete the task. Other than that, both flavors are fairly identical.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Core/Async/FAsyncTask/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UE4 Documentation on FAsyncTask"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"fautodeleteasynctask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fautodeleteasynctask"}},[t._v("#")]),t._v(" FAutoDeleteAsyncTask")]),t._v(" "),a("p",[t._v("This task type requires "),a("em",[t._v("zero")]),t._v(" attention in order to stop, or delete the task. Other than that, both flavors are fairly identical.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Core/Async/FAutoDeleteAsyncTask/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UE4 Documentation on FAutoDeleteAsyncTask"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"how-to-declare-and-define-an-async-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-declare-and-define-an-async-task"}},[t._v("#")]),t._v(" How to Declare and Define an Async Task")]),t._v(" "),a("p",[t._v("Although there are multiple ways to accomplish this, I will show you the way in which I handle Async Tasks personally, which should accommodate most uses.")]),t._v(" "),a("h2",{attrs:{id:"organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organization"}},[t._v("#")]),t._v(" Organization")]),t._v(" "),a("p",[t._v("The method I use to organize my code is to create a C++ Component that handles the types of Tasks I want to create. That way, I can invoke the tasks from Blueprints very easily, and yet have all of the speed of C++. I'm going to focus a lot more on the Async Task code itself, so don't worry about that too much.")]),t._v(" "),a("h2",{attrs:{id:"the-actual-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-actual-code"}},[t._v("#")]),t._v(" The Actual Code")]),t._v(" "),a("p",[t._v("Just below my Component class body in my component's Header file, I add all of my FAsyncTask and FAutoDeleteAsyncTask classes.")]),t._v(" "),a("p",[t._v("They are declared like so:")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" class FMyTaskName : public FNonAbandonableTask { friend class FAutoDeleteAsyncTask"),a("FMyTaskName",[t._v(";")])],1)],1),t._v(" "),a("p",[t._v("public: FMyTaskName(int32 Input, int32 Input2) : MyInput(Input), MyInput2(Input2) {}")]),t._v(" "),a("p",[t._v("protected: int32 MyInput; int32 MyInput2;")]),t._v(" "),a("p",[t._v("void DoWork() { // Place the Async Code here. This function runs automatically. }")]),t._v(" "),a("p",[t._v("// This next section of code needs to be here. Not important as to why.")]),t._v(" "),a("p",[t._v("FORCEINLINE TStatId GetStatId() const { RETURN_QUICK_DECLARE_CYCLE_STAT(FMyTaskName, STATGROUP_ThreadPoolAsyncTasks); } } ")]),t._v(" "),a("p",[t._v("The preceding code is valid, although it won't actually perform a task. It is up to you to define what this class actually does.")]),t._v(" "),a("p",[t._v("Also realize that you can and should change the instances of "),a("strong",[t._v("FMyTaskName")]),t._v(" with something unique and meaningful for each Task.")]),t._v(" "),a("p",[a("strong",[t._v("DoWork()")]),t._v(" will execute one time automatically once the task is started. I'll go into a little more detail later.")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Template:Note&action=edit&redlink=1",title:"Template:Note (page does not exist)"}},[t._v("Template:Note")])]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Template:Note&action=edit&redlink=1",title:"Template:Note (page does not exist)"}},[t._v("Template:Note")])]),t._v(" "),a("h1",{attrs:{id:"how-to-instantiate-and-run-an-async-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-instantiate-and-run-an-async-task"}},[t._v("#")]),t._v(" How to Instantiate and Run an Async Task")]),t._v(" "),a("p",[t._v("Heading back into the .cpp side of things, I'll show you the proper method for instantiating and executing the actual task itself.")]),t._v(" "),a("p",[a("syntaxhighlight",{attrs:{lang:"cpp"}},[t._v(" // Instantiate a copy of the actual task, and queue the task for execution with StartBackgroundTask() (new FAutoDeleteAsyncTask"),a("FMyTaskName",[t._v("(6,10))->StartBackgroundTask(); ")])],1)],1),t._v(" "),a("p",[t._v("As soon as the task is Started, it will be whisked away to the default Thread Pool and queued up for execution. Once a thread is available, it will immediately run the DoWork() function until that function is complete. Once that function is complete, the task will either Auto Delete or become Idle, depending on what type of task was used.")]),t._v(" "),a("p",[t._v("The speed of assigning a Task to a queue is remarkably fast. Other forms of thread management, such as FRunnable, tend to have more delays and overhead surrounding them, and are better suited for certain types of continuous operations.")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Template:Note&action=edit&redlink=1",title:"Template:Note (page does not exist)"}},[t._v("Template:Note")])]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Template:Note&action=edit&redlink=1",title:"Template:Note (page does not exist)"}},[t._v("Template:Note")])]),t._v(" "),a("h1",{attrs:{id:"advanced-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-topics"}},[t._v("#")]),t._v(" Advanced Topics")]),t._v(" "),a("h2",{attrs:{id:"returning-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returning-data"}},[t._v("#")]),t._v(" Returning Data")]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Using_AsyncTasks/Returning_Data",title:"Using AsyncTasks/Returning Data"}},[a("strong",[t._v("Returning Data from AsyncTasks")])])]),t._v(" "),a("p",[t._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Using_AsyncTasks&oldid=245",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Using_AsyncTasks&oldid=245"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("p",[a("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[t._v("Code")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);