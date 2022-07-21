import storageFactory from '@marshal93/storage';
const app_name = 'v2-naturo-ts';

export const local = storageFactory(app_name);

export const session = storageFactory(app_name, true);

export default local;
