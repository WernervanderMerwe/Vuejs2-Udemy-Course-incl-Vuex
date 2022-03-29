<template>
  <div style="margin-top: 200px; margin-left: 200px; flex">
    <button class="btn btn-primary" @click="show1 = !show1">Toggle</button>

    <transition name="fade">
      <p v-if="show1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>

    <button class="btn btn-primary" @click="show2 = !show2">Toggle</button>

    <transition
      enter-active-class="animated pulse"
      leave-active-class="animated zoomOut"
    >
      <p v-if="show2" style="width: 200px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>
  </div>
</template>

<script>
// import "animate.css";

export default {
  data() {
    return {
      show1: false,
      show2: false,
    };
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
