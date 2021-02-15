import {createDescriptions} from './data.js';
import PicturePreview from './picture-preview.js';

const DESCRIPTIONS_COUNT = 7;

const descriptions = createDescriptions(DESCRIPTIONS_COUNT);
PicturePreview.render(descriptions);
