import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
	it('renders the correct message', () => {
		const wrapper = shallowMount(HelloWorld);
		expect(wrapper.text()).toBe('Hello, Vue with Vite!');
	});
});
