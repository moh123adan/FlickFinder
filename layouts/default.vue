<template>
    <v-app id="inspire">
      <v-app-bar extended>
        <v-icon>mdi-house</v-icon>
  
        <v-app-bar-title>Application</v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon="mdi-dots-vertical">
        </v-btn>
      </v-app-bar>
  
      <v-main>
       <slot />
      </v-main>
    </v-app>
  </template>


<script setup lang="ts"></script>