const cover = document.getElementById("cover");
const openGift = document.getElementById("openGift");
const letter = document.getElementById("letter");
const goSong = document.getElementById("goSong");
const song = document.getElementById("song");

openGift.addEventListener("click", () => {
  cover.classList.add("opening");
  setTimeout(() => {
    letter.scrollIntoView({behavior:"smooth", block:"start"});
  }, 650);
});

goSong.addEventListener("click", () => {
  song.scrollIntoView({behavior:"smooth", block:"start"});
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});

document.querySelectorAll(".paper,.song-card,.ending").forEach(el=>{
  el.classList.add("reveal");
  observer.observe(el);
});
