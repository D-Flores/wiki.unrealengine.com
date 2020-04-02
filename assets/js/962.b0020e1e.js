(window.webpackJsonp=window.webpackJsonp||[]).push([[962],{1480:function(t,e,o){"use strict";o.r(e);var r=o(28),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Rope Swing - Epic Wiki")]),t._v(" "),o("h1",{attrs:{id:"rope-swing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rope-swing"}},[t._v("#")]),t._v(" Rope Swing")]),t._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Tutorials"}},[t._v("2 Tutorials")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#MyCharacter.cpp"}},[t._v("3 MyCharacter.cpp")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Rope.h"}},[t._v("4 Rope.h")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Rope.cpp"}},[t._v("5 Rope.cpp")])])]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[o("strong",[t._v("Rate this Video:")])]),t._v(" "),o("p",[t._v("3.50")]),t._v(" "),o("p",[o("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),o("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),o("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),o("img",{attrs:{src:"/extensions/VoteNY/images/star_half.gif",alt:""}}),o("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t._v(" (2 votes)")]),t._v(" "),o("p",[t._v("Approved for Versions:4.8,4.9")]),t._v(" "),o("p",[t._v("This page provides a way to implement a simple rope swing")]),t._v(" "),o("h2",{attrs:{id:"tutorials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorials"}},[t._v("#")]),t._v(" Tutorials")]),t._v(" "),o("p",[t._v("Simple demo with my tutorial:")]),t._v(" "),o("p",[t._v("In your character code, you only need to add a variable ifOnRope to see if the character is attached to rope; also, you need to modify your jump functin so that if you are on the rope, you jump and will set ifOnRope to false and leave the Rope:")]),t._v(" "),o("h2",{attrs:{id:"mycharacter-cpp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mycharacter-cpp"}},[t._v("#")]),t._v(" MyCharacter.cpp")]),t._v(" "),o("p",[t._v('void AMyCharacter::SetupPlayerInputComponent(class UInputComponent* InputComponent)\n{\nSuper::SetupPlayerInputComponent(InputComponent);\nInputComponent->BindAxis("Forward", this,\n&AMyCharacter::MoveForward);\nInputComponent->BindAxis("Strafe", this, &AMyCharacter::MoveRight);\nInputComponent->BindAction("Jump", IE_Pressed, this, &AMyCharacter::OnStartJump);\nInputComponent->BindAction("Jump", IE_Released, this, &AMyCharacter::OnStopJump);\nifOnRope = false;\n}\nvoid AMyCharacter::OnStartJump()\n{\n \nbPressedJump = true;\nif (ifOnRope)\nifOnRope = false;\n}\nvoid AMyCharacter::OnStopJump()\n{\nbPressedJump = false;\n}')]),t._v(" "),o("p",[t._v('Then we need to add some variable to the rope actor: float rotateDegree; // The "Max" swing degree float TotalTime; //Time span since character attach to rope, this may be improved by using TimeSpan structure FVector actorFirstLocation; // The location when character proxs rope FVector Pivot; //rope\'s pivot We use the following pendulum equation to calculate swing:')]),t._v(" "),o("p",[o("a",{attrs:{href:"/File:Swing_1.gif"}},[o("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/87/Swing_1.gif",alt:""}})])]),t._v(" "),o("p",[t._v("pendulum equation")]),t._v(" "),o("p",[t._v("For simplicity, when character touches the rope, we set the maximum theta from 0 to 40 degree and let \"G/L\" be a value making your pendulum's speed appropriate. In my computer, I make it to be 1/30 and I get a pendulum with a moderate speed. When character is attached to rope, we set the totalTime to zero, in every tick, we add deltaTime to TotalTime, more efficient way may involve the usage of TimeSpan structure. Now after adding this function, your pendulum can swing after your character touches the rope, full code will be introduced later, so don't be intimidated if you are kind of confused now. SetActorRotation(FRotator(rotateDegree*sin(rotateDegree*sin(TotalTime)/30), 0.0f, 0.0f)); Now, your pendulum swings. What we need to do is to let the character swing at the same tempo, too; What we know is the rotation degree of the rope at each frame:FRotator(rotateDegree*sin(rotateDegree*sin(TotalTime)/30) We also know the pivot location(a,b,c), as illustrated by the following picture:")]),t._v(" "),o("p",[o("a",{attrs:{href:"/File:Swing_3.png"}},[o("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/d/d8/Swing_3.png",alt:""}})])]),t._v(" "),o("p",[t._v("pendulum equation")]),t._v(" "),o("p",[t._v("In two dimensional, if pivot is (a,b). Then character's position on rope is: (a+x*sin(θ), b-x*cos(θ)), where x is the distance from character to pivot In my application, only z-axis, the height, and x-axis, the range of the swing change. So it is Pivot + (x*sin(θ),0,-x*cos(θ)) Now we can see the whole picture:")]),t._v(" "),o("h2",{attrs:{id:"rope-h"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rope-h"}},[t._v("#")]),t._v(" Rope.h")]),t._v(" "),o("p",[t._v("UCLASS()\nclass MYPROJECT5_API AMyActor : public AActor\n{\nGENERATED_BODY()\n \npublic:\t\n// Sets default values for this actor's properties\nAMyActor(const FObjectInitializer& ObjectInitializer);\nfloat rotateDegree; // The Max swing degree\nfloat TotalTime;\t//Time span since character attach to rope, this may be improved by using TimeSpan structure\nFVector actorFirstLocation; // The location when character proxs rope\nFVector Pivot;\t\t\t\t//rope's pivot\nAMyCharacter* actorAttached;//Our character\n// Called when the game starts or when spawned\n \n \nvirtual void BeginPlay() override;\nUPROPERTY(VisibleDefaultsOnly, BlueprintReadWrite, Category = MeleeWeapon)\nUBoxComponent* ProxBox;\nUPROPERTY(VisibleDefaultsOnly, BlueprintReadWrite, Category = MeleeWeapon)\nUStaticMeshComponent* Mesh;\nUFUNCTION(BlueprintNativeEvent, Category = Collision)\nvoid Prox(AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult &SweepResult);\nvoid Prox_Implementation(AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep,\nconst FHitResult & SweepResult);\n// Called every frame\nvirtual void Tick(float DeltaSeconds) override;\n};")]),t._v(" "),o("p",[t._v("Prox function detect when it overlaps with other actors.")]),t._v(" "),o("h2",{attrs:{id:"rope-cpp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rope-cpp"}},[t._v("#")]),t._v(" Rope.cpp")]),t._v(" "),o("p",[t._v('AMyActor::AMyActor(const FObjectInitializer& ObjectInitializer)\n: Super(ObjectInitializer)\n{\n// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don\'t need it.\nPrimaryActorTick.bCanEverTick = true;\nrotateDegree = 0.0f;\nTotalTime = 0.0f;\nMesh = ObjectInitializer.CreateDefaultSubobject<UStaticMeshComponent>(this,\nTEXT("Mesh"));\nRootComponent = Mesh;\nProxBox = ObjectInitializer.CreateDefaultSubobject<UBoxComponent>(this,\nTEXT("ProxBox"));\nProxBox->OnComponentBeginOverlap.AddDynamic(this,\n&AMyActor::Prox);\nProxBox->AttachTo(RootComponent);\nactorAttached = NULL;\nactorFirstLocation = FVector(0.0f, 0.0f, 0.0f);\nPivot = FVector(-110.0f, 0.0f, 260.0f); // my pivot, I know the location, yours should be different\n \n}\nvoid AMyActor::Prox_Implementation(AActor* OtherActor,\nUPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool\nbFromSweep, const FHitResult & SweepResult)\n{\n \n \nactorAttached = Cast<AMyCharacter>(OtherActor); // set actorAttached to our character if it detects rope overlaps with our character\nif (actorAttached != NULL && (actorAttached->ifOnRope == false))\n{\nTotalTime = 0.0f;         //initilize total time\nactorAttached->ifOnRope = true;\nrotateDegree = 40;         //set the max swing degree to 40\nactorFirstLocation = actorAttached->GetActorLocation(); //record the location of overlap\n}\n \n}\n \nvoid AMyActor::Tick( float DeltaTime )\n{\nSuper::Tick( DeltaTime );\nTotalTime += DeltaTime;\nfloat DistanceToPivot = (actorFirstLocation - Pivot).Size(); // Calculate the distance from character to pivot, it is a constant when character swings the rope\nif (actorAttached != NULL)\n{\n \nif (actorAttached->ifOnRope){\n//let the rope swing\nSetActorRotation(FRotator(rotateDegree*sin(rotateDegree*sin(TotalTime)/30), 0.0f, 0.0f));\n \n//character swing\nactorAttached->SetActorLocation(Pivot + FVector(DistanceToPivot*sin(rotateDegree*sin(TotalTime)/30), 0.0f, -cos(rotateDegree*sin(TotalTime)/30)*DistanceToPivot)\n);\n \n}\nelse\n{\n// If character leaves the rope, we must let it stop\nif (rotateDegree>=0)\nrotateDegree -= 2;\nSetActorRotation(FRotator(rotateDegree*sin(rotateDegree*sin(TotalTime) / 30), 0.0f, 0.0f));\n}\n}\n \n}\n== Conclusion ==\nThis is a simple implement of rope swing. Hope it is helpful.')]),t._v(" "),o("p",[t._v('Retrieved from "'),o("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Rope_Swing&oldid=17246",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Rope_Swing&oldid=17246"),o("OutboundLink")],1),t._v('"')]),t._v(" "),o("p",[o("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),o("li",[o("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])]),t._v(" "),o("p",[t._v("Hidden category:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[t._v("Templates")])])]),t._v(" "),o("p",[o("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);