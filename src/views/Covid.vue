<template>
    <v-container class="pa-5">
        <!-- <v-row  id="countries"></v-row> -->
        <v-row>
            <v-col>
                <h1 class="white--text">Active cases per country</h1>
                <p class="white--text">Data collected from <a class="white--text" href="https://systems.jhu.edu/">John Hopkins CSSE</a></p>
                <v-simple-table class="grey darken-3" dark>
                    <thead>
                        <tr>
                            <th><a v-on:click="sortByName(true)" class="white--text sort-link">Country<v-icon v-if="sortedByName">mdi-chevron-up</v-icon><v-icon v-if="!sortedByName">mdi-chevron-down</v-icon></a></th>
                            <th><a v-on:click="sortByName(false)" class="white--text sort-link">Active Cases<v-icon v-if="!sortedByName">mdi-chevron-up</v-icon><v-icon v-if="sortedByName">mdi-chevron-down</v-icon></a></th>
                        </tr>                    
                    </thead>
                    <tbody>
                        <tr v-for="(country, c) in countries" :key="c">
                            <td>{{country[0]}}</td>
                            <td>{{country[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>            
        </v-row>
        <v-row>
            <div class="loading">
                <v-img v-if="loading" width="50" height="50" src="../assets/loading.gif"></v-img>
            </div>            
        </v-row>
    </v-container>
</template>

<script>
var Highcharts = require('highcharts');

export default {
    data(){
        return{
            //countries: [['Canada', 0], ['Japan', 0], ['Hungary', 0], ['Switzerland', 0], ['Poland', 0], ['Germany', 0], ['Italy', 0], ['Sweden', 0], ["US", 0],["China", 0], ["India", 0], ["Brazil", 0]]
            countries: [],
            response: [],
            loading: true,
            sortedByName: false
        }
    },
    methods: {
        sortByName: function(sortName) {
            console.log(sortName);
            if(sortName){
                this.countries.sort();
                this.sortedByName = true;
            }
            else{
                this.countries.sort((a, b) => a[1] < b[1]);
                this.sortedByName = false;
            }
        },
        createChart: function(){
            Highcharts.chart('countries', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Active cases of covid per country'
                },
                subtitle: {
                    text: '<a href="https://github.com/CSSEGISandData/COVID-19" target="_blank">COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University</a>'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Currect active cases'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'As of today: <b>{point.y}</b> active cases.'
                },
                series: [{
                    name: 'Active cases',
                    data: this.countries,
                }]
            });
        }
    },
    mounted(){
        fetch("https://covid-api.com/api/reports")
        .then(response => response.json())
        .then(data => {
            //data.data.forEach(e => this.countries[this.countries.findIndex(e => e[0] == data.data[0].region.name)][1] += e.active);
            this.response = data.data;
            data.data.forEach(e => {
                var findIndex = this.countries.findIndex(c => c[0] == e.region.name)
                if(findIndex == -1){
                    this.countries.push([e.region.name, e.active]);
                }                   
                else {
                    this.countries[findIndex][1] += e.active;
                } 
            });
            this.countries.sort((a, b) => a[1] < b[1]);    
            this.loading = false;        
            //this.createChart(); 
        });                    
    }    
}
</script>

<style scoped>
     /*@import 'https://code.highcharts.com/css/themes/dark-unica.css';*/
    .main-graph {
        width: 80%;
    }
    .loading {        
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .sort-link{
        font-size: 16px;       
        
    }
    .sort-link:hover{
        filter: brightness(50%);
    }
</style>