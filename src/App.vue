
<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          Hello
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
