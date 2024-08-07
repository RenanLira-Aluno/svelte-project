<script lang="ts">
  let open = false;
</script>

<div class="menu">
  <label for="checkbox-menu">
    <input
      type="checkbox"
      id="checkbox-menu"
      class="hidden"
      bind:checked={open}
    />
    <div class={`icon ${open ? "openned" : " "}`}>
      <svg
        width="max-content"
        height="max-content"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          x2="42"
          y1="8.5"
          y2="8.5"
          stroke="currentColor"
          class="line__1"
        />
        <line
          x1="0"
          x2="42"
          y1="19.5"
          y2="19.5"
          stroke="currentColor"
          class="line__2"
        />
        <line
          x1="21"
          x2="42"
          y1="30.5"
          y2="30.5"
          stroke="currentColor"
          class="line__3"
        />
      </svg>
    </div>
  </label>

  <nav class={`dropdown-menu ${open ? "dropdown-menu-openned" : ""}`}>
    <ul class="flex flex-col items-center h-full justify-around text-white">
      <li>
        <a href="#" class="text-lg">Home</a>
      </li>
      <li>
        <a href="#" class="text-lg">About</a>
      </li>
      <li>
        <a href="#" class="text-lg">Contact</a>
      </li>
    </ul>
  </nav>
</div>

<style lang="postcss">
  .menu {
    @apply relative;

    & .dropdown-menu {
      @apply absolute mt-2 right-0 bg-burgundy w-40 h-0 overflow-hidden rounded-lg transition-all duration-300 ease-in-out;
    }

    & .dropdown-menu-openned {
      @apply h-32 transition-all duration-300 ease-in-out;
    }
  }
  .icon {
    @apply cursor-pointer flex items-center justify-center w-7;
  }
  svg {
    @apply text-gold;

    & line {
      transition: all;
      transition-duration: 300ms;
      stroke-width: 3px;
    }

    &:hover .line__3 {
      transform: translateX(-100%) scaleX(2);
      transition: all;
      transition-duration: 300ms;
    }
  }

  .openned {
    & .line__1 {
      transform: rotate(-45deg) translateY(12px);
      transform-origin: center;
      transition: all;
      transition-duration: 300ms;
    }

    & .line__2 {
      transform: rotate(45deg);
      transform-origin: center;
      transition: all;
      transition-duration: 300ms;
    }

    & .line__3 {
      display: none;
    }
  }
</style>
