<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="grey darken-1">
                    <v-img src="@/assets/japan-banner.jpg" class="white--text align-end" height="200">
                        <v-card-title style="font-size: 28pt;">About Me</v-card-title>                        
                    </v-img>
                    <v-card-text>
                        <v-tabs background-color="transparent" grow dark>
                            <v-tab color="#616161">English</v-tab>
                            <v-tab-item color="#616161">
                                <v-card color="#616161" class="grey darken-1 rounded-0" flat dark>
                                    <v-card-title>Introduction</v-card-title>
                                    <v-card-text>
                                        Hi my name is Shweyin.                                       
                                    </v-card-text>
                                    <v-card-title>Skills</v-card-title>
                                    <v-card-text>
                                        Hi my name is Shweyin.                                       
                                    </v-card-text>                                    
                                </v-card>
                            </v-tab-item>
                            <v-tab>日本語</v-tab>
                            <v-tab-item>
                                <v-card class="grey darken-1 rounded-0" flat>
                                    <v-card-text>
                                        asd
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="">
                <v-img src="@/assets/resume.png"></v-img>
            </v-col>
        </v-row>
    </v-container>    
</template>