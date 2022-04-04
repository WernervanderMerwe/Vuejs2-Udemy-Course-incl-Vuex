<template>
  <div
    style="
      margin-top: 200px;
      margin-left: 200px;
      display: flex;
      flex-direction: column;
      width: 150px;
    "
  >
    <button class="btn btn-primary" @click="show1 = !show1">Toggle</button>

    <transition name="fade">
      <p v-if="show1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>

    <br /><br />

    <button class="btn btn-primary" @click="show2 = !show2">Toggle</button>

    <transition
      enter-active-class="animate__animated animate__pulse slow"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <p v-if="show2" style="width: 400px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>

    <br /><br />

    <button class="btn btn-primary" @click="show3 = !show3">Toggle</button>

    <transition>
      <p v-if="show3" style="width: 400px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>

    <br /><br />

    <button class="btn btn-primary" @click="show4 = !show4">
      Toggle Replace
    </button>

    <transition name="fade" mode="out-in" appear>
      <p v-if="show4" key="lorem-ipsum" style="width: 200px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p v-else key="nothing-here">Nothing to see here 👀</p>
    </transition>

    <br /><br />

    <button class="btn btn-primary" @click="show5 = !show5">
      Toggle JS Hook
    </button>

    <transition @before-enter="beforeEnter" @enter="enter" :css="false">
      <p v-if="show5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </transition>

    <br /><br />

    <button class="btn btn-primary" @click="changeShape">Switch Shape</button>

    <br /><br />

    <transition name="fade" mode="out-in" appear>
      <component :is="shape"></component>
    </transition>

    <!-- lecture 139 -->
    <!-- lecture 140 -->
  </div>
</template>

<script>
import Square from "./Square.vue";
import Circle from "./Circle.vue";

export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      shape: "appSquare",
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let opacity = 0;

      const interval = setInterval(() => {
        opacity += 0.1;
        el.style.opacity = opacity;

        if (opacity > 0.9) {
          clearInterval(interval);
          done();
        }
      }, 100);
    },
    changeShape() {
      if (this.shape === "appSquare") {
        this.shape = "appCircle";
      } else {
        this.shape = "appSquare";
      }
    },
  },
  components: {
    appSquare: Square,
    appCircle: Circle,
  },
};
</script>

<style>
.v-enter-active {
  animation: pulse 1s;
}

.v-leave-active {
  animation: fade-out 1s;
}

@keyframes fade-out {
  from {
    opacity: 1;
    transition: opacity;
  }

  to {
    opacity: 0;
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}

.slow {
  animation-duration: 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
