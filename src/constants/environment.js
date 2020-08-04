const isProduction = process.env.NODE_ENV === 'production' ? true : false;

const appBaseName = isProduction ? '/moviefavz' : '/';

const appBaseUrl = process.env.PUBLIC_URL || window.location.origin;

export default { isProduction, appBaseUrl, appBaseName };
