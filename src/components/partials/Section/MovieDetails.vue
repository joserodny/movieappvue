<script>

export default {
    
    props: {
        movie: {
            required: true,
        }
    },
    computed: {
        postPath() {
            return "http://image.tmdb.org/t/p/original/"
        },
        youtubeVideo() {
        return "https://www.youtube.com/embed/" + this.movie.videos?.results[0].key;
        }  
    },

}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    background: #43423E;
}

a {
    text-decoration: none;
    color: #5C7FB8;
}

a:hover {
    text-decoration: underline;
}

.movie-card {
    font: 14px/22px "Lato", Arial, sans-serif;
    color: #A9A8A3;
    padding: 40px 0;
}

.moviecontainer {
    margin: 0 auto;
    
    border-radius: 5px;
    position: relative;
}

.hero {
    height: 342px;
    margin: 0;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.hero:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
   
    
    z-index: -1;
    -webkit-transform: skewY(-2.2deg);
    transform: skewY(-2.2deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
   
}

.cover {
    position: absolute;
    top: 160px;
    left: 40px;
    z-index: 2;
}

.details {
    padding: 190px 0 0 280px;
}

.details .title1 {
    color: white;
    font-size: 44px;
    margin-bottom: 13px;
    position: relative;
}

.details .title1 span {
    position: absolute;
    top: 3px;
    margin-left: 12px;
    background: #C4AF3D;
    border-radius: 5px;
    color: #544C21;
    font-size: 14px;
    padding: 0px 4px;
}

.details .title2 {
    color: #C7C1BA;
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 15px;
}

.details .likes {
    margin-left: 24px;
}

.details .likes:before {
    content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
    position: relative;
    top: 2px;
    padding-right: 7px;
}

.description {
    bottom: 0px;
    height: 200px;
    font-size: 16px;
    line-height: 26px;
    color: #B1B0AC;
}

.column1 {
    padding-left: 50px;
    padding-top: 120px;
    width: 220px;
    float: left;
    text-align: center;
}

.tag {
    background: white;
    border-radius: 10px;
    padding: 3px 8px;
    font-size: 14px;
    margin-right: 4px;
    line-height: 35px;
    cursor: pointer;
}

.tag:hover {
    background: #ddd;
}



.avatars {
    margin-top: 23px;
}

.avatars img {
    cursor: pointer;
}

.avatars img:hover {
    opacity: 0.6;
}

.avatars a:hover {
    text-decoration: none;
}

fieldset,
label {
    margin: 0;
    padding: 0;
}

/****** Style Star Rating Widget *****/
.rating {
    border: none;
    float: left;
}

.rating>input {
    display: none;
}

.rating>label:before {
    margin: 5px;
    margin-top: 0;
    font-size: 1em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\f005";
}

.rating>.half:before {
    content: "\f089";
    position: absolute;
}

.rating>label {
    color: #ddd;
    float: right;
}

/***** CSS Magic to Highlight Stars on Hover *****/
.rating>input:checked~label,
.rating:not(:checked)>label:hover,
.rating:not(:checked)>label:hover~label {
    color: #FFD700;
}

/* hover previous stars in list */
.rating>input:checked+label:hover,
.rating>input:checked~label:hover,
.rating>label:hover~input:checked~label,
.rating>input:checked~label:hover~label {
    color: #FFED85;
}

a[data-tooltip] {
    position: relative;
}

a[data-tooltip]::before,
a[data-tooltip]::after {
    position: absolute;
    display: none;
    opacity: 0.85;
}

a[data-tooltip]::before {
    /*
   * using data-tooltip instead of title so we 
   * don't have the real tooltip overlapping
   */
    content: attr(data-tooltip);
    background: #000;
    color: #fff;
    font-size: 13px;
    padding: 5px;
    border-radius: 5px;
    /* we don't want the text to wrap */
    white-space: nowrap;
    text-decoration: none;
}

a[data-tooltip]::after {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    content: '';
}

a[data-tooltip]:hover::before,
a[data-tooltip]:hover::after {
    display: block;
}

/** positioning **/
/* top tooltip */
a[data-tooltip][data-placement="top"]::before {
    bottom: 100%;
    left: 0;
    margin-bottom: 40px;
}

a[data-tooltip][data-placement="top"]::after {
    border-top-color: #000;
    border-bottom: none;
    bottom: 50px;
    left: 20px;
    margin-bottom: 4px;
}

</style>

<template>
    
    <div class="flex justify-center items-center movie-card">
        
        <div class="moviecontainer bg-gray-500 ">

           <img :src="postPath+movie.poster_path" alt="cover"
                    class="cover w-[11rem]" />

            <div class="hero " style="background-size:cover;" :style="{backgroundImage: 'url(' + postPath+movie.backdrop_path + ' )' }">
               
                <div class="details">

                    <div class="title1">{{ movie.title }}<span>{{ movie.vote_average * 10}} %</span></div>

                    <div class="title2">{{ movie.tagline }}</div>

                    <span class="text-gray-400">{{ movie.release_date }}</span>

                    <span class="likes">{{ movie.popularity }}</span>

                </div> <!-- end details -->

            </div> <!-- end hero -->

            <div class="absolute z-10 xss:ml-[-1rem] xss:mt-[-11rem] xs:ml-[-1rem] xs:mt-[-11rem] sm:ml-[-1rem] sm:mt-[-11rem] md:ml-[-1rem] md:mt-[-12rem] lg:ml-[-1rem] lg:mt-[-11rem] xl:ml-[-1rem] xl:mt-[-11rem]">
                <a :href="youtubeVideo">
                    <lottie-player src="https://lottie.host/176c911e-41aa-4a20-bad3-5b1c3ff1354b/GKjsojKQd3.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
                </a>
            </div>

            <div class="description">

                <div class="column1">
                    <span class="tag" :key="index" v-for="(item, index) in movie.genres">
                        {{ item.name }}
                    </span>
                  
                </div> <!-- end column1 -->

                <div
                    class="xss:ml-[10rm] xss:w-[21rem]   sm:w-[23rem] sm:ml-[16rem] md:w-[30rem] md:ml-[16rem] lg:w-[45rem] lg:ml-[16rem] xl:w-[80rem] xl:ml-[16rem]">

                    <p class="">{{ movie.overview }} <a :href="movie.homepage">read more</a></p>
                </div> <!-- end column2 -->
               
            </div> <!-- end description -->
        </div> <!-- end container -->
    </div> <!-- end movie-card -->
</template>