// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mjkhan9.github.io',
  base: '/mjkhan-portfolio-2025',
  integrations: [
    starlight({
      title: 'Mohammad Khan',
      description: 'Cloud & Identity Engineer Portfolio - AWS, IAM, Infrastructure Automation',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Mjkhan9' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/mohammad-jawad-khan' },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Case Studies',
          items: [
            { label: 'IT Simulator Project', link: '/projects/it-simulator/' },
            { label: 'AWS Student Data Infrastructure', link: '/projects/aws-student-data/' },
            { label: 'IAM Lifecycle Automation', link: '/projects/hybrid-iam-lifecycle/' },
          ],
        },
        {
          label: 'Engineering Decisions',
          autogenerate: { directory: 'decision-logs' },
        },
        { label: 'About', link: '/about/' },
        { label: 'Contact', link: '/contact/' },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
            rel: 'stylesheet',
          },
        },
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
