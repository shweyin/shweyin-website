<template>
    <v-container class="pa-15">
        <h1>Ongoing Projects</h1>
        <v-simple-table class="grey darken-3" dark>
            <thead>
                <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        Link
                    </th>
                    <th>
                        Start Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(project, p) in ongoing"
                :key="p"
                >
                    <td>{{project.name}}</td>
                    <td><a :href="project.link" target="_blank">Link</a></td>
                    <td>{{project.start}}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <br><br><br>
        <h1>Future Projects</h1>
        <v-simple-table class="grey darken-3" dark>
            <thead>
                <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(project, p) in future"
                :key="p"
                >
                    <td>{{project.name}}</td>
                    <td>{{project.details}}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <br><br><br>
        <h1>Past Projects</h1>
        <v-simple-table class="grey darken-3" dark>
            <thead>
                <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        Link
                    </th>
                    <th>
                        Start Date
                    </th>
                    <th>
                        End Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(project, p) in past"
                :key="p"
                >
                    <td>{{project.name}}</td>
                    <td><a :href="project.link" target="_blank">Link</a></td>
                    <td>{{project.start}}</td>
                    <td>{{project.end}}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            ongoing: [{
                name: "Shweyin Portfolio Website",
                link: "https://github.com/shweyin/shweyin-website",
                start: "Aug 31, 2020",
                end: "WIP"
            },
            {
                name: "Shweyin Portfolio Website Covid Stats Page",
                link: "https://github.com/shweyin/shweyin-website",
                start: "Sept 10, 2020",
                end: "WIP"
            },            
            ],
            past: [{
                name: "HOOPP ServiceNow Hackathon 2020",
                link: "",
                start: "Aug 10, 2020",
                end: "Aug 24, 2020"
            },
            {
                name:"The Traveler Web App",
                link: "https://github.com/shweyin/The-Traveler",
                start: "January 10, 2019",
                end: "April 24, 2019"
            }],
            future: [{
                name: "Deploy to AWS/Azure",
                details: "Transition from free heroku hosting to paid AWS/Azure hosting"
            }]
        }
    }
}
</script>

<style scoped>
    h1 {
        color: white;
    }
</style>