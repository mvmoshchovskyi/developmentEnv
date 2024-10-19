import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
	it('renders the correct message', () => {
		const wrapper = shallowMount(App);
		expect(wrapper.element).toBeTruthy();
	});
});
