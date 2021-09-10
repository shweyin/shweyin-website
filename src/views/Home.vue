<template>
    <v-container class="pa-5">
        <v-row>
            <h1>Welcome to my site!</h1>
        </v-row>
        <v-row class="pb-5">
            <h4>Feel free to enjoy a refreshing game of dino while you're here :)</h4>
        </v-row>  
            <!-- <v-col lg="5">
                <v-card height class="grey darken-1">
                    <v-card-title class="grey darken-4 white--text">My Japan Trip</v-card-title>
                    <v-card-text >
                        <v-carousel class="grey darken-1 pa-5" hide-delimiter-background align="center">
                            <v-carousel-item class="py-10"><iframe width="560" height="315" src="https://www.youtube.com/embed/uGfglpWGUDE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/vineyard.jpg"></v-img></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/keygon.jpg"></v-img></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/factory.jpg"></v-img></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/last-day.jpg"></v-img></v-carousel-item>
                        </v-carousel>
                    </v-card-text>
                    
                </v-card>

            </v-col> -->
        <v-row class="pa-5">
            <v-col lg="12" align="center">
                <iframe frameborder="1" scrolling="no" class="dino-game" src="https://www.dinogame.net/game/"></iframe>
                <p class="white--text">Click in the box and press spacebar to play</p>
            </v-col>
        </v-row>

    </v-container>
</template>

<style scoped>
    h1{
        font-size: 4em;
        color: white;
        margin: auto;
    }
    h4{
        font-size: 1em;
        color: white;
        margin: auto;
    }
    .timer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .time{
        padding: 1em 3em;
        color: white;
    }
    .dino-game{
        overflow: hidden;
        width: 100%;
    }
</style>

<script>
export default {
    created(){
        this.setTime();
        window.setInterval(this.setTime, 1000);
    },
    data(){
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },
    methods: {
        setTime() {
            var secs = Math.floor((new Date("23 April 2021") - new Date()) / 1000);
            this.days = Math.floor(secs / 3600 / 24);
            this.hours = Math.floor((secs / 3600) % 24);
            this.minutes = Math.floor(secs / 60 % 60);
            this.seconds = Math.floor(secs % 60);
        }
    },    
}
</script>