let playbutton = document.getElementById("playandpause")
let backward = document.getElementById("backward")
let forward = document.getElementById("forward")
let song = new Audio("songs/01 - Mastaaru Mastaaru.mp3")
let images = document.getElementById("image");
let range = document.getElementById("range")
range.value=parseInt()
let names = Array.from(document.getElementsByClassName("names"))

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
   { songname: "Sye Dhalapathi", songpath: "songs/09 - Sye Dhalapathi.mp3", songimg: "images/Varasudu.bmp" },
   { songname: "Enno Ratrulosthayi", songpath: "songs/10 - Enno Ratrulosthayi.mp3", songimg: "images/Ennorathrulu.bmp" },
]

let makeallclear = () => {
   names.forEach((element, i) => {
      element.getElementsByTagName("i")[0].classList.remove('fa-pause-circle-o')
      element.getElementsByTagName("i")[0].classList.add('fa-play-circle-o')
      playbutton.classList.remove('fa-play-circle-o')
      playbutton.classList.add('fa-pause-circle-o')
      
   })
}



names.forEach((element, i) => {
   let a = 0;
   element.getElementsByTagName("span")[0].innerText = songlist[i].songname
   let address = songlist[i].songpath
   let image = songlist[i].songimg
   
   element.addEventListener("click", (e) => {
      
      
      let  index = i
      let  cover = i
      
      forward.addEventListener("click", () => {
         makeallclear();
         console.log((element+1))
         if(index==9)
         {
            index=-1;
            cover=-1;
         }
         
         address = songlist[index+= 1].songpath
         song.src = address
         song.play()
         image = songlist[cover+=1].songimg
         
         images.src = image
         
         
         
      })
      backward.addEventListener("click", () => {
         makeallclear();
         if(index==0)
         {
            index=10;
            cover=10;
         }
         
         address = songlist[index-= 1].songpath
         song.src = address
         song.play()
         image = songlist[cover-=1].songimg
         images.src = image
      })
      makeallclear();
      
      address = songlist[i].songpath
      song.src = address
      image = songlist[i].songimg
      
      images.src = image
      song.play()
      element.getElementsByTagName("i")[0].classList.add('fa-pause-circle-o')
      element.getElementsByTagName("i")[0].classList.remove('fa-play-circle-o')
      
      
   })
   
})


names.forEach((element, i) => {
   
   
   playbutton.addEventListener("click", () => {
      
      let  index = i
      let  cover = i
      
      forward.addEventListener("click", () => {
         makeallclear();
         
         if(index==9)
         {
            index=0;
            cover=0;
         }
         
            address = songlist[index+= 1].songpath
            song.src = address
            song.play()
            image = songlist[cover+=1].songimg
            
            images.src = image
            
            
            
         })
         backward.addEventListener("click", () => {
            makeallclear();
         if(index==0)
         {
            index=10;
            cover=10;
         }
         
         address = songlist[index-= 1].songpath
         song.src = address
         song.play()
         image = songlist[cover-=1].songimg
         images.src = image
      })
      makeallclear();
    
      song.play()
      element.getElementsByTagName("i")[0].classList.add('fa-pause-circle-o')
      element.getElementsByTagName("i")[0].classList.remove('fa-play-circle-o')
   })
   
})
let pausebutton=getElementById("fa-play-circle-o")

pausebutton.addEventListener("click",()=>{
   // if (song.paused || song.currentTime <= 0) {
      //    song.play();
      //    playbutton.classList.remove('fa-play-circle-o')
      //    playbutton.classList.add('fa-pause-circle-o')
      //    console.log("if condition")
      // }
   
      song.pause();
      makeallclear();
      range.value="0"
      playbutton.classList.remove('fa-pause-circle-o')
      playbutton.classList.add('fa-play-circle-o')
      console.log("else condition")
      
      
   }) 
   
   song.addEventListener('timeupdate', () => {
      percentage = parseInt(song.currentTime / song.duration
      * 100)
      range.value = percentage
   })
   range.addEventListener("change", () => {
      song.currentTime = range.value * song.duration / 100
      
   })
      //  if(percentage==100)
   //  { 
   //    makeallclear();
   //    size = size+1;
   //    imagenumber = imagenumber+1;
   //    songbutton[size].classList.remove("fa-play-circle-o")
   //    songbutton[size].classList.add("fa-pause-circle-o")
   //    changingbg[size].classList.add("namescss")
   //    address = songlist[size].songpath
   //    song.src = address
   //    image = songlist[imagenumber].songimg
   //    images.src = image
   //    song.play();
   //  }
   
   
   