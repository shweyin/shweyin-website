<template>
    <v-container class="pa-5">
        <v-row>
            <v-col lg="7" align="center" class="py-16">
                <v-hover v-slot:default="{hover}">
                    <h1>{{hover ? "卒業まで後" : "Time until Graduation"}}</h1>
                </v-hover>                
                <div class="timer">                    
                    <div class="time">
                        <p>Days</p>
                        <h1>{{days > 9 ? days : "0" + days}}</h1>
                        <p>日</p>
                    </div>
                    <div class="time">
                        <p>Hours</p>
                        <h1>{{hours > 9 ? hours : "0" + hours}}</h1>
                        <p>時間</p>
                    </div>
                    <div class="time">
                        <p>Minutes</p>
                        <h1>{{minutes > 9 ? minutes : "0" + minutes}}</h1>
                        <p>分</p>
                    </div>
                    <div class="time">
                        <p>Seconds</p>
                        <h1>{{seconds > 9 ? seconds : "0" + seconds}}</h1>
                        <p>秒</p>
                    </div>
                </div>
            </v-col>
            <v-col lg="5">
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

            </v-col>
            
            
        </v-row>
         <!-- <v-row>
             <v-col>
                <v-card class="grey darken-1">
                    <v-card-title class="grey darken-4 white--text">Instagram</v-card-title>
                    <v-card-text><br><v-img src="@/assets/insta.jpg" height="470" width="250"></v-img></v-card-text>
                </v-card>
             </v-col>
         </v-row> -->

    </v-container>
</template>

<style scoped>
    h1{
        font-size: 4em;
        color: white;
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