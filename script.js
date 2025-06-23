const kataKataBucin = [
  "Haii indah🥹,dulu waktu kita belum kenal,aku kalo kamu buat sg suka suka penasaran banget tau sama kamu 😅 , eh tiba-tiba pas itu kamu nanyain aku ke cindy dan di situ aku belum berani ngechat kanu tapi aku di situ mau kok ngechat kamu jujur di situ aku seneng banget padahal sampe aku nanya ke semua temen aku sampe tmn salber anak trisakti aku tanyain,dari awal kamu ngechat cindy aku takut, gengsi trs aku insecure yang kaya dulu, dan sekarang aku ngerti semuanya ternyata ketakutan aku semuanya beneran terjadi,dan sekarang aku cuman buat itu semua motivasi aku😔😭 ",
  "Kamu inget ga dulu kita chatan sampe aku ngajakin ketemu di kampus D tapi aku takut dan aku malu sama kamu sampe lala marah sama aku wkwkwkwk 😂 dan akhrinya kamu juga ikut bt juga wkwkwk,tapi akhirnya kita ketemu pertama kali di rmh elen trs kamu izin sama momy pulangnya sama aku,dan kita muter muter dulu yaa terus aku nganterin kamu sampe depan rmh, sampe momy kamu ngintip dari jendela wkwkwk sama sampe aku balik lagi nganterin casan kamu lucu yaa pertama kali kita ketemu wkwkwk,kamu sampe ngode aku mau di peluk ga wkwkwk padahal kita mlmnya udh ngomongin itu  😂 ",
  "Sampe kamu ultah aku di ajak ke rmh kamu juga wkwkwk, terus aku ultah kamu ngebela belain main sama aku juga ya kita nonton di ccm trs kita ke bogor,jujur aku seneng banget aku terharu banget di suprisesin sama kamu terus kamu sampe ngasih pesan sampe ngerelain bikin lipstik di kertas yaa jujur aku seneng banget tau di situ ga pernah ada orang yg gituin aku,pengen deh semuanya ke ulang tapi ga bisa,tapi itu bakalan jadi moment yang paling aku ingett terus dan aku bakalan nyimpen kotak itu juga aku bakalan jaga baik baik pemberian dari kamu,maaf ya kamu ketemu sama aku yang ga punya apa apa 🥺  ",
  "makasih yaa indahh udh selalu ada buat aku, mungkin kamu sekarang bingung sama diri kamu dan ingin mau nurututin kata penasaran kamu juga, ya mungkin kamu dulu juga penasaran sama aku,oh iya kamu pernah ngomongkan di dlm diri kamu nih orang setia makannya di sakitiin mulu,yaa aku sebenernya dari dulu hanya cukup satu cewe,aku bukan kaya orang yg kamu bilang laki laki sama aja yang sukanya nyakitin perempuan dlln, aku cuman cowo yang ga punya apa apa doang,aku cuman bisa mencintai wanita dengan setulus hati aku,menyenangkan wanita itu dengan yang aku punya dan yang aku bisa,aku juga ga bakalan nyakitin siapapun lagi aku cukup sampai di sini  😊",
  "AKu kangen sama kamu indah 😭 ,yang selalu perduli sama aku,sayang sama aku,yang selalu ngingetin aku dari hal apapun itu,aku kangen sama kamuu,wkwkwk dulu kita sering ribut sama sama bipolar dan lain lain,tapi sekarang hambar tanpa itu semua wkwkwk,sekarang udh ga ada yang nge hati hatiin yang ngingetin,ga ada sayang sayangan udh ga adda vc kaya dulu lagi,ga ada sleep call,ga ada byebye panjang lagi,ga ada yang ngingetin aku di jalan, ga ada yang nemnin aku nugas lagi,ga ada yang nungguin chat aku lagi yang kalo ga di bales langsung marah wkwkwk,ga ada yang ngeubah aku untuk kebiasaan keluar malem lagi,aku kangen di kasih pap sama kamu lagi dan kita ga akan pernah ketemu lagii,tapi semua itu udh pada hilang bertahap yaa  😭",
  "Aku sayang kamu sama kamu indah💖.aku tulus sayang sama kamu indahh.aku mau selalu sama kamu lagi.aku mau kok kita balikan lagi kaya seperti dulu kita berubah menjadi versi yang terbaik bareng bareng kita saling nyemangatin,kamu nyemangatin aku buat bisa nunjukin semuanya ke papah kamu momy dan temen temen kamu,dan kamu juga sama harus bisa tunjukin ke siapa pun itu,tapi mungkin kamu udh ga ada fikiran untuk itu semua juga,kamu mungkin sedang ingin menjalani sama dia juga,tapi gpp kok aku di sini bakalan selalu nungguin kamu,kapan pun kamu mau balik lagi ke aku tinggal ngomong aja ke aku,kamu kangen sama aku,kamu lagi kenapa kenapa lagi kesel lagi sakit atau pun lagi apa semuanya cerita aja ke aku gpp aku bakalan selalu dengerin kamu kok,yaudah yaa indah makasih buat semuanya inget yaa kata aku terakhir kalo mau balik, balik aja sini,aku masih sayang kok sama kamu,semangat indahhh semoga kamu bahagia yaa indah lovee youuu indahh 🥰🥰💖"
];


