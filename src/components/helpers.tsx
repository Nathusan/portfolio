export function isVisibleInViewport(): boolean {
  const myElement = document.getElementById('container');
  const bounding = myElement.getBoundingClientRect();
  const myElementHeight = myElement.offsetHeight;
  const myElementWidth = myElement.offsetWidth;

  if (
    bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right
          <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom
          <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
    return true;
  }
  return false;
}

export function isElementActiveGeneral(elementClassName: string): void {
  const nithTitle = document.getElementsByClassName(elementClassName)[0];

  nithTitle.classList.toggle('active');
}
