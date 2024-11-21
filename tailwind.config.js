/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // 根据项目文件结构调整路径
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'], // 默认字体设置为 sans，其他地方直接引用 sans
    },
    screens: {
      sm: '375px', // 用 sm 表示 mobile
      lg: '1440px', // 用 lg 表示 desktop
    },
    extend: {
      textColor: {
        'item-selected': 'black',
      },
      backgroundColor: {
        'item-selected': 'hsl(206, 94%, 87%)',
      },
      backgroundImage: {
        'sidebar-desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        // Primary colors
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        // Neutral colors
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        base: '16px', // 设置基础字体大小为 16px，简化引用
      },
    },
  },
  plugins: [],
};
