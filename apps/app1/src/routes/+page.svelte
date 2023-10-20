<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { Buffer } from 'buffer';
	import { userpackage } from '../../../../services/service1/models/protobufs/js/esm';

	onMount(async () => {
		const { data } = await axios.get('http://localhost:3000/users');
		console.log(userpackage.UserResp.decode(Buffer.from(data)));
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
