const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryListEl = document.querySelector('ul#gallery');
const galleryItems = images.map(({ url, alt }) => {
  const galleryItem = `<li class="gallery_item" style="list-style:none;">
  <img src ="${url}"
alt="${alt}" class ="gallery_image"/>
</li>
`; return galleryItem;
})
galleryListEl.insertAdjacentHTML('afterbegin', galleryItems.join(''));
