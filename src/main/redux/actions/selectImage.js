export function selectImage(image){
    console.log('you selected ')
    return {
      type: 'IMAGE_SELECTED',
      payload: image
    };
  }