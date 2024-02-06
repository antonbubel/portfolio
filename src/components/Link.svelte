<script lang="ts">
  import { onMount } from 'svelte';
  import { track } from '@vercel/analytics';

  export let href: string | undefined = '#';
  
  export let target: string | undefined = '_self';
  export let rel: string | undefined = '';
  export let className: string | undefined = '';
  export let ariaLabel: string | undefined = '';

  let link: HTMLAnchorElement;

  onMount(() => {
    link.addEventListener('click', () => {
      // Send a custom event to Vercel Analytics
      track('link_clicked', {
        url: link.href
      });
    });
  });
</script>

<a bind:this={link} {href} {target} {rel} aria-label={ariaLabel} class={className}>
  <slot></slot>
</a>