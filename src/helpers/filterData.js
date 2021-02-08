import { catImageUrl } from './apiEndpoints';

const filterCats = data => {
  const result = [];
  data.map(cat => cat.image && cat.image.url &&(
    result.push({
      id: cat.id,
      url: cat.image.url,
      name: cat.name,
    })
  ));

  return result;
};

const filterCat = data => ({
  id: data.id,
  url: catImageUrl(data.reference_image_id),
  name: data.name,
  description: data.description,
});

export { filterCats, filterCat };
