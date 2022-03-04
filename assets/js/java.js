// JAVASCRIPT
// Đóng mở sidebar
const menuBtnOpen = document.querySelector(".btn-menu-sm");
const menuBtnClose = document.querySelector(".btn-menu-lg");
const sideBarShow = document.querySelector(".sidebar-show");
const sideBar = document.querySelector(".sidebar");
const smallSideBar = document.querySelector(".small__sidebar");

function openSideBar() {
    sideBar.style.animation = "modalFadeIn ease 0.4s";
    sideBarShow.classList.add("open");
}

function closeSideBar() {
    sideBar.style.animation = "modalFadeOut ease 0.4s";
    setTimeout(() => {
        sideBarShow.classList.remove("open");
    }, 200);
}

menuBtnOpen.addEventListener("click", openSideBar);
menuBtnClose.addEventListener("click", closeSideBar);
sideBarShow.addEventListener("click", closeSideBar);

sideBar.addEventListener("click", function (e) {
    e.stopPropagation();
});

// Content scale video when mouse over
// const listVideo = document.querySelector(".video__content-list");
// const scaleVideos = document.querySelectorAll(".video__content-list-zoom");

// function Scale() {
//     console.log("danh");
// }

// listVideo.addEventListener("onmouseover", Scale);

// set api
const videoCardContainer = document.querySelector(".video__content");

let key_api = "AIzaSyAkUPoGPPsEaMT1sk1xs485VixCtM9l5TI";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
    video_http +
        new URLSearchParams({
            key: key_api,
            part: "snippet",
            chart: "mostPopular",
            maxResults: 48,
            regionCode: "IN",
        })
)
    .then((res) => res.json())
    .then((data) => {
        data.items.forEach((item) => {
            getChannelIcon(item);
        });
    })
    .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(
        channel_http +
            new URLSearchParams({
                key: key_api,
                part: "snippet",
                id: video_data.snippet.channelId,
            })
    )
        .then((res) => res.json())
        .then((data) => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        });
};

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
        <div class="col-md-3 video__content-list" data-id="${data.id}">
            <div class="d-flex video__content-img" style="position: relative; width: 273px; height: 153px">
                <img src="${data.snippet.thumbnails.high.url}" alt="Anh" class="img-thumbnail thumbnail" />
                <span
                    style="
                        bottom: 2%;
                        position: absolute;
                        color: #fff;
                        border: 1px solid #ccc;
                        font-size: 11px;
                        padding: 1px 2px;
                        right: 2%;
                        font-weight: 500;
                        background-color: #000;
                        border-radius: 5px;
                    "
                    >11:52</span

                >
                <span
                    style="
                        bottom: 2%;
                        position: absolute;
                        color: #fff;
                        border: 1px solid #ccc;
                        font-size: 11px;
                        padding: 1px 2px;
                        right: 2%;
                        font-weight: 500;
                        background-color: #000;
                        border-radius: 5px;
                        display:none;
                    "
                    >Keep hovering to play</span

                >
                <div class="video__content-list-zoom flex-column">
                <div class="d-flex" style="position: relative; width: 273px; height: 153px; z-index: 51">
                    <img src="${data.snippet.thumbnails.high.url}" alt="Anh" class="img-thumbnail thumbnail" />
                    <span
                        style="
                            bottom: 2%;
                            position: absolute;
                            color: #fff;
                            border: 1px solid #ccc;
                            font-size: 11px;
                            padding: 1px 2px;
                            right: 2%;
                            font-weight: 500;
                            background-color: #000;
                            border-radius: 5px;
                        "
                        >11:52</span
                    >
                </div>
                <div class="d-flex flex-row">
                    <img src="${data.channelThumbnail}" alt="Anh" class="img-thumbnail thumbnail-avt" />
                    <div class="video__info d-flex flex-column">
                        <a href="#" class="nav-link video__info-title">${data.snippet.title}</a>
                        <div class="d-flex align-items-center">
                            <a href="#" class="nav-link video__info-user">${data.snippet.channelTitle}</a>
                            <i class="fa-solid fa-circle-check" style="font-size: 10px; color: rgb(97, 93, 93)"></i>
                        </div>
                        <div class="d-flex flex-row" style="font-size: 12px; color: rgb(97, 93, 93); padding-left: 16px">
                            <span class="video__info-view">15k views</span>
                            <span class="video__info-day">${data.snippet.publishedAt}</span>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column mb-2">
                    <button type="button" class="btn btn-light mt-2">
                        <i class="fa-solid fa-clock" style="color:rgb(100, 97, 97)"></i>
                        <span style="font-size:12px;color:rgb(100, 97, 97)">WATCH LATER</span>
                    </button>
                    <button type="button" class="btn btn-light mt-2">
                        <i class="fa-regular fa-circle-pause" style="color:rgb(100, 97, 97)"></i>
                        <span style="font-size:12px;color:rgb(100, 97, 97)">ADD TO QUEUE</span>
                    </button>
                </div>
            </div>
            </div>
            <div class="d-flex flex-row">
                <img src="${data.channelThumbnail}" alt="Anh" class="img-thumbnail thumbnail-avt" />
                <div class="video__info d-flex flex-column">
                    <a href="#" class="nav-link video__info-title">${data.snippet.title}</a>
                    <div class="d-flex align-items-center">
                        <a href="#" class="nav-link video__info-user">${data.snippet.channelTitle}</a>
                        <i class="fa-solid fa-circle-check" style="font-size: 12px; color: rgb(97, 93, 93)"></i>
                    </div>
                    <div class="d-flex flex-row" style="font-size: 12px; color: rgb(97, 93, 93); padding-left: 16px">
                        <span class="video__info-view">15k views</span>
                        <span class="video__info-day">${data.snippet.publishedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// active scroll container

const items = document.querySelectorAll(".scroll-container__item");

for (const item of items) {
    item.onclick = function () {
        for (const i of items) {
            i.classList.remove("active");
        }
        item.classList.add("active");
    };
}

// Active side bar

const lists = document.querySelectorAll(".sidebar__item");

for (const list of lists) {
    list.onclick = function () {
        for (const j of lists) {
            j.classList.remove("active__side-bar");
        }
        list.classList.add("active__side-bar");
    };
}

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
// Hover

// JQUERY
// Nhúng video bằng jquery

$(document).on("click", ".video__content-list", function () {
    let getId = $(this).data("id");
    let getTitle = $(this).find(".video__info-title").html();
    let getAvt = $(this).find(".thumbnail-avt").attr("src");
    let getName = $(this).find(".video__info-user").html();
    localStorage.setItem("id", JSON.stringify(getId));
    localStorage.setItem("title", JSON.stringify(getTitle));
    localStorage.setItem("avatar", JSON.stringify(getAvt));
    localStorage.setItem("name", JSON.stringify(getName));
    window.location.href = "./../../item/itemVideo.html";
});
