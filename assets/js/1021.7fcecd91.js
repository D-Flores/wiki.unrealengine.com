(window.webpackJsonp=window.webpackJsonp||[]).push([[1021],{625:function(e,t,s){"use strict";s.r(t);var a=s(28),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Steam workshop - Epic Wiki")]),e._v(" "),s("h1",{attrs:{id:"steam-workshop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steam-workshop"}},[e._v("#")]),e._v(" Steam workshop")]),e._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Requirements"}},[e._v("2 Requirements")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Basic_structure_to_interact_with_steam"}},[e._v("3 Basic structure to interact with steam")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#First_Steps_with_Steam"}},[e._v("4 First Steps with Steam")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Steam_workshop"}},[e._v("5 Steam workshop")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#The_count_of_subscribed_items"}},[e._v("5.1 The count of subscribed items")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Getting_file_ids_for_subscribed_items"}},[e._v("5.2 Getting file ids for subscribed items")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Requesting_details"}},[e._v("5.3 Requesting details")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#Conclusion"}},[e._v("6 Conclusion")])])]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Hello to my first Unreal wiki entry 😃 This one is about using the SteamAPI so you can interact with it pretty easily using the "),s("a",{attrs:{href:"https://partner.steamgames.com/home/steamworks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Steamworks documentation"),s("OutboundLink")],1),e._v(" as your friend. In this one, I'll talk about the Steam workshop, which is a pretty neat feature in Steam, and it's 100% usable in Unreal Engine 4. Most of the features can also be written inside a Blueprint Function library which allows you to access Steam functions through blueprints! In the following examples, I just show how to use this in general, in my case, the Game instance which allows me to get Steam things at startup, but you can simply move the code to where-ever you want to have it!")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("Because we are using Steam, you need to follow some steps to get Steam working. If you already see the Steam overlay in your game, then you can skip this part. If not, read "),s("a",{attrs:{href:"https://wiki.unrealengine.com/Steam,_Using_the_Steam_SDK_During_Development",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),s("OutboundLink")],1),e._v(". For a successful compiling, I'll write a few things here aswell because the wiki is not complete at that point.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("You need to include the main steam_api header file into your code file so it can find the functions. To do that, just include "),s("strong",[e._v('"ThirdParty/Steamworks/Steamv132/sdk/public/steam/steam_api.h"')]),e._v(". Note that the v132 may change due to later Unreal engine versions!")])]),e._v(" "),s("li",[s("p",[e._v("You need to compile the game with Steamworks, otherwise you'll get errors like UNRESOLVED EXTERNALS. To do this, simply go to your GameName.Build.cs file and add the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('PublicDependencyModuleNames.AddRange(new string\\[\\] {\n    "OnlineSubsystem",\n    "OnlineSubsystemUtils",\n    "Steamworks"\n});\n')])])])])]),e._v(" "),s("p",[e._v('DynamicallyLoadedModuleNames.Add("OnlineSubsystemSteam");')]),e._v(" "),s("p",[e._v("Thats all, so now your game should compile fine with using native SteamAPI functions!")]),e._v(" "),s("h2",{attrs:{id:"basic-structure-to-interact-with-steam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-structure-to-interact-with-steam"}},[e._v("#")]),e._v(" Basic structure to interact with steam")]),e._v(" "),s("p",[e._v("So if we interact with Steam, we always need to make sure that Steam is up and running, otherwise the game will crash (for example if you test something in the editor, which will obviously not work). To be on the safe side:")]),e._v(" "),s("p",[e._v("if (SteamAPI_Init())\n{\n//do my steam stuff\n}\nelse\n{\n//push an error or something\n}")]),e._v(" "),s("p",[e._v("SteamAPI_Init() will return true if Steam is good to go, and false if not.")]),e._v(" "),s("h2",{attrs:{id:"first-steps-with-steam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-steps-with-steam"}},[e._v("#")]),e._v(" First Steps with Steam")]),e._v(" "),s("p",[e._v("So in this article I go with the Steam workshop, but I'll just introduce you to a quick example so you see how to interact with Steam. The API delivers many interfaces like SteamFriends, SteamUtils, SteamUGC and many others. On the Steamworks page you find anything and how to use it. So a small test to get the players steam name:")]),e._v(" "),s("p",[e._v("if (SteamAPI_Init())\n{\nconst char* name = SteamFriends()->GetPersonaName();\nGEngine->AddOnScreenDebugMessage(-1, 5, FColor::Red, name);\n}")]),e._v(" "),s("p",[e._v("This prints my Steam name onto the screen!")]),e._v(" "),s("h2",{attrs:{id:"steam-workshop-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steam-workshop-2"}},[e._v("#")]),e._v(" Steam workshop")]),e._v(" "),s("p",[e._v("Finally, lets get to the hot topic: Steam Workshop. Nearly all interactions with the Steam workshop via the API use the SteamUGC interface (UGC = "),s("strong",[e._v("U")]),e._v("ser "),s("strong",[e._v("G")]),e._v("enerated "),s("strong",[e._v("C")]),e._v("ontent). I start by just getting the amount of items I have subscribed. We can use for testing the AppID 480, which is Spacewar, because that has Steam workshop support. Neat!")]),e._v(" "),s("h3",{attrs:{id:"the-count-of-subscribed-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-count-of-subscribed-items"}},[e._v("#")]),e._v(" The count of subscribed items")]),e._v(" "),s("p",[e._v("Getting the amount of items I have subscribed to is really easy. In those examples here I won't show you a header file, because thats self-explaining. The full code:")]),e._v(" "),s("p",[e._v("int32 UMyGameInstance::GetSubscribedItemCount()\n{\nif (SteamAPI_Init())\n{\nreturn SteamUGC()->GetNumSubscribedItems();\n}\nelse\n{\nreturn 0;\n}\n}")]),e._v(" "),s("p",[e._v("So, this is pretty simple. If the SteamAPI is valid, he just returns the output of the function "),s("strong",[e._v("SteamUGC()->GetNumSubscribedItems();")]),e._v(" which is from the SteamUGC interface, as you can see. If Steam is not valid for some reason, I just output 0.")]),e._v(" "),s("h3",{attrs:{id:"getting-file-ids-for-subscribed-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-file-ids-for-subscribed-items"}},[e._v("#")]),e._v(" Getting file ids for subscribed items")]),e._v(" "),s("p",[e._v("The Steam workshop operates with File IDs, so every workshop object has it's own Workshop ID. In this example, I will return a TArray"),s("int32",[e._v(" containing all IDs. This would also be blueprint node ready. The code:")])],1),e._v(" "),s("p",[e._v("TArray<int32> UMyGameInstance::GetSubscribedItemIDs()\n{\nTArray<int32> outArray;\n \nif (SteamAPI_Init())\n{\nPublishedFileId_t fileIds[16];\nint32 subItems = SteamUGC()->GetSubscribedItems(fileIds, 16);\n \nfor (int i = 0; i < subItems; i++)\n{\nPublishedFileId_t id = fileIds[i];\noutArray.Add(id);\n}\n}\nelse\n{\noutArray.Add(0);\n}\nreturn outArray;\n}")]),e._v(" "),s("p",[e._v("Lets go over it step-by-step. First I create an empty TArray of type int32 where I can store the IDs inside, because Steam will return an own type. After the check if steam is valid, I create a standard C++ array (it's different from Unreal arrays!) of the type "),s("strong",[e._v("PublishedFileId_t")]),e._v(" which is Steam's type for those IDs. The array has an fixed size of 16 in this example, so 16 is the maximum output I want to have. Like a limit. Then, we'll execute "),s("strong",[e._v("SteamUGC()->GetSubscribedItems()")]),e._v(", whereas the first argument is my array where all file ids should go, and the 16 is my limit again. Cool thing about this function is that it actually returns the amount of subscribed items he filled, so if you subscribed to 3 items, my variable subItems will be 3. Thats cool, because you need this now. I just run a simple for loop going from zero to the amount of subscribed items he got. Then I can just get one ID out of the array, and store this inside the "),s("strong",[e._v("id")]),e._v(" variable. Then, to make this unreal friendly, I add this id into the TArray. At the end, we'll just return this array, and done! Note the outArray.Add(0); which I made if steam is not valid! Pretty easy! Now, having an ID, we can go on with requesting details from items!")]),e._v(" "),s("h3",{attrs:{id:"requesting-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requesting-details"}},[e._v("#")]),e._v(" Requesting details")]),e._v(" "),s("p",[e._v("So, in this example, we want the name of this object. This one is a bit harder because we use Callbacks for this. The way it works:")]),e._v(" "),s("ul",[s("li",[e._v("We send a request to the Steam Servers to get details for a specific file id")]),e._v(" "),s("li",[e._v("We need to wait till we have an answer from Steam")]),e._v(" "),s("li",[e._v("If we have received the answer, we call a function which processes the received data")]),e._v(" "),s("li",[e._v("We extract the name out of the received data")])]),e._v(" "),s("p",[e._v("In this case, I show you the header part of this:")]),e._v(" "),s("p",[e._v("/* Steam UGC details */\nvoid OnUGCRequestUGCDetails(SteamUGCRequestUGCDetailsResult_t *pResult, bool bIOFailure);\nCCallResult<UMyGameInstance, SteamUGCRequestUGCDetailsResult_t> m_callResultUGCRequestDetails;")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("OnUGCRequestUGCDetails")]),e._v(" is the method we call if we got an answer. You see it takes two arguments. They are described "),s("a",{attrs:{href:"https://partner.steamgames.com/documentation/ugc#ConsumeContent",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(". I also have the variable "),s("strong",[e._v("m_callResultUGCRequestDetails")]),e._v(" which is the CallResult handler we will use to receive callbacks. Notice the structure of it:")]),e._v(" "),s("p",[e._v("CCallResult<yourClass, theResult> someName;")]),e._v(" "),s("p",[e._v("yourClass is then equal to the class name where you specify the result function and theResult is just the type of the result you want to get! Okey, after telling you this, lets get to the code!")]),e._v(" "),s("p",[e._v("SteamAPICall_t hSteamAPICall = SteamUGC()->RequestUGCDetails(fileids[0], 20);\nm_callResultUGCRequestDetails.Set(hSteamAPICall, this, &UMyGameInstance::OnUGCRequestUGCDetails);")]),e._v(" "),s("p",[e._v("Every operation which has something to do with requests return an "),s("strong",[e._v("SteamAPICall_t")]),e._v(". In this case, I name it hSteamAPICall (h stands for handle). We use "),s("strong",[e._v("SteamUGC()->RequestUGCDetails(fileId, maxAge)")]),e._v(" for the requesting. fileID is the fileID where you want to get the details for (see the file id section above), and maxAge is actually a value in seconds which acts like a timeout. If we don't get an answer from steam for X seconds, he will terminate listening for that. Creating the callback then is relatively easy. We use our "),s("strong",[e._v("m_callResultUGCRequestDetails")]),e._v(" callResult and execute the "),s("strong",[e._v(".Set(apiCall, class, method)")]),e._v(". apiCall is as I said, the returned call of the request, class is equal to the class were listening at, in this case, we can use "),s("strong",[e._v("this")]),e._v(", and method is the method we call when we have the result (we defined this in the header already!). The result method is then:")]),e._v(" "),s("p",[e._v("void UMyGameInstance::OnUGCRequestUGCDetails(SteamUGCRequestUGCDetailsResult_t *pResult, bool bIOFailure)\n{\nif (bIOFailure)\n{\nreturn; //Something went wrong\n}\n \nSteamUGCDetails_t hUGCDetails = pResult->m_details;\nGEngine->AddOnScreenDebugMessage(-1, 10, FColor::Green, hUGCDetails.m_rgchTitle);\n}")]),e._v(" "),s("p",[e._v("Pretty simple setup. If we have an IOFailure, then we just return, because thats an error. If not, we go on. I store the details in the variable called "),s("strong",[e._v("hUGCDetails")]),e._v(", which is from type "),s("strong",[e._v("SteamUGCDetails_T")]),e._v(". We can get the details easily by taking a look at the "),s("strong",[e._v("pResult")]),e._v(" variable we get back. It has the member "),s("strong",[e._v("m_details")]),e._v(", which contains all the details for an item. Then, I just get the title and print it to screen. Examples for getting different values of an item:")]),e._v(" "),s("p",[e._v("void UMyGameInstance::OnUGCRequestUGCDetails(SteamUGCRequestUGCDetailsResult_t *pResult, bool bIOFailure)\n{\nitemName = hUGCDetails.m_rgchTitle; //Title\nitemDesc = hUGCDetails.m_rgchDescription; //Description (max 8000 chars long)\nitemLikes = hUGCDetails.m_unVotesUp; //How many upvotes we got on this item\n}")]),e._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("This is all I wanted to show you. Thanks to Steam, we don't need to mess around with downloading, because Steam does that on his own. With the details you should be able to create a simple UI showing all subscribed items, and If you create a blueprint library out of this, contact me, as I want to see what people do with this information 😃")]),e._v(" "),s("p",[e._v('Retrieved from "'),s("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Steam_workshop&oldid=17577",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Steam_workshop&oldid=17577"),s("OutboundLink")],1),e._v('"')]),e._v(" "),s("p",[s("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);