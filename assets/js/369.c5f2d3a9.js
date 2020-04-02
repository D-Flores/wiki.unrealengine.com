(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{755:function(e,t,r){"use strict";r.r(t);var a=r(28),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Compiling For FreeBSD - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"compiling-for-freebsd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compiling-for-freebsd"}},[e._v("#")]),e._v(" Compiling For FreeBSD")]),e._v(" "),r("p",[r("strong",[e._v("Rate this Article:")])]),e._v(" "),r("p",[e._v("0.00")]),e._v(" "),r("p",[r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),e._v(" "),r("p",[e._v("Approved for Versions:(please verify)")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Why_cross-compilation"}},[e._v("1 Why cross-compilation")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Getting_the_source"}},[e._v("2 Getting the source")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Getting_the_toolchain_and_dependencies"}},[e._v("3 Getting the toolchain and dependencies")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Using_the_toolchain"}},[e._v("4 Using the toolchain")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Setup"}},[e._v("4.1 Setup")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Packaging"}},[e._v("4.2 Packaging")])])])])]),e._v(" "),r("h2",{attrs:{id:"why-cross-compilation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-cross-compilation"}},[e._v("#")]),e._v(" Why cross-compilation")]),e._v(" "),r("p",[e._v("As required libraries for the editor are not available on FreeBSD, it is not possible to compile or use the editor natively. Cross-compilation for FreeBSD works similarly to cross-compilation for "),r("a",{attrs:{href:"/Compiling_For_Linux",title:"Compiling For Linux"}},[e._v("Linux")]),e._v(". The cross-compilation toolchain is currently targeted for FreeBSD 11.")]),e._v(" "),r("h2",{attrs:{id:"getting-the-source"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-source"}},[e._v("#")]),e._v(" Getting the source")]),e._v(" "),r("p",[e._v("The FreeBSD fork resides in an external repository at "),r("a",{attrs:{href:"https://github.com/UE4-FreeBSD/UE4-FreeBSD",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/UE4-FreeBSD/UE4-FreeBSD"),r("OutboundLink")],1),e._v(". The FreeBSD code is located in the release_freebsd branch. To get the source use the following command.")]),e._v(" "),r("p",[r("code",[e._v("git clone -b release_freebsd [https://github.com/UE4-FreeBSD/UE4-FreeBSD.git](https://github.com/UE4-FreeBSD/UE4-FreeBSD.git)")])]),e._v(" "),r("h2",{attrs:{id:"getting-the-toolchain-and-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-toolchain-and-dependencies"}},[e._v("#")]),e._v(" Getting the toolchain and dependencies")]),e._v(" "),r("p",[e._v("The cross-compilation toolchain for Windows and precompiled dependencies for FreeBSD can be downloaded from the latest -freebsd release on the releases page of the FreeBSD repository at "),r("a",{attrs:{href:"https://github.com/UE4-FreeBSD/UE4-FreeBSD/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/UE4-FreeBSD/UE4-FreeBSD/releases"),r("OutboundLink")],1),e._v(". The dependencies must be extracted to the engine source directory.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/File:Freebsd-download-toolchain.jpg",title:"Downloading toolchain and dependencies"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/7/76/Freebsd-download-toolchain.jpg/800px-Freebsd-download-toolchain.jpg",alt:"Downloading toolchain and dependencies"}})])]),e._v(" "),r("h2",{attrs:{id:"using-the-toolchain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-the-toolchain"}},[e._v("#")]),e._v(" Using the toolchain")]),e._v(" "),r("h3",{attrs:{id:"setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),r("p",[e._v("Add an environment variable (Control Panel->System->Advanced system settings->Advanced->Environment variables) named FREEBSD_MULTIARCH_ROOT. The value should be the path to the toolchain directory downloaded from the releases page. Make sure the new environment variable has been registered to the system / application (MSVC) by rebooting the machine or restarting the app before continuing to the build step.")]),e._v(" "),r("p",[r("a",{attrs:{href:"/File:Freebsd-update-environment.jpg",title:"Setting Windows Environment Variable FREEBSD_MULTIARCH_ROOT"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/c/c5/Freebsd-update-environment.jpg/800px-Freebsd-update-environment.jpg",alt:"Setting Windows Environment Variable FREEBSD_MULTIARCH_ROOT"}})])]),e._v(" "),r("h3",{attrs:{id:"packaging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#packaging"}},[e._v("#")]),e._v(" Packaging")]),e._v(" "),r("p",[e._v("Packaging for FreeBSD follows the same rules as "),r("a",{attrs:{href:"/Compiling_For_Linux",title:"Compiling For Linux"}},[e._v("Packaging for Linux")]),e._v(" except with FreeBSD as the target platform.")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Compiling_For_FreeBSD&oldid=25300",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Compiling_For_FreeBSD&oldid=25300"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);