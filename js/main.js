import { createPhotos } from './data.js';
import { renderThumbnails } from './make-picture.js';
import { clickOnUpload } from './form.js';

renderThumbnails(createPhotos());
clickOnUpload();


