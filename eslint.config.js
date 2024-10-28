import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import editorconfig from 'eslint-plugin-editorconfig';

export default [
	{
		files: ['**/*.{js,ts,vue}'], // Вказуємо, які файли включати
	},
	{
		languageOptions: { globals: globals.node }, // Глобальні змінні для Node.js
	},
	pluginJs.configs.recommended, // Рекомендовані правила для JS
	...tsEslint.configs.recommended, // Рекомендовані правила для TypeScript
	...pluginVue.configs['flat/essential'], // Рекомендовані правила для Vue
	{
		files: ['**/*.vue'], languageOptions: {
			parserOptions: { parser: tsEslint.parser }, // Використання парсера TypeScript для .vue файлів
		},
	},
	{
		files: ['**/*.{js,ts}'], // Специфічні файли для налаштування
		rules: {
			'no-console': 'off', // Вимкнення правила для цього файлу
		},
	},
	{
		rules: {

			// Правила для форматування коду
			//'vue/html-indent': ['error', 'tab'],  // Встановлюємо правила для індентації в шаблонах Vue
			// 'indent': ['error', 'tab'], // Відступи: 1 табуляція
			'no-tabs': 'off', // Вимкнення перевірки на табуляції (якщо використовуєте їх)
			'space-in-parens': ['error', 'never'], // Пробіли у дужках
			'comma-dangle': ['error', 'always-multiline'], // Кінцеві коми
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'camelcase': 'error', // Правила для camelCase
			'no-undef': 'warn',
			'semi': ['error', 'always'], // Додаємо правило для обов'язкової крапки з комою
			'quotes': ['error', 'single'], // Додаємо правило для одинарних лапок
			// 'no-unused-vars': 'warn', // Попередження для непотрібних змінних
		},
	},
	{
		plugins: {
			editorconfig, // Додаємо плагін у правильному форматі
		},
	},
];
