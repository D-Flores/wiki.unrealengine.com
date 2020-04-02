(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{771:function(t,a,e){"use strict";e.r(a);var n=e(28),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Coplanarity Test for Any Quantity of 3D Points - Epic Wiki")]),t._v(" "),e("h1",{attrs:{id:"coplanarity-test-for-any-quantity-of-3d-points"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coplanarity-test-for-any-quantity-of-3d-points"}},[t._v("#")]),t._v(" Coplanarity Test for Any Quantity of 3D Points")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Code"}},[t._v("2 Code")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Explanation"}},[t._v("3 Explanation")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#PointPlaneDist"}},[t._v("3.1 PointPlaneDist")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Abs"}},[t._v("3.2 Abs")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Conclusion"}},[t._v("4 Conclusion")])])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("Dear Community,")]),t._v(" "),e("p",[t._v("It took me a long time to create and test a fully accurate function for determining if an arbitrary number of FVectors / 3D points are coplanar!")]),t._v(" "),e("p",[t._v("Here is the function I came up with for your entertainment!")]),t._v(" "),e("h2",{attrs:{id:"code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),e("p",[t._v("static FORCEINLINE bool CoPlanar(const TArray<FVector>& Points, const float Tolerance = 0.1)\n{\n//less than 4 points = coplanar\nif(Points.Num() < 4) return true;\n \n//Get the Normal for plane determined by first 3 points\nconst FVector Normal = FVector::CrossProduct(Points[2] - Points[0], Points[1] - Points[0]);\n \nconst int32 Total = Points.Num();\nfor(int32 v = 3; v < Total; v++)\n{\n//Abs of PointPlaneDist, dist should be 0\nif(FMath::Abs( FVector::PointPlaneDist(Points[v], Points[0], Normal)) > Tolerance) return false;\n}\n \nreturn true;\n}")]),t._v(" "),e("h2",{attrs:{id:"explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation")]),t._v(" "),e("p",[t._v("Any 3 points determine a plane, so I obtain the normal of the plane determined by the first 3 points!")]),t._v(" "),e("p",[t._v("const FVector Normal = FVector::CrossProduct(Points[2] - Points[0], Points[1] - Points[0]);")]),t._v(" "),e("p",[t._v("Now that I've established the plane I want to test against, I compare all the other points using UE4's PointPlaneDist function.")]),t._v(" "),e("p",[t._v("if(FMath::Abs( FVector::PointPlaneDist(Points[v], Points[0], Normal)) > Tolerance)")]),t._v(" "),e("p",[t._v("I am allowing an error tolerance rather than demanding exactly 0.")]),t._v(" "),e("h3",{attrs:{id:"pointplanedist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pointplanedist"}},[t._v("#")]),t._v(" PointPlaneDist")]),t._v(" "),e("p",[t._v("Vector.h\n/**\n* Calculate the signed distance (in the direction of the normal) between\n* a point and a plane.\n*\n* @param Point The Point we are checking.\n* @param PlaneBase The Base Point in the plane.\n* @param PlaneNormal The Normal of the plane.\n*\n* @return Signed distance  between point and plane.\n*/\nstatic float PointPlaneDist( const FVector &Point, const FVector &PlaneBase, const FVector &PlaneNormal );")]),t._v(" "),e("h3",{attrs:{id:"abs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abs"}},[t._v("#")]),t._v(" Abs")]),t._v(" "),e("p",[t._v("The absolute value is essential!")]),t._v(" "),e("p",[t._v("if(FMath::Abs( FVector::PointPlaneDist(...")]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("p",[t._v("Enjoy!")]),t._v(" "),e("p",[e("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),e("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),e("p",[t._v('Retrieved from "'),e("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Coplanarity_Test_for_Any_Quantity_of_3D_Points&oldid=3269",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Coplanarity_Test_for_Any_Quantity_of_3D_Points&oldid=3269"),e("OutboundLink")],1),t._v('"')]),t._v(" "),e("p",[e("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);a.default=o.exports}}]);