# Portfolio Project of Ronald

## Live site link- [Portfolio-project](https://ansary-demo-portfolio.vercel.app/)

### packages used

- Tailwind.
- Swiper.js.
- Framer motion.

### Things i Learned

> - Swiper js is used properly in th `portfolio section`,`Review section` and `blog section`
> - Made navigation with the tab navigation.
> - Navbar on scroll active color change and onClick go to a section.

## Made a image url utility function

```js
export const getImageUrl = (companyLogo) => {
  return new URL(`../assets/${companyLogo}`, import.meta.url).href;
};
```
