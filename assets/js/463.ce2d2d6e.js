(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{790:function(a,e,t){"use strict";t.r(e);var r=t(28),n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Dynamic Arrays - Epic Wiki")]),a._v(" "),t("h1",{attrs:{id:"dynamic-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-arrays"}},[a._v("#")]),a._v(" Dynamic Arrays")]),a._v(" "),t("p",[a._v("(Redirected from "),t("a",{attrs:{href:"/index.php?title=Dynamic_Arrays_in_UE4_C%2B%2B&redirect=no",title:"Dynamic Arrays in UE4 C++"}},[a._v("Dynamic Arrays in UE4 C++")]),a._v(")")]),a._v(" "),t("h2",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[a._v("#")]),a._v(" Contents")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Overview"}},[a._v("1 Overview")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Example_1"}},[a._v("1.1 Example 1")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Example_2"}},[a._v("1.2 Example 2")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Summary"}},[a._v("1.3 Summary")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Available_Types"}},[a._v("2 Available Types")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#C.2B.2B_Type"}},[a._v("2.1 C++ Type")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#UE4_C.2B.2B_Type"}},[a._v("2.2 UE4 C++ Type")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Pointer_to_UObject_Class"}},[a._v("2.3 Pointer to UObject Class")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Pointer_to_AActor_Class"}},[a._v("2.4 Pointer to AActor Class")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Pointer_to_Blueprint_Class"}},[a._v("2.5 Pointer to Blueprint Class")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#UE4_C.2B.2B_Enums"}},[a._v("2.6 UE4 C++ Enums")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Arrays_of_USTRUCTS.28.29_or_Pointers_to_UStructs"}},[a._v("3 Arrays of USTRUCTS() or Pointers to UStructs")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Sample_USTRUCT.28.29"}},[a._v("3.1 Sample USTRUCT()")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Array_of_USTRUCTS.28.29"}},[a._v("3.2 Array of USTRUCTS()")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#The_Pointer_Version"}},[a._v("3.3 The Pointer Version")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Blueprint-Accessible_Dynamic_Arrays"}},[a._v("4 Blueprint-Accessible Dynamic Arrays")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Core_Functions"}},[a._v("5 Core Functions")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#.Add.28.29"}},[a._v("5.1 .Add()")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#.Remove.28.29"}},[a._v("5.2 .Remove()")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#.RemoveAt.28.29"}},[a._v("5.3 .RemoveAt()")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#.Num.28.29"}},[a._v("5.4 .Num()")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#For_Loops"}},[a._v("6 For Loops")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Basic"}},[a._v("6.1 Basic")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#For_AActor.2A"}},[a._v("6.2 For AActor*")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Using_Iterator"}},[a._v("6.3 Using Iterator")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Iterator_AActor.2A_Example"}},[a._v("6.4 Iterator AActor* Example")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Abbreviated_C.2B.2B11_Syntax"}},[a._v("6.5 Abbreviated C++11 Syntax")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Index_Safety_Check_To_Prevent_Crashes"}},[a._v("7 Index Safety Check To Prevent Crashes")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#.IsValidIndex.28.29"}},[a._v("7.1 .IsValidIndex()")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Awesome_Functions"}},[a._v("8 Awesome Functions")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#.Empty.28.29"}},[a._v("8.1 .Empty()")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#.Append.28.29"}},[a._v("8.2 .Append()")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Min.2FMax_of_Array_.284.3_and_higher.29"}},[a._v("9 Min/Max of Array (4.3 and higher)")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Multi_Dimensional_Arrays"}},[a._v("10 Multi Dimensional Arrays")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#.H"}},[a._v("10.1 .H")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#.CPP"}},[a._v("10.2 .CPP")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Full_2D_Array_Code_Sample"}},[a._v("10.3 Full 2D Array Code Sample")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#.5BEpic_Docs.5D_TArray_Optimization_Techniques"}},[a._v("11 [Epic Docs] TArray Optimization Techniques")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#Summary_2"}},[a._v("12 Summary")])])]),a._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[a._v("#")]),a._v(" Overview")]),a._v(" "),t("p",[t("em",[a._v("Original Author:")]),a._v(" "),t("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[a._v("Rama")]),a._v(" ("),t("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[a._v("talk")]),a._v(")")]),a._v(" "),t("p",[a._v("Dear Community,")]),a._v(" "),t("p",[a._v("Here is my introduction to UE4 C++ Dynamic Arrays!")]),a._v(" "),t("p",[a._v("They're awesome!")]),a._v(" "),t("h3",{attrs:{id:"example-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[a._v("#")]),a._v(" Example 1")]),a._v(" "),t("p",[a._v("You can use dynamic arrays to store references to every ACharacter that crosses a certain point in your level, and then, after at least 5 ACharacters have crossed the point, you can iterate over all the actors and perform an action.")]),a._v(" "),t("p",[a._v("So in this way, you could make it a game-ending condition that if 5 bunny-rabbits reach their home, then the game ends in success.")]),a._v(" "),t("p",[a._v("During runtime you never know how long it will take for the bunny-rabbits to reach home, but via code you can track how many have reached home, whenever they do, and the iterate over all of them to make them perform some kind of victory dance as the level ends.")]),a._v(" "),t("p",[a._v("But you also never know which bunny-rabbits will be doing the dancing!")]),a._v(" "),t("p",[a._v('thus the word "dynamic"')]),a._v(" "),t("p",[t("strong",[a._v("Dynamic arrays enable you to track dynamically changing game conditions from the UE4 C++")])]),a._v(" "),t("h3",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[a._v("#")]),a._v(" Example 2")]),a._v(" "),t("p",[a._v("You could make a dynamic array that is accessible to blueprints so your team members working in blueprints can add information to the dynamic array, which you as the programmer will then use in c++ during runtime.")]),a._v(" "),t("p",[a._v("But you as the programmer do not know how much data they will add!")]),a._v(" "),t("p",[a._v("So you could give the level designers a dynamic array to edit in blueprints, and they will fill it with 3 or 10 or 100 level names.")]),a._v(" "),t("p",[a._v("Then you can, in the C++, iterate over all of the level names and display them, "),t("strong",[a._v("without ever knowing in advance how many levels the designers added!")])]),a._v(" "),t("p",[a._v("And the level designers can add more any time!")]),a._v(" "),t("h3",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[a._v("#")]),a._v(" Summary")]),a._v(" "),t("p",[t("strong",[a._v("Dynamic arrays are one of the most essential tools")]),a._v(" for any game-logic that you want to do,")]),a._v(" "),t("p",[a._v("where the actions of the player, the in-game AI, and the rest of your team cannot be known in advance,")]),a._v(" "),t("p",[a._v("but need to be tracked, organized, and facilitated via UE4 C++ code systems.")]),a._v(" "),t("h2",{attrs:{id:"available-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-types"}},[a._v("#")]),a._v(" Available Types")]),a._v(" "),t("ul",[t("li",[a._v("Any C++ type")]),a._v(" "),t("li",[a._v("Any UE4 C++ type, such as FLinearColor")]),a._v(" "),t("li",[a._v("Pointer to a UObject or an AActor extending class")]),a._v(" "),t("li",[a._v("Pointer to Blueprint Classes")]),a._v(" "),t("li",[a._v("UE4++ Enums")]),a._v(" "),t("li",[a._v("USTRUCTS() or USTRUCT() pointers")])]),a._v(" "),t("h3",{attrs:{id:"c-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-type"}},[a._v("#")]),a._v(" C++ Type")]),a._v(" "),t("p",[a._v("TArray<uint8> BinaryArray;")]),a._v(" "),t("h3",{attrs:{id:"ue4-c-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ue4-c-type"}},[a._v("#")]),a._v(" UE4 C++ Type")]),a._v(" "),t("p",[a._v("TArray<FRotator> StarLocations;")]),a._v(" "),t("h3",{attrs:{id:"pointer-to-uobject-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointer-to-uobject-class"}},[a._v("#")]),a._v(" Pointer to UObject Class")]),a._v(" "),t("p",[a._v("TArray<USkeletalMeshComponent*> Weapons;")]),a._v(" "),t("h3",{attrs:{id:"pointer-to-aactor-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointer-to-aactor-class"}},[a._v("#")]),a._v(" Pointer to AActor Class")]),a._v(" "),t("p",[a._v("TArray<ACharacter*> FrogsThatAreHopping;")]),a._v(" "),t("h3",{attrs:{id:"pointer-to-blueprint-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointer-to-blueprint-class"}},[a._v("#")]),a._v(" Pointer to Blueprint Class")]),a._v(" "),t("p",[a._v("TArray<UClass*> FlowerBlueprints;")]),a._v(" "),t("h3",{attrs:{id:"ue4-c-enums"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ue4-c-enums"}},[a._v("#")]),a._v(" UE4 C++ Enums")]),a._v(" "),t("p",[a._v("TArray"),t("a",{attrs:{href:"EKeys::Type%5C"}},[a._v("EKeys::Type\\")]),a._v(" GameControlKeys;")]),a._v(" "),t("h2",{attrs:{id:"arrays-of-ustructs-or-pointers-to-ustructs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arrays-of-ustructs-or-pointers-to-ustructs"}},[a._v("#")]),a._v(" Arrays of USTRUCTS() or Pointers to UStructs")]),a._v(" "),t("p",[a._v("Let's say you have defined this USTRUCT()")]),a._v(" "),t("h3",{attrs:{id:"sample-ustruct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-ustruct"}},[a._v("#")]),a._v(" Sample USTRUCT()")]),a._v(" "),t("p",[a._v("USTRUCT()\nstruct FFlowerStruct\n{\nGENERATED_USTRUCT_BODY()\n \nUPROPERTY()\nint32 NumPetals;\n \nUPROPERTY()\nFLinearColor Color;\n \nUPROPERTY()\nFVector Scale3D;\n \nvoid SetFlowerColor(const FLinearColor& NewColor)\n{\nColor = NewColor;\n}\n \nFFlowerStruct()\n{\nNumPetals \t= 5;\nScale3D \t\t= FVector(1,1,1);\nColor \t\t\t= FLinearColor(1,0,0,1);\n}\n};")]),a._v(" "),t("h3",{attrs:{id:"array-of-ustructs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-of-ustructs"}},[a._v("#")]),a._v(" Array of USTRUCTS()")]),a._v(" "),t("p",[a._v("You can make an array of FFlowerStructs as follows!")]),a._v(" "),t("p",[a._v("TArray<FFlowerStruct> Flowers;")]),a._v(" "),t("h3",{attrs:{id:"the-pointer-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-pointer-version"}},[a._v("#")]),a._v(" The Pointer Version")]),a._v(" "),t("p",[a._v("TArray<FFlowerStruct*> FlowerPtrs;")]),a._v(" "),t("h2",{attrs:{id:"blueprint-accessible-dynamic-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-accessible-dynamic-arrays"}},[a._v("#")]),a._v(" Blueprint-Accessible Dynamic Arrays")]),a._v(" "),t("p",[a._v('/** Add entries in BP Defaults, or during Runtime! Iterate over them using the For Each Loop BP Node */\nUPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Flowers")\nTArray<FName> FlowerNames;')]),a._v(" "),t("h2",{attrs:{id:"core-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-functions"}},[a._v("#")]),a._v(" Core Functions")]),a._v(" "),t("h3",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" .Add()")]),a._v(" "),t("p",[a._v("TArray<FVector> StarLocations;\nStarLocations.Add(FVector(0,0,2000000));")]),a._v(" "),t("h3",{attrs:{id:"remove"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[a._v("#")]),a._v(" .Remove()")]),a._v(" "),t("p",[a._v("//Defined in the .h file:\n//  TArray<ACharacter*> FrogsThatAreHopping;\n//  ACharacter* FrogThatIsTired;\n \nFrogsThatAreHopping.Remove(FrogThatIsTired);")]),a._v(" "),t("h3",{attrs:{id:"removeat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removeat"}},[a._v("#")]),a._v(" .RemoveAt()")]),a._v(" "),t("p",[a._v("//Remove first frog from the array\nif(FrogsThatAreHopping.Num() > 0)\n{\nFrogsThatAreHopping.RemoveAt(0);\n}")]),a._v(" "),t("h3",{attrs:{id:"num"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#num"}},[a._v("#")]),a._v(" .Num()")]),a._v(" "),t("p",[a._v("Returns number of elements in the array (can be used when you need the length of the array).")]),a._v(" "),t("p",[a._v('ClientMessage("Total Flower Count");\nClientMessage(FString::FromInt(Flowers.Num()));')]),a._v(" "),t("h2",{attrs:{id:"for-loops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-loops"}},[a._v("#")]),a._v(" For Loops")]),a._v(" "),t("h3",{attrs:{id:"basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[a._v("#")]),a._v(" Basic")]),a._v(" "),t("p",[a._v("// defined in .h TArray"),t("FVector",[a._v(" StarLocations;\n \n//Print Star Locations\nfor(int32 b = 0; b < StarLocations.Num(); b++)\n{\nClientMessage(StarLocations[b].ToString());\n}")])],1),a._v(" "),t("h3",{attrs:{id:"for-aactor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-aactor"}},[a._v("#")]),a._v(" For AActor*")]),a._v(" "),t("p",[a._v("I am including very rigorous "),t("strong",[a._v("pointer safety")]),a._v(" and "),t("strong",[a._v("AActor validity")]),a._v(" checks,")]),a._v(" "),t("p",[a._v("because you dont want your whole game to crash to desktop, ever 😃")]),a._v(" "),t("p",[a._v("//defined in the .h : TArray<AFlower*> Flowers;\n \n//Print out each flower's UE4 Name\n \nAFlower* CurFlower = NULL;\nfor(int32 b = 0; b < Flowers.Num(); b++)\n{\nCurFlower = Flowers[b];\nif(!CurFlower) continue;\nif(!CurFlower->IsValidLowLevel()) continue;\n//~~~~~~~~~~~~~~~~~~~~~~\n \nClientMessage(CurFlower->GetName());\n}")]),a._v(" "),t("h3",{attrs:{id:"using-iterator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-iterator"}},[a._v("#")]),a._v(" Using Iterator")]),a._v(" "),t("p",[a._v("Posted originally by Solid Snake, thanks Solid Snake!")]),a._v(" "),t("p",[a._v("for (auto Iter(TArray.CreateIterator()); Iter; Iter++)\n{\n// *Iter to access what this iterator is pointing to.\n}")]),a._v(" "),t("h3",{attrs:{id:"iterator-aactor-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterator-aactor-example"}},[a._v("#")]),a._v(" Iterator AActor* Example")]),a._v(" "),t("p",[a._v("//defined in the .h : TArray<AFlower*> Flowers;\n \n//Print out each flower's UE4 Name\nfor (auto Itr(Flowers.CreateIterator()); Itr; Itr++)\n{\nif(!(*Itr)->IsValidLowLevel()) continue;\n//~~~~~~~~~~~~~~~~~~~~~~\n \nClientMessage((*Itr)->GetName());\n}")]),a._v(" "),t("h3",{attrs:{id:"abbreviated-c-11-syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abbreviated-c-11-syntax"}},[a._v("#")]),a._v(" Abbreviated C++11 Syntax")]),a._v(" "),t("p",[a._v("This one is great when you don't need to know the index as you are iterating! "),t("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[a._v("Rama")]),a._v(" ("),t("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[a._v("talk")]),a._v(")")]),a._v(" "),t("p",[a._v("this:")]),a._v(" "),t("p",[a._v("for(int32 b; b < StarLocations.Num(); b++)\n{\nClientMessage(StarLocations[b].ToString());\n}")]),a._v(" "),t("p",[a._v("becomes this:")]),a._v(" "),t("p",[a._v("for(const FVector& EachLocation : StarLocations)\n{\nClientMessage(EachLocation.ToString());\n}")]),a._v(" "),t("p",[a._v("If you want to change the value in the loop, and not just read it, then remove the const 😃")]),a._v(" "),t("h2",{attrs:{id:"index-safety-check-to-prevent-crashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-safety-check-to-prevent-crashes"}},[a._v("#")]),a._v(" Index Safety Check To Prevent Crashes")]),a._v(" "),t("h3",{attrs:{id:"isvalidindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isvalidindex"}},[a._v("#")]),a._v(" .IsValidIndex()")]),a._v(" "),t("p",[a._v("//defined in .h\n//TArray"),t("float",[a._v(" RandomPercentValues;\n \n//Pick a random Percent Value!\nfloat AMyPlayerController::GetRandomPercenttValue() const\n{\n//Negative array indicies are always invalid\n//\t\tand will always cause a crash if you try to use one.\n \n//Use IsValidIndex to verify the index is in range\n//\t\t***before*** you try to access the array!\n \nconst int32 RandomIndex = FMath::RandRange(-50,10000);\n \n//Safety Check\nif( ! RandomPercentValues.IsValidIndex(RandomIndex)) return -1;\n//~~~~~~~~~~~~~~~~~~~~~~~\n \nreturn RandomPercentValues[RandomIndex];\n}")])],1),a._v(" "),t("h2",{attrs:{id:"awesome-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awesome-functions"}},[a._v("#")]),a._v(" Awesome Functions")]),a._v(" "),t("h3",{attrs:{id:"empty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#empty"}},[a._v("#")]),a._v(" .Empty()")]),a._v(" "),t("p",[a._v("Empty array of all current contents")]),a._v(" "),t("p",[a._v("//It's nighttime, no more hopping;\nFrogsThatAreHopping.Empty();")]),a._v(" "),t("h3",{attrs:{id:"append"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#append"}},[a._v("#")]),a._v(" .Append()")]),a._v(" "),t("p",[a._v("Add the entire contents of one array to the end of another!")]),a._v(" "),t("p",[a._v("TArray<FVector> StarLocations;\nTArray<FVector> CloudLocations;\nTArray<FVector> StarAndCloudLocations;\n \nStarLocations.Add(0,0,200000);\nCloudLocations.Add(50,25,11000);\nCloudLocations.Add(50,25,22200);\n \nStarAndCloudLocations.Append(StarLocations);\nStarAndCloudLocations.Append(CloudLocations);\n \n//Print out all Locations\nfor(int32 b; b < StarAndCloudLocations.Num(); b++)\n{\nClientMessage(StarAndCloudLocations[b].ToString());\n}")]),a._v(" "),t("h2",{attrs:{id:"min-max-of-array-4-3-and-higher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#min-max-of-array-4-3-and-higher"}},[a._v("#")]),a._v(" Min/Max of Array (4.3 and higher)")]),a._v(" "),t("p",[a._v("I offered two Math Library functions to Epic which are now part of the Engine in 4.3, allowing you to get the Min/Max of a Dynamic Array of any datatype for which the operator< is defined!")]),a._v(" "),t("p",[a._v("Full details here:")]),a._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"/Min/Max_of_An_Array_of_Any_DataType,_Including_Ones_That_You_Create",title:"Min/Max of An Array of Any DataType, Including Ones That You Create"}},[a._v("Min Max of Array")])])]),a._v(" "),t("h2",{attrs:{id:"multi-dimensional-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-dimensional-arrays"}},[a._v("#")]),a._v(" Multi Dimensional Arrays")]),a._v(" "),t("p",[a._v("To make a 2 or higher dimensional array,")]),a._v(" "),t("p",[a._v("wrap the array in a UStruct, and then make an Array of the UStructs")]),a._v(" "),t("h3",{attrs:{id:"h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[a._v("#")]),a._v(" .H")]),a._v(" "),t("p",[a._v("USTRUCT()\nstruct FFlowerField\n{\nGENERATED_USTRUCT_BODY()\n \nUPROPERTY()\nTArray<FFlowerStruct> Flowers;\n \nFFlowerField()\n{\n}\n};\n \n//All Flower Fields on The Island\nTArray<FFlowerField> FlowerFields;")]),a._v(" "),t("h3",{attrs:{id:"cpp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpp"}},[a._v("#")]),a._v(" .CPP")]),a._v(" "),t("p",[a._v("Then to Access a single Flower")]),a._v(" "),t("p",[a._v("//Is there at least 1 Flower Field?\nif(FlowerFields.Num() > 0)\n{\n//Does the first field have at least 3 flowers? (could use .Num() too)\nif(FlowerFields[0].Flowers.IsValidIndex(2))\n{\n//Number of petals on the 3rd flower in 1st field\nClientMessage(FString::FromInt(FlowerFields[0].Flowers[2].NumPetals));\n}\n}")]),a._v(" "),t("h3",{attrs:{id:"full-2d-array-code-sample"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-2d-array-code-sample"}},[a._v("#")]),a._v(" Full 2D Array Code Sample")]),a._v(" "),t("p",[a._v("I have two extensive code samples for how to make 2D arrays that are BP-friendly and can be replicated!")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?47-SaxonRahs-Tutorial-Thread-Random-Maze-Generation-amp-Solving&p=27139&viewfull=1#post27139",target:"_blank",rel:"noopener noreferrer"}},[a._v("My Fully Coded 2D Array Example"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?60398-Replicating-a-2D-dynamic-array&p=232520&viewfull=1#post232520",target:"_blank",rel:"noopener noreferrer"}},[a._v("Replicating BP-Friendly 2D Array"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"epic-docs-tarray-optimization-techniques"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#epic-docs-tarray-optimization-techniques"}},[a._v("#")]),a._v(" [Epic Docs] TArray Optimization Techniques")]),a._v(" "),t("p",[a._v("Epic has posted an awesome article on ways you can optimize your use of TArray!")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.unrealengine.com/blog/optimizing-tarray-usage-for-performance",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[a._v("TArray Optimizations for Performance")]),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"summary-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary-2"}},[a._v("#")]),a._v(" Summary")]),a._v(" "),t("p",[a._v("I hope you have enjoyed my description of UE4 C++ Dynamic Arrays!")]),a._v(" "),t("p",[a._v("Enjoy!")]),a._v(" "),t("p",[t("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[a._v("Rama")]),a._v(" ("),t("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[a._v("talk")]),a._v(")")]),a._v(" "),t("p",[a._v('Retrieved from "'),t("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Dynamic_Arrays&oldid=14756",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.unrealengine.com/index.php?title=Dynamic_Arrays&oldid=14756"),t("OutboundLink")],1),a._v('"')]),a._v(" "),t("p",[t("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[a._v("Category")]),a._v(":")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[a._v("Code")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=n.exports}}]);