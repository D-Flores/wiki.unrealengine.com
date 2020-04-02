(window.webpackJsonp=window.webpackJsonp||[]).push([[1173],{1077:function(t,e,o){"use strict";o.r(e);var r=o(28),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Unreal Project Git Workflow (Tutorial) - Epic Wiki")]),t._v(" "),o("h1",{attrs:{id:"unreal-project-git-workflow-tutorial"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unreal-project-git-workflow-tutorial"}},[t._v("#")]),t._v(" Unreal Project Git Workflow (Tutorial)")]),t._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#The_Git_Editor_Plugin"}},[t._v("1 The Git Editor Plugin")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Expanding_Git_outside_the_editor"}},[t._v("2 Expanding Git outside the editor")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Connecting_your_local_git_repo_up_to_remote_repo"}},[t._v("3 Connecting your local git repo up to remote repo")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#After_pulling_a_project_down_for_the_first_time"}},[t._v("4 After pulling a project down for the first time")])])]),t._v(" "),o("h2",{attrs:{id:"the-git-editor-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-git-editor-plugin"}},[t._v("#")]),t._v(" The Git Editor Plugin")]),t._v(" "),o("p",[t._v("Start with a project you want to use Git with and review "),o("a",{attrs:{href:"/Git_source_control_(Tutorial)",title:"Git source control (Tutorial)"}},[t._v("Git source control (Tutorial)")]),t._v(". This will help you get Git up and running in the editor. When done with that, come back here.")]),t._v(" "),o("h2",{attrs:{id:"expanding-git-outside-the-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expanding-git-outside-the-editor"}},[t._v("#")]),t._v(" Expanding Git outside the editor")]),t._v(" "),o("p",[t._v("While the editor Git plugin works great for content, that is only one part of what makes up a project. Other things will need to be checked into git, so knowing what should and shouldn't be checked in is very helpful.")]),t._v(" "),o("p",[t._v("Your .gitignore file should be set to ignore the following:")]),t._v(" "),o("p",[t._v("/Binaries")]),t._v(" "),o("p",[t._v("/DerivedDataCache")]),t._v(" "),o("p",[t._v("/Intermediate")]),t._v(" "),o("p",[t._v("/Saved")]),t._v(" "),o("p",[t._v("*.sln")]),t._v(" "),o("p",[t._v("*.sdf")]),t._v(" "),o("p",[t._v("*.suo")]),t._v(" "),o("p",[t._v("The following folders should be committed:")]),t._v(" "),o("p",[t._v("/Content (could be handled by the editor plugin if you have that set up)")]),t._v(" "),o("p",[t._v("/Config")]),t._v(" "),o("p",[t._v("/Build")]),t._v(" "),o("p",[t._v("/Source")]),t._v(" "),o("p",[t._v("Don't forget to check in your .uproject file as well.")]),t._v(" "),o("h2",{attrs:{id:"connecting-your-local-git-repo-up-to-remote-repo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-your-local-git-repo-up-to-remote-repo"}},[t._v("#")]),t._v(" Connecting your local git repo up to remote repo")]),t._v(" "),o("p",[t._v("'git init' only stores files into a local git repository. To store them on a remote service you have to issue the command line command:")]),t._v(" "),o("p",[t._v("git remote add origin "),o("remote",{attrs:{url:""}})],1),t._v(" "),o("p",[t._v("The editor plugin does not handle pushes and pulls, so you will need to use an external tool to keep your project's remote repo up to date.")]),t._v(" "),o("h2",{attrs:{id:"after-pulling-a-project-down-for-the-first-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#after-pulling-a-project-down-for-the-first-time"}},[t._v("#")]),t._v(" After pulling a project down for the first time")]),t._v(" "),o("p",[t._v("Once you have pulled a committed project down from some remote git repository there are couple of things to be aware of.")]),t._v(" "),o("p",[t._v("1. If the project is a C++ project, find the .uproject file in explorer, right click and 'Generate Visual Studio project files'. Until you do this (or create a new code class from the editor) you will not have any visual studio solution to access.")]),t._v(" "),o("p",[t._v("2. Open the Epic Launcher and launch unreal. When you get the project selector click Browse and find your .uproject file.")]),t._v(" "),o("p",[t._v("3. Unreal will then prompt you to rebuild binaries. This will take a few minutes.")]),t._v(" "),o("p",[t._v("Once the binaries are built (and your solution files are generated if it is a C++ project) you should be good to start developing.")]),t._v(" "),o("p",[t._v("Note: While the editor plugin will continue to handle your content for you, if you are changing source files, creating new C++ classes, etc, you will need to have an external tool installed to check those files in. See "),o("a",{attrs:{href:"/Git_source_control_(Tutorial)",title:"Git source control (Tutorial)"}},[t._v("Git source control (Tutorial)")]),t._v(" for links to external tools.")]),t._v(" "),o("p",[t._v('Retrieved from "'),o("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Unreal_Project_Git_Workflow_(Tutorial)&oldid=13842",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Unreal_Project_Git_Workflow_(Tutorial)&oldid=13842"),o("OutboundLink")],1),t._v('"')]),t._v(" "),o("p",[o("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);