<template>
    <v-navigation-drawer app dark class="grey darken-4">
        <v-list>
            <v-list-item class="pa-5">
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
            <v-list-item link to="/about">
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