(window.webpackJsonp=window.webpackJsonp||[]).push([[1060],{1347:function(e,t,r){"use strict";r.r(t);var a=r(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Texture Merging With UCanvasRenderTarget2D - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"texture-merging-with-ucanvasrendertarget2d"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#texture-merging-with-ucanvasrendertarget2d"}},[e._v("#")]),e._v(" Texture Merging With UCanvasRenderTarget2D")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Motivation"}},[e._v("1 Motivation")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#UCanvasRenderTarget2D"}},[e._v("2 UCanvasRenderTarget2D")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Getting_Started"}},[e._v("2.1 Getting Started")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Texture_Merge_Code"}},[e._v("3 Texture Merge Code")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Code"}},[e._v("3.1 Code")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Usage"}},[e._v("3.2 Usage")])])])])]),e._v(" "),r("h2",{attrs:{id:"motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),r("p",[e._v("In multiplayer games, it's quite common to have customizable characters and support changing out different costumes and gear. A common way of doing so is with the "),r("a",{attrs:{href:"/Modular_Pawn",title:"Modular Pawn"}},[e._v("Modular Pawn")]),e._v(" approach. Possibly combined with "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/FSkeletalMeshMerge/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FSkeletalMeshMerge"),r("OutboundLink")],1),e._v(". For certain types of costume pieces though, using modular pawns is somewhat overkill. Gloves or tight fitting pats for example would be simple to create as a texture. Tattoos/war paint/scars also cannot be easily made as meshes. It would be nice if we were able to make textures in layers and then combine them into a single texture. Blending two textures inside a material could be used for this purpose, but that comes with the cost of extra texture samples and blending.")]),e._v(" "),r("h2",{attrs:{id:"ucanvasrendertarget2d"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ucanvasrendertarget2d"}},[e._v("#")]),e._v(" UCanvasRenderTarget2D")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/Engine/UCanvasRenderTarget2D/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCanvasRenderTarget2D"),r("OutboundLink")],1),e._v(" class is an incredibly useful tool for creating textures at runtime. Not much documentation seems to exist for it, but it's incredibly powerful in that "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/Engine/UCanvas/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCanvas"),r("OutboundLink")],1),e._v(" methods can be used to draw into textures. The following section will demonstrate the use of the "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/Engine/UCanvasRenderTarget2D/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCanvasRenderTarget2D"),r("OutboundLink")],1),e._v(" class. If you just want to copy the texture merging code into your project, then skip towards the end.")]),e._v(" "),r("h3",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),r("p",[e._v("First of all you'll need to create an instance of the canvas render target. It's a texture, so it can be used anywhere that a regular texture could.")]),e._v(" "),r("p",[e._v("UCanvasRenderTarget2D* CanvasRenderTarget = Cast<UCanvasRenderTarget2D>(UCanvasRenderTarget2D::CreateCanvasRenderTarget2D(WorldContextObject, UCanvasRenderTarget2D::StaticClass(), Width, Height));")]),e._v(" "),r("p",[e._v("The next step is to write a callback method to hook into the canvas render target's drawing delegate. This method is where you actually do the drawing. You can use any of the drawing methods "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/Engine/UCanvas/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCanvas"),r("OutboundLink")],1),e._v(" provides to create your texture.")]),e._v(" "),r("p",[e._v("void UWhatever::DrawToCanvasRenderTarget(UCanvas* Canvas, int32 Width, int32 Height)\n{\n//Drawing code with UCanvas goes here...\n}")]),e._v(" "),r("p",[e._v("Simply register this with the canvas render target's OnCanvasRenderTargetUpdate delegate:")]),e._v(" "),r("p",[e._v("CanvasRenderTarget->OnCanvasRenderTargetUpdate.AddDynamic(InstanceOfUWhatever, &UWhatever::DrawToCanvasRenderTarget);")]),e._v(" "),r("p",[e._v("How often the canvas render target redraws is up to you. You could call it once to generate a texture and slap it on a material instance, or you could call it every frame to make an animated material. To redraw the texture just call")]),e._v(" "),r("p",[e._v("CanvasRenderTarget ->UpdateResource();")]),e._v(" "),r("p",[e._v("and your DrawToCanvasRenderTarget method will be called when it's ready to redraw the texture.")]),e._v(" "),r("h2",{attrs:{id:"texture-merge-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#texture-merge-code"}},[e._v("#")]),e._v(" Texture Merge Code")]),e._v(" "),r("p",[e._v("This is the full code for the class I'm currently using to do texture merging on my game's characters. It's derived from "),r("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/Engine/UCanvasRenderTarget2D/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UCanvasRenderTarget2D"),r("OutboundLink")],1),e._v(" and is very simple to use.")]),e._v(" "),r("h3",{attrs:{id:"code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[e._v("#")]),e._v(" Code")]),e._v(" "),r("p",[r("strong",[e._v("CompositeTexture.h")])]),e._v(" "),r("p",[e._v('#pragma once\n \n#include "Engine/CanvasRenderTarget2D.h"\n#include "CompositeTexture.generated.h"\n \n///@brief Class for merging multiple textures into one to reduce texture samples and simplify shaders.\n///Layers can be changed at any time, however after changing them UpdateResource must be called to finalize the changes.\nUCLASS(Blueprintable)\nclass UCompositeTexture : public UCanvasRenderTarget2D\n{\nGENERATED_BODY()\n \nUCompositeTexture();\n \nUFUNCTION()\nvoid PerformMerge(UCanvas* Canvas, int32 Width, int32 Height);\n \npublic:\n \n///@brief Texture layers\nUPROPERTY(EditAnywhere, Category = "Layers")\nTArray<UTexture2D*> Layers;\n///@brief Tint applied to texture layers\nUPROPERTY(EditAnywhere, Category = "Layers")\nTArray<FColor> LayerTints;\n \n///@brief Creates a layered texture and updates it based on the passed in layers.\nstatic UCompositeTexture* Create(UObject* WorldContextObject, const TArray<UTexture2D*>& Layers);\n///@brief Creates a layered texture and updates it like the other version. Also applies tint to layers.\nstatic UCompositeTexture* Create(UObject* WorldContextObject, const TArray<UTexture2D*>& Layers, const TArray<FColor>& LayerTints);\n};')]),e._v(" "),r("p",[r("strong",[e._v("CompositeTexture.cpp")])]),e._v(" "),r("p",[e._v('#include "Runtime/Engine/Classes/Engine/Canvas.h"\n#include "CompositeTexture.h"\n \nUCompositeTexture::UCompositeTexture()\n{\nOnCanvasRenderTargetUpdate.AddDynamic(this, &UCompositeTexture::PerformMerge);\n}\n \nvoid UCompositeTexture::PerformMerge(UCanvas* Canvas, int32 Width, int32 Height)\n{\nfor (int32 i = 0; i < Layers.Num(); ++i)\n{\nUTexture* LayerTex = Layers[i];\nif (LayerTex)\n{\nFColor TintColor = FColor::White;\nif (LayerTints.Num() > i)\n{\nTintColor = LayerTints[i];\n}\n \nCanvas->SetDrawColor(TintColor);\nCanvas->DrawTile(LayerTex, 0, 0, Width, Height, 0, 0, Width, Height);\n}\n}\n}\n \nUCompositeTexture* UCompositeTexture::Create(UObject* WorldContextObject, const TArray<UTexture2D*>& Layers)\n{\nTArray<FColor> Colors;\nreturn UCompositeTexture::Create(WorldContextObject, Layers, Colors);\n}\n \nUCompositeTexture* UCompositeTexture::Create(UObject* WorldContextObject, const TArray<UTexture2D*>& Layers, const TArray<FColor>& LayerTints)\n{\nif (Layers.Num() <= 0)\n{\nreturn NULL;\n}\n \nUTexture2D* BaseTexture = Layers[0];\n \nUCompositeTexture* RenderTarget = Cast<UCompositeTexture>(UCanvasRenderTarget2D::CreateCanvasRenderTarget2D(WorldContextObject, UCompositeTexture::StaticClass(), BaseTexture->GetSizeX(), BaseTexture->GetSizeY()));\n \nRenderTarget->Layers.Append(Layers);\nRenderTarget->LayerTints.Append(LayerTints);\n \nRenderTarget->UpdateResource();\nreturn RenderTarget;\n}')]),e._v(" "),r("h3",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("p",[e._v("To use the composite texture class just use one of the static methods to create it and pass in the texture layers to be merged. They will be drawn in the order they appear, so the first texture will be the base, and so on.")]),e._v(" "),r("p",[e._v("UCompositeTexture* MergedTexture = UCompositeTexture::Create(this, MergeTextures);")]),e._v(" "),r("p",[e._v("You can also optionally pass in an array of tints that will be applied to the layers. The indices correspond 1:1 to the array of textures to merge, and white will draw a layer as if no tint was applied.")]),e._v(" "),r("p",[e._v("UCompositeTexture* MergedTexture = UCompositeTexture::Create(this, MergeTextures, MergeTints);")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Texture_Merging_With_UCanvasRenderTarget2D&oldid=14895",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Texture_Merging_With_UCanvasRenderTarget2D&oldid=14895"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Category")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);