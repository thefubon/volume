<template>
  <div class="container project_container py-16">
    
    <div class="arrow_bottom project__content">
      
      <svg class="w-[24px] h-[100px] sm:h-[160px] md:h-[295px]" viewBox="0 0 24 295" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9255 294.064C11.5113 294.65 12.4611 294.65 13.0469 294.064L22.5928 284.518C23.1786 283.932 23.1786 282.983 22.5928 282.397C22.007 281.811 21.0573 281.811 20.4715 282.397L11.9862 290.882L3.50093 282.397C2.91514 281.811 1.96539 281.811 1.3796 282.397C0.793818 282.983 0.793818 283.932 1.3796 284.518L10.9255 294.064ZM10.4862 0.996582L10.4862 293.003H13.4862L13.4862 0.996582L10.4862 0.996582Z" fill="black" fill-opacity="0.8"/>
      </svg>


      <svg class="w-[24px] h-[100px] sm:h-[160px] md:h-[295px]" viewBox="0 0 24 295" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9255 294.064C11.5113 294.65 12.4611 294.65 13.0469 294.064L22.5928 284.518C23.1786 283.932 23.1786 282.983 22.5928 282.397C22.007 281.811 21.0573 281.811 20.4715 282.397L11.9862 290.882L3.50093 282.397C2.91514 281.811 1.96539 281.811 1.3796 282.397C0.793818 282.983 0.793818 283.932 1.3796 284.518L10.9255 294.064ZM10.4862 0.996582L10.4862 293.003H13.4862L13.4862 0.996582L10.4862 0.996582Z" fill="black" fill-opacity="0.8"/>
      </svg>

    </div>

    <h2 class="project_heading project__content">Планировка</h2>

    <div class="project_layout group">
      <img class="project_layout__img" src="/img/layout/layout_img.png" alt="">
      <img class="project_layout__shadow" src="/img/layout/layout_img.png" alt="">
    </div>

    <h2 class="project_heading project__content">Процесс</h2>

    <div class="project_process-grid">
      <img class="w-full h-full" src="/img/process/process_1.png" alt="">
      <img class="w-full h-full" src="/img/process/process_2.png" alt="">
      <img class="w-full h-full" src="/img/process/process_3.png" alt="">
      <img class="w-full h-full" src="/img/process/process_4.png" alt="">
      <img class="w-full h-full" src="/img/process/process_5.png" alt="">
      <img class="w-full h-full" src="/img/process/process_6.png" alt="">
    </div>

    <div class="project_process-single">
      <img class="w-full h-full" src="/img/process/process_7.png" alt="">
      <img class="w-full h-full" src="/img/process/process_8.png" alt="">
      <img class="w-full h-full" src="/img/process/process_9.png" alt="">
    </div>

  </div>
</template>

<style scoped>
  .project_container {
    @apply max-w-[1170px]
  }

  .project__content {
    @apply px-8 sm:px-20 md:px-40
  }

  .arrow_bottom {
    @apply flex justify-between items-start gap-4 pt-6 sm:pt-12 md:pt-16
  }

  .project_heading {
    @apply text-2xl md:text-5xl pt-12 sm:pt-32 md:pt-56 pb-16 sm:pb-24 md:pb-32
  }

  .project_layout {
    @apply relative h-full flex justify-start items-start
  }
  .project_layout__img {
    @apply absolute top-0 right-0 w-[80%] z-10 group-hover:-top-4 duration-300
  }
  .project_layout__shadow {
    @apply w-[80%] mt-[10%] relative opacity-10 top-0 group-hover:top-4 duration-300
  }

  .project_process-grid {
    @apply grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 md:gap-20
  }
  .project_process-grid img {
    @apply hover:scale-[1.05] duration-300
  }

  .project_process-single {
    @apply grid gap-4 py-8 sm:py-20
  }
</style>
