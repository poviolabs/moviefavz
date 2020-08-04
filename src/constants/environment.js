const isProduction = process.env.NODE_ENV === 'production' ? true : false;

const appBaseUrl = process.env.PUBLIC_URL;

export default { isProduction, appBaseUrl };
