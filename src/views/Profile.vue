<template>
    <v-container>
        <v-row>
            <v-col lg="6">
                <v-card class="grey darken-1">
                    <v-img src="@/assets/japan-banner.jpg" class="white--text align-end" height="200">
                        <v-card-title style="font-size: 28pt;">About Me</v-card-title>                        
                    </v-img>
                    <v-card-text>
                        <v-tabs background-color="grey darken-1" slider-color="grey" grow dark>                 
                            <v-tab >English</v-tab>
                            <v-tab-item >
                                <v-card  class="grey darken-1 rounded-0" flat dark>                                    
                                    <v-card-title>Personal Information</v-card-title>
                                    <v-card-text>
                                        <v-container >
                                            <v-row class="white--text">
                                                <v-col><h3>Name</h3></v-col>
                                                <v-col><h3>Age</h3></v-col>
                                                <v-col><h3>Hometown</h3></v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col>Shweyin Than</v-col>
                                                <v-col>22</v-col>
                                                <v-col>Toronto, Canada</v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col><h3>Field</h3></v-col>
                                                <v-col><h3>School</h3></v-col>
                                                <v-col><h3>GPA</h3></v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col>Software Development</v-col>
                                                <v-col>Seneca College</v-col>
                                                <v-col>3.70</v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col><h3>Languages Spoken</h3></v-col>
                                                <v-col><h3>Intern Experience</h3></v-col>
                                                <v-col><h3>Graduation Date</h3></v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col>English, Japanese</v-col>
                                                <v-col>1 Year</v-col>
                                                <v-col>April 2021</v-col>
                                            </v-row>
                                        </v-container>                                       
                                    </v-card-text>
                                    <v-card-title>Introduction</v-card-title>
                                    <v-card-text class="white--text">
                                        Hi my name is Shweyin! I'm a 4th year student at Seneca in the Honors Bachelors of Software Development program. I have been dreaming of working
                                        in Japan for a long time and am excited to be finally graduating! I have studied Japanese for 3 years now, and would love to get the opportunity
                                        to live in Japan and experience the culture. When I graduated highschool, I did a 6 month volunteering term in Japan and fell in love with the people
                                        and the culture. Please feel free to contact me below to set up an interview or further inquire about my qualifications!                                 
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab>日本語</v-tab>
                            <v-tab-item>
                                <v-card class="grey darken-1 rounded-0" flat dark>                                    
                                    <v-card-title>個人情報</v-card-title>
                                    <v-card-text>
                                        <v-container >
                                            <v-row class="white--text">
                                                <v-col><h3>名前</h3></v-col>
                                                <v-col><h3>年齢</h3></v-col>
                                                <v-col><h3>出身</h3></v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col>サン・シュウエイン</v-col>
                                                <v-col>22</v-col>
                                                <v-col>トロント、カナダ</v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col><h3>専門</h3></v-col>
                                                <v-col><h3>学校</h3></v-col>
                                                <v-col><h3>GPA</h3></v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col>ソフトウェア開発</v-col>
                                                <v-col>セネカ大学</v-col>
                                                <v-col>3.70</v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col><h3>言語</h3></v-col>
                                                <v-col><h3>インターン経験</h3></v-col>
                                                <v-col><h3>卒業日</h3></v-col>
                                            </v-row>
                                            <v-row class="white--text">
                                                <v-col>英語、日本語</v-col>
                                                <v-col>1年</v-col>
                                                <v-col>2021年4月</v-col>
                                            </v-row>
                                        </v-container>                                       
                                    </v-card-text>
                                    <v-card-title>自己紹介</v-card-title>
                                    <v-card-text class="white--text">
                                        こんにちは、シュウエインと申します。現在セネカ大学の４年生でソフトウェア開発を勉強しています。高校を卒業した後、日本に６ヶ月ボランティアをしに行きました。その際、日本の文化、
                                        人々や言語に感銘を受け日本で働きたいと思うようになりました。卒業したら日本で働くことを目標に努力しています。気になる点やご質問があれば是非下のボタンからお問い合わせください。宜しくお願い致します。                                                                    
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab >自己紹介動画</v-tab>
                            <v-tab-item >
                                <v-card height class="grey darken-1 rounded-0" flat>
                                    <v-card-text >
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/uGfglpWGUDE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </v-card-text>                                    
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                        <v-card-actions class="white--text">
                            <v-spacer></v-spacer>
                            <v-btn icon dark href="mailto:shweyin@gmail.com"><v-icon>mdi-email</v-icon></v-btn>
                            <v-btn icon dark href="https://www.linkedin.com/in/shweyin-than-656153130/" target="_blank"><v-icon>mdi-linkedin</v-icon></v-btn>
                            <v-btn icon dark href="https://github.com/shweyin" target="_blank"><v-icon>mdi-github</v-icon></v-btn>
                        </v-card-actions>
                        
                    </v-card-text>
                                        
                </v-card>

            </v-col>
            <v-col lg="6" class="">
                <v-img src="@/assets/resume.png"></v-img>                
            </v-col>
        </v-row>
    </v-container>    
</template>