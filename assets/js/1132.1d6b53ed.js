(window.webpackJsonp=window.webpackJsonp||[]).push([[1132],{538:function(e,t,a){"use strict";a.r(t);var r=a(28),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("UT4 Weapons Tutorial - Crosshair HUD Indicators - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"ut4-weapons-tutorial-crosshair-hud-indicators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ut4-weapons-tutorial-crosshair-hud-indicators"}},[e._v("#")]),e._v(" UT4 Weapons Tutorial - Crosshair HUD Indicators")]),e._v(" "),a("p",[a("strong",[e._v("Rate this Tutorial:")])]),e._v(" "),a("p",[e._v("0.00")]),e._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),e._v(" "),a("p",[e._v("Approved for Versions:4.6, 4.7")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Unreal_Tournament_Weapons_Tutorial_-_Crosshair_HUD_Indicators"}},[e._v("1 Unreal Tournament Weapons Tutorial - Crosshair HUD Indicators")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Requirements"}},[e._v("1.1 Requirements")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Overview"}},[e._v("1.2 Overview")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Video_Demonstration"}},[e._v("1.2.1 Video Demonstration")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Rocket_Launcher"}},[e._v("1.3 Rocket Launcher")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#UTWeap_RocketLauncher.cpp_DrawWeaponCrosshair_Code"}},[e._v("1.3.1 UTWeap_RocketLauncher.cpp DrawWeaponCrosshair Code")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Draw_Text_on_Crosshair"}},[e._v("1.4 Draw Text on Crosshair")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#UTWeap_ExampleWeapon.h"}},[e._v("1.4.1 UTWeap_ExampleWeapon.h")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#UTWeap_ExampleWeapon.cpp"}},[e._v("1.4.2 UTWeap_ExampleWeapon.cpp")])])])])])])]),e._v(" "),a("h1",{attrs:{id:"unreal-tournament-weapons-tutorial-crosshair-hud-indicators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unreal-tournament-weapons-tutorial-crosshair-hud-indicators"}},[e._v("#")]),e._v(" Unreal Tournament Weapons Tutorial - Crosshair HUD Indicators")]),e._v(" "),a("p",[e._v("This tutorial will show you how to create some simple crosshair HUD indicators in the Unreal Tournament project, using C++.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("Some existing C++ & Unreal Engine knowledge is needed.")]),e._v(" "),a("ul",[a("li",[e._v("Engine version: 4.6+")]),e._v(" "),a("li",[e._v("Skill level: Beginner - Intermediate")]),e._v(" "),a("li",[e._v("Unreal Tournament Jan 2015 or Later")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Creating a new weapon in Unreal Tournament doesn't have to be difficult. But if you are introducing functionality that differs significantly from the standard Unreal Tournament arsenal of weapons, one of the challenges you'll face is communicating how your weapon functions to players who have never touched the weapon before. Unfortunately, players aren't likely to stop in the middle of their deathmatch to read a manual!")]),e._v(" "),a("p",[e._v("One simple way that you can help to communicate functionality of your weapon is to use the crosshair to display that information. This page is intended to give you a couple of basic templates for ways that you can override the weapon crosshair to display additional information. In this tutorial I will be providing code examples for ways that the crosshair can be used to communicate information to the player about weapon state.")]),e._v(" "),a("h3",{attrs:{id:"video-demonstration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-demonstration"}},[e._v("#")]),e._v(" Video Demonstration")]),e._v(" "),a("h2",{attrs:{id:"rocket-launcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocket-launcher"}},[e._v("#")]),e._v(" Rocket Launcher")]),e._v(" "),a("p",[e._v("The prototypical example of using the crosshair to display additional information about the state of your weapon is the standard Unreal Tournament Rocket Launcher. The Rocket Launcher incorporates several features to help communicate weapon state to the user. So how are these things accomplished?")]),e._v(" "),a("h3",{attrs:{id:"utweap-rocketlauncher-cpp-drawweaponcrosshair-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utweap-rocketlauncher-cpp-drawweaponcrosshair-code"}},[e._v("#")]),e._v(" UTWeap_RocketLauncher.cpp DrawWeaponCrosshair Code")]),e._v(" "),a("p",[e._v("void AUTWeap_RocketLauncher::DrawWeaponCrosshair_Implementation(UUTHUDWidget* WeaponHudWidget, float RenderDelta)\n{\n//Draw the Rocket Firemode Text\nif (bDrawRocketModeString && RocketModeFont != NULL)\n{\nFText RocketModeText = RocketFireModes[CurrentRocketFireMode].DisplayString;\nfloat PosY = WeaponHudWidget->GetRenderScale() * UnderReticlePadding;\n \nWeaponHudWidget->DrawText(RocketModeText, 0.0f, PosY, RocketModeFont, FLinearColor::Black, 1.0f, 1.0f, FLinearColor::White, ETextHorzPos::Center, ETextVertPos::Top);\n}\n \n//Draw the crosshair\nif (LoadCrosshairTextures.IsValidIndex(NumLoadedRockets) && LoadCrosshairTextures[NumLoadedRockets] != NULL)\n{\nUTexture2D* Tex = LoadCrosshairTextures[NumLoadedRockets];\nfloat W = Tex->GetSurfaceWidth();\nfloat H = Tex->GetSurfaceHeight();\nfloat Scale = WeaponHudWidget->GetRenderScale() * CrosshairScale * GetCrosshairScale(WeaponHudWidget->UTHUDOwner);\n \nfloat DegreesPerRocket = 360.0f / MaxLoadedRockets;\nfloat CrosshairRot = 0;\n \nif (NumLoadedRockets < MaxLoadedRockets)\n{\nfloat DeltaTime = GetWorld()->TimeSeconds - LastLoadTime;\nfloat Alpha = FMath::Clamp(DeltaTime / CrosshairRotationTime, 0.0f, 1.0f);\nCrosshairRot = FMath::Lerp(0.f, DegreesPerRocket, Alpha);\n}\n \nWeaponHudWidget->DrawTexture(Tex, 0, 0, W * Scale, H * Scale, 0.0, 0.0, W, H, 1.0, GetCrosshairColor(WeaponHudWidget), FVector2D(0.5f, 0.5f), CrosshairRot);\nAUTPlayerState* PS;\nif (ShouldDrawFFIndicator(WeaponHudWidget->UTHUDOwner->PlayerOwner, PS))\n{\nWeaponHudWidget->DrawTexture(WeaponHudWidget->UTHUDOwner->DefaultCrosshairTex, 0, 0, W * Scale * 0.75f, H * Scale * 0.75f, 0.0, 0.0, 16, 16, 1.0, FLinearColor::Green, FVector2D(0.5f, 0.5f), 45.0f);\n}\nelse\n{\nUpdateCrosshairTarget(PS, WeaponHudWidget, RenderDelta);\n}\n}\n \n//Draw the locked on crosshair\nif (HasLockedTarget())\n{\nUTexture2D* Tex = LockCrosshairTexture;\nfloat W = Tex->GetSurfaceWidth();\nfloat H = Tex->GetSurfaceHeight();\nfloat Scale = WeaponHudWidget->GetRenderScale() * GetCrosshairScale(WeaponHudWidget->UTHUDOwner);\n \nFVector ScreenTarget = WeaponHudWidget->GetCanvas()->Project(LockedTarget->GetActorLocation());\nScreenTarget.X -= WeaponHudWidget->GetCanvas()->SizeX*0.5f;\nScreenTarget.Y -= WeaponHudWidget->GetCanvas()->SizeY*0.5f;\n \nfloat CrosshairRot = GetWorld()->TimeSeconds * 90.0f;\n \nWeaponHudWidget->DrawTexture(Tex, ScreenTarget.X, ScreenTarget.Y, W * Scale, H * Scale, 0.0, 0.0, W, H, 1.0, FLinearColor::Red, FVector2D(0.5f, 0.5f), CrosshairRot);\n}\n}")]),e._v(" "),a("p",[e._v("As we can see here, the Rocket Launcher crosshair code is being used to handle several distinct features of the weapon:")]),e._v(" "),a("ul",[a("li",[e._v("When the Rocket Launcher is utilizing one of its toggled alternate firemodes, the appropriate text string is drawn below the crosshair.")]),e._v(" "),a("li",[e._v("Then the handling of the actual crosshair is drawn. The first step of this is that the texture drawn for the crosshair is chosen based on the number of loaded rockets. The second step is to rotate the crosshair to its next position as further rockets are loaded")]),e._v(" "),a("li",[e._v("Lastly, the crosshair is actually used to draw an indicator on the screen when the Rocket Launcher is locked on to a given target.")])]),e._v(" "),a("h2",{attrs:{id:"draw-text-on-crosshair"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draw-text-on-crosshair"}},[e._v("#")]),e._v(" Draw Text on Crosshair")]),e._v(" "),a("p",[e._v('The first and simplest example is using the crosshair to draw text on the screen. The example I will be covering here uses the crosshair to display both dynamic text and static text in order to achieve a readout of "X / 100." This can be easily adapted to display whatever textual or numerical information is needed for your purpose. Lets begin with the header file.')]),e._v(" "),a("h3",{attrs:{id:"utweap-exampleweapon-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utweap-exampleweapon-h"}},[e._v("#")]),e._v(" UTWeap_ExampleWeapon.h")]),e._v(" "),a("p",[e._v('#pragma once\n \n#include "UTInventory.h"\n#include "UTWeapon.h"\n#include "UTWeap_ExampleWeapon.generated.h"\n \n \n/**\n*\n*/\nUCLASS()\nclass UNREALTOURNAMENT_API AUTWeap_ExampleWeapon: public AUTWeapon\n{\nGENERATED_BODY()\n \npublic:\n \nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category = ExampleWeapon)\nUFont* ExampleDisplayFont;\n \nvoid DrawWeaponCrosshair_Implementation(UUTHUDWidget* WeaponHudWidget, float RenderDelta) override;\n \n};')]),e._v(" "),a("p",[e._v("As we can see here, we have a very minimal number of things we need to add to our weapon header in order to display some text. Lets move on to the .cpp file.")]),e._v(" "),a("h3",{attrs:{id:"utweap-exampleweapon-cpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utweap-exampleweapon-cpp"}},[e._v("#")]),e._v(" UTWeap_ExampleWeapon.cpp")]),e._v(" "),a("p",[e._v('#include "UnrealTournament.h"\n#include "UTWeap_ExampleWeapon.h"\n \nvoid AUTWeap_ExampleWeapon::DrawWeaponCrosshair_Implementation(UUTHUDWidget* WeaponHudWidget, float RenderDelta)\n{\n// DisplayCount is the string that we will ultimately be displaying. This should be used for something meaningful to your weapon!\nFString DisplayCount = FString::FromInt( FMath::RandRange(0, 100) );\n \n// We concatenate to DisplayCount the string " / " to use as a divider\nDisplayCount += FString(TEXT(" / "));\n \n// Now we concatenate to DisplayCount the string representation of 100.\nDisplayCount += FString::FromInt(100);\n \n// PosY is a variable declared to determine the position\nfloat PosY = WeaponHudWidget->GetRenderScale() * 50;\n \n// We use the UUTHUDWidget::DrawText function to draw our string onto the weapon HUD widget\nWeaponHudWidget->DrawText(FText::FromString(DisplayCount), 0.0f, PosY, ExampleDisplayFont, FLinearColor::Black, 1.0f, 1.0f, FLinearColor::White, ETextHorzPos::Center, ETextVertPos::Top);\n \nSuper::DrawWeaponCrosshair_Implementation(WeaponHudWidget, RenderDelta);\n}')]),e._v(" "),a("p",[e._v("As we can see here, this code is relatively straightforward. We declare a variable of type FString, converting an integer value (presumably something meaningful, but in our example we are merely generating a random number between 0 and 100) to FString type. To this dynamic value, we concatenate some additional static values that give us information on the range of values we can expect. Once we have our string, then we use the UUTHUDWidget built in DrawText function to display our string. This last step is the most involved and if you wish to truly understand what is happening I recommend reviewing the implementation of DrawText.")]),e._v(" "),a("p",[a("strong",[e._v("Reminder")]),e._v(": In order to actually see any text when wielding your weapon, you need to have set the font that is used! This should be done in the blueprint of your weapon class to avoid hard-coding references to assets like the font.")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=UT4_Weapons_Tutorial_-_Crosshair_HUD_Indicators&oldid=12407",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=UT4_Weapons_Tutorial_-_Crosshair_HUD_Indicators&oldid=12407"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Unreal_Tournament",title:"Category:Unreal Tournament"}},[e._v("Unreal Tournament")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:UT_Content_Creation",title:"Category:UT Content Creation"}},[e._v("UT Content Creation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);