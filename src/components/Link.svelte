<script>
  import { onMount } from "svelte";
  import { track } from "@vercel/analytics";

  /** @type {HTMLAnchorElement} */
  export let href = "#";

  /** @type {'_self' | '_blank' | '_parent' | '_top'} */
  export let target = "_self";

  /**  @type {string} */
  export let rel = "";

  /** @type {string} */
  export let className = "";

  /** @type {string} */
  export let ariaLabel = "";

  let link;

  onMount(() => {
    link.addEventListener("click", () => {
      // Send a custom event to Vercel Analytics
      track("link_clicked", {
        url: link.href,
      });
    });
  });
</script>

<a
  bind:this={link}
  {href}
  {target}
  {rel}
  aria-label={ariaLabel}
  class={className}
>
  <slot />
</a>
