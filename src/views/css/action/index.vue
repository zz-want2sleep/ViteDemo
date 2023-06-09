<template>
    <div>
        <div class="bg-rainbow"></div>
        <div class="bg-rainbow bg-rainbow2"></div>
        <div class="bg-rainbow bg-rainbow3"></div>
        <div class="content">
            <div class="perfection" data-splitting>
            Animation and motion<a href="https://web.dev/learn/accessibility/motion/" target="_blank" rel="noopener noreferrer">link</a>
            </div>

            <div class="" data-splitting="words"></div>
            <div class="" data-splitting="chars"></div>
            <div class="" data-splitting="items"></div>
            <div class="" data-splitting="lines"></div>
        </div>
        <button data-toggle hidden role="switch" aria-checked="true">
            Toggle motion<span aria-hidden=true data-btn-text>: On</span>
        </button>
    </div>
</template>
<script setup>
    import loadJs from '@/plugins/importJs.js';
    import { onMounted } from 'vue';
    /* Text animation */
    console.clear();
    onMounted(() => {
        loadJs('https://unpkg.com/splitting/dist/splitting.min.js')
        .then(() => {
            Splitting();
        });
        
        /* Toggle code forked from Michelle Barker's article in CSS in Real Life https://css-irl.info/accessible-toggles */
        const toggle = document.querySelector("[data-toggle]");
        const buttonText = document.querySelector("[data-btn-text]");
    
        let shouldPauseAnimation = false;
    
        toggle.hidden = false;
    
        toggle.addEventListener("click", () => {
        shouldPauseAnimation = !shouldPauseAnimation;
    
        if (shouldPauseAnimation) {
            buttonText.innerText = ": Off";
            toggle.setAttribute("aria-checked", "false");
            document.body.style.setProperty("--var-playState", "paused");
        } else {
            buttonText.innerText = ": On";
            toggle.setAttribute("aria-checked", "true");
            document.body.style.setProperty("--var-playState", "running");
        }
        });
    });
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://unpkg.com/splitting/dist/splitting.css);
@import url(https://unpkg.com/splitting/dist/splitting-cells.css);
</style>
<style lang='less'>

:root {
    --var-delay: 1s;
    --var-playState: running;
}

html {
  height: 100%;
  display: flex;
}

body {
  margin: auto;
}

/* Rainbow background */
.bg-rainbow {
  animation: slide 9s ease-in-out infinite alternate;
  animation-play-state: var(--var-playState);
  background-image: linear-gradient(-60deg, #66cc33 50%, #086cff 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: 0;
}

.bg-rainbow2 {
  animation-direction: alternate-reverse;
  animation-duration: 10s;
  animation-play-state: var(--var-playState);
}

.bg-rainbow3 {
  animation-duration: 11s;
  animation-play-state: var(--var-playState);
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}

.content {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.5);
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  a {
    margin-left: 20px;
  }
}

/* Toggle button */
button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 0.4rem;
  border: 2px solid #333333;
  font-size: 1.15rem;
  font-weight: 600;
  background-color: #086cff;
  color: #ffffff;
  box-shadow: 0 0.1rem 0.85rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  min-width: 16rem;
  transition: color 300ms, background-color 200ms;
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover,
  :focus {
    background: #9933ff;
  }
}

/* Text */
.perfection {
  font-size: 5.5vw;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: #1fac00;
  position: relative;
  padding: 4rem 5rem 5rem;
  text-decoration: none;
  display: flex;
  line-height: 1.3;

  span {
    display: inline-block;
    white-space: pre;
  }

  .word {
    overflow: hidden;

    .char {
      position: relative;
      animation: slide-down 1s cubic-bezier(0.75, 0, 0.25, 1) both;
      animation-delay: calc(var(--var-delay) + (0.5s * var(--word-index)));
      animation-play-state: var(--var-playState);
      @keyframes slide-down {
        from {
          transform: translateY(-100%);
        }
      }
    }
  }

  [data-word="Animation"], [data-word="and"], [data-word="motion"] {
    overflow: visible;
    animation: slide-over 1.5s cubic-bezier(0.6, 0, 0.25, 1) both;
    animation-delay: var(--var-delay); //.5s * var(--word-index) );
    animation-play-state: var(--var-playState);
    @keyframes slide-over {
      from {
        transform: translateX(-50%);
      }
    }

    .char {
      animation: none;
      visibility: hidden;
    }

    .char:before,
    .char:after {
      visibility: visible;
      color: #9933ff;
      overflow: hidden;
      height: 60%;
      width: 2em;
      text-indent: 0.25em;
      margin-left: -0.25em;
      transform: translateY(-0.2em) scaleY(1);
      animation: fall 7.5s both infinite;
      animation-delay: calc(
        5s + -0.2s * (var(--char-total) - var(--char-index))
      );
      animation-play-state: var(--var-playState);
      @keyframes split-in {
        from {
          transform: translateY(0%) scaleY(1);
        }
      }
    }

    .char:after {
      height: 2.2em;
      transform: translateY(0.11em) scaleY(1);
      clip-path: polygon(-100% 37%, 100% 37%, 100% 100%, -100% 100%);
    }
  }

  @keyframes fall {
    0%,
    20% {
      transform: none;
    }
    70% {
      transform: translateY(100vh) rotate(-0.5turn);
      transform-origin: 50% 50%;
      opacity: 1;
    }
    71% {
      opacity: 0;
    }
    72% {
      transform: scaleY(0);
    }
    90% {
      transform: scale(1);
    }
    100% {
      opacity: 1;
    }
  }
}
</style>