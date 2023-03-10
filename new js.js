let playbutton = document.getElementById("playandpause")
let songnames = document.getElementById("songnames")
let backward = document.getElementById("backward")
let forward = document.getElementById("forward")
let song = new Audio("songs/01 - Mastaaru Mastaaru.mp3")
let images = document.getElementById("image");
let range = document.getElementById("range")
let changingbg = document.getElementsByClassName("names")
let clock = document.getElementById("clock") 
console.log(clock)
let timeinput=document.getElementById("timeinput")
let songbutton =  Array.from(document.getElementsByClassName("playbutton"))
let names = Array.from(document.getElementsByClassName("names"))
let startingtime = document.getElementById("startingtime")
let endingtime = document.getElementById("endingtime")
range.value = parseInt(0);
let songlist = [
   {
      songname: "Mastaaru Mastaaru", songpath: "songs/01 - Mastaaru Mastaaru.mp3", songimg: "images/Mastaaru.bmp"
   },
   { songname: "Dhoom Dhaam Dhosthaan", songpath: "songs/02 - Dhoom Dhaam Dhosthaan.mp3", songimg: "images/Dhoom.bmp" },
   { songname: "Nee Kalle Diwali", songpath: "songs/03 - Nee Kalle Diwali.mp3", songimg: "images/Gaalodu.bmp" },
   { songname: "Boss Party", songpath: "songs/04 - Boss Party.mp3", songimg: "images/BossParty.bmp" },
   { songname: "Jai Balayya ", songpath: "songs/05 - Jai Balayya Mass Anthem.mp3", songimg: "images/Jai Balayya.bmp" },
   { songname: "Malli Malli", songpath: "songs/06 - Malli Malli.mp3", songimg: "images/Agent.bmp" },
   { songname: "Darshana", songpath: "songs/07 - Darshana.mp3", songimg: "images/Dharshana.bmp" },
   { songname: "Mawa Bro", songpath: "songs/08 - Mawa Bro.mp3", songimg: "images/MavaBro.bmp" },
   { songname: "Sye Dhalapathi", songpath: "songs/09 - Sye Dhalapathi.mp3", songimg: "images/Sye Dhalapath.jpg" },
   { songname: "Enno Ratrulosthayi", songpath: "songs/10 - Enno Ratrulosthayi.mp3", songimg: "images/Ennorathrulu.bmp" },
]

let size = 0
let imagenumber = 0
let changingbgfuntion = () => {
   changingbg[size].classList.add("namescss")
}
let makeallclear = () => {
   names.forEach((element, i) => {
      element.getElementsByTagName("i")[0].classList.remove('fa-pause-circle-o')
      element.getElementsByTagName("i")[0].classList.add('fa-play-circle-o')
      playbutton.classList.remove('fa-play-circle-o')
      playbutton.classList.add('fa-pause-circle-o')
      changingbg[i].classList.remove("namescss")

   })
}
names.forEach((element, i) => {
   element.getElementsByTagName("span")[0].innerText = songlist[i].songname
   let address = songlist[i].songpath
   let image = songlist[i].songimg

   element.getElementsByTagName("span")[0].addEventListener("click", () => {
      makeallclear();
      size = i
      imagenumber = i

      element.getElementsByTagName("i")[0].classList.add('fa-pause-circle-o')
      element.getElementsByTagName("i")[0].classList.remove('fa-play-circle-o')
      changingbg[size].classList.add("namescss")

      address = songlist[i].songpath
      song.src = address
      image = songlist[i].songimg
      images.src = image
      song.play()
   })

})
backward.addEventListener("click", () => {
   if (size == 0) {
      size = size = 9
      imagenumber = imagenumber = 9
   }
   else {
      size -= 1
      imagenumber -= 1
   }
   address = songlist[size].songpath
   song.src = address
   image = songlist[imagenumber].songimg
   images.src = image
   makeallclear();
   pauseandplaybutton();
   changingbgfuntion()


})
forward.addEventListener("click", () => {
   if (size == 9) {
      size = size = 0
      imagenumber = imagenumber = 0
   }
   else {
      size += 1
      imagenumber += 1
   }
   address = songlist[size].songpath
   song.src = address
   image = songlist[imagenumber].songimg
   images.src = image
   makeallclear();
   pauseandplaybutton();
   changingbgfuntion()

})
let pauseandplaybutton =
   () => {
      if (song.paused || song.currentTime <= 0) {
         song.play();
         range.value = "0"
         playbutton.classList.add('fa-pause-circle-o')
         playbutton.classList.remove('fa-play-circle-o')

         document.getElementsByClassName("playbutton")[size].classList.remove("fa-play-circle-o")
         document.getElementsByClassName("playbutton")[size].classList.add("fa-pause-circle-o")
         changingbgfuntion()
      }
      else {
         song.pause();
         playbutton.classList.remove('fa-pause-circle-o')
         playbutton.classList.add('fa-play-circle-o')
         document.getElementsByClassName("playbutton")[size].classList.add("fa-play-circle-o")
         document.getElementsByClassName("playbutton")[size].classList.remove("fa-pause-circle-o")
         changingbgfuntion()
      }

   }

