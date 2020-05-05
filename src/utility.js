export const IMAGES_URL = "//images.igdb.com/igdb/image/upload/t_thumb/";

export const updateObject = (oldObject, updatedValues) => {
  return { ...oldObject, ...updatedValues };
};