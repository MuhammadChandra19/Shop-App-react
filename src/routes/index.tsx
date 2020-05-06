import { RouteItem } from '../utils/router/route.item'
import { HomeOutlined } from '@ant-design/icons'
import { MENU } from '../constant/menu'
export const PAGES: Array<RouteItem> = [
  {
    key: 'home',
    text: 'Home',
    icon: HomeOutlined,
    isOnBottomNavbar: true,
    url: MENU.HOME,
    component: 'views/pages/Home',
    layoutConfig: { isBottomNavVisible: true }
  },
  {
    key: 'feed',
    text: 'Home',
    icon: HomeOutlined,
    isOnBottomNavbar: true,
    url: MENU.HOME,
    component: 'views/pages/Home',
    layoutConfig: { isBottomNavVisible: true }
  }
]