playbutton.addEventListener("click", pauseandplaybutton)

song.addEventListener('timeupdate', () => {
   percentage = parseInt(song.currentTime / song.duration
      * 100)
   range.value = percentage
         if(percentage==100)
    { 
      makeallclear();
      size = size+1;
      imagenumber = imagenumber+1;
      songbutton[size].classList.remove("fa-play-circle-o")
      songbutton[size].classList.add("fa-pause-circle-o")
      changingbg[size].classList.add("namescss")
      address = songlist[size].songpath
      song.src = address
      image = songlist[imagenumber].songimg
      images.src = image
      song.play();
    }
   
  
   let  minutes = Math.floor(song.currentTime / 60);
   let  secondsRemainder = Math.floor((song.currentTime % 60));
   if(secondsRemainder<=9){
      secondsRemainder=`0${secondsRemainder}`
   }
   let  duration = `${minutes}:${secondsRemainder}`;
   let  minute = Math.floor(song.duration / 60);
   let  secondsRemainders = Math.floor((song.duration % 60));
   if(secondsRemainders<=9){
      secondsRemainders=`0${secondsRemainders}`
   }
   let  durations= `${minute}:${secondsRemainders}`;

   startingtime.innerText = duration
   endingtime.innerText = durations
})
range.addEventListener("change", () => {
   song.currentTime = range.value * song.duration / 100 
  
})
songbutton.forEach((element,i)=>{
   element.addEventListener('click',()=>{
      if (song.paused || song.currentTime <= 0) {
         song.play();
         range.value = "0"
         playbutton.classList.add('fa-pause-circle-o')
         playbutton.classList.remove('fa-play-circle-o')
         document.getElementsByClassName("playbutton")[size].classList.remove("fa-play-circle-o")
         document.getElementsByClassName("playbutton")[size].classList.add("fa-pause-circle-o")
         changingbgfuntion()
      }
      else {
         song.pause();
         playbutton.classList.remove('fa-pause-circle-o')
         playbutton.classList.add('fa-play-circle-o')
         document.getElementsByClassName("playbutton")[size].classList.add("fa-play-circle-o")
         document.getElementsByClassName("playbutton")[size].classList.remove("fa-pause-circle-o")
         changingbgfuntion()
      } 
   })
})

clock.addEventListener("click",()=>{
 if(timeinput.style.display=="none"){
   timeinput.style.display="block"
  
 }
 else{
   timeinput.style.display="none"
   
 }
});

timeinput.value=null
timeinput.addEventListener("keyup", function(event) {
     if (event.key === "Enter") {
       var value = timeinput.value;
       console.log(value);
     }
   });
   
