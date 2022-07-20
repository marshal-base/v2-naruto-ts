import storageFactory from '@marshal93/storage';
const app_name = 'v2-naturo-ts';

export default storageFactory(app_name); // locationStorage

export const session = storageFactory(app_name, true);
