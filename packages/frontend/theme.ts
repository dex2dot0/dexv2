
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const dexTheme: CustomThemeConfig = {
    name: 'dexTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #db268a 
		"--color-primary-50": "250 222 237", // #fadeed
		"--color-primary-100": "248 212 232", // #f8d4e8
		"--color-primary-200": "246 201 226", // #f6c9e2
		"--color-primary-300": "241 168 208", // #f1a8d0
		"--color-primary-400": "230 103 173", // #e667ad
		"--color-primary-500": "219 38 138", // #db268a
		"--color-primary-600": "197 34 124", // #c5227c
		"--color-primary-700": "164 29 104", // #a41d68
		"--color-primary-800": "131 23 83", // #831753
		"--color-primary-900": "107 19 68", // #6b1344
		// secondary | #35548a 
		"--color-secondary-50": "225 229 237", // #e1e5ed
		"--color-secondary-100": "215 221 232", // #d7dde8
		"--color-secondary-200": "205 212 226", // #cdd4e2
		"--color-secondary-300": "174 187 208", // #aebbd0
		"--color-secondary-400": "114 135 173", // #7287ad
		"--color-secondary-500": "53 84 138", // #35548a
		"--color-secondary-600": "48 76 124", // #304c7c
		"--color-secondary-700": "40 63 104", // #283f68
		"--color-secondary-800": "32 50 83", // #203253
		"--color-secondary-900": "26 41 68", // #1a2944
		// tertiary | #9c48a2 
		"--color-tertiary-50": "240 228 241", // #f0e4f1
		"--color-tertiary-100": "235 218 236", // #ebdaec
		"--color-tertiary-200": "230 209 232", // #e6d1e8
		"--color-tertiary-300": "215 182 218", // #d7b6da
		"--color-tertiary-400": "186 127 190", // #ba7fbe
		"--color-tertiary-500": "156 72 162", // #9c48a2
		"--color-tertiary-600": "140 65 146", // #8c4192
		"--color-tertiary-700": "117 54 122", // #75367a
		"--color-tertiary-800": "94 43 97", // #5e2b61
		"--color-tertiary-900": "76 35 79", // #4c234f
		// success | #006f67 
		"--color-success-50": "217 233 232", // #d9e9e8
		"--color-success-100": "204 226 225", // #cce2e1
		"--color-success-200": "191 219 217", // #bfdbd9
		"--color-success-300": "153 197 194", // #99c5c2
		"--color-success-400": "77 154 149", // #4d9a95
		"--color-success-500": "0 111 103", // #006f67
		"--color-success-600": "0 100 93", // #00645d
		"--color-success-700": "0 83 77", // #00534d
		"--color-success-800": "0 67 62", // #00433e
		"--color-success-900": "0 54 50", // #003632
		// warning | #d47039 
		"--color-warning-50": "249 234 225", // #f9eae1
		"--color-warning-100": "246 226 215", // #f6e2d7
		"--color-warning-200": "244 219 206", // #f4dbce
		"--color-warning-300": "238 198 176", // #eec6b0
		"--color-warning-400": "225 155 116", // #e19b74
		"--color-warning-500": "212 112 57", // #d47039
		"--color-warning-600": "191 101 51", // #bf6533
		"--color-warning-700": "159 84 43", // #9f542b
		"--color-warning-800": "127 67 34", // #7f4322
		"--color-warning-900": "104 55 28", // #68371c
		// error | #de0d5c 
		"--color-error-50": "250 219 231", // #fadbe7
		"--color-error-100": "248 207 222", // #f8cfde
		"--color-error-200": "247 195 214", // #f7c3d6
		"--color-error-300": "242 158 190", // #f29ebe
		"--color-error-400": "232 86 141", // #e8568d
		"--color-error-500": "222 13 92", // #de0d5c
		"--color-error-600": "200 12 83", // #c80c53
		"--color-error-700": "167 10 69", // #a70a45
		"--color-error-800": "133 8 55", // #850837
		"--color-error-900": "109 6 45", // #6d062d
		// surface | #868589 
		"--color-surface-50": "237 237 237", // #ededed
		"--color-surface-100": "231 231 231", // #e7e7e7
		"--color-surface-200": "225 225 226", // #e1e1e2
		"--color-surface-300": "207 206 208", // #cfced0
		"--color-surface-400": "170 170 172", // #aaaaac
		"--color-surface-500": "134 133 137", // #868589
		"--color-surface-600": "121 120 123", // #79787b
		"--color-surface-700": "101 100 103", // #656467
		"--color-surface-800": "80 80 82", // #505052
		"--color-surface-900": "66 65 67", // #424143
		
	}
}