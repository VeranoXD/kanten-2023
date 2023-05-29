<template>
  <div class="w-full h-auto m-auto p-auto grid bg-black">
    <ul class="grid grid-cols-2 p-10 gap-5">
      <li>
        <a href="#" class="glightbox">
          <img src="../assets/gallery/IMG_8694.JPG" alt="image" />
        </a>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import "glightbox/dist/css/glightbox.css";
import "glightbox/dist/js/glightbox.js";
import GLightbox from "glightbox";

export default {
  mounted() {
    // Lightbox settings
    this.lightbox = GLightbox({
      selector: ".glightbox",
    });
  },
};
</script>