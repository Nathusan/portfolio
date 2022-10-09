export enum Websites {
  instagram,
  linkedIn,
  vsco,
  deviantArt,
}

export function isVisibleInViewport(): boolean {
  const myElement = document.getElementById('container');
  const bounding = myElement.getBoundingClientRect();
  const myElementHeight = myElement.offsetHeight;
  const myElementWidth = myElement.offsetWidth;
  const isInbound = bounding.top >= -myElementHeight + 30
  && bounding.left >= -myElementWidth
  && bounding.right
    <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
  && bounding.bottom
    <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight;

  return isInbound;
}

export function isElementActiveGeneral(elementClassName: string): void {
  const nithTitle = document.getElementsByClassName(elementClassName)[0];

  nithTitle.classList.toggle('active');
}

export function navToExternalWebsite(website: Websites): void {
  let link: string;

  switch (website) {
    case Websites.instagram:
      link = 'https://www.instagram.com/nith_97/';
      break;
    case Websites.linkedIn:
      link = 'https://www.linkedin.com/in/nithusan-sivalingarajah-089809176/';
      break;
    case Websites.vsco:
      link = 'https://vsco.co/plu2/gallery';
      break;
    default:
      break;
  }

  // eslint-disable-next-line no-return-assign
  window.open(link, '_blank');
}

export function isElementActive(): void {
  const nithTitle = document.getElementsByClassName('nith-title')[0];

  if (!isVisibleInViewport() && nithTitle.classList[1] !== 'active') {
    nithTitle.classList.add('active');
  } else if (isVisibleInViewport()) {
    nithTitle.classList.remove('active');
  }
}
