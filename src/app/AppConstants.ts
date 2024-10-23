export class AppConstants {
  constructor() {
  }

  public static BASE_URL = 'https://api.pianto.io';
  // public static BASE_URL = 'https://test-api.pianto.io';
  public static API = {
    LOGIN: AppConstants.BASE_URL + '/v1/auth/login',
    REGISTER: AppConstants.BASE_URL + '/v1/auth/register',
    FORGOT: AppConstants.BASE_URL + '/v1/auth/forgot-password',
    NEW_PASSWORD: AppConstants.BASE_URL + '/v1/auth/reset-password',
    All_USERS: AppConstants.BASE_URL + '/v1/users',
    All_SETTINGS: AppConstants.BASE_URL + '/v1/settings',
    All_SERVICES: AppConstants.BASE_URL + '/v1/services',
    All_COUPONS: AppConstants.BASE_URL + '/v1/coupons',
    All_ORDERS: AppConstants.BASE_URL + '/v1/orders',
    UPDATE_TOKEN: AppConstants.BASE_URL + '/v1/users/updateToken/',
    All_ORDERS_BY_DATE: AppConstants.BASE_URL + '/v1/orders/earnings',
    All_REVIEWS_BY_DATE: AppConstants.BASE_URL + '/v1/reviews/reviewsByDate',
    PLACE_ORDERS: AppConstants.BASE_URL + '/v1/orders/place',
    CONFIRM_ORDERS: AppConstants.BASE_URL + '/v1/orders/confirm',
    All_PRICING: AppConstants.BASE_URL + '/v1/pricing',
    All_CHARGES: AppConstants.BASE_URL + '/v1/charges',
    All_EXTRAS: AppConstants.BASE_URL + '/v1/extras',
    SILENT_REGISTER: AppConstants.BASE_URL + '/v1/auth/registerSilent',
    APPLY_COUPON:  AppConstants.BASE_URL + '/v1/coupons/applyCoupon',
    PAYOUT:  AppConstants.BASE_URL + '/v1/payouts',
    UPDATE_ORDER_STATUS: AppConstants.BASE_URL + '/v1/orders/updateStatus'
  };

 public static selectedService;
}
