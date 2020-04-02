(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{709:function(e,t,r){"use strict";r.r(t);var a=r(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Multi-Threading: How to Create Threads in UE4 - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"multi-threading-how-to-create-threads-in-ue4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multi-threading-how-to-create-threads-in-ue4"}},[e._v("#")]),e._v(" Multi-Threading: How to Create Threads in UE4")]),e._v(" "),r("p",[e._v("From Epic Wiki")]),e._v(" "),r("p",[e._v("Jump to: "),r("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),r("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=Template:Rating&action=edit&redlink=1",title:"Template:Rating (page does not exist)"}},[e._v("Template:Rating")])]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#What_The_Code_Below_Does"}},[e._v("1.1 What The Code Below Does")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Static_Functions"}},[e._v("1.2 Static Functions")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Performance"}},[e._v("1.3 Performance")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Video"}},[e._v("1.4 Video")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#.H"}},[e._v("2 .H")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#.CPP"}},[e._v("3 .CPP")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Starting_the_thread"}},[e._v("4 Starting the thread")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Thread_Management"}},[e._v("5 Thread Management")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Using_Sleep_for_Thread_Management"}},[e._v("5.1 Using Sleep for Thread Management")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#What_Not_to_Do"}},[e._v("6 What Not to Do")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Timer_Functions_in_GameThread"}},[e._v("7 Timer Functions in GameThread")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#How_to_Support_Single_Threaded_Platforms.3F"}},[e._v("8 How to Support Single Threaded Platforms?")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Conclusion"}},[e._v("9 Conclusion")])])]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[r("strong",[e._v("Author")]),e._v(" "),r("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),r("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),r("p",[e._v("Dear Community,")]),e._v(" "),r("p",[e._v("Here is how you can create your own threads in UE4!")]),e._v(" "),r("p",[e._v("This is the code you'd use for a very large task.")]),e._v(" "),r("p",[e._v("For small incremental tasks that can be divided into chunks check out my Task Graph Tutorial:")]),e._v(" "),r("p",[r("strong",[r("a",{attrs:{href:"/index.php?title=Multi-Threading:_Task_Graph_System",title:"Multi-Threading: Task Graph System"}},[e._v("Multi-Threading:_Task_Graph_System")])])]),e._v(" "),r("p",[r("em",[e._v("Note start ("),r("a",{attrs:{href:"/index.php?title=User:Zyr&action=edit&redlink=1",title:"User:Zyr (page does not exist)"}},[e._v("Zyr")]),e._v(" | "),r("a",{attrs:{href:"/index.php?title=User_talk:Zyr&action=edit&redlink=1",title:"User talk:Zyr (page does not exist)"}},[e._v("talk")]),e._v(")")])]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("FRunnable")]),e._v(" and "),r("em",[e._v("FRunnableThread")]),e._v(" approach Rama presents here is certainly a viable solution for most problems. However, when creating many tasks you might hit the upper limit of concurrency a CPU can handle, at which point the concurrent threads are actually going to hinder each other while fighting for CPU time. It might then be worth looking at the "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Core/Misc/FQueuedThreadPool/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FQueuedThreadPool"),r("OutboundLink")],1),e._v(" to limit the number of threads available to your tasks.")]),e._v(" "),r("p",[e._v("The Unreal Engine 4 also provides a global "),r("em",[e._v("GThreadPool")]),e._v(", however this thread pool is set to only a single thread (UE4.14.3). It seems to be intended for simply running a concurrent task on another core.")]),e._v(" "),r("p",[r("em",[e._v("Note end")])]),e._v(" "),r("h3",{attrs:{id:"what-the-code-below-does"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-the-code-below-does"}},[e._v("#")]),e._v(" What The Code Below Does")]),e._v(" "),r("ul",[r("li",[e._v("Creates a thread to compute the first 50,000 prime numbers")]),e._v(" "),r("li",[e._v("Sends incremental completion data back to the Game Thread")]),e._v(" "),r("li",[e._v("Has static accessors for starting, shutting down, and finding out if thread is done.")])]),e._v(" "),r("h3",{attrs:{id:"static-functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-functions"}},[e._v("#")]),e._v(" Static Functions")]),e._v(" "),r("p",[e._v("You will note in the code below I am using static functions to easily start the new thread, and I could also use a static Shutdown() function from the GameThread if I ever needed to shut the thread down in a hurry (such as player exiting the game)")]),e._v(" "),r("h3",{attrs:{id:"performance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),r("p",[e._v("I first computed the first 50,000 prime numbers using the Task Graph System, and creating 50,000 tasks (1 for each prime to find).")]),e._v(" "),r("p",[e._v("In the code you see in this tutorial, I instead created a dedicated thread to calculate the first 50,000 prime numbers!")]),e._v(" "),r("p",[r("strong",[e._v("The performance benefit was phenomenal!")])]),e._v(" "),r("p",[e._v("My fps stayed solid 90 (my chosen max fps) for the entire running of this thread in code below.")]),e._v(" "),r("p",[e._v("Whereas for with the task graph system, as I got closer to 50,000 the fps dropped by a max of 40.")]),e._v(" "),r("p",[e._v("For larger tasks make sure to try out actual multi-threading!")]),e._v(" "),r("h3",{attrs:{id:"video"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),r("p",[e._v("The below is video for the multi-task version, which had marked fps drop as compared with this method of creating an actual thread.")]),e._v(" "),r("p",[e._v("It's the same general idea though, the first 50,000 prime numbers get computed while you continue to do whatever you want in main game thread 😃")]),e._v(" "),r("p",[e._v("I show my results at the end of the video.")]),e._v(" "),r("p",[e._v("You can compare them with this webpage!")]),e._v(" "),r("p",[e._v("My multi-threading system did actually calculate the first 50,000 (+1) prime numbers!")]),e._v(" "),r("p",[r("strong",[r("a",{attrs:{href:"http://www.cs.arizona.edu/icon/oddsends/primes.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("|First 50,000 Prime Numbers"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("youtube",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=cgELOodtoSU&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=cgELOodtoSU&feature=youtu.be"),r("OutboundLink")],1)])],1),e._v(" "),r("h2",{attrs:{id:"h"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[e._v("#")]),e._v(" .H")]),e._v(" "),r("p",[e._v("//~~~~~ Multi Threading ~~~\nclass FPrimeNumberWorker : public FRunnable\n{\t\n/** Singleton instance, can access the thread any time via static accessor, if it is active! */\nstatic  FPrimeNumberWorker* Runnable;")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("/\\*\\* Thread to run the worker FRunnable on \\*/\nFRunnableThread\\* Thread;\n\n/\\*\\* The Data Ptr \\*/\nTArray<uint32\\>\\* PrimeNumbers;\n\n/\\*\\* The PC \\*/\nAVictoryGamePlayerController\\* ThePC;\n\n/\\*\\* Stop this thread? Uses Thread Safe Counter \\*/\nFThreadSafeCounter StopTaskCounter;\n\n//The actual finding of prime numbers\nint32 FindNextPrimeNumber();\n")])])]),r("p",[e._v("private:\nint32\t\t\t\tPrimesFoundCount;\npublic:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("int32\t\t\t\tTotalPrimesToFind;\n\n//Done?\nbool IsFinished() const\n{\n\treturn PrimesFoundCount \\>= TotalPrimesToFind;\n}\n\n//~~~ Thread Core Functions ~~~\n\n//Constructor / Destructor\nFPrimeNumberWorker(TArray<uint32\\>& TheArray, const int32 IN\\_PrimesToFindPerTick, AVictoryGamePlayerController\\* IN\\_PC);\nvirtual ~FPrimeNumberWorker();\n\n// Begin FRunnable interface.\nvirtual bool Init();\nvirtual uint32 Run();\nvirtual void Stop();\n// End FRunnable interface\n\n/\\*\\* Makes sure this thread has stopped properly \\*/\nvoid EnsureCompletion();\n\n\n\n//~~~ Starting and Stopping Thread ~~~\n\n\n\n/\\* \n")])])]),r("p",[e._v("Start the thread and the worker from static (easy access)!\nThis code ensures only 1 Prime Number thread will be able to run at a time.\nThis function returns a handle to the newly started instance.\n*/\nstatic FPrimeNumberWorker* JoyInit(TArray<uint32>& TheArray, const int32 IN_TotalPrimesToFind, AVictoryGamePlayerController* IN_PC);")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("/\\*\\* Shuts down the thread. Static so it can easily be called from outside the thread context \\*/\nstatic void Shutdown();\n\n    static bool IsThreadFinished();\n")])])]),r("p",[e._v("};")]),e._v(" "),r("h2",{attrs:{id:"cpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpp"}},[e._v("#")]),e._v(" .CPP")]),e._v(" "),r("p",[e._v("//***********************************************************\n//Thread Worker Starts as NULL, prior to being instanced\n//\t\tThis line is essential! Compiler error without it\nFPrimeNumberWorker* FPrimeNumberWorker::Runnable = NULL;\n//***********************************************************")]),e._v(" "),r("p",[e._v("FPrimeNumberWorker::FPrimeNumberWorker(TArray<uint32>& TheArray, const int32 IN_TotalPrimesToFind, AVictoryGamePlayerController* IN_PC)\n: ThePC(IN_PC)\n, TotalPrimesToFind(IN_TotalPrimesToFind)\n, StopTaskCounter(0)\n, PrimesFoundCount(0)\n{\n//Link to where data should be stored\nPrimeNumbers = &TheArray;")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('Thread \\= FRunnableThread::Create(this, TEXT("FPrimeNumberWorker"), 0, TPri\\_BelowNormal); //windows default = 8mb for thread, could specify more\n')])])]),r("p",[e._v("}")]),e._v(" "),r("p",[e._v("FPrimeNumberWorker::~FPrimeNumberWorker()\n{\ndelete Thread;\nThread = NULL;\n}")]),e._v(" "),r("p",[e._v("//Init\nbool FPrimeNumberWorker::Init()\n{\n//Init the Data\nPrimeNumbers->Empty();\nPrimeNumbers->Add(2);\nPrimeNumbers->Add(3);")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('if(ThePC) \n{\n\tThePC\\->ClientMessage("\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*");\n\tThePC\\->ClientMessage("Prime Number Thread Started!");\n\tThePC\\->ClientMessage("\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*");\n}\nreturn true;\n')])])]),r("p",[e._v("}")]),e._v(" "),r("p",[e._v("//Run\nuint32 FPrimeNumberWorker::Run()\n{\n//Initial wait before starting\nFPlatformProcess::Sleep(0.03);")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("//While not told to stop this thread \n//\t\tand not yet finished finding Prime Numbers\nwhile (StopTaskCounter.GetValue() \\== 0 && ! IsFinished())\n{\n\tPrimeNumbers\\->Add(FindNextPrimeNumber());\n\tPrimesFoundCount++;\n\t\n\t//\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\n\t//Show Incremental Results in Main Game Thread!\n\t\n\t//\tPlease note you should not create, destroy, or modify UObjects here.\n\t//\t  Do those sort of things after all thread are completed.\n\t\n\t//\t  All calcs for making stuff can be done in the threads\n\t//\t     But the actual making/modifying of the UObjects should be done in main game thread.\n\tThePC\\->ClientMessage(FString::FromInt(PrimeNumbers\\->Last()));\n\t//\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\n\t\n\t//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\t//prevent thread from using too many resources\n\t//FPlatformProcess::Sleep(0.01);\n\t//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n}\n\n//Run FPrimeNumberWorker::Shutdown() from the timer in Game Thread that is watching\n    //to see when FPrimeNumberWorker::IsThreadFinished()\n\nreturn 0;\n")])])]),r("p",[e._v("}")]),e._v(" "),r("p",[e._v("//stop\nvoid FPrimeNumberWorker::Stop()\n{\nStopTaskCounter.Increment();\n}")]),e._v(" "),r("p",[e._v("FPrimeNumberWorker* FPrimeNumberWorker::JoyInit(TArray<uint32>& TheArray, const int32 IN_TotalPrimesToFind, AVictoryGamePlayerController* IN_PC)\n{\n//Create new instance of thread if it does not exist\n//\t\tand the platform supports multi threading!\nif (!Runnable && FPlatformProcess::SupportsMultithreading())\n{\nRunnable = new FPrimeNumberWorker(TheArray,IN_TotalPrimesToFind,IN_PC);\t\t\t\n}\nreturn Runnable;\n}")]),e._v(" "),r("p",[e._v("void FPrimeNumberWorker::EnsureCompletion()\n{\nStop();\nThread->WaitForCompletion();\n}")]),e._v(" "),r("p",[e._v("void FPrimeNumberWorker::Shutdown()\n{\nif (Runnable)\n{\nRunnable->EnsureCompletion();\ndelete Runnable;\nRunnable = NULL;\n}\n}")]),e._v(" "),r("p",[e._v("bool FPrimeNumberWorker::IsThreadFinished()\n{\nif(Runnable) return Runnable->IsFinished();\nreturn true;\n}\nint32 FPrimeNumberWorker::FindNextPrimeNumber()\n{\n//Last known prime number  + 1\nint32 TestPrime = PrimeNumbers->Last();")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("bool NumIsPrime \\= false;\nwhile( ! NumIsPrime)\n{\n\tNumIsPrime \\= true;\n\t\n\t//Try Next Number\n\tTestPrime++;\n\t\n\t//Modulus from 2 to current number - 1 \n\tfor(int32 b \\= 2; b < TestPrime; b++)\n\t{\n\t\t//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\t\t//prevent thread from using too many resources\n\t\t//FPlatformProcess::Sleep(0.01);\n\t\t//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n\t\tif(TestPrime % b \\== 0) \n\t\t{\n\t\t\tNumIsPrime \\= false;\n\t\t\tbreak;\n\t\t\t//~~~\n\t\t}\n\t}\n}\n\n//Success!\nreturn TestPrime;\n")])])]),r("p",[e._v("}")]),e._v(" "),r("h2",{attrs:{id:"starting-the-thread"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-thread"}},[e._v("#")]),e._v(" Starting the thread")]),e._v(" "),r("p",[e._v("//In the .h for the player controller\n// this is the actual data\nTArray<uint32> PrimeNumbers;")]),e._v(" "),r("p",[e._v("//player controller .cpp\n//Multi-threading, returns handle that could be cached.\n//\t\tuse static function FPrimeNumberWorker::Shutdown() if necessary\nFPrimeNumberWorker::JoyInit(PrimeNumbers, 50000, this);")]),e._v(" "),r("h2",{attrs:{id:"thread-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thread-management"}},[e._v("#")]),e._v(" Thread Management")]),e._v(" "),r("p",[e._v('You should look in the code base for "FRunnable" to see expanded uses of multi threading and lock / unlocking protection.')]),e._v(" "),r("p",[e._v("I used a simple example to get you started, but there's a lot to consider when multi-threading 😃")]),e._v(" "),r("h3",{attrs:{id:"using-sleep-for-thread-management"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-sleep-for-thread-management"}},[e._v("#")]),e._v(" Using Sleep for Thread Management")]),e._v(" "),r("p",[e._v("You should consider using")]),e._v(" "),r("p",[e._v("FPlatformProcess::Sleep(seconds);")]),e._v(" "),r("p",[e._v("to prevent 1 thread from taking too many system resources 😃")]),e._v(" "),r("h2",{attrs:{id:"what-not-to-do"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-not-to-do"}},[e._v("#")]),e._v(" What Not to Do")]),e._v(" "),r("ul",[r("li",[e._v("Do not try to modify, create, or delete UObjects from other threads!")])]),e._v(" "),r("p",[e._v("You can prepare all the data / do all the calculations, but only the game thread should be actually spawning / modifying / deleting UObjects / AActors.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Dont try to use TimerManager outside of the game thread 😃")])]),e._v(" "),r("li",[r("p",[e._v("Don't try to draw debug lines/points etc, as it will likely crash, ie DrawDebugLine(etc...)")])])]),e._v(" "),r("p",[e._v("Notice (since 4.11):")]),e._v(" "),r("p",[e._v("If you want to use the timer, remove, and modify variables use it:")]),e._v(" "),r("p",[e._v('#include "Async.h"\n...\nAsyncTask(ENamedThreads::GameThread, []() {\n// code to execute on game thread here\n});')]),e._v(" "),r("h2",{attrs:{id:"timer-functions-in-gamethread"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timer-functions-in-gamethread"}},[e._v("#")]),e._v(" Timer Functions in GameThread")]),e._v(" "),r("p",[e._v("You can run a timer function in the game thread to periodically check on the data being gathered by the other threads you create.")]),e._v(" "),r("h2",{attrs:{id:"how-to-support-single-threaded-platforms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-support-single-threaded-platforms"}},[e._v("#")]),e._v(" How to Support Single Threaded Platforms?")]),e._v(" "),r("p",[e._v("If your code absolutely has to run even in a single threaded environment such as HTML5, then check out")]),e._v(" "),r("p",[r("strong",[e._v("AsyncIOSystemBase.h")])]),e._v(" "),r("p",[e._v("struct CORE_API FAsyncIOSystemBase : public FIOSystem, FRunnable, FSingleThreadRunnable")]),e._v(" "),r("p",[e._v("A Runnable can extend SingleThreadRunnable and return itself for FRunnable's hook for single threaded cases:")]),e._v(" "),r("p",[e._v("/**\n* Gets single thread interface pointer used for ticking this runnable when multi-threading is disabled.\n* If the interface is not implemented, this runnable will not be ticked when FPlatformProcess::SupportsMultithreading() is false.\n*\n* @return Pointer to the single thread interface or nullptr if not implemented.\n*/\nvirtual class FSingleThreadRunnable* GetSingleThreadInterface( )\n{\nreturn nullptr;\n}")]),e._v(" "),r("h2",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Enjoy!")]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" ("),r("a",{attrs:{href:"/index.php?title=User_talk:Rama",title:"User talk:Rama"}},[e._v("talk")]),e._v(")")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Multi-Threading:_How_to_Create_Threads_in_UE4&oldid=49",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Multi-Threading:_How_to_Create_Threads_in_UE4&oldid=49"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/index.php?title=Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/index.php?title=Category:Tutorials&action=edit&redlink=1",title:"Category:Tutorials (page does not exist)"}},[e._v("Tutorials")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/index.php?title=Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/index.php?title=Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);