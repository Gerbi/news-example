<template>
  <!-- eslint-disable max-len -->
  <div class="md:mt-48 flex justify-center md:bg-gray-800">
    <div class="text-center my-10 md:hidden text-copy-primary text-xl">404 Not Found</div>
    <div class="hidden md:block wrap-two-up wrap-two-up-middle">
      <div class="content content-two-up">
        <div class="open-dev-radar">
          <div class="open-dev-radar-pulse absolute"></div>
          <div class="open-dev-radar-pulse absolute"></div>
          <div class="open-dev-radar-pulse absolute"></div>
          <div class="open-dev-radar-pulse absolute"></div>
          <div class="open-dev-badge absolute h-20 w-20 flex items-center justify-center rounded-full">
            <svg class="h-8 w-8 fill-current text-blue-600" viewBox="0 0 20 20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.955 3.447C5.154 1.79 7.403 0 7.895 0c.493 0 2.742 1.791 3.942 3.447.984 1.359 1.31 2.375 1.78 3.842l.19.59c.55 1.685.985 4.43.985 4.43s.296 1.35 0 1.478l-5.911 3.939c-.723.368-1.155.362-1.97 0-.812-.54-1.762-1.155-2.66-1.737-1.659-1.073-3.142-2.032-3.252-2.202-.128-.198-.063-.822-.023-1.203.013-.127.023-.226.023-.274-.002-.193.435-2.746.985-4.432l.19-.589c.47-1.467.796-2.483 1.78-3.842zM6.91 8.863s.555.492.986.492c.43 0 .985-.492.985-.492s.809-.803 1.478-.985c.556-.152.956-.247 1.478 0 .591.28.75.761.949 1.368l.036.11c.397 1.196-.193 2.043-.867 3.012-.204.293-.416.598-.611.926-.177.3-.327.595-.47.878-.478.943-.886 1.748-1.993 2.076-.738.219-1.233.219-1.97 0-1.108-.328-1.516-1.133-1.994-2.076-.143-.283-.293-.579-.47-.878a14.933 14.933 0 00-.61-.926c-.675-.969-1.264-1.816-.868-3.013l.036-.109c.2-.607.358-1.088.95-1.368.521-.247.92-.152 1.477 0 .67.182 1.478.985 1.478.985zm.986 5.908c1.088 0 1.97-.661 1.97-1.477 0-.816-.882-1.477-1.97-1.477-1.089 0-1.97.661-1.97 1.477 0 .816.881 1.477 1.97 1.477z"/>
              </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style src="../assets/css/style.css"></style>
