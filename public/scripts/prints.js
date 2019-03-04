var el_prints = document.getElementById("prints");

var url_prints = [
  "https://i.imgur.com/omN38Za.jpg",
  "https://i.imgur.com/5NOH5c6.jpg",
  "https://i.imgur.com/UhaPolz.jpg",
  "https://i.imgur.com/UecNTPX.jpg",
  "https://i.imgur.com/vaS969c.jpg",
  "https://i.imgur.com/afYIDtR.jpg",
  "https://i.imgur.com/iUIcTGe.jpg",
  "https://i.imgur.com/Qbj2Yjb.jpg",
  "https://i.imgur.com/hukvpQV.jpg",
  "https://i.imgur.com/EmCpxpf.jpg",
  "https://i.imgur.com/TdwXfFs.jpg",
  "https://i.imgur.com/1EhTX27.jpg",
  "https://i.imgur.com/iNNqzJy.jpg",
  "https://i.imgur.com/ACuc92j.jpg",
  "https://i.imgur.com/Nh68MaA.jpg",
  "https://i.imgur.com/wZt2rod.jpg",
];

for(var i = 0; i < url_prints.length; i++){
  var el_print = document.createElement("div");
  el_print.classList = "print";
  el_print.style.backgroundImage = "url(" + url_prints[i] + ")";
  el_prints.append(el_print);
}
