const musicData = [
    {
        title: "Zúzbiziusz Szongsz",
        artist: "Virkelvido Music",
        year: 2025,
        cover: "/static/images/cover-zsz.png",
        isAI: false
    },
    {
        title: "Szarró Fosró",
        artist: "Virkelvido Music",
        year: 2024,
        cover: "/static/images/cover-szf.jpg",
        isAI: false
    },
    {
        title: "utálom a c********t",
        artist: "Virkelvido Music",
        year: 2024,
        cover: "/static/images/cover-uac.png",
        isAI: true
    },
    {
        title: "UTÁLOK MINDENT",
        artist: "Virkelvido Music",
        year: 2024,
        cover: "/static/images/cover-utm.png",
        isAI: true
    },
    {
        title: "Vicimici nóták",
        artist: "Virkelvido Music",
        year: 2023,
        cover: "/static/images/cover-vn.jpg",
        isAI: false
    },
    {
        title: "Palacsantium Szongz",
        artist: "Virkelvido Music",
        year: 2022,
        cover: "/static/images/cover-psz.jpg",
        isAI: false
    },
    {
        title: "Rímtelen Fluorid",
        artist: "Virkelvido Music",
        year: 2022,
        cover: "/static/images/cover-rf.png",
        isAI: false
    }
];

// OG taget a 2023 előtti tagoknak adtam meg
const memberData = [
    {
        name: "terdik",
        role: "alapító",
        profilePic: "/static/images/pfp-terdik.jpg",
        isOG: true,
        socials: [
            { link: "https://x.com/terdikoff", icon: "bx bxl-twitter" },
            { link: "https://github.com/terdik36", icon: "bx bxl-github" },
            { link : "https://yoursit.ee/terdik", icon: "bx bx-globe" }
        ]
    },
    {
        name: "GalBeni7",
        role: "alapító, zenész",
        profilePic: "/static/images/pfp-galbeni.png", // nem volt jobb képem, remélem tetszik
        isOG: true,
        socials: [
            { link: "https://www.youtube.com/@galbeni7gd", icon: "bx bxl-youtube" },
        ]
    },
    {
        name: "sonka",
        role: "zenész",
        profilePic: "/static/images/pfp-sonka.png",
        isOG: true,
        socials: [
            { link: "https://x.com/sonkadev", icon: "bx bxl-twitter" },
            { link: "https://github.com/sonkadev", icon: "bx bxl-github" },
            { link: "https://sonka.lol", icon: "bx bx-globe" }
        ]
    },
    {
        name: "liba",
        role: "kiadó, sm manager",
        profilePic: "/static/images/pfp-liba.png",
        isOG: false, // :(
        socials: [
            { link: "https://x.com/chlkrisz", icon: "bx bxl-twitter" },
            { link: "https://github.com/chlkrisz", icon: "bx bxl-github" },
            { link: "https://liba.lol", icon: "bx bx-globe" }
        ]
    }
];

const musicList = document.getElementById('music-list');
musicData.forEach(music => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="card">
            ${music.isAI ? '<span>AI</span>' : ''}
            <img src="${music.cover}" alt="album cover for ${music.title}">
            <h2>${music.title}</h2>
            <p>${music.artist}</p>
            <p>${music.year}</p>
        </div>
    `;
    musicList.appendChild(li);
});

const membersList = document.getElementById('members-list');
memberData.forEach(member => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="card">
            ${member.isOG ? '<span>OG</span>' : ''}
            <img src="${member.profilePic}" alt="profile pic of ${member.name}">
            <h2>${member.name}</h2>
            <p>${member.role}</p>
            <div class="socials">
                ${member.socials.map(social => `
                    <a href="${social.link}" target="_blank">
                        <i class="${social.icon}"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
    membersList.appendChild(li);
});
