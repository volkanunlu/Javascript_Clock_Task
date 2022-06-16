let name = prompt ("Kulanıcı Adi Giriniz :") // kullanıcı girişi aldık.
let myname = document.querySelector("#myName") // girilen değeri classa uygun şekilde bağladık.
myname.innerHTML=name // input value olan değeri atamasını gerçekleştirdik.


//html tarafında her time js dosyasının yoluna bak.Yazdığın kodun algılanmama durumu olabilir.

function time ()
{   // burda time atadık sadce bunu verseydik çok fazla detay olup ödevin istediği olmazdı now değerini vermemizin sebebi diğer atamaların burdan bilgi çekmesini sağlamak
    let now = new Date();  
    // hour ekledik
    let hour = now.getHours(); 
    // minute ekledik
    let minute = now.getMinutes(); 
    // second ekledik
    let second = now.getSeconds(); 
    // güne ekstra time atamamızın sebebi aşağıdaki verdiğimiz değerler ile sorunsuz çalışa bilsin diye aksi takdirde çalışmaz
    let d = new Date(); 
    // günleri ekledik
    let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    // id tanımmladık
    let info = document.querySelector("#myClock") 
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    // info.innerHTML= hour + ":" + minute +":" + second + " " + days[d.getDay()]; 

    info.innerHTML=`${hour} : ${minute} : ${second} : ${days[d.getDay()]} `
}
let nows = setInterval(time,100); 