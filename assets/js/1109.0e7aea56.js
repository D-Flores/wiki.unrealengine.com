(window.webpackJsonp=window.webpackJsonp||[]).push([[1109],{1236:function(e,t,s){"use strict";s.r(t);var n=s(28),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("UE4与WEB服务器交互(json) - Epic Wiki")]),e._v(" "),s("h1",{attrs:{id:"ue4与web服务器交互-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ue4与web服务器交互-json"}},[e._v("#")]),e._v(" UE4与WEB服务器交互(json)")]),e._v(" "),s("p",[s("strong",[e._v("Rate this Article:")])]),e._v(" "),s("p",[e._v("3.75")]),e._v(" "),s("p",[s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_half.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e._v(" (4 votes)")]),e._v(" "),s("p",[e._v("Approved for Versions:(4.1)")]),e._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#.E6.A6.82.E8.BF.B0"}},[e._v("1 概述")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#.E6.B7.BB.E5.8A.A0.E6.A8.A1.E5.9D.97.E5.92.8C.E5.A4.B4.E6.96.87.E4.BB.B6.E5.BC.95.E7.94.A8"}},[e._v("2 添加模块和头文件引用")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#.E5.88.9B.E5.BB.BAjson.E6.95.B0.E6.8D.AE.E5.8C.85"}},[e._v("3 创建json数据包")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#.E5.87.86.E5.A4.87.E6.8E.A5.E6.94.B6json.E6.95.B0.E6.8D.AE.E5.8C.85.E7.9A.84PHP.E7.BD.91.E9.A1.B5"}},[e._v("4 准备接收json数据包的PHP网页")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#POST.E6.95.B0.E6.8D.AE"}},[e._v("5 POST数据")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#.E6.80.BB.E7.BB.93"}},[e._v("6 总结")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#.E5.B8.B8.E8.A7.81.E9.97.AE.E9.A2.98.E5.8F.8A.E5.8F.82.E8.80.83"}},[e._v("7 常见问题及参考")])])]),e._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),s("p",[e._v("制作游戏在很多情况下需要和WEB服务器进行交互，最常见的是在做Demo时需要通过游戏向WEB服务器传递数据（登录/注册验请求），WEB服务器处理（操作数据库）之后返回结果并调用指定的方法。 该教程简单介绍了如何通过UE4向WEB服务器（PHP）发送json数据包及回调方法。")]),e._v(" "),s("h2",{attrs:{id:"添加模块和头文件引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加模块和头文件引用"}},[e._v("#")]),e._v(" 添加模块和头文件引用")]),e._v(" "),s("p",[e._v("在代码编辑器中打开项目解决方案，在"),s("Solution",{attrs:{Name:""}},[e._v("/Source/"),s("ProjectName",[e._v("路径下，找到并打开"),s("ProjectName",[e._v(".Build.cs文件，添加HTTP模块：")])],1)],1)],1),e._v(" "),s("p",[e._v('PrivateDependencyModuleNames.AddRange(new string[] {"HTTP"});\nPrivateIncludePathModuleNames.AddRange(new string[] {"HTTP"});')]),e._v(" "),s("p",[e._v("然后在需要实现该功能的类文件中添加如下的头文件引用:")]),e._v(" "),s("p",[e._v('#include "Http.h"\n#include "Json.h"')]),e._v(" "),s("h2",{attrs:{id:"创建json数据包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建json数据包"}},[e._v("#")]),e._v(" 创建json数据包")]),e._v(" "),s("p",[e._v("数据内容为：")]),e._v(" "),s("p",[e._v('{ "user" : "StormUnited"}')]),e._v(" "),s("p",[e._v("创建：")]),e._v(" "),s("p",[e._v('// Create a writer and hold it in this FString\nFString JsonStr;\nTSharedRef< TJsonWriter<TCHAR, TCondensedJsonPrintPolicy<TCHAR> > > JsonWriter = TJsonWriterFactory<TCHAR, TCondensedJsonPrintPolicy<TCHAR> >::Create(&JsonStr);\nJsonWriter->WriteObjectStart();\nJsonWriter->WriteValue(TEXT("user"), TEXT("StormUnited"));\nJsonWriter->WriteObjectEnd();\n \n// Close the writer and finalize the output such that JsonStr has what we want\nJsonWriter->Close();')]),e._v(" "),s("p",[e._v("至此，json数据包准备完成。")]),e._v(" "),s("h2",{attrs:{id:"准备接收json数据包的php网页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备接收json数据包的php网页"}},[e._v("#")]),e._v(" 准备接收json数据包的PHP网页")]),e._v(" "),s("p",[e._v("本示例中使用了PHP，你可以选择使用搭建动态网站或者服务器的开源软件，比如说wamp/lamp等在本机上建立一个WEB服务器来解析PHP页面。 创建mywebpage.php文件，并添加如下代码：")]),e._v("\n<?php\n     // 首先接收上传的数据\n     $post\\_data \\= file\\_get\\_contents('php://input');\n     // 解析json字符串\n     $obj \\= json\\_decode($post\\_data);\n     // 获取包含在Json字符串中的数据\n     echo $obj\\->{'user'};\n?>\n"),s("h2",{attrs:{id:"post数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post数据"}},[e._v("#")]),e._v(" POST数据")]),e._v(" "),s("p",[e._v("将通过如下的代码将上面准备好的json数据包提交给 "),s("a",{attrs:{href:"http://localhost/mywebpage.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost/mywebpage.php"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[e._v("SetHeader：可以设置POST数据的格式")]),e._v(" "),s("li",[e._v("SetURL：可以指定用于处理上传数据的链接")]),e._v(" "),s("li",[e._v("SetVerb：可以设置POST/PUT/GET")]),e._v(" "),s("li",[e._v("SetContentAsString：用于填充上传的数据内容")]),e._v(" "),s("li",[e._v("OnProcessRequestComplete().BindUObject 用于指定在发送请求之后的回调方法。")])]),e._v(" "),s("p",[e._v('TSharedRef<IHttpRequest> HttpRequest = FHttpModule::Get().CreateRequest();\nHttpRequest->SetHeader(TEXT("Content-Type"), TEXT("application/json; charset=utf-8"));\nHttpRequest->SetURL(TEXT("http://localhost/mywebpage.php"));\nHttpRequest->SetVerb(TEXT("POST"));\nHttpRequest->SetContentAsString(JsonStr);\nHttpRequest->OnProcessRequestComplete().BindUObject(this, &ASUMiniGameMode::HttpCompleteCallback);\nHttpRequest->ProcessRequest();')]),e._v(" "),s("p",[e._v("关于回调函数的结构：void HttpCompleteCallback(FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful); 示例：")]),e._v(" "),s("p",[e._v('void ASUMiniGameMode::HttpCompleteCallback(FHttpRequestPtr Request, FHttpResponsePtr Response, bool bWasSuccessful)\n{\nFString MessageBody = "";\n \n// If HTTP fails client-side, this will still be called but with a NULL shared pointer!\nif (!Response.IsValid())\n{\nMessageBody = "{\\"success\\":\\"Error: Unable to process HTTP Request!\\"}";\n}\nelse if (EHttpResponseCodes::IsOk(Response->GetResponseCode()))\n{\nMessageBody = Response->GetContentAsString();\n}\nelse\n{\nMessageBody = FString::Printf(TEXT("{\\"success\\":\\"HTTP Error: %d\\"}"), Response->GetResponseCode());\n}\n}')]),e._v(" "),s("p",[e._v("一旦发送出请求后肯定会调用HttpCompleteCallback方法，WEB服务器处理的数据结果包含在Response参数中，可以通过Response->GetContentAsString()来获取返回的字符串，比如在本例中是StormUnited。")]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("联系我："),s("a",{attrs:{href:"/User:Hexcola",title:"User:Hexcola"}},[e._v("hexcola")])]),e._v(" "),s("h2",{attrs:{id:"常见问题及参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题及参考"}},[e._v("#")]),e._v(" 常见问题及参考")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/4383/sending-an-fstring-via-sockets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/4383/sending-an-fstring-via-sockets.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/4406/need-help-with-json-objects.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/4406/need-help-with-json-objects.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/2830/best-way-to-perform-a-http-request.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/2830/best-way-to-perform-a-http-request.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/3530/does-httprequest-use-httpmanager-by-default.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/3530/does-httprequest-use-httpmanager-by-default.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/2830/best-way-to-perform-a-http-request.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/2830/best-way-to-perform-a-http-request.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/23170/making-http-calls.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/23170/making-http-calls.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/31079/http%E9%80%9A%E4%BF%A1%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/31079/http%E9%80%9A%E4%BF%A1%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/26704/trouble-deserializing-json.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/26704/trouble-deserializing-json.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://answers.unrealengine.com/questions/2830/best-way-to-perform-a-http-request.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://answers.unrealengine.com/questions/2830/best-way-to-perform-a-http-request.html"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v('Retrieved from "'),s("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=UE4%E4%B8%8EWEB%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BA%A4%E4%BA%92(json)&oldid=12751",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=UE4与WEB服务器交互(json)&oldid=12751"),s("OutboundLink")],1),e._v('"')]),e._v(" "),s("p",[s("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),s("p",[e._v("Hidden category:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);