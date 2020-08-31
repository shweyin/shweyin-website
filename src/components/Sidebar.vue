<template>
    <v-navigation-drawer app dark permanent class="grey darken-4">
        <v-list>
            <v-list-item class="pa-3">
                <v-img src="@/assets/shweyin-shot.jpg" class="rounded"></v-img>
            </v-list-item>
            <v-list-item link to="/">
                <v-list-item-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/profile">
                <v-list-item-action>
                    <v-icon>mdi-account-box</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/projects">
                <v-list-item-action>
                    <v-icon>mdi-code-tags</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/history">
                <v-list-item-action>
                    <v-icon>mdi-history</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>History</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>