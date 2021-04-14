import { ManageListData } from './SideMenuData';

const URL = 'localhost:3000';
const MANAGE_URL = '/m';
const HOME_URL = `${MANAGE_URL}/${ManageListData[0].to}`;

export { URL, MANAGE_URL, HOME_URL };
