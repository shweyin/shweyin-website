<template>
    <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="100%"></iframe>
</template>

<script>
var Highcharts = require('highcharts');

export default {
    data(){
        return{
            countries: [['Canada', 0], ['Japan', 0], ['Hungary', 0], ['Switzerland', 0], ['Poland', 0], ['Germany', 0], ['Italy', 0], ['Sweden', 0]]
        }
    },
    methods: {
        createChart: function(){
            Highcharts.chart('countries', {
                chart: {
                    type: 'column'
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
        for(var i = 0; i < this.countries.length; i++){
            fetch("https://covid-api.com/api/reports?region_name=" + this.countries[i][0])
            .then(response => response.json())
            .then(data => {
                data.data.forEach(e => this.countries[this.countries.findIndex(e => e[0] == data.data[0].region.name)][1] += e.active);
                //this.createChart(); 
                console.log(this.countries);
            }); 
        }                        
    }    
}
</script>

<style scoped>
     /*@import 'https://code.highcharts.com/css/themes/dark-unica.css';*/
    .main-graph {
        width: 80%;
    }
</style>