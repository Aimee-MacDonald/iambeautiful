var el_prints = document.getElementById("prints");

var url_prints = [
  "FLOWER_IN_THE_DESERT_1.jpg",
  "FLOWER_IN_THE_DESERT_2_copy.jpg",
  "HIMBA_1.jpg",
  "HIMBA_2_copy.jpg",
  "HIMBA_3_copy.jpg",
  "HIMBA_4_copy.jpg",
  "MAASAI_Odyssey_1_copy.jpg",
  "MAASAI_Odyssey_2_copy.jpg",
  "Maasai_Odyssey_3_copy.jpg",
  "Maasai_Odyssey_4_copy.jpg",
  "Maasai_Odyssey_5_copy.jpg",
  "Maasai_Odyssey_6_copy.jpg",
  "PEOPLE_OF_THE_RAIN_1_copy.jpg",
  "PEOPLE_OF_THE_RAIN_2_copy.jpg",
  "PEOPLE_OF_THE_RAIN_3_copy.jpg",
  "PEOPLE_OF_THE_RAIN_4_copy.jpg"
]
/*
var url_prints = [
  "https://imgur.com/omN38Za",
  "https://imgur.com/5NOH5c6",
  "https://imgur.com/UhaPolz",
  "https://imgur.com/UecNTPX",
  "https://imgur.com/vaS969c",
  "https://imgur.com/afYIDtR",
  "https://imgur.com/iUIcTGe",
  "https://imgur.com/Qbj2Yjb",
  "https://imgur.com/hukvpQV",
  "https://imgur.com/EmCpxpf",
  "https://imgur.com/TdwXfFs",
  "https://imgur.com/1EhTX27",
  "https://imgur.com/iNNqzJy",
  "https://imgur.com/ACuc92j",
  "https://imgur.com/Nh68MaA",
  "https://imgur.com/wZt2rod",
];
*/

for(var i = 0; i < url_prints.length; i++){
  var el_print = document.createElement("div");
  el_print.classList = "print";
  el_print.style.backgroundImage = "url(/images/temp/" + url_prints[i] + ")";
  el_prints.append(el_print);
}
