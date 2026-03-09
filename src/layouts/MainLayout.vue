<template>
  <div class="flex">
    <Sidebar />
    <main class="ml-64 flex-1 min-h-screen bg-gray-100 p-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>