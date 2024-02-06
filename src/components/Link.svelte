<script>
  import { onMount } from 'svelte';
  import { track } from '@vercel/analytics';

  export let href = '#';
  export let target = '_self';
  export let rel = '';
  export let className = '';
  export let ariaLabel = '';

  let link;

  onMount(() => {
    link.addEventListener('click', () => {
      // Send a custom event to Vercel Analytics
      track('link_clicked', {
        url: link.href
      });
    });
  });
</script>

<a bind:this={link} {href} {target} {rel} {ariaLabel} class={className}>
  <slot></slot>
</a>