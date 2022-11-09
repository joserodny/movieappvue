<template>
  <!-- component -->
  <div
    class="sm:relative bg-slate-800 uppercase font-semibold rounded-lg flex md:flex-col md:ml-1 shadow-lg border-gray-600 justify-around md:h-screen md:w-16 lg:fixed md:fixed w-screen bottom-0 xl:pt-9"
  >
    <div
      class="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12"
    >
      <router-link to="/">
        <svg
          class="h-8 w-8 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="5 12 3 12 12 3 21 12 19 12" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </router-link>
    </div>
    <div
      class="text-white md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12"
    >
      <router-link to="/">
        <svg
          class="h-8 w-8 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="4" x2="8" y2="20" />
          <line x1="16" y1="4" x2="16" y2="20" />
          <line x1="4" y1="8" x2="8" y2="8" />
          <line x1="4" y1="16" x2="8" y2="16" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="16" y1="8" x2="20" y2="8" />
          <line x1="16" y1="16" x2="20" y2="16" />
        </svg>
      </router-link>
    </div>
    <div
      class="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12"
    >
      <svg
        class="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
