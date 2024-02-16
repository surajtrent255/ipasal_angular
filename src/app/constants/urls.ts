import { environment } from 'src/environments/environment';

export const BASE_URL = environment.production ? '' : 'http://localhost:8081';

export const CATEGORY_BASE_URL = '/api/v1/category';
export const PRODUCT_BASE_URL = '/api/v1/products';

export const SHIPPING_RATE_INFO_URL = 'api/v1/shipping-rate';
export const USER_LOGIN_URL = BASE_URL + '/login';
