import { getData } from './api.js';
import { renderThumbnails } from './make-picture.js';
import { clickOnUpload } from './form.js';

renderThumbnails(getData());
clickOnUpload();


