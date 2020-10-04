<template>
    <v-container class="pa-5">
        <v-row>            
                <v-col lg="12">
                    <h1 class="white--text">My Github Commit History</h1>
                    <div class="loading">
                        <v-img v-if="loading" width="50" height="50" src="../assets/loading.gif"></v-img>
                    </div>            
                    <v-timeline dense>
                        <v-timeline-item
                            v-for="(item, i) in commits"
                            :key="i"
                            small="small"
                            class="white--text"
                            color="grey darken-4"
                            icon="mdi-github"
                        >
                            <v-list-item link :href="item.html_url" target="_blank" dark>
                                <v-list-item-content>{{item.commit.message}}</v-list-item-content>
                                <v-list-item-content>{{item.commit.author.date.substring(0,10)}}</v-list-item-content>

                            </v-list-item>
                            <!-- <a :href="item.html_url" target="_blank">{{item.commit.message}}</a> -->
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
                
            
            <!-- <v-col lg="6">
                <v-card flat class="grey darken-2" dark>
                    <v-card-title>
                        My Commit History
                    </v-card-title>
                    <v-card-text>
                        <v-img src="https://ghchart.rshah.org/shweyin" alt="My chart" href="https://github.com/shweyin"></v-img>
                    </v-card-text>                    
                </v-card>                
            </v-col> -->
        </v-row>
    </v-container>
</template>


<script>
export default {
    data(){
        return {
            commits: [],
            loading: true
        }
    },
    created(){
        fetch("https://api.github.com/search/commits?q=committer-date:>2020-08-01 author:shweyin sort:author-date-asc", {headers: {'Accept': 'application/vnd.github.cloak-preview+json'}})
        .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data.items.length; i++) {
                if(data.items[i].repository.name == "shweyin-website"){
                    this.commits.push(data.items[i]);
                }                      
            }
            this.loading = false;
        });
    }    
}
</script>

<style scoped>
    a, a:link, a:visited{
        text-decoration: none;
        color:white;
    }
    .loading {        
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>