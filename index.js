function clock(){
    //Mendeklarasikan Seconds,minute, Hours pada HTML
    let seconds = document.getElementById('seconds');
    let minute = document.getElementById('minute');
    let hour = document.getElementById('hour');
    let ampm = document.getElementById('ampm');

    //Memanggil Method Date Untuk Mendapatkan Waktu
    let s = new Date().getSeconds();
    seconds.innerHTML = s;

    let m = new Date().getMinutes();
    minute.innerHTML= m;

    let h = new Date().getHours();
    hour.innerHTML= h;

    //Menambahkan 0 jika hours dibawah 10
    //   h = (h < 10) ? '0' + h : h;
    //   m = (m < 10) ? '0' + m : m;
    //   s = (s < 10) ? '0' + s : s;
    
    h =  String(h).padStart(2,'0');
    m =  String(m).padStart(2,'0');
    s =  String(s).padStart(2,'0');


    //Membuat Fungsi AM AP jika jam lebih dari 12 maka PM
    let am = 'AM';
    if(h > 12){
        h = h - 12;
        let pm = 'PM';
    }
    ampm.innerHTML = am;
    
}

let interval = setInterval(clock, 1000);