import { env } from './EnvironmentConfig'

export const APP_NAME = 'MedStar';
export const API_BASE_URL = env.API_ENDPOINT_URL || 'http://localhost:3000'
export const APP_PREFIX_PATH = '/app';
export const VEHICLE_PREFIX_PATH = '/vehicle';

export const THEME_CONFIG = {
	"navType": "SIDE",
	"sideNavTheme": "SIDE_NAV_LIGHT",
	"navCollapsed": false,
	"topNavColor": "#3e82f7",
	"headerNavColor": "#ffffffff",
	"locale": "en",
	"currentTheme": "light",
	"direction": "ltr"
  };



