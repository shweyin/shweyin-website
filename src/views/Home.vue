<template>
    <v-container class="pa-5">
        <v-row>
            <v-col cols="3">
                <v-card class="grey darken-1" >
                <v-hover
                    v-slot:default="{ hover }"
                >
                <v-card-title class="grey darken-4 white--text">{{!hover ? "Welcome" : "ようこそ"}}</v-card-title>
                </v-hover>
                
                <v-card-text >
                    <br>
                    <iframe width="250" height="470" src="https://www.youtube.com/embed/wjIFDAa5hK8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-card height class="grey darken-1">
                    <v-card-title class="grey darken-4 white--text">My Japan Trip</v-card-title>
                    <v-card-text >
                        <v-carousel class="grey" hide-delimiter-background>
                            <v-carousel-item><v-img src="@/assets/vineyard.jpg"></v-img></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/keygon.jpg"></v-img></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/factory.jpg"></v-img></v-carousel-item>
                            <v-carousel-item><v-img src="@/assets/last-day.jpg"></v-img></v-carousel-item>
                        </v-carousel>
                    </v-card-text>
                    
                </v-card>

            </v-col>
            
            
        </v-row>
         <v-row>
             <v-col>
                <v-card class="grey darken-1">
                    <v-card-title class="grey darken-4 white--text">Instagram</v-card-title>
                    <v-card-text><br><v-img src="@/assets/insta.jpg" height="470" width="250"></v-img></v-card-text>
                </v-card>
             </v-col>
         </v-row>

    </v-container>
</template>

<style scoped>
    h1{
        font-size:100pt;
        color: white;
    }  
</style>