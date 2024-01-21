<script setup lang="ts"></script>
<template>
  <form class="flex flex-col gap-4">
    <label for="file-input" class="sr-only">Escolha o arquivo</label>
    <input
      id="file-input"
      type="file"
      name="file-input"
      class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:bg-gray-100 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
    />

    <button
      type="button"
      class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group w-fit"
    >
      <span
        class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
        ></span>
      </span>
      <span
        class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"
      ></span>
      <span
        class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
        >Submit</span
      >
    </button>
  </form>
</template>
<style scoped></style>
