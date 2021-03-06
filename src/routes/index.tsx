import { RouteItem } from '../utils/router/route.item'
import { HomeOutlined, GlobalOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { MENU } from '../constant/menu'
import { Authenticated } from './middleware'
export const PAGES: Array<RouteItem> = [
  {
    key: 'home',
    text: 'Home',
    icon: HomeOutlined,
    isOnBottomNavbar: true,
    url: MENU.HOME,
    component: 'views/Pages/Home',
    layoutConfig: { isBottomNavVisible: true, haveDefaultHeader: true },
    middleware: [Authenticated]
  },
  {
    key: 'feed',
    text: 'Feed',
    icon: GlobalOutlined,
    isOnBottomNavbar: true,
    url: MENU.FEED,
    component: 'views/Pages/Feed',
    layoutConfig: { isBottomNavVisible: true, textHeader: 'Feed' },
    middleware: [Authenticated]
  },
  {
    key: 'search',
    text: '',
    isOnBottomNavbar: false,
    url: MENU.SEARCH_PAGE,
    component: 'views/Pages/SearchPage',
    layoutConfig: { isBottomNavVisible: false, haveDefaultHeader: false },
    middleware: [Authenticated]
  },
  {
    key: 'cart',
    text: 'Cart',
    icon: ShoppingCartOutlined,
    isOnBottomNavbar: true,
    url: MENU.CART,
    component: 'views/Pages/Cart',
    layoutConfig: { isBottomNavVisible: true, textHeader: 'Cart' },
    middleware: [Authenticated]
  },
  {
    key: 'profile',
    text: 'Profile',
    icon: UserOutlined,
    isOnBottomNavbar: true,
    url: MENU.PROFILE,
    component: 'views/Pages/Profile',
    layoutConfig: { isBottomNavVisible: true, textHeader: 'Profile' },
    middleware: [Authenticated]
  },
  {
    key: 'detail',
    text: '',
    isOnBottomNavbar: false,
    url: `${MENU.DETAIL_PRODUCT}/:id`,
    component: 'views/Pages/DetailProduct',
    layoutConfig: { isBottomNavVisible: false, textHeader: 'Detail Product' },
    middleware: [Authenticated]
  }


]