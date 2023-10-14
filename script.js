const movies = [
    {
        name: "Hometown Cha Cha Cha",
        description: "Yoon Hye-jin, an accomplished dentist from Seoul, goes to the idyllic seaside village of Gongjin on her late mother's birthday after her life goes awry. She spontaneously decides to open up a dental clinic, and gets to know jack-of-all-trades Hong Du-sik, also known as Chief Hong...",
        rating: 5.8,
        clasification: "13+",
        image: {
            banner: "./Images/Imagen-Banner.jpg",
            card: "https://pics.filmaffinity.com/El_amor_es_como_el_chachachaa_Serie_de_TV-313904260-large.jpg",
        },
        section: "Recommended",
    },
    {
        name: "The Good Nurse",
        description: "In 2003, Charles Cullen, a nurse, is arrested and has since been dubbed 'The Angel of Death' by the media. In everyone's eyes, Cullen was no merciful killer or monster. He was a favorite son, a husband, father, best friend and celebrity caregiver. Thanks to the hard work of two former detectives and the involvement of a hospital co-worker who puts her life on the line...",
        rating: 3.5,
        clasification: "16+",
        image: {
            banner: "https://img.ecartelera.com/noticias/71000/71073-h4.jpg",
            card: "https://www.aceprensa.com/wp-content/uploads/elementor/thumbs/angel-de-la-muerte-px4ff4kn9ekwhgui340d2aj1d6kfkyqyfmrzgohv5s.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Pinocho",
        description: "The carpenter Gepetto (David Bradley) lives completely alone and isolated in Italy in the 1930s, while fascism is growing around him. Tired of this situation, he decides to change it himself and create a wooden son he will name Pinocchio (Gregory Mann). One night, thanks to a little magic, the wooden doll comes to life and fulfills all of Gepetto's dreams of having...",
        rating: 2.8,
        clasification: "10+",
        image: {
            banner: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/06/pinocho-guillermo-toro-netflix-2734925.jpg?tf=3840x",
            card: "https://cdn.forbes.com.mx/2022/10/Pinocho-Guillermo-del-Toro-691x1024.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Enola Holmes 2",
        description: "Enola Holmes 2 is an announced crime-adventure film directed by Harry Bradbeer (Fleabag), a sequel to the successful Netflix original based on Nancy Springer's saga of novels, which follows the story of Enola Holmes, the teenage sister of British investigator Sherlock Holmes, who discovers that, on her 14th birthday, her mother has disappeared...",
        rating: 4.7,
        clasification: "13+",
        image: {
            banner: "./Images/holmes2.jpg",
            card: "https://pics.filmaffinity.com/Enola_Holmes_2-359981633-large.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Vincenzo",
        description: "At the age of 8, Park Joo-Hyeong was adopted by a family who took him to live in Italy. Much later, now under the name Vincenzo Cassano, he has become a lawyer and works for the Italian mafia as a consigliere. When a war between mafia groups breaks out, he is forced to flee to South Korea where he will seek to resolve unfinished business...",
        rating: 5.6,
        clasification: "16+",
        image: {
            banner: "https://1.bp.blogspot.com/-6j2PaMy2w2M/YJaA1eP4x3I/AAAAAAAABf4/uwz-fkyAddgD-XudQASUTm-zQqCBFOE1gCLcBGAsYHQ/s1600/bts11-7.jpg",
            card: "https://m.media-amazon.com/images/M/MV5BYWIwYTg2Y2YtYzEwNy00Y2Y0LWFkZjktNjBlMWZhNDY2NGE0XkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Pitch Perfect",
        description: "In Perfect Notes, Becca is a freshman at Barden University, where her father is a renowned professor. Without much interest in academics, the girl is a loner and her greatest aspiration is to become a professional DJ, mixing a wide range of musical variations in her performances. Bored with college life, Becca discovers the 'Barden Bellas'..",
        rating: 5.2,
        clasification: "10+",
        image: {
            banner: "https://poltronanerd.com.br/wp-content/uploads/2020/08/a-escolha-perfeita.jpg",
            card: "https://m.media-amazon.com/images/M/MV5BMTcyMTMzNzE5N15BMl5BanBnXkFtZTcwNzg5NjM5Nw@@._V1_FMjpg_UX1000_.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Pitch Perfect 2",
        description: "Becca and Fat Amy are seniors in college and the Barden Bellas, who have become the most important and envied a cappella choir on campus, are back and better than ever. After being humiliated in front of the President of the United States of America, The Bellas are pulled from the Aca-Circuit. In order to clear their name and regain their image, they take on a...",
        rating: 4.9,
        clasification: "10+",
        image: {
            banner: "https://www.usatoday.com/gcdn/-mm-/f45fc47be5acc085aa35b8b5f464439f6cb634a9/c=0-114-2250-1385/local/-/media/2015/06/15/USATODAY/USATODAY/635699852981033739-XXX-PITCH-PERFECT-2-MOV-73043502.JPG?width=2250&height=1271&fit=crop&format=pjpg&auto=webp",
            card: "https://pics.filmaffinity.com/Pitch_Perfect_2-366824063-large.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Friends",
        description: "Friends tells the story of a group of friends in New York City. Monica is a control freak who acts as the big sister of the group, works as a chef and is searching for her true love. Rachel is the pretty one of the group, a capricious woman who has spent her whole life being spoiled by her parents, and who must now learn to fend for herself...",
        rating: 3.4,
        clasification: "13+",
        image: {
            banner: "https://www.xtrafondos.com/descargar.php?id=5539&resolucion=1920x1080",
            card: "https://hips.hearstapps.com/hmg-prod/images/friends-1578430228.jpg",
        },
        section: "Recommended",
    },
    {
        name: "The Office",
        description: "Deluded boss Michael tries to channel the dissatisfaction of his employees at the Dunder Mifflin paper company through continual foibles and mishaps. Watch all you want. Best Comedy Series at the 2006 Emmys, the series transformed Steve Carell and Ed Helms into icons of the genre...",
        rating: 4.5,
        clasification: "13+",
        image: {
            banner: "./Images/office.jpg",
            card: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
        },
        section: "Recommended",
    },
    {
        name: "Gossip Girl",
        description: "A young woman, whose identity is unknown and nicknamed Gossip Girl, narrates in her blog the experiences of these two neighbors of the Upper East Side of New York, as well as their friends Dan and Jenny, who despite not belonging to the same social circles, share friendship and confidences with Serena and Blair...",
        rating: 5.6,
        clasification: "16+",
        image: {
            banner: "https://www.infobae.com/new-resizer/a5psa-UC1VEtabZ30oIHzDiUd8k=/1200x630/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2C3LZLEDHZHTVO76DGH3OAHXIM.jpg",
            card: "https://es.web.img3.acsta.net/pictures/13/12/04/16/18/394160.jpg",
        },
        section: "Recommended",
    },
    {
        name: "You People",
        description: "A new couple (Jonah Hill, Lauren London) and their families examine modern love and family dynamics in Kenya Barris' comedy You. As the two come from completely different backgrounds - he's white, she's black - conflicting cultures, social expectations and generational differences come into play as the families come to terms...",
        rating: 4.8,
        clasification: "16+",
        image: {
            banner: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABckIYso7vee9bxtvvxjAtfUz4viPKLwqIdqLCg7Eu80kb0sreGGAwwcg96Z94wFuhut_u3bvsOgXWLYzpzUrA4EVIaFttqbbJzJT.jpg?r=86b",
            card: "https://www.cinepremiere.com.mx/wp-content/uploads/2023/01/Ustedes-Poster-900x1333.jpg",
        },
        section: "Recommended",
    },
    {
        name: "American Sniper",
        description: "Chris Kyle, a U.S. Army Special Operations Marine, is on a mission to protect his fellow Marines by taking the lives of anyone who might endanger them. The film is based on the memoirs of Marine Chris Kyle, who set the record for the most kills as a U.S. Army sniper during the Iraq War...",
        rating: 2.2,
        clasification: "16+",
        image: {
            banner: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/01/22/150122052630_american_sniper_624x351_ap.jpg",
            card: "https://es.web.img3.acsta.net/pictures/14/10/27/12/51/279029.jpg",
        },
        section: "Recommended",
    },
    {
        name: "I Came By",
        description: "I Came By is a neo-noir thriller set in London that follows a rebellious young graffiti artist who targets the homes of the wealthy elite, but discovers a shocking secret that leads him on a journey that puts himself and those closest to him in danger. Toby and Jay are two friends, urban graffiti artists, sending anti-establishment messages to an ailing society....",
        rating: 4.5,
        clasification: "16+",
        image: {
            banner: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/IL7QHCJG3JFPJAGJYTHZLXUY7U.JPG",
            card: "https://pics.filmaffinity.com/Yo_estuve_aqu-387782568-large.jpg",
        },
        section: "Recommended",
    },
    {
        name: "It's Okay Not To Be Okay",
        description: "A story about a psychiatric ward employee and a woman, with an antisocial personality disorder, who is a popular writer of children's books. A man who denies love and a woman who knows no love defy fate and fall in love, finding their souls and identities in the process...",
        rating: 5.8,
        clasification: "13+",
        image: {
            banner: "https://imgcdn.mommiesdaily.com/2020/06/1_ZggLgJ0scg0eFDaHd81Vpw.jpeg",
            card: "https://pics.filmaffinity.com/Est_bien_no_estar_bien_Serie_de_TV-388107679-large.jpg",
        },
        section: "Trend",
    },
    {
        name: "Wednesday",
        description: "Merlina Addams is the sinister eldest daughter of the Addams family. As she enters her teenage years, she is admitted to the quirky Nevermore Academy where she seeks to excel as a student. However, out of nowhere she will have to confront her newfound psychic ability, prevent a series of murders that has the local community in turmoil and try to discover...",
        rating: 4.8,
        clasification: "13+",
        image: {
            banner: "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/LAMCOYEZLBFMTMRQ4HOMJ7Q7RU.jpg",
            card: "https://www.semana.com/resizer/S3eOiPIKwp3v-V1Gol5v8I5Riow=/arc-anglerfish-arc2-prod-semana/public/RTM5F4V4YFHYXAU5QHBBH3U6VY.jpg",
        },
        section: "Trend",
    },
    {
        name: "Sex Education",
        description: "Sex Education revolves around Otis, a teenager labeled as a freak in high school, coupled with the fact that he is a virgin. However, he lives with his sexologist mother, so he has always had extensive knowledge on the subject. Everything changes when his classmates discover what his mother does for a living...",
        rating: 5.8,
        clasification: "16+",
        image: {
            banner: "https://hips.hearstapps.com/hmg-prod/images/sex-education-horizontal-alt-rgbclean-1549044385.jpg",
            card: "https://pics.filmaffinity.com/Sex_Education_Serie_de_TV-957722846-large.jpg",
        },
        section: "Trend",
    },
    {
        name: "A Business Proposal",
        description: "It is a South Korean romantic comedy series revolving around Shin Ha-ri, a young woman who has agreed to go on a blind date instead of her friend, Jin Young-seo. Jin's plan is for Shin to be rejected and she can get rid of the mysterious couple. What is Shin's surprise when she discovers that her date is Kang Tae-moo, the CEO of Go Food, the company...",
        rating: 4.7,
        clasification: "13+",
        image: {
            banner: "https://www.themoviedb.org/t/p/original/wNn3vYseenNcFSnzMx7Asb1cKrR.jpg",
            card: "https://pics.filmaffinity.com/Propuesta_laboral_Serie_de_TV-459472764-large.jpg",
        },
        section: "Trend",
    },
    {
        name: "All Of Us Are Dead",
        description: "All Of Us Are Dead, narrates the chaos experienced by a group of students when they realize that they have to face a situation of extreme crisis with the few stocks they have. They are trapped in the institute where they study while a zombie virus spreads around the world. The school is full of infected, but no one can get out of there...",
        rating: 4.5,
        clasification: "16+",
        image: {
            banner: "https://ismorbo.com/wp-content/uploads/2022/02/nerflix.jpg",
            card: "https://mx.web.img2.acsta.net/pictures/22/01/14/19/22/2108595.png",
        },
        section: "Trend",
    },
    {
        name: "Grand Army",
        description: "Grand Army is a drama series that follows the story of five boys who study at Brooklyn's largest high school where they try to fight for success, survival, freedom and a future of their own in a world that is falling apart and where they must also deal with sexuality, racism and social justice...",
        rating: 4.2,
        clasification: "16+",
        image: {
            banner: "https://hips.hearstapps.com/hmg-prod/images/grand-army-portada-1603982131.jpg",
            card: "https://pics.filmaffinity.com/Grand_Army_Serie_de_TV-518219499-large.jpg",
        },
        section: "Trend",
    },
    {
        name: "Rebelde",
        description: "The Elite Way School is an exclusive private school of international prestige. Among the group of kids who arrive at the summer club that precedes the school year are Mía, Miguel, Diego and Roberta, four youngsters who, despite their great differences, discover something that will unite them beyond social prejudices: their great love for music...",
        rating: 5.5,
        clasification: "15+",
        image: {
            banner: "https://st1.uvnimg.com/c8/4c/df006d8d42c895839a6904fa1000/telenovela-rebelde-2004-errores-continuacion-produccion.png",
            card: "https://www.themoviedb.org/t/p/original/kQHXg2BOiODkF4yVI75NcodMmAJ.jpg",
        },
        section: "Trend",
    },
    {
        name: "Rupaul's Drag Race",
        description: "RuPaul's Drag Race uses a weekly elimination format. Each week the contestants face a series of challenges, guided and advised by RuPaul. Most of the challenges consist of photo shoots, monologues, musicals, performances, etc., and they must face them acting as their drag queens...",
        rating: 4.5,
        clasification: "16+",
        image: {
            banner: "https://i.blogs.es/276909/rupaul/1366_2000.jpg",
            card: "https://upload.wikimedia.org/wikipedia/en/c/c3/Rupauls-drag-race-poster-md.jpg",
        },
        section: "Trend",
    },
    {
        name: "Brooklyn 99",
        description: "Resourceful and immature Inspector Jake Peralta must learn to respect the rules and work as a team when a strict captain joins the police station. Watch all you want. This hilarious crime series has won two Golden Globes: Best Comedy Series and Best Comedy Actor (Andy Samberg)...",
        rating: 4.5,
        clasification: "13+",
        image: {
            banner: "https://fotografias.antena3.com/clipping/cmsimages01/2019/09/17/3E9250C2-6EB8-46E1-B32C-F265A74E0467/98.jpg?crop=3000,1688,x0,y0&width=1900&height=1069&optimize=high&format=webply",
            card: "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
        },
        section: "Trend",
    },
    {
        name: "Granizo",
        description: "Miguel Flores is a famous television weatherman with an infallible career. But one day he fails to predict the weather forecast, when he cannot warn about the arrival of a hail storm. This situation provokes the anger of the audience and makes him a public enemy. That is why he decides to flee to his native province, Córdoba, where his daughter Carla lives...",
        rating: 2.8,
        clasification: "16+",
        image: {
            banner: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRojHGM5oxwo8MpUFIO-7RrNNht2NlcIHsHteClrex39M9PJFZX-uBUaaQ2WjTfg-21CB-71efsGXssxW9fSZitebVnSkDi03i-A.jpg?r=41c",
            card: "https://pics.filmaffinity.com/granizo-289420713-msmall.jpg",
        },
        section: "Trend",
    },
    {
        name: "The Glory",
        description: "Many years after being brutally assaulted in high school, a woman sets in motion an elaborate revenge plan to make those responsible pay for their crimes. Watch all you want. Song Hye-kyo and Lee Do-hyun lead a stellar cast in this thrilling drama created by Kim Eun-sook and An Gil-ho...",
        rating: 5.7,
        clasification: "16+",
        image: {
            banner: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/03/14/3635247589.jpeg",
            card: "https://asianwiki.com/images/e/e5/The_Glory-p2.jpg",
        },
        section: "Trend",
    },
    {
        name: "La Primera Vez",
        description: "A mysterious young woman named Eva Samper arrives at the José María Root district school. She will become the only girl in a school of 600 men and will steal Camilo's heart. However, her mission there will also be to teach them more about sex, love, pleasures and real life...",
        rating: 4.7,
        clasification: "16+",
        image: {
            banner: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXY1hlDXqFz97EBD_8_bmSuazlUBmZ_Qzc5MOar_yWxjZ9p8geNxQyFhm6A7QnRZ0fA11ScDKvGTZzwNCJ-01GV6joJVxs8VO80S.jpg?r=0a0",
            card: "https://pics.filmaffinity.com/La_primera_vez_Serie_de_TV-430234967-large.jpg",
        },
        section: "Trend",
    },
    {
        name: "Never Have I Ever",
        description: "Never Have I Ever is the series about the life of Devi, an American teenager of Indian origin. Devi gets very good grades, but she has a major problem: she has a hard time socializing because of her ambition and her very bad temper. Devi prays to the gods to be able to change this and to change all the bad things that happened the previous year, which were quite...",
        rating: 4.4,
        clasification: "13+",
        image: {
            banner: "https://www.formulatv.com/images/series/2000/2292-f.jpg",
            card: "https://pics.filmaffinity.com/Yo_nunca_Serie_de_TV-750364110-large.jpg",
        },
        section: "Trend",
    },
];

const recommendedList = document.querySelector("#recommended");

const recommendedMovies = movies.filter((movie) => movie.section==="Recommended");
recommendedMovies.map((movie) => populateRecommendedMovies(movie));


function populateRecommendedMovies(movie){
    let movieList = document.createElement("li");
    movieList.setAttribute("class", "movie");
    movieList.setAttribute("data-movie-title", movie.name);
    let divImage = document.createElement("div");
    divImage.setAttribute("class", "imagen");
    divImage.innerHTML = "<img src=\""+movie.image.card+"\" alt=\"\" class=\"pelicula\">";
    let movieText = document.createElement("div");
    movieText.setAttribute("class", "texto_abajo");
    let movieStars = document.createElement("div");
    movieStars.setAttribute("class", "stars");
    let ratingText = document.createElement("p");
    ratingText.innerHTML = "Ratings:";
    movieStars.appendChild(ratingText);
    
    let i = 1;
    while(i<6){

        if(i<movie.rating){
            let filledStar = document.createElement("img");
    filledStar.setAttribute("src", "./Images/yellow_fill_star.png");
            movieStars.appendChild(filledStar);
        } else {
            let emptyStar = document.createElement("img");
    emptyStar.setAttribute("src", "./Images/yellow_outline_star.png");
            movieStars.appendChild(emptyStar);
        }
        i++;
    }
    let movieBookmark = document.createElement("div");
    movieBookmark.setAttribute("class", "bookmark");
    movieBookmark.innerHTML = "<img src=\"./Images/guardado.png\" alt=\"\">";
    movieList.appendChild(divImage);
    movieText.appendChild(movieStars);
    movieText.appendChild(movieBookmark);
    movieList.appendChild(movieText);
    recommendedList.appendChild(movieList);
}   

const trendingList = document.querySelector("#trending");

const trendingMovies = movies.filter((movie) => movie.section==="Trend");
trendingMovies.map((movie) => populateTrendingMovies(movie));

function populateTrendingMovies(movie){
    let movieList = document.createElement("li");
    movieList.setAttribute("class", "movie");
    movieList.setAttribute("data-movie-title", movie.name);
    let divImage = document.createElement("div");
    divImage.setAttribute("class", "imagen");
    divImage.innerHTML = "<img src=\""+movie.image.card+"\" alt=\"\" class=\"pelicula\">";
    let movieText = document.createElement("div");
    movieText.setAttribute("class", "texto_abajo");
    let movieStars = document.createElement("div");
    movieStars.setAttribute("class", "stars");
    let ratingText = document.createElement("p");
    ratingText.innerHTML = "Ratings:";
    movieStars.appendChild(ratingText);

    let i = 1;
    while(i<6){

        if(i<movie.rating){
            let filledStar = document.createElement("img");
    filledStar.setAttribute("src", "./Images/yellow_fill_star.png");
            movieStars.appendChild(filledStar);
        } else {
            let emptyStar = document.createElement("img");
    emptyStar.setAttribute("src", "./Images/yellow_outline_star.png");
            movieStars.appendChild(emptyStar);
        }
        i++;
    }
    let movieBookmark = document.createElement("div");
    movieBookmark.setAttribute("class", "bookmark");
    movieBookmark.innerHTML = "<img src=\"./Images/guardado.png\" alt=\"\">";
    movieList.appendChild(divImage);
    movieText.appendChild(movieStars);
    movieText.appendChild(movieBookmark);
    movieList.appendChild(movieText);
    trendingList.appendChild(movieList);
}

let movieBanner = movies[(Math.floor(Math.random() * movies.length))];

let banner = document.querySelector(".banner");

populateBanner(movieBanner);

function populateBanner(movie){
    let bannerContainer = document.createElement("div");
    bannerContainer.setAttribute("class", "banner_contenido");

    let mainTitle = document.createElement("div");
    mainTitle.setAttribute("class", "titulo_principal");
    let title = document.createElement("h1");
    title.innerHTML = movie.name;
    let ratings = document.createElement("h3");
    ratings.innerHTML = "<span>("+movie.rating+" Ratings)</span>";
    mainTitle.appendChild(title);
    mainTitle.appendChild(ratings);
    bannerContainer.appendChild(mainTitle);

    let description = document.createElement("div");
    description.setAttribute("class", "description");
    description.innerHTML = "<p>"+movie.description+"</p>";
    bannerContainer.appendChild(description);

    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    buttons.innerHTML = "<button class=\"buttons_banner\"><span><i class=\"fa-solid fa-play\"></i></span> Play </button><button class=\"buttons_banner\"> Save <span><i class=\"fa-regular fa-bookmark\"></i></span></button>";
    let age = document.createElement("h3");
    age.setAttribute("class", "edad");
    age.innerHTML = movie.clasification;
    buttons.appendChild(age);
    bannerContainer.appendChild(buttons);

    banner.innerHTML = "";
    banner.appendChild(bannerContainer);
    banner.style.backgroundImage = "url('"+movie.image.banner+"')";
};

let cardMovies = document.querySelectorAll(".movie");

cardMovies.forEach((cardMovie) => cardMovie.onclick = function(){ setBanner(cardMovie)});

function setBanner(cardMovie){

const selectedMovie = movies.filter((movie) => { 
    return movie.name === cardMovie.dataset.movieTitle;
});

populateBanner(selectedMovie[0]);
}