<template>
    <v-container class="pa-15">
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
                v-for="(project, p) in projects"
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
            projects: [{
                name: "Shweyin Portfolio Website",
                link: "https://github.com/shweyin/shweyin-website",
                start: "Aug 31, 2020",
                end: "WIP"
            },
            {
                name: "Covid Statistics Page",
                link: "https://github.com/shweyin/shweyin-website/blob/master/src/views/Covid.vue",
                start: "Sep 9, 2020",
                end: "WIP"
            }
            ]
        }
    }
}
</script>

