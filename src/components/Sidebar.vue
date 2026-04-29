<template>
  <aside class="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col">
    
    <!-- Logo -->
    <div class="px-6 py-5 border-b border-gray-700">
      <h1 class="text-xl font-bold tracking-wide">PrintParkManager</h1>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-1">
      <RouterLink
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        active-class="bg-blue-500 text-white"
      >
        <span>{{ item.label }}</span>
        <font-awesome-icon :icon="item.icon" />
      </RouterLink>
    </nav>

  </aside>
</template>

<script setup>
const menu = [
  { path: '/dashboard',              icon: 'chart-column', label: 'Tableau de bord' },
  { path: '/printers',   icon: 'print', label: 'Imprimantes' },
  { path: '/alerts',       icon: 'triangle-exclamation', label: 'Alertes' },
  { path: '/stock',         icon: 'arrow-right-arrow-left', label: 'Stock et Mouvements' },
  { path: '/reports',      icon: 'file-lines', label: 'Usage Reports' },
  { path: '/settings',      icon: '', label: 'Réglages' },
  { path: '/profil',        icon: '', label: 'Profil' },
]
</script>