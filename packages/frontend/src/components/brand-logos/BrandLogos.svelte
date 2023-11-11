<script lang="ts">
    import Amplify from './Amplify.svelte';
    import AWS from './AWS.svelte';
    import Azure from './Azure.svelte';
    import Cloudflare from './Cloudflare.svelte';
    import Csharp from './Csharp.svelte';
    import CSS from './CSS.svelte';

    export let cloudSelected: boolean = false;
    export let fullStackSelected: boolean = false;
    export let apisSelected: boolean = false;
    export let devopsSelected: boolean = false;
    export let webDevSelected: boolean = false;
    export let mortechSelected: boolean = false;
    export let dataSelected: boolean = false;
    export let agileSelected: boolean = false;

    const logoList: any[] = [Amplify,AWS,Azure,Cloudflare,Csharp,CSS];
    const logos: any[] = [];
    

    for (let i = 0; i < 100; i++) {
        logoList.map((logo => logos.push(logo)));
    }
</script>

<style>
    .logo-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
    }
  
    .logo-container > div {
      margin: 1rem; /* Adjust the gap between logos */
    }
  
    .logo-container > div > svg {
      overflow: hidden; /* Allow logos to overflow the container */
      position: absolute;
    }
  </style>
  
  <div class="logo-container">
    {#each logos as Logo}
      <div>
        <Logo isSelected={false} />
      </div>
    {/each}
  </div>

