(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{370:function(t,e,n){"use strict";n.r(e);var o=n(28),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Slate, Edit Text Widget, Custom Rendering & Any TrueTypeFont - Epic Wiki")]),t._v(" "),n("h1",{attrs:{id:"slate-edit-text-widget-custom-rendering-any-truetypefont"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slate-edit-text-widget-custom-rendering-any-truetypefont"}},[t._v("#")]),t._v(" Slate, Edit Text Widget, Custom Rendering & Any TrueTypeFont")]),t._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Display_Edit_Text_Contents_Any_Way_You_Want"}},[t._v("2 Display Edit Text Contents Any Way You Want")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Use_Any_True_Type_Font"}},[t._v("3 Use Any True Type Font")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#YourHUD"}},[t._v("4 YourHUD")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#.H"}},[t._v("4.1 .H")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#.CPP"}},[t._v("4.2 .CPP")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#SVictoryEditText"}},[t._v("5 SVictoryEditText")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#.H_2"}},[t._v("5.1 .H")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#.CPP_2"}},[t._v("5.2 .CPP")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Code_Excerpts"}},[t._v("6 Code Excerpts")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Copy_Paste_to_OS_Clipboard"}},[t._v("6.1 Copy Paste to OS Clipboard")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Toggling_User_Input_to.2Ffrom_Victory_Edit_Text"}},[t._v("6.2 Toggling User Input to/from Victory Edit Text")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Capturing_User_Input"}},[t._v("6.3 Capturing User Input")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Key_Presses"}},[t._v("6.3.1 Key Presses")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Mouse_Input"}},[t._v("6.3.2 Mouse Input")])])])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Related_Tutorials"}},[t._v("7 Related Tutorials")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#Conclusion"}},[t._v("8 Conclusion")])])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[n("em",[t._v("Code Author:")]),t._v(" "),n("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),n("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),n("p",[t._v("In this tutorial I am showing you how to make an Edit Text widget so you can allow users to enter any kind of input while in-game!")]),t._v(" "),n("p",[n("strong",[t._v("Special features of my code:")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Set the default font of the Edit Text to use any True Type Font that you prefer!")])]),t._v(" "),n("li",[n("p",[t._v("Easy function to change what True Type Font is being used, during runtime.")])]),t._v(" "),n("li",[n("p",[t._v("Completely customize the actual display of the text that the user is entering, using any alternative text rendering setup that you prefer.")])]),t._v(" "),n("li",[n("p",[t._v("Easy way to show / hide the Edit Text caret (the blinking vertical bar)")])]),t._v(" "),n("li",[n("p",[t._v("Copy / Paste text to and from the OS clipboard!")])])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:Slate1Ingame.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/5/5f/Slate1Ingame.jpg/800px-Slate1Ingame.jpg",alt:"Slate1Ingame.jpg"}})])]),t._v(" "),n("h2",{attrs:{id:"display-edit-text-contents-any-way-you-want"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#display-edit-text-contents-any-way-you-want"}},[t._v("#")]),t._v(" Display Edit Text Contents Any Way You Want")]),t._v(" "),n("p",[t._v("In my game I did not want to show the "),n("em",[t._v("Edit Text caret")]),t._v(" or the "),n("em",[t._v("actual text")]),t._v(", because you cant use shadowing currently with SEditableText.")]),t._v(" "),n("p",[t._v("I found a way to "),n("em",[t._v("completely hide the SEditableText widget")]),t._v(" and "),n("strong",[t._v("pass the contents to a different display widget")]),t._v(" that had the visual rendering options that I wanted.")]),t._v(" "),n("p",[t._v("You can use the same logic I am using in this example to display the SEditableText contents in any way that you like!")]),t._v(" "),n("p",[t._v("I have comments in the code for how you can actually enable the Edit Text caret, and display the Edit Text.")]),t._v(" "),n("h2",{attrs:{id:"use-any-true-type-font"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-any-true-type-font"}},[t._v("#")]),t._v(" Use Any True Type Font")]),t._v(" "),n("p",[t._v("You can use any True Type Font you want with my Edit Text Code !")]),t._v(" "),n("p",[t._v("I set up the HUD class so that you can use your HUD BP to enter a path for .ttf files!")]),t._v(" "),n("p",[t._v("Obtain .ttf files from windows/fonts by "),n("strong",[t._v("copying")]),t._v(" them 😃")]),t._v(" "),n("p",[t._v("Move them into your Content directory, into some subfolder structure, and write out that folder structure in the HUD BP!")]),t._v(" "),n("p",[t._v("I also wrote a function for you to easily change the font of the Edit Text during runtime, using a new .ttf!")]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:Slate1Editor.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/6/6f/Slate1Editor.jpg/600px-Slate1Editor.jpg",alt:"Slate1Editor.jpg"}})])]),t._v(" "),n("p",[n("a",{attrs:{href:"/File:Slate1HDD.jpg"}},[n("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/d7/Slate1HDD.jpg/600px-Slate1HDD.jpg",alt:"Slate1HDD.jpg"}})])]),t._v(" "),n("h2",{attrs:{id:"yourhud"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yourhud"}},[t._v("#")]),t._v(" YourHUD")]),t._v(" "),n("h3",{attrs:{id:"h"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[t._v("#")]),t._v(" .H")]),t._v(" "),n("p",[t._v('// Copyright 1998-2013 Epic Games, Inc. All Rights Reserved.\n \n#pragma once\n \n#include "SVictoryEditText.h"\n \n#include "YourHUD.generated.h"\n \n \n \nclass AYourHUD : public AHUD\n{\nGENERATED_BODY()\n \n/** Default True Type Font. This should be the path off of Content that leads to your chosen TTF. Copy paste .ttf files from Windows/Fonts. Path should not include "Content".  Ex: "TTF/comicbd.ttf" */\nUPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category=VictoryChat)\nFString ChatFontTTF;\n \nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category=VictoryChat)\nint32 ChatInputFontSize;\n \n/** Set a new .ttf for chat text! This should be the path off of Content that leads to your chosen TTF. Copy paste .ttf files from Windows/Fonts. Path should not include "Content".  Ex: "TTF/comicbd.ttf" */\nUFUNCTION(BlueprintCallable, Category=VictoryChat)\nvoid SetChatFont(FString NewFontPath);\n \n//Slate Core\npublic:\n \nTSharedPtr<class SVictoryEditText> VictoryChat;\n \nvoid JoyInit_VictoryChat();\n \n//AHUD\npublic:\n \n//Draw HUD\nvirtual void DrawHUD() OVERRIDE;\n};')]),t._v(" "),n("h3",{attrs:{id:"cpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cpp"}},[t._v("#")]),t._v(" .CPP")]),t._v(" "),n("p",[t._v('//VictoryHUD extension by Rama\n \n#include "VictoryGame.h"\n \n#define VICTORY_ALLOW_TICK if(!GEngine) return; if(!GEngine->GameViewport) return;\n \nAYourHUD::AYourHUD(const class FObjectInitializer& PCIP) : Super(PCIP)\n{\t\nChatFontTTF = "TTF/comicbd.ttf";\nChatInputFontSize = 24;\n \n}\n \n//~~~~~~~~~~~~~~\n// Joy Init Victory Chat\n//~~~~~~~~~~~~~~\n \nvoid AYourHUD::JoyInit_VictoryChat()\n{\nif ( ! VictoryChat.IsValid() ) return;\n//~~~~~~~~~~~~~~~~~~~\n \n//Visible\nVictoryChat->SetShowChat(true);\n \n//Cursor\t\t\t\t\t\t//No cursor!\n//VictoryChat->SetCursor(EMouseCursor::None);//EMouseCursor::TextEditBeam);\n \n//Font\nSetChatFont(ChatFontTTF);\n \n//Capture User Input immediately upon Creation\nVictoryChat->SetSlateUIMode(true);\n}\n \n//~~~~~~~~~~~~\n//  Set Font\n//~~~~~~~~~~~~\nvoid AYourHUD::SetChatFont(FString NewFontPath)\n{\nif ( ! VictoryChat.IsValid() ) \t\t\treturn;\nif( ! VictoryChat->ChatDisplay.IsValid()) \treturn;\nif( ! VictoryChat->ChatInput.IsValid()) \treturn;\n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//Get Font from TTF Path\nconst FString ChatInputFont = FString( FPaths::GameContentDir() / *NewFontPath );\n \n//Create Font Info\nFSlateFontInfo NewFontInfo(ChatInputFont,ChatInputFontSize);\n \n//Show / Hide Edit Caret\nFSlateFontInfo CaretSize = NewFontInfo;\nCaretSize.Size = 0;\t\t//set to 1 to show caret.\n \n//Set !\nVictoryChat->ChatInput->SetFont(CaretSize); //invisible input, just Caret\nVictoryChat->ChatDisplay->SetFont(NewFontInfo);\t\t//Display Text\n}\n \n//~~~~~~~~~~~~\n// Draw HUD\n//~~~~~~~~~~~~\nvoid AYourHUD::DrawHUD()\n{\nSuper::DrawHUD();\n//~~~~~~~~~\n \n//~~~~~~~~~~~~~\nVICTORY_ALLOW_TICK\n//~~~~~~~~~~~~~\n \n \n \n//~~~ Recreate Chat As Needed ~~~\n// Thank you Wraiyth for this code structure!\nif ( !VictoryChat.IsValid() )\n{\nSAssignNew(VictoryChat,SVictoryEditText)\n.JoyHUD(this);\n \nif ( VictoryChat.IsValid() )\n{\nGEngine->GameViewport->AddViewportWidgetContent(\nSNew(SWeakWidget)\n.PossiblyNullContent(VictoryChat.ToSharedRef())\n);\n \n//~~~ Joy Init ~~~\nJoyInit_VictoryChat();\n}\n}\n}')]),t._v(" "),n("h2",{attrs:{id:"svictoryedittext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#svictoryedittext"}},[t._v("#")]),t._v(" SVictoryEditText")]),t._v(" "),n("h3",{attrs:{id:"h-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#h-2"}},[t._v("#")]),t._v(" .H")]),t._v(" "),n("p",[t._v('#pragma once\n \n//Slate\n#include "Slate.h"\n \n//~~~ Forward Declarations ~~~\nclass AYourHUD;\n \n \n \nclass SVictoryEditText : public SCompoundWidget\n{\n//Slate Init\npublic:\nSLATE_BEGIN_ARGS(SVictoryEditText) : _JoyHUD() //, _bKeepVisible(false)\n{}\n \nSLATE_ARGUMENT(TWeakObjectPtr<AYourHUD>, JoyHUD)\n \nSLATE_END_ARGS()\n \n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//~~~~~~~~\n//  HUD\n//~~~~~~~~\npublic:\n//HUD that owns this\nTWeakObjectPtr<class AYourHUD> JoyHUD;\n \n//~~~~~~~~\n//Components\n//~~~~~~~~\npublic:\n//The edit text widget.\nTSharedPtr< SEditableText > ChatInput;\n \n//How the Edit Text is actually displayed\nTSharedPtr< STextBlock > ChatDisplay;\n \n//~~~~~~~~~~~~~~~~~\n//  Chat Visibility\n//~~~~~~~~~~~~~~~~~\npublic:\nvoid SetShowChat(bool MakeVisible);\n \n \n//~~~~~~~~~~~~~~~~~~~~~\n//  Copy/Paste Text\n//~~~~~~~~~~~~~~~~~~~~~\npublic:\nFORCEINLINE void CopyToClipboard()\n{\nif(ChatInput.IsValid())\n{\nChatInput->CopySelectedTextToClipboard();\n}\n}\nFORCEINLINE void PasteFromClipboard()\n{\nif(ChatInput.IsValid())\n{\nChatInput->PasteTextFromClipboard() ;\n}\n}\n \n//~~~~~~~~~~~~~~~~~\n// Chat Text Entry\n//~~~~~~~~~~~~~~~~~\npublic:\n \n//Set Slate UI Mode, Capture User Keyboard Input\nvoid SetSlateUIMode(bool EnterSlateUI);\n \n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//Delegate called when the text is commited.\n \n// @param\tInText\t\t\tThe committed text.\n// @Param\tInCommitInfo\tThe type of commit (eg. Pressed enter, changed focus)\nvoid OnChatTextCommitted(const FText& InText, ETextCommit::Type InCommitInfo);\n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n//\t     Text Changed Delegate!\nvoid OnChatTextChanged(const FText& InText);\n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//~~~~~~~~~~~~~~~~~\n//  Base Input\n//~~~~~~~~~~~~~~~~~\n//SWidget.h\npublic:\n//~~~ Keyboard Focused ~~~\nvirtual FReply OnKeyboardFocusReceived( const FGeometry& MyGeometry, const FKeyboardFocusEvent& InKeyboardFocusEvent ) OVERRIDE;\n \n//~~~ Key Down  ~~~\nvirtual FReply OnKeyDown( const FGeometry& MyGeometry, const FKeyboardEvent& InKeyboardEvent ) OVERRIDE;\n \n//~~~ Mouse Down  ~~~\nvirtual FReply OnMouseButtonDown( const FGeometry& MyGeometry, const FPointerEvent& MouseEvent ) OVERRIDE;\n \n \n \n//Slate Base\npublic:\n \n//Constructor\nvoid Construct(const FArguments& InArgs);\n \n//As Widget\nTSharedRef<class SWidget> AsWidget();\n \n//~~~ Tick ~~~\nvoid Tick(const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime);\n \n};')]),t._v(" "),n("h3",{attrs:{id:"cpp-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cpp-2"}},[t._v("#")]),t._v(" .CPP")]),t._v(" "),n("p",[t._v('#include "VictoryGame.h"\n#include "SVictoryEditText.h"\n \nvoid SVictoryEditText::Construct(const FArguments& InArgs)\n{\nJoyHUD = InArgs._JoyHUD;\n \nChildSlot\n.VAlign(VAlign_Fill)\n.HAlign(HAlign_Fill)\n//~~~~~~~~~~~~~~~~~~~~\n//  Being Slate Construct Block\n[\nSNew(SOverlay)\n+ SOverlay::Slot()\n.VAlign(VAlign_Bottom)\n.HAlign(HAlign_Left)\n[\n \n//~~~ Chat Input ~~~\nSAssignNew(ChatInput, SEditableText)\n \n//Function to call when text is entered\n.OnTextCommitted(this, &SVictoryEditText::OnChatTextCommitted)\n \n \n//Function to call when text is changed\n.OnTextChanged(this, &SVictoryEditText::OnChatTextChanged)\n \n \n//Stay and possibly enter multiple lines\n.ClearKeyboardFocusOnCommit(false)\n \n//Optional\n//.MinDesiredWidth(500)\n \n.Text(FText::FromString("Victory!"))\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 24))\n.ColorAndOpacity(FLinearColor(1,0,1,0))    //<~~~\n \n//Chat input itself is hidden, display used instead\n//\t\tfor the shadowing, and as a demonstration\n//\t\tof accessing the input text and displaying it elsewhere\n//\t\t\tSee Tick Function\n \n]\n+ SOverlay::Slot()\n.VAlign(VAlign_Bottom)\n.HAlign(HAlign_Left)\n[\nSAssignNew(ChatDisplay, STextBlock)\n.Text(FText::FromString("Victory!!!!"))\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 24))\n.ColorAndOpacity(FLinearColor(1,0,1,1))\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(-2, 2))\n]\n]; //End Slate Construct Block\n//~~~~~~~~~~~~~~~~~~~~~~~~\n \n}\n \n//~~~~~~~~~~\n//  Base\n//~~~~~~~~~~\nTSharedRef<SWidget> SVictoryEditText::AsWidget()\n{\nreturn SharedThis(this);\n}\n \n//~~~~~~~~~~~~~\n// Base Input\n//~~~~~~~~~~~~~\n//Keyboard Focussed\nFReply SVictoryEditText::OnKeyboardFocusReceived( const FGeometry& MyGeometry, const FKeyboardFocusEvent& InKeyboardFocusEvent )\n{\n//Lock Mouse To Edit\nreturn FReply::Handled().ReleaseMouseCapture().ReleaseJoystickCapture().LockMouseToWidget( SharedThis( this ) );\n}\n \n//~~~ Key Down ~~~\nFReply SVictoryEditText::OnKeyDown( const FGeometry& MyGeometry, const FKeyboardEvent& InKeyboardEvent )\n{\n//Get Key Pressed\nconst FKey VKey = InKeyboardEvent.GetKey();\n \n//ESC Pressed\nif(VKey == EKeys::Escape)\n{\n//Exit!\nSetSlateUIMode(false);\nreturn FReply::Handled();\n}\n \nif(InKeyboardEvent.IsControlDown())\n{\nif( ! ChatInput.IsValid()) return FReply::Handled();\n//~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//CTRL + V = Paste\nif(VKey == EKeys::V)\n{\nPasteFromClipboard();\n}\n//CTRL + C = Copy\nif(VKey == EKeys::C)\n{\n//Copy All\nFWindowsPlatformMisc::ClipboardCopy(*ChatInput->GetText().ToString());\n \n//or you can use the highlighting of text method\n//CopyToClipboard();\n}\n}\nreturn FReply::Handled();\n}\n \n//~~~ Mouse Down  ~~~\nFReply SVictoryEditText::OnMouseButtonDown( const FGeometry& MyGeometry, const FPointerEvent& MouseEvent )\n{\n//Get Key Pressed\nconst FKey VKey = MouseEvent.GetEffectingButton();\n \n//LMB Pressed\nif(VKey == EKeys::LeftMouseButton)\n{\n//Exit!\nSetSlateUIMode(false);\nreturn FReply::Handled();\n}\n \nreturn FReply::Handled();\n}\n \n//~~~~~~~~~~~~~~~~\n//   Show Chat\n//~~~~~~~~~~~~~~~~\nvoid SVictoryEditText::SetShowChat(bool MakeVisible)\n{\nTAttribute<EVisibility> NewVisibility;\nif(MakeVisible)\n{\nNewVisibility = EVisibility::Visible;\nSetVisibility(\t\t\t\tNewVisibility);\nChatInput->SetVisibility(\t\tNewVisibility);\nChatDisplay->SetVisibility(\t\tNewVisibility);\n}\nelse\n{\nNewVisibility = EVisibility::Hidden;\nSetVisibility(\t\t\t\tNewVisibility);\nChatInput->SetVisibility(\t\tNewVisibility);\nChatDisplay->SetVisibility(\t\tNewVisibility);\n}\n}\n \n//~~~~~~~~~~~~~~~~\n// Chat Text Entered\n//~~~~~~~~~~~~~~~~\nvoid SVictoryEditText::OnChatTextCommitted(const FText& InText, ETextCommit::Type InCommitInfo)\n{\nif (InCommitInfo == ETextCommit::OnEnter)\n{\nif ( !InText.IsEmpty() )\n{\nif(ChatInput.IsValid())\n{\n// Add the string so we see it too (we will ignore our own strings in the receive function)\n//AddChatLine( InText.ToString() );\n \n// Clear the text\nChatInput->SetText(FText());\n}\n}\n \n//Exit properly! Hides mouse and restores Viewport control\nSetSlateUIMode(false);\n}\n}\n//~~~~~~~~~~~~~~~~\n// Chat Text Changed\n//~~~~~~~~~~~~~~~~\nvoid SVictoryEditText::OnChatTextChanged(const FText& InText)\n{\nif( ! ChatDisplay.IsValid()) \treturn;\nif( ! ChatInput.IsValid()) \t\treturn;\n \n//~~~ Update The Chat Display! ~~~\nChatDisplay->SetText(ChatInput->GetText().ToString() + FString(" "));\n \n//single space to fix letter clipping, not sure why its clipping.\n \n}\n//~~~~~~~~~~~~~~~~\n//  Slate UI Mode\n//~~~~~~~~~~~~~~~~\nvoid SVictoryEditText::SetSlateUIMode(bool EnterSlateUI)\n{\nif(EnterSlateUI)\n{\n// Enter UI mode\nFSlateApplication::Get().SetKeyboardFocus( SharedThis(this) );\n \nif (ChatInput.IsValid())\n{\nFWidgetPath WidgetToFocusPath;\n \nbool bFoundPath = FSlateApplication::Get().FindPathToWidget(FSlateApplication::Get().GetInteractiveTopLevelWindows(), ChatInput.ToSharedRef(), WidgetToFocusPath);\nif (bFoundPath && WidgetToFocusPath.IsValid())\n{\nFSlateApplication::Get().SetKeyboardFocus(WidgetToFocusPath, EKeyboardFocusCause::SetDirectly);\n}\n}\n}\nelse\n{\n// Exit UI mode\nFSlateApplication::Get().SetFocusToGameViewport();\n}\n}\n//~~~~~~~~~~~~~~~~\n//\tTick\n//~~~~~~~~~~~~~~~~\nvoid SVictoryEditText::Tick(const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime)\n{\n// Always tick the super.\nSCompoundWidget::Tick(AllottedGeometry, InCurrentTime, InDeltaTime);\n//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n \n}')]),t._v(" "),n("h2",{attrs:{id:"code-excerpts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#code-excerpts"}},[t._v("#")]),t._v(" Code Excerpts")]),t._v(" "),n("h3",{attrs:{id:"copy-paste-to-os-clipboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copy-paste-to-os-clipboard"}},[t._v("#")]),t._v(" Copy Paste to OS Clipboard")]),t._v(" "),n("p",[t._v("//Ctrl is Down\nif(InKeyboardEvent.IsControlDown())\n{\nif( ! ChatInput.IsValid()) return FReply::Handled();\n//~~~~~~~~~~~~~~~~~~~~~~~~~~\n \n//CTRL + V = Paste\nif(VKey == EKeys::V)\n{\nPasteFromClipboard();\n}\n//CTRL + C = Copy\nif(VKey == EKeys::C)\n{\n//Copy All\nFWindowsPlatformMisc::ClipboardCopy(*ChatInput->GetText().ToString());\n \n//or you can use the highlighting of text method\n//CopyToClipboard();\n}\n}")]),t._v(" "),n("h3",{attrs:{id:"toggling-user-input-to-from-victory-edit-text"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#toggling-user-input-to-from-victory-edit-text"}},[t._v("#")]),t._v(" Toggling User Input to/from Victory Edit Text")]),t._v(" "),n("p",[t._v("void SVictoryEditText::SetSlateUIMode(bool EnterSlateUI)\n{\nif(EnterSlateUI)\n{\n// Enter UI mode\nFSlateApplication::Get().SetKeyboardFocus( SharedThis(this) );\n \nif (ChatInput.IsValid())\n{\nFWidgetPath WidgetToFocusPath;\n \nbool bFoundPath = FSlateApplication::Get().FindPathToWidget(ChatInput.ToSharedRef(), WidgetToFocusPath);\nif (bFoundPath && WidgetToFocusPath.IsValid())\n{\nFSlateApplication::Get().SetKeyboardFocus(WidgetToFocusPath, EKeyboardFocusCause::SetDirectly);\n}\n}\n}\nelse\n{\n// Exit UI mode\nFSlateApplication::Get().SetFocusToGameViewport();\n}\n}")]),t._v(" "),n("h3",{attrs:{id:"capturing-user-input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capturing-user-input"}},[t._v("#")]),t._v(" Capturing User Input")]),t._v(" "),n("h4",{attrs:{id:"key-presses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-presses"}},[t._v("#")]),t._v(" Key Presses")]),t._v(" "),n("p",[t._v("I check if the user presses the ESC key to cancel out of Edit Text Mode, restoring input to the main Game Viewport")]),t._v(" "),n("p",[t._v("FReply SVictoryEditText::OnKeyDown( const FGeometry& MyGeometry, const FKeyboardEvent& InKeyboardEvent )\n{\n//Get Key Pressed\nconst FKey VKey = InKeyboardEvent.GetKey();\n \n//ESC Pressed\nif(VKey == EKeys::Escape)\n{\n//Exit!\nSetSlateUIMode(false);\nreturn FReply::Handled();\n}\n \nreturn FReply::Handled();\n}")]),t._v(" "),n("h4",{attrs:{id:"mouse-input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mouse-input"}},[t._v("#")]),t._v(" Mouse Input")]),t._v(" "),n("p",[t._v("For my game I want the Edit Text Mode to end if the user presses LMB.")]),t._v(" "),n("p",[t._v("You can capture other mouse buttons and movement as well!")]),t._v(" "),n("p",[t._v("FReply SVictoryEditText::OnMouseButtonDown( const FGeometry& MyGeometry, const FPointerEvent& MouseEvent )\n{\n//Get Key Pressed\nconst FKey VKey = MouseEvent.GetEffectingButton();\n \n//LMB Pressed\nif(VKey == EKeys::LeftMouseButton)\n{\n//Exit!\nSetSlateUIMode(false);\nreturn FReply::Handled();\n}\n \nreturn FReply::Handled();\n}")]),t._v(" "),n("h2",{attrs:{id:"related-tutorials"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#related-tutorials"}},[t._v("#")]),t._v(" Related Tutorials")]),t._v(" "),n("p",[n("a",{attrs:{href:"/Slate,_Hello",title:"Slate, Hello"}},[t._v("Slate,_Hello")]),t._v(" by Bleakwise!")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?60-slate-tutorials-from-Wraiyth",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slate Tutorials by Wraiyth"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),n("p",[t._v("Enjoy!")]),t._v(" "),n("p",[n("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),n("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),n("p",[t._v('Retrieved from "'),n("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Slate,_Edit_Text_Widget,_Custom_Rendering_%26_Any_TrueTypeFont&oldid=14493",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Slate,_Edit_Text_Widget,_Custom_Rendering_%26_Any_TrueTypeFont&oldid=14493"),n("OutboundLink")],1),t._v('"')]),t._v(" "),n("p",[n("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);