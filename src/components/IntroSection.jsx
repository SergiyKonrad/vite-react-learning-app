import React from 'react'

const e = React.createElement

export default function IntroSection() {
  return e('section', null, [
    e('h1', { key: 'h1' }, 'Vite+React'),
    e(
      'h4',
      { className: 'left-text', key: 'h4' },
      'Introduction to Vite+React',
    ),
    e(
      'p',
      { key: 'p1' },
      'Vite+React is a powerful combination for building fast and modern web applications. Vite, created by the team behind Vue.js, serves as the build tool and development server. It provides instant hot module replacement (HMR) and a lightning-fast development experience, ensuring you can see your changes immediately.',
    ),
    e('h4', { className: 'left-text', key: 'h4-2' }, 'Why Choose Vite+React?'),
    e(
      'p',
      { key: 'p2' },
      "With Vite+React, you benefit from the best of both worlds: the simplicity and flexibility of React, combined with the speed and efficiency of Vite. This combination ensures rapid development and optimal performance for your applications. Vite's optimized build process and minimal configuration make it an excellent choice for modern web development.",
    ),
  ])
}
