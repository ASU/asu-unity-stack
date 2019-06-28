import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default [
	{
		input: 'src/components/AsuDropdownMenu/index.js',
		output: {
			name: 'ASUDropdownMenu',
			file: 'dist/ASUDropdownMenu.bundled.js',
			format: 'umd'
		},
		plugins: [
            resolve({ extensions: ['.jsx', '.js'] }),
            commonjs({
                include: 'node_modules/**'
            }),
			babel({
                exclude: 'node_modules/**' // only transpile our source code
             })
		],
		external: [
            'react',
            'react-dom',
            'styled-components'
        ],
        globals: { 'styled-components': 'styled' },
    }
];