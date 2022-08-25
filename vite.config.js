import { sveltekit } from '@sveltejs/kit/vite';
import windicss from 'vite-plugin-windicss'

const config = {
	plugins: [windicss(), sveltekit()]
};

export default config;
