(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{885:function(r,t,e){"use strict";e.r(t);var n=e(28),a=Object(n.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("Blueprint Node: Sort Array of Actors By Field - Epic Wiki")]),r._v(" "),e("h1",{attrs:{id:"blueprint-node-sort-array-of-actors-by-field"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-node-sort-array-of-actors-by-field"}},[r._v("#")]),r._v(" Blueprint Node: Sort Array of Actors By Field")]),r._v(" "),e("p",[e("strong",[r._v("Rate this Article:")])]),r._v(" "),e("p",[r._v("0.00")]),r._v(" "),e("p",[e("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),r._v(" "),e("p",[r._v("Approved for Versions:(please verify)")]),r._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[r._v("#")]),r._v(" Contents")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Overview"}},[r._v("1 Overview")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#The_Setup"}},[r._v("2 The Setup")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#The_Header_File_.28.h.29"}},[r._v("3 The Header File (.h)")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Ordering"}},[r._v("3.1 Ordering")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#The_Method_Declaration"}},[r._v("3.2 The Method Declaration")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#The_Intercept"}},[r._v("3.3 The Intercept")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#Custom_Thunk"}},[r._v("3.4 Custom Thunk")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#Source"}},[r._v("3.5 Source")])])])]),r._v(" "),e("li",[e("a",{attrs:{href:"#The_Sorting_Predicate"}},[r._v("4 The Sorting Predicate")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#The_Source_File_.28.cpp.29"}},[r._v("5 The Source File (.cpp)")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#Notes.2FConcerns.2FTODO.2FPitfalls"}},[r._v("6 Notes/Concerns/TODO/Pitfalls")])])]),r._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[r._v("#")]),r._v(" Overview")]),r._v(" "),e("p",[e("em",[r._v("Author")]),r._v(" "),e("a",{attrs:{href:"/index.php?title=User:Nimgoble&action=edit&redlink=1",title:"User:Nimgoble (page does not exist)"}},[r._v("Nimgoble")]),r._v(" ("),e("a",{attrs:{href:"/index.php?title=User_talk:Nimgoble&action=edit&redlink=1",title:"User talk:Nimgoble (page does not exist)"}},[r._v("talk")]),r._v(")")]),r._v(" "),e("p",[r._v("Dear Community,")]),r._v(" "),e("p",[r._v("This snippet is to show you how to make a utility function for blueprint arrays that allows you to sort the array by a given field, in ascending or descending order.")]),r._v(" "),e("h2",{attrs:{id:"the-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-setup"}},[r._v("#")]),r._v(" The Setup")]),r._v(" "),e("p",[r._v("Make yourselves a new Blueprint Function Library in C++.")]),r._v(" "),e("h2",{attrs:{id:"the-header-file-h"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-header-file-h"}},[r._v("#")]),r._v(" The Header File (.h)")]),r._v(" "),e("h3",{attrs:{id:"ordering"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ordering"}},[r._v("#")]),r._v(" Ordering")]),r._v(" "),e("p",[r._v('We\'ll need to know in which order to sort the array: Ascending or Descending. I made an enumeration for this purpose and stuck it in the header file, before the "UXXXBlueprintFunctionLibrary" declaration:')]),r._v(" "),e("p",[r._v('UENUM(BlueprintType)\nenum class ESortDirection: uint8\n{\nASCENDING UMETA(DisplayName = "Ascending"),\nDESCENDING UMETA(DisplayName = "Descending")\n};')]),r._v(" "),e("h3",{attrs:{id:"the-method-declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-method-declaration"}},[r._v("#")]),r._v(" The Method Declaration")]),r._v(" "),e("p",[r._v('Let\'s go ahead and declare our method(s) in the header. We\'re going to follow the naming conventions of the other TArray utilities and name our methods: "Array_Sort" and "GenericArray_Sort".')]),r._v(" "),e("p",[r._v("We'll need four arguments:"),e("br"),r._v("\n-A pointer to the array that we'll be sorting"),e("br"),r._v("\n-A pointer to the array property (I'm not sure why, I was just following convention here)."),e("br"),r._v("\n-A string that will represent the field that we'll be sorting the array by."),e("br"),r._v("\n-The sort direction.")]),r._v(" "),e("p",[r._v("So, here's what that looks like in code:")]),r._v(" "),e("p",[r._v('UFUNCTION(BlueprintCallable, CustomThunk, meta = (DisplayName = "Sort Array", CompactNodeTitle = "SORTARRAY", ArrayParm = "TargetArray|ArrayProperty"), Category = "Utilities|Array")\nstatic void Array_Sort(const TArray<int32>& TargetArray, const UArrayProperty* ArrayProperty, const FString &FieldName, ESortDirection SortDirection);\nstatic void GenericArray_Sort(void* TargetArray, const UArrayProperty* ArrayProp, const FString &FieldName, ESortDirection SortDirection);')]),r._v(" "),e("p",[r._v('The first method, "Array_Sort", is a dummy method. It should never be called. It\'s there solely to prevent compilation errors. "GenericArray_Sort" is where our sorting will actually be happening. The reason for this is that Unreal Engine 4\'s templated function support is limited (at the moment). More info '),e("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?5324-Templated-Blueprint-functions",target:"_blank",rel:"noopener noreferrer"}},[r._v("here"),e("OutboundLink")],1),r._v(".")]),r._v(" "),e("h3",{attrs:{id:"the-intercept"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-intercept"}},[r._v("#")]),r._v(" The Intercept")]),r._v(" "),e("p",[r._v('This next snippet is a bit of call stack magic. I believe this intercepts any call to our dummy method, "Array_Sort", and redirects it to "GenericArray_Sort".')]),r._v(" "),e("p",[r._v("DECLARE_FUNCTION(execArray_Sort)\n{\nStack.StepCompiledIn<UArrayProperty>(NULL);\nvoid* ArrayAddr = Stack.MostRecentPropertyAddress;\n \nP_GET_OBJECT(UArrayProperty, ArrayProperty);\nPARAM_PASSED_BY_REF(FieldName, UStrProperty, FString);\nPARAM_PASSED_BY_VAL(SortDirection, UByteProperty, ESortDirection);\nP_FINISH;\n \nGenericArray_Sort(ArrayAddr, ArrayProperty, FieldName, SortDirection);\n}")]),r._v(" "),e("h3",{attrs:{id:"custom-thunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-thunk"}},[r._v("#")]),r._v(" Custom Thunk")]),r._v(" "),e("p",[r._v("Next up is our Custom Thunk, which is also part of the pseudo-templating stuff. To be honest, I'm not 100% sure what it does/is used for, EXACTLY. Again, just following convention.")]),r._v(" "),e("p",[r._v("struct FXXXCustomThunkTemplates\n{\ntemplate<typename T>\nstatic void Array_Sort(TArray<T>& TargetArray, const UArrayProperty* ArrayProperty, const FString &FieldName, ESortDirection SortDirection)\n{\nUXXXBlueprintFunctionLibrary::GenericArray_Sort(&TargetArray, ArrayProperty, FieldName, SortDirection);\n}\n};")]),r._v(" "),e("h3",{attrs:{id:"source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[r._v("#")]),r._v(" Source")]),r._v(" "),e("p",[r._v('#pragma once\n \n#include "Kismet/BlueprintFunctionLibrary.h"\n#include "XXXBlueprintFunctionLibrary.generated.h"\n \n/**\n*\n*/\nUCLASS()\nclass XXX_API UXXXBlueprintFunctionLibrary : public UBlueprintFunctionLibrary\n{\nGENERATED_BODY()\npublic:\nUFUNCTION(BlueprintCallable, CustomThunk, meta = (DisplayName = "Sort Array", CompactNodeTitle = "SORTARRAY", ArrayParm      = "TargetArray|ArrayProperty"), Category = "Utilities|Array")\nstatic void Array_Sort(const TArray<int32>& TargetArray, const UArrayProperty* ArrayProperty, const FString &FieldName, ESortDirection SortDirection);\nstatic void GenericArray_Sort(void* TargetArray, const UArrayProperty* ArrayProp, const FString &FieldName, ESortDirection SortDirection);\n \nDECLARE_FUNCTION(execArray_Sort)\n{\nStack.StepCompiledIn<UArrayProperty>(NULL);\nvoid* ArrayAddr = Stack.MostRecentPropertyAddress;\n \nP_GET_OBJECT(UArrayProperty, ArrayProperty);\nPARAM_PASSED_BY_REF(FieldName, UStrProperty, FString);\nPARAM_PASSED_BY_VAL(SortDirection, UByteProperty, ESortDirection);\nP_FINISH;\n \nGenericArray_Sort(ArrayAddr, ArrayProperty, FieldName, SortDirection);\n}\n};\n \nstruct FXXXCustomThunkTemplates\n{\ntemplate<typename T>\nstatic void Array_Sort(TArray<T>& TargetArray, const UArrayProperty* ArrayProperty, const FString &FieldName, ESortDirection SortDirection)\n{\nUXXXBlueprintFunctionLibrary::GenericArray_Sort(&TargetArray, ArrayProperty, FieldName, SortDirection);\n}\n};')]),r._v(" "),e("h2",{attrs:{id:"the-sorting-predicate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-sorting-predicate"}},[r._v("#")]),r._v(" The Sorting Predicate")]),r._v(" "),e("p",[r._v('Next up is our sorting predicate. This will be passed to the "Sort" method of our array of Actors. I put this in the header with all of the other stuff; You can put it wherever you want.')]),r._v(" "),e("p",[r._v("This does some UProperty type checking, casting, and comparisons.")]),r._v(" "),e("p",[r._v("struct FArraySortByFieldPredicate\n{\nFArraySortByFieldPredicate(const FString &InFieldName, ESortDirection InSortDirection)\n: FieldName(InFieldName), SortDirection(InSortDirection)\n{\n}\n \nbool operator ()(const AActor& A, const AActor& B) const\n{\nUClass *ourClass = A.GetClass();\nif (ourClass != B.GetClass())\nreturn false;\n \nUProperty *targetProperty = FindField<UProperty>(ourClass, *FieldName);\nif (targetProperty == nullptr)\nreturn false;\n \nconst void *Aa = (SortDirection == ESortDirection::ASCENDING) ? &A : &B;\nconst void *Bb = (SortDirection == ESortDirection::ASCENDING) ? &B : &A;\n \nif (targetProperty->IsA<UByteProperty>())\n{\nreturn Cast<UByteProperty>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UByteProperty>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UIntProperty>())\n{\nreturn\nCast<UIntProperty>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UIntProperty>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UUInt32Property>())\n{\nreturn\nCast<UUInt32Property>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UUInt32Property>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UFloatProperty>())\n{\nreturn\nCast<UFloatProperty>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UFloatProperty>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UDoubleProperty>())\n{\nreturn\nCast<UDoubleProperty>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UDoubleProperty>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UStrProperty>())\n{\nreturn\nCast<UStrProperty>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UStrProperty>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UNameProperty>())\n{\nreturn\nCast<UNameProperty>(targetProperty)->GetPropertyValue_InContainer(Aa) <\nCast<UNameProperty>(targetProperty)->GetPropertyValue_InContainer(Bb);\n}\nelse if (targetProperty->IsA<UTextProperty>())\n{\nreturn\nCast<UTextProperty>(targetProperty)->GetPropertyValue_InContainer(Aa).ToString() <\nCast<UTextProperty>(targetProperty)->GetPropertyValue_InContainer(Bb).ToString();\n}\n// fall back, just let diff type win:\nelse\nreturn false;\n}\n \nFString FieldName;\nESortDirection SortDirection;\n};")]),r._v(" "),e("h2",{attrs:{id:"the-source-file-cpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-source-file-cpp"}},[r._v("#")]),r._v(" The Source File (.cpp)")]),r._v(" "),e("p",[r._v('The Source File is fairly straightforward. It contains the body of our dummy method, "Array_Sort" and the body of "GenericArray_Sort".')]),r._v(" "),e("p",[r._v('#include "YourGame.h"\n#include "XXXBlueprintFunctionLibrary.h"\n \nvoid UXXXBlueprintFunctionLibrary::Array_Sort(const TArray<int32>& TargetArray, const UArrayProperty* ArrayProp, const FString &FieldName, ESortDirection SortDirection)\n{\n// We should never hit these!  They\'re stubs to avoid NoExport on the class.  Call the Generic* equivalent instead\ncheck(0);\n}\n \nvoid UXXXBlueprintFunctionLibrary::GenericArray_Sort(void* TargetArray, const UArrayProperty* ArrayProp, const FString &FieldName, ESortDirection SortDirection)\n{\nif (TargetArray)\n{\nTArray<AActor *> *actorArray = (TArray<AActor *> *)TargetArray;\nif (actorArray != nullptr)\n{\nactorArray->Sort(FArraySortByFieldPredicate(FieldName, SortDirection));\n}\n}\n}')]),r._v(" "),e("h2",{attrs:{id:"notes-concerns-todo-pitfalls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes-concerns-todo-pitfalls"}},[r._v("#")]),r._v(" Notes/Concerns/TODO/Pitfalls")]),r._v(" "),e("p",[r._v("-This is not a truly templated sort method. I believe that you can send an array of objects that do not derive from AActor. In this case, the sort method will fail silently. With that being said:")]),r._v(" "),e("p",[r._v("-This could probably use better logging. Or any, really.")]),r._v(" "),e("p",[r._v("-If the class of the objects that you pass in does NOT contain the field in question, you may get weird results.")]),r._v(" "),e("p",[r._v("-The blueprint node does NOT contain field names. You'll have to infer which field is which (it isn't hard, considering that there are two of them, and one is an enumeration).")]),r._v(" "),e("p",[r._v("-The FArraySortByFieldPredicate structure is limited to basic types.")]),r._v(" "),e("p",[r._v('-I don\'t think sorting strings actually works right now. Perhaps calling "Compare()" would be better than the "<" operator.')]),r._v(" "),e("p",[r._v('Retrieved from "'),e("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Blueprint_Node:_Sort_Array_of_Actors_By_Field&oldid=14806",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://wiki.unrealengine.com/index.php?title=Blueprint_Node:_Sort_Array_of_Actors_By_Field&oldid=14806"),e("OutboundLink")],1),r._v('"')]),r._v(" "),e("p",[e("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[r._v("Categories")]),r._v(":")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[r._v("Tutorials")])]),r._v(" "),e("li",[e("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[r._v("Code")])]),r._v(" "),e("li",[e("a",{attrs:{href:"/Category:Blueprint",title:"Category:Blueprint"}},[r._v("Blueprint")])]),r._v(" "),e("li",[e("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[r._v("Community Created Content")])])]),r._v(" "),e("p",[r._v("Hidden category:")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[r._v("Templates")])])]),r._v(" "),e("p",[e("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);