<template>
    <v-container>
        <v-row>
            <v-col id="container"></v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
var Highcharts = require('highcharts');
export default {
    data(){
        return{
            myChart: {}
        }
    },
    methods: {
        createChart: function(){
            this.myChart = Highcharts.chart('container', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    categories: ['Apples', 'Bananas', 'Oranges']
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    }
                },
                series: [{
                    name: 'Jane',
                    data: [1, 0, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 2]
                }]
            });
        }
    },
    mounted(){
        this.createChart();
    }
    
}
</script>