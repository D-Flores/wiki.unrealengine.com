(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{483:function(e,t,a){"use strict";a.r(t);var r=a(28),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Blueprint Building FPS from scratch - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"blueprint-building-fps-from-scratch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-building-fps-from-scratch"}},[e._v("#")]),e._v(" Blueprint Building FPS from scratch")]),e._v(" "),a("h1",{attrs:{id:"building-an-fps-in-blueprints-from-scratch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-an-fps-in-blueprints-from-scratch"}},[e._v("#")]),e._v(" Building an FPS in Blueprints from scratch")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Building_an_FPS_in_Blueprints_from_scratch"}},[e._v("1 Building an FPS in Blueprints from scratch")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#About_and_Why"}},[e._v("1.1 About and Why")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#End_Goal"}},[e._v("1.2 End Goal")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Part_1"}},[e._v("1.3 Part 1")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Part_2"}},[e._v("1.4 Part 2")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Part_3"}},[e._v("1.5 Part 3")])])])])]),e._v(" "),a("h2",{attrs:{id:"about-and-why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-and-why"}},[e._v("#")]),e._v(" About and Why")]),e._v(" "),a("p",[e._v("This WIKI entry will follow the progress as a tutorial, of building a FPS from scratch, of course using Blueprints. As needed we will use different plugins available for free, and perhaps at some point need to go over making our own plugin if we need access to C++ because of a BP limitation. Time will tell. But I know right from the start, we will be using the Advance Sessions Plugin mordentral ("),a("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?69901-Advanced-Sessions-Plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advanced Sessions Plugin"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("p",[e._v("While I intend to walk through as slow and precise as I can, after I cover how to add a variable or set up an input in a Macro a few times, I am gonna quit with the baby steps and simply show (or tell) you what you need to do.")]),e._v(" "),a("p",[e._v("I will be doing this project/tutorial as time allows, some days more will get done, some days nothing new will happen. I am also documenting it on my "),a("a",{attrs:{href:"http://www.acclivitygamestudios.com/?cat=52&paged=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog"),a("OutboundLink")],1),e._v(" as I go. I will then condense bits and pieces and add them here as time permits.")]),e._v(" "),a("p",[e._v("Why do this? Because I think there are other people like me that see loads of tutorials out there, that have specific information but don't link it all together. I plan to do my best to link it all together. And if other experienced people want to chime in to make it better, let me know. Certainly there may be things that can be done better or organized better as I go, this is a learning process for me too. Feel free to PM me on the forum.")]),e._v(" "),a("h2",{attrs:{id:"end-goal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-goal"}},[e._v("#")]),e._v(" End Goal")]),e._v(" "),a("p",[e._v("There are many different varieties of FPS out there. I am pretty much shooting for a COD type game. Not uber realistic, but somewhat, but FUN. No character customization, they will be assigned based on primary weapon. You will have different classes you can set your primary, secondary and all that. Aimed purely at multiplayer, as that has always been the most fun for me.")]),e._v(" "),a("p",[e._v("I am not a 3d artist, so unless someone wants to help out with that, when it comes to characters, it may just be "),a("a",{attrs:{href:"https://www.mixamo.com/fuse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fuse"),a("OutboundLink")],1),e._v(" characters.")]),e._v(" "),a("p",[e._v("Nor am I an animator, so I will probably be buying stuff from the "),a("a",{attrs:{href:"https://www.unrealengine.com/marketplace",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marketplace"),a("OutboundLink")],1),e._v(" and using it, you can do the same or make your own.")]),e._v(" "),a("p",[e._v("And no need to name everything the same or make every menu look the same, you are learning, so play with it along the way. Use different naming conventions if you want, whatever, as long as you get the idea of what is happening along the way.")]),e._v(" "),a("h2",{attrs:{id:"part-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1"}},[e._v("#")]),e._v(" Part 1")]),e._v(" "),a("p",[e._v("I combined all the fixes with the tutorial and put it in a PDF. I have now erased all the other stuff from the tutorial because it is still flooding me with questions about stuff that was fixed later in the tutorial. Use the PDF as it takes care of all of those questions.")]),e._v(" "),a("p",[e._v("The first section covers setting up and making our menu system to join, host, set and save and load settings, and set our controls.")]),e._v(" "),a("p",[e._v("The PDF (part 1) can be found "),a("a",{attrs:{href:"https://drive.google.com/file/d/0B4mHdRZLIoRFbkp4ZUpoeS0xRHc/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"part-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2"}},[e._v("#")]),e._v(" Part 2")]),e._v(" "),a("p",[e._v("In the second part we bring in some characters and set up controls and basic animations.")]),e._v(" "),a("p",[e._v("Part 2 can be found "),a("a",{attrs:{href:"https://drive.google.com/file/d/0B4mHdRZLIoRFV2Y2Y25KLTc4QWs/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"part-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-3"}},[e._v("#")]),e._v(" Part 3")]),e._v(" "),a("p",[e._v("Setting up our weapons and classes. In progress.")]),e._v(" "),a("p",[e._v("By: "),a("a",{attrs:{href:"https://forums.unrealengine.com/member.php?28525-arbopa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arbo"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("Rate this Page:")])]),e._v(" "),a("p",[e._v("4.40")]),e._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_half.gif",alt:""}}),e._v(" (5 votes)")]),e._v(" "),a("p",[e._v("Approved for Versions:4.9")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprint_Building_FPS_from_scratch&oldid=17010",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Blueprint_Building_FPS_from_scratch&oldid=17010"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Blueprint",title:"Category:Blueprint"}},[e._v("Blueprint")])])]),e._v(" "),a("p",[e._v("Hidden category:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);