<template>
  <nav class="masthead flex justify-between">
    <slot name="logo" class="text-white"><a href="/" class="text-white">Vue Demo</a></slot>
    <transition name="fade-toggle">
      <div class="main-nav" v-show="isOpen">
        <button class="absolute m-4 text-blue-500 top-0 right-0" @click.prevent="close()">
          <i class="far fa-times-circle fa-lg"></i>
        </button>
        <slot name="nav">
        <ul class="list-reset w-64 max-w-full mx-auto text-center">
          <li v-for="(item, index) in items" :key="item.link" class="border-b py lg:border-0">
            <a
              :href="item.link"
              :class="{
                'text-blue-500 no-underline block py-4': true,
                'border-b border-blue-500': index < (items.length - 1) ? true : false
              }"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        </slot>
      </div>
    </transition>
    <div>
      <button class="text-white" @click.prevent="toggle()">
        <i class="fas fa-bars fa-lg"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      isOpen: false,
      items: [
        {
          link: "/",
          label: "Home"
        },
        {
          link: "/form",
          label: "Form"
        },
        {
          link: "/resources",
          label: "Resources"
        }
      ]

    }
  },
  methods: {
    close() {
      this.isOpen = false
    },
    toggle() {
      this.isOpen = this.isOpen ? false : true
    }
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (this.isOpen && event.keyCode == 27) {
        this.close()
      }
    })
  }
}
</script>

<style scoped>
  .masthead {
    @apply w-full p-4 bg-blue-900;
  }

  .main-nav {
    @apply items-center fixed inset-0 bg-white flex;
    transition: all 300ms;
  }

  .fade-toggle {
    opacity: 0;

  }

  .fade-toggle-leave-active {
    opacity: 0;
  }

  .fade-toggle-enter,
  .fade-toggle-leave-active {
    transform: scale(2);
  }
</style>
