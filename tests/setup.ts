import { vi } from 'vitest';

// глобальної змінної
globalThis.fetch = vi.fn();
