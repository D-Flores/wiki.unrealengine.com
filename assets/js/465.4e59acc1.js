(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{859:function(a,e,r){"use strict";r.r(e);var t=r(28),i=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("Dynamic Depth of Field TR - Epic Wiki")]),a._v(" "),r("h1",{attrs:{id:"dynamic-depth-of-field-tr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-depth-of-field-tr"}},[a._v("#")]),a._v(" Dynamic Depth of Field TR")]),a._v(" "),r("p",[r("strong",[a._v("Rate this Article:")])]),a._v(" "),r("p",[a._v("0.00")]),a._v(" "),r("p",[r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),a._v(" "),r("p",[a._v("Approved for Versions:4.0 to 4.7.5")]),a._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[a._v("#")]),a._v(" Contents")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Genel_Bak.C4.B1.C5.9F"}},[a._v("1 Genel Bakış")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#Blueprint_Haz.C4.B1rlama"}},[a._v("2 Blueprint Hazırlama")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Eventler"}},[a._v("2.1 Eventler")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#Trace_Hit_Sonucu_ve_Odak_Mesafesi"}},[a._v("2.2 Trace Hit Sonucu ve Odak Mesafesi")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#Post_Process_Ayarlar.C4.B1"}},[a._v("2.3 Post Process Ayarları")])])])]),a._v(" "),r("li",[r("a",{attrs:{href:"#Sonu.C3.A7_ve_Notlar"}},[a._v("3 Sonuç ve Notlar")])])]),a._v(" "),r("h2",{attrs:{id:"genel-bakis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#genel-bakis"}},[a._v("#")]),a._v(" Genel Bakış")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:DoF_5.jpg"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/e9/DoF_5.jpg",alt:"DoF 5.jpg"}})])]),a._v(" "),r("p",[r("strong",[a._v("Dinamik Odak Derinliği")]),a._v(" FPS oyunlarında şarjör değiştirirken veya gez & arpacıktan nişan alırken(ironsight) görüş alanının kalanının netliğini düşürmeye yarayan bir efekttir. Oyun dışında sahnelerinizde screenshot alırken veya animasyon kaydederken de sürekli post process değerleriyle uğraşmanıza gerek kalmadan odaklama yapmanızı sağlar.")]),a._v(" "),r("p",[a._v("Aşağıda bu efekti "),r("strong",[a._v("TP_FirstPersonBP")]),a._v(" örnek projesinin oyuncu kamerasına nasıl entegre edebileceğinizi anlatacağım. Sonra buradan yola çıkarak sistemi istediğiniz kameraya uygulayabilirsiniz.")]),a._v(" "),r("h2",{attrs:{id:"blueprint-hazirlama"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blueprint-hazirlama"}},[a._v("#")]),a._v(" Blueprint Hazırlama")]),a._v(" "),r("p",[a._v("Hazırlayacağımız Blueprint kodunun tamamı şu şekilde olacak:")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:DoF_6.JPG"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/6/6e/DoF_6.JPG/360px-DoF_6.JPG",alt:"DoF 6.JPG"}})])]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:DoF_6.JPG",title:"Enlarge"}},[r("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),a._v(" "),r("p",[a._v("Şimdi detaya girelim.")]),a._v(" "),r("h3",{attrs:{id:"eventler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eventler"}},[a._v("#")]),a._v(" Eventler")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:DoF_7.JPG"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/21/DoF_7.JPG",alt:"DoF 7.JPG"}})])]),a._v(" "),r("p",[r("strong",[a._v("Event Tick")]),a._v(" ve "),r("strong",[a._v("Input(Right Mouse Button)")]),a._v(" olmak üzere iki adet event kullanacağız. Bu efektin sürekli aktif olmasını istemediğimiz için sağ fare tuşunu(Right Mouse Button) kullanarak kameradan doğrusal bir çizgi(line trace) ateşleyeceğiz, bu da bize odak noktasında bir obje varsa hangi obje ve nerede olduğunu verecek. Sağ fare tuşunu bıraktığımızda ise Timeline'ı geriye sararak odaklama efektini durduracak. Takip eden bölümlerde göreceğimiz üzere Event Tick aynı zamanda kameranın post process ayarlarını güncelleyecek.")]),a._v(" "),r("p",[a._v("Trace Distance isimli node kalabalık olmasın diye daraltılmış(Collapse) bir gruptur. Açılmış halini aşağıda görebilirsiniz:")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:Collapsed_TraceDistance.JPG"}},[r("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/0/0f/Collapsed_TraceDistance.JPG/720px-Collapsed_TraceDistance.JPG",alt:"Collapsed TraceDistance.JPG"}})])]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:Collapsed_TraceDistance.JPG",title:"Enlarge"}},[r("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),a._v(" "),r("p",[a._v("Return Value 1 kameranın konumu, 5000 ise takip edeceğimiz(Line Trace ile) maksimum uzaklıktır.")]),a._v(" "),r("h3",{attrs:{id:"trace-hit-sonucu-ve-odak-mesafesi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trace-hit-sonucu-ve-odak-mesafesi"}},[a._v("#")]),a._v(" Trace Hit Sonucu ve Odak Mesafesi")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:DoF_8.JPG"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/2a/DoF_8.JPG",alt:"DoF 8.JPG"}})])]),a._v(" "),r("p",[a._v("0.0'dan 0.5'e yükselen float track'i olan 1 saniye uzunluğunda bir Timeline kullanacağız. Bu aynı zamanda efekti açıp kapatmaya yarayacak. Her tick(işlemci zamanı) yaptırdığımız Line Trace bize bir boolean değişkeni verir. Boolean doğru(True) ise Blueprint'teki işlemlerimiz devam eder, yanlış(False) ise efekti durdurmak için Timeline başa sarılır.")]),a._v(" "),r("p",[a._v("Eğer Line Trace bir objeye isabet ederse çıkan sonucu açarız(Break Hit Result) ve oradan temas konumunu(Hit Location) alırız. Kamera ve temas noktası arasındaki mesafeyi hesaplamak için aşağıda görmüş olduğunuz makroyu kullanacağız:")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:FocusDistance_Macro.JPG"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/83/FocusDistance_Macro.JPG",alt:"FocusDistance Macro.JPG"}})])]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:FocusDistance_Macro.JPG",title:"Enlarge"}},[r("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),a._v(" "),r("p",[a._v("Veya Vector Length node'unu kullanabilirsiniz. Kameranın konumunu odak noktasının konumundan çıkartın(Vector > Subtract) ve çıkan sonucu Vector Length'e bağlayın. Böylece yine aynı mesafeyi elde edebilirsiniz.")]),a._v(" "),r("p",[a._v("Şimdi istediğimiz verilere sahip olduğumuza göre bu verileri kameranın odak derinliği(depth of field) ayarlarını değiştirmek için kullanabiliriz.")]),a._v(" "),r("h3",{attrs:{id:"post-process-ayarlari"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#post-process-ayarlari"}},[a._v("#")]),a._v(" Post Process Ayarları")]),a._v(" "),r("p",[r("a",{attrs:{href:"/File:DoF_9.JPG"}},[r("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/9/9e/DoF_9.JPG",alt:"DoF 9.JPG"}})])]),a._v(" "),r("p",[a._v("Önce kameranın post process ayarlarını alacağız, bu da odak mesafeleri arasındaki fark fazla ise yumuşak bir geçiş olmasını sağlayacak son odak mesafesi(last focal distance) değerini verecek.")]),a._v(" "),r("p",[a._v("Break/Make post process node'larını çıkartmak için;")]),a._v(" "),r("ol",[r("li",[a._v("Önce kameranızın değişkenini çağırın. "),r("strong",[a._v("Get First Person Camera")])]),a._v(" "),r("li",[a._v("Kamera değişkeninin çıkışından imleci sürükleyip açılan menüden post process ayarlarını alın. "),r("strong",[a._v("Get Post Process Settings")])]),a._v(" "),r("li",[a._v("Post process ayarlayından sürükleyin ve "),r("strong",[a._v("Break and Make PostProcessSettings")]),a._v(" node'larını göreceksiniz.")])]),a._v(" "),r("p",[a._v("Şimdi Break Postprocesssettings node'unun Details panelinden sadece Depth of Field Focal Distance ayarını etkinleştirin. Node üzerinde daha rahat çalışabilmeniz için bütün ayarları kapatıp(Details panelinden) sadece ihtiyacınız olanları etkinleştirmeniz iyi olur. Depth of Field Focal Distance değerini alıp Last Focus isimli bir değişkene dönüştürdüğümüz saman(Set) bu değer son odak mesafemiz olacaktır. Son olarak, son odak mesafesi ve temas noktası arasında yumuşak bir geçiş elde etmek için "),r("strong",[a._v("FInterp To")]),a._v(" node'unu kullanacağız.")]),a._v(" "),r("h2",{attrs:{id:"sonuc-ve-notlar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sonuc-ve-notlar"}},[a._v("#")]),a._v(" Sonuç ve Notlar")]),a._v(" "),r("p",[a._v("Anlatılan ve gördüğünüz herşeyi yaptığınızda sağ fare tuşuna her basışınızda şöyle bir efekt göreceksiniz:")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=rEargI8dNFk",target:"_blank",rel:"noopener noreferrer"}},[a._v("Final Result"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("Bu fonksiyona sahip karakter Blueprinti olan örnek bir projeyi "),r("a",{attrs:{href:"https://drive.google.com/file/d/0B0LlbsIm3HuuTzNQZUJSQmkzR0k/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[a._v("buradan")]),r("OutboundLink")],1),a._v(" indirebilirsiniz.")]),a._v(" "),r("p",[r("strong",[a._v("Notlar:")])]),a._v(" "),r("ul",[r("li",[a._v("Interp Speed(geçiş hızı) değerini kullanmak isteğe bağlıdır ama kullanılmasını tavsiye ederim.")]),a._v(" "),r("li",[a._v("Near ve Far Transition değerlerini istdiğiniz gibi belirleyebilirsiniz. Daha yumuşak bir geçiş için değere ekleyin(Add), keskin bir geçiş için değerden çıkartın(Subtract.)")])]),a._v(" "),r("p",[a._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Dynamic_Depth_of_Field_TR&oldid=14726",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.unrealengine.com/index.php?title=Dynamic_Depth_of_Field_TR&oldid=14726"),r("OutboundLink")],1),a._v('"')]),a._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[a._v("Categories")]),a._v(":")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[a._v("Tutorials")])]),a._v(" "),r("li",[r("a",{attrs:{href:"/Category:Blueprint",title:"Category:Blueprint"}},[a._v("Blueprint")])]),a._v(" "),r("li",[r("a",{attrs:{href:"/index.php?title=Category:T%C3%BCrk%C3%A7e&action=edit&redlink=1",title:"Category:Türkçe (page does not exist)"}},[a._v("Türkçe")])])]),a._v(" "),r("p",[a._v("Hidden category:")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[a._v("Templates")])])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);