let indeks = 0;
let halamanSebelumnya = null;

function mulaiBucin() {
  halamanSebelumnya = "halaman-awal";
  document.getElementById("halaman-awal").classList.add("hidden");
  document.getElementById("halaman-kata").classList.remove("hidden");
  tampilkanKata();

  const audio = document.getElementById("laguCinta");
  audio.volume = 0;
  audio.play();
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
  efekLove();
}

function tampilkanKata() {
  const box = document.getElementById("kataTampil");
  efekBungaJatuh();
  efekLove();

  if (indeks < kataKataBucin.length) {
    box.textContent = kataKataBucin[indeks];
    indeks++;
  } else {
    box.innerHTML = `
      <p style="font-size:1.3em">aku udh ga bisa apa apa lagi,aku cuman bisa kangen doang ke kamu.<br><strong>aku masih sayang sama kamu😘</strong></p>
      <p style="margin-top:20px">💌 Terima kasih udah jadi orang paling spesial buat aku,makasih juga kamu jadi orang yang paling aku sayang juga sama akuu kok.</p>
    `;
  }
}

function tampilkanGaleri() {
  halamanSebelumnya = "halaman-kata";
  document.getElementById("halaman-kata").classList.add("hidden");
  document.getElementById("halaman-galeri").classList.remove("hidden");
  efekLove();
}

function kembaliKeKata() {
  document.getElementById("halaman-galeri").classList.add("hidden");
  document.getElementById("halaman-kata").classList.remove("hidden");
  efekLove();
}

function kembali() {
  document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
  if (halamanSebelumnya) {
    document.getElementById(halamanSebelumnya).classList.remove("hidden");
  } else {
    document.getElementById("halaman-awal").classList.remove("hidden");
  }

  const audio = document.getElementById("laguCinta");
  audio.pause();
  audio.currentTime = 0;
  indeks = 0;
  efekLove();
}

function efekBungaJatuh() {
  const bunga = document.createElement("div");
  bunga.classList.add("bunga-jatuh");
  bunga.style.left = Math.random() * 100 + "vw";
  bunga.style.animationDuration = Math.random() * 2 + 3 + "s";
  bunga.style.opacity = Math.random();
  bunga.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
  document.body.appendChild(bunga);
  setTimeout(() => bunga.remove(), 5000);
}

function efekLove() {
  const love = document.createElement("div");
  love.textContent = "💖";
  love.classList.add("love-terbang");
  love.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(love);
  setTimeout(() => love.remove(), 3000);
}
