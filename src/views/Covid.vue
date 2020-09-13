<template>
    <v-container>        
        <v-row>
            <v-col id="container"></v-col>
        </v-row>
        <v-row>

        </v-row>           
    </v-container>
</template>

<script>
var Highcharts = require('highcharts');

export default {
    data(){
        return{
            canada: []
        }
    },
    methods: {
        createChart: function(){
            Highcharts.chart('container', {
                chart: {
                    type: 'line'
                },
                series: [{
                    name: 'test',
                    data: this.canada
                }],              

            });
        }
    },
    mounted(){
        fetch("https://api.covid19api.com/dayone/country/canada/status/confirmed")
        .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data.length;i++){
                //var arr = [data[i].Date.substring(0, 10), data[i].Cases];
                //this.canada.push(arr);
                if(data[i].Province == "Ontario")
                    this.canada.push(data[i].Cases);                
            }
            console.log(data.length);
            this.createChart();            
        });        
    }    
}
</script>

<style scoped>
    /* @import 'https://code.highcharts.com/css/themes/dark-unica.css'; */
    .embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}
</style>