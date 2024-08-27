import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
        server: {
                host: true, // used to allow traffic when in a container
                watch: {
                        usePolling: true // required for WSL/docker windows filesystem mount (CAUTION: CPU heavy)
                }
        },
        plugins: [sveltekit()]
});
