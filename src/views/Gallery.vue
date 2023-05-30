<template>
  <div class="bg-black py-10 ">

  <div class="container mx-auto">
    <div class="lg:gap-2 lg:grid lg:grid-cols-3 ">
      <div class="w-full rounded" v-for="image in images" :key="image.id">
        <img :src="image.photo" alt="image" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          photo:
          'src/assets/gallery/IMG_8695.JPG',
        },
        {
          id: 2,
          photo:
            'src/assets/gallery/IMG_8694.JPG',
        },
        {
          id: 3,
          photo:
          'src/assets/gallery/IMG_8696.JPG',
        },
        {
          id: 4,
          photo:
          'src/assets/gallery/IMG_8697.JPG',
        },
        {
          id: 5,
          photo:
          'src/assets/gallery/IMG_8698.JPG',
        },
        {
          id: 6,
          photo:
          'src/assets/gallery/IMG_8699.JPG',
        },
        {
          id: 7,
          photo:
          'src/assets/gallery/IMG_8700.JPG',
        },
        {
          id: 8,
          photo:
          'src/assets/gallery/IMG_8702.JPG',
        },
        {
          id: 9,
          photo:
          'src/assets/gallery/IMG_8703.JPG',
        },
        {
          id: 10,
          photo:
          'src/assets/gallery/IMG_8704.JPG',
        },
        {
          id: 11,
          photo:
          'src/assets/gallery/IMG_8705.JPG',
        },
        {
          id: 12,
          photo:
          'src/assets/gallery/IMG_8706.JPG',
        },
        {
          id: 13,
          photo:
          'src/assets/gallery/IMG_8707.JPG',
        },
        {
          id: 14,
          photo:
          'src/assets/gallery/IMG_8708.JPG',
        },
        {
          id: 15,
          photo:
          'src/assets/gallery/IMG_8709.JPG',
        },
        {
          id: 16,
          photo:
          'src/assets/gallery/IMG_8711.JPG',
        },
        {
          id: 17,
          photo:
          'src/assets/gallery/IMG_8712.JPG',
        },
        {
          id: 18,
          photo:
          'src/assets/gallery/IMG_8713.JPG',
        },
      ],
    };
  },
};
</script>