<template>
    <section
        class="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
        <button
            v-for="(item, idx) in items"
            :key="idx"
            class="focus:outline-none focus:ring focus:ring-emerald-500 dark:focus:ring-red-500 rounded-lg"
            @click="showCarousel(idx)">
            <img loading="lazy" class="pointer-events-none" :src="`https://res.cloudinary.com/mikemcbride/image/upload/c_fill,g_faces:center,h_600,q_90,w_600,f_auto/v1/xmas-${year}/collage/${item.name}.webp`">
        </button>
        <div v-show="open" class="h-screen w-screen fixed inset-0 flex flex-col items-center justify-center">
            <button class="h-screen w-screen absolute inset-0 z-0 bg-black bg-opacity-90" @click="toggle()"></button>
            <div class="relative flex gap-8 items-center justify-center flex-col px-4">
                <div class="flex w-full justify-end mb-8">
                    <button class="text-white text-4xl p-2" @click="toggle()">&times;</button>
                </div>
                <img
                    class="pointer-events-none max-w-full"
                    :src="`https://res.cloudinary.com/mikemcbride/image/upload/c_fill,g_faces:center,h_600,q_90,w_600,f_auto/v1/xmas-${year}/collage/${activeItem.name}.webp`">
                <div class="flex items-center justify-between w-full lg:max-w-lg mx-auto">
                    <button @click="loadPrevious()" class="bg-white text-black rounded text-base px-3 py-2">&lt; Prev</button>
                    <button @click="loadNext()" class="bg-white text-black rounded text-base px-3 py-2">Next &gt;</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VueCollage',
    props: {
        items: {
            type: Array,
            required: true
        },
        year: {
            type: [Number, String],
            required: true
        },
    },
    data() {
        return {
            open: false,
            carouselIndex: 0,
        }
    },
    computed: {
        activeItem() {
            return this.items[this.carouselIndex]
        }
    },
    methods: {
        toggle() {
           this.open = !this.open 
        },
        showCarousel(idx) {
            this.carouselIndex = idx;
            this.open = true;
        },
        loadPrevious() {
            if (this.carouselIndex === 0) {
                this.carouselIndex = this.items.length -1
            } else {
                this.carouselIndex -= 1
            }
        },
        loadNext() {
            if (this.carouselIndex === this.items.length - 1) {
                this.carouselIndex = 0
            } else {
                this.carouselIndex += 1
            }
        },
        handleKeydown(e) {
            if (this.open) {
                switch (e.code) {
                    case "Escape":
                        this.open = false;
                        break;
                    case "ArrowLeft":
                        this.loadPrevious();
                        break;
                    case "ArrowRight":
                        this.loadNext();
                        break;
                }
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeydown)
    },
    destroyed() {
        window.removeEventListener('keydown', this.handleKeydown)
    },
}
</script>

<style></style>
