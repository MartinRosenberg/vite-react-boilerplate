/** @type {import("eslint").Linter.Config} */
const config = {
	env: {
		browser: true,
		es2024: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
	],
	ignorePatterns: ["dist"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
		ecmaVersion: "latest",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		sourceType: "module",
		tsconfigRootDir: __dirname,
	},
	plugins: ["react", "react-hooks", "react-refresh"],
	root: true,
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	overrides: [
		{
			files: [".eslintrc.cjs", "prettier.config.js", "vite.config.ts"],
			env: {
				node: true,
			},
		},
	],
}

module.exports = config
