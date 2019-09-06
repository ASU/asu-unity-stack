import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';

export default [
	{
		input: 'src/components/AsuDropdownNav/index.js',
		output: {
			name: 'ASUDropdownNav',
			file: 'dist/ASUDropdownNav.bundled.js',
			format: 'umd'
		},
		plugins: [
            resolve({ extensions: ['.jsx', '.js'] }),
            commonjs({
                include: 'node_modules/**'
            }),
			babel({
                exclude: 'node_modules/**' // only transpile our source code
             }),
             postcss({
                plugins: [
                    postcssPresetEnv({ /* use stage 3 features + css nesting rules */
                        stage: 3,
                        features: {
                        'nesting-rules': true
                        }
                    }) 
                ]
            }),
        ],
        external: [
            'react',
            'react-dom'
        ]
    }
];