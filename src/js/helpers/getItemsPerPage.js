export const getItemsPerPage = () => {
  const breakpointsWidth = {
    mobile: 320,
    tablet: 768,
  };
  if (window.innerWidth <= breakpointsWidth.mobile) {
    return 5;
  } else if (window.innerWidth <= breakpointsWidth.tablet) {
    return 8;
  } else {
    return 16;
  }
};
