// iframe video

const detailVideo = document.querySelector(".content");
const id = JSON.parse(localStorage.getItem("id"));

detailVideo.innerHTML = `<iframe
 width="100%"
 height="500px"
 src="https://www.youtube.com/embed/${id}"
 title="YouTube video player"
 frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen
></iframe>`;

// Update info
// Title
const titleConatiner = document.querySelector(".description__title");
const title = JSON.parse(localStorage.getItem("title"));
titleConatiner.innerHTML = `<div class="description__title-name">${title}</div>`;
//Avatar
const avatarContainer = document.querySelector(".user__img-link");
const avatar = JSON.parse(localStorage.getItem("avatar"));
avatarContainer.innerHTML = `<img src="${avatar}" class="img-thumbnail thumbnail-avt" alt="../img/logoyb.png" />`;
//Name
const nameContainer = document.querySelector(".user__info");
const nameuser = JSON.parse(localStorage.getItem("name"));
nameContainer.innerHTML = `
    <a href="#" class="nav-link user__info-link">${nameuser}</a>
    <span class="user__info-views">937K subscribers</span>
`;

// Click Subcribers
const btnSub = document.querySelector(".subscribed__btn");
const iconshow = document.querySelector(".subscribed__icon");

function showSubscriber() {
    btnSub.classList.toggle("subscribing__btn");
    iconshow.classList.toggle("subscribed__icon-show");
}

btnSub.addEventListener("click", showSubscriber);

function ringNotify() {
    iconshow.classList.toggle("fa-solid");
}

iconshow.addEventListener("click", ringNotify);
// Micro
const btnMicro = document.querySelector(".btn-micro");
const microShow = document.querySelector(".micro-show");
const closemicro = document.querySelector(".micro__close");
const microWarn = document.querySelector(".micro");

function openMicro() {
    microShow.classList.add("open");
}

function closeMicro() {
    microShow.classList.remove("open");
}

btnMicro.addEventListener("click", openMicro);
closemicro.addEventListener("click", closeMicro);
microShow.addEventListener("click", closeMicro);

microWarn.addEventListener("click", function (e) {
    e.stopPropagation();
});
