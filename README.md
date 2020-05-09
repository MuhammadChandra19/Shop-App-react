## How To Run
Clone this repository

    $ git clone https://github.com/MuhammadChandra19/Shop-App-react
    
Install Dependencies

    $ npm install
    
Copy .env.example to .env and adjust the value with your environment

    $ cp .env.example .env
    
Run dev server

    $ npm start

## Project structure
```
/
├── assets/
├── src/
    |── api/
    |    ├── base.api.ts
    |    └── yourapi.ts
    |── constant/
    |     ├── app.config.ts
    |     ├── menu.ts
    |     └── storage.ts
    |── domain/
    |     |── common/
    |     |     |── interfaces/
    |     |     |── redux/
    |     |     |     |── actions/
    |     |     |     ├── reducers/
    |     |     |     └── states/
    |     |     └── services/
    |     |           └── base.service.ts
    |     └── yourdomain/
    |          |── interfaces/
    |          |── redux/
    |          |     |── actions/
    |          |     ├── reducers/
    |          |     └── states/
    |          └── services/
    |               └── index.ts
    |── routes/
    |     ├── index.tsx
    |     └── middleware.ts
    |── utils/
    |     |── localstorage/
    |     |── redux/
    |     |     |── action.ts
    |     |     |── generator.ts
    |     |     |── reducer.ts
    |     |     └── store.ts
    |     |── router/
    |     |     |── route.item.ts
    |     |     |── router.factory.tsx
    |     └── types/
    └── views/
          |── Components
          |── Containers
          |── Pages
          └── styles

```

## References
#### 1. API
This folder stores all HTTP requests to **backend**. You can call `baseApi` function and use the `makeRequest` 

```
makeRequest(url);
```

Example :
```javascript
export const yourApi = () => {

  const { makeRequest } = baseApi()
  const { API_URL } = APP_CONFIG

  const getMyItem = async function Promise<Array<ICommonResponse<YourInterface>>> {
    return makeRequest(`${API_URL}/home`)
  }

  return {
    getMyItem
  }
}
```
#### 3. Constant
This folder stores global constants in your project like `MENU, APP_CONFIG, etc`.
Variable name must be in **uppercase** format.

#### 4. domain
This folder stores all the heavy lifting process and redux management
`interface` this folder store model of specific domain
``` javascript
  export inteface YourModel{
    item1: string;
    item2: number
  }
```
`redux` this folder store redux `action, reducer, state`
``` javascript
  //action
    const SET_SOMETHING: "SET_SOMETHING"
  //

  // state
    export interface YourState{
      myModel: YourModel;
    }
  //

  // reducer
  import { Reducer, SingleReducer } from "@app/utils/redux/reducer";
  import { YourState } from "../states";
  import { SET_SOMETHING } from "../actions";
  import { Dict } from "@app/utils/types";

  export class YourReducer extends Reducer<YourState> {

    constructor() {
      super({
        item1: "",
        item2: 0
      })
    }

    public setSomething(state: YourState, item1: string): YourState {
      return {
        ...state,
        item1
      }
    }


    get actions(): Dict<SingleReducer<ShopState>> {
      return {
        [SET_SOMETHING]: this.setSomething,
      }
    }
  }
  //


```
`service` connecting your `reducer` and `api` to `container`or `page`

```javascript
import { BaseService } from "@app/domain/common/services/base.service";
import { SET_SOMETHING } from "../redux/actions";

import { history } from "@app/utils/redux/store";

class YourService extends BaseService {

  public setSomethingCool = () => {
    this.dispatch(SET_SOMETHING, 'hallo')
  }
}

const yourService = new YourService();

export default yourService;


// from page or container
const { setSomethingCool } = yourService

```

### 5. routes
this folder store array of routing object and middleware
`route`
```javascript
  import { Authenticated } from './middleware'
  import { RouteItem } from '../utils/router/route.item'
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
  ]

```
`middleware`
```javascript
import { MiddlewareFunction } from "@app/utils/router/route.item";


export const Authenticated: MiddlewareFunction =  () => {
 //do something
}
```
#### 5. Components
We can store all component that could be used globally here.
Example :
- AsyncPage
- Spin
- etc

#### 6. Container/Layouts
Contains **layout component** like Sidebar, Header, Main, and Footer.

#### 7. connecting redux to view
container or page using `useSelector` to read the state and using service to dispath action
```javascript
  interface YourPageProps{
    item1: string
    item2: number
  }
  const YourPage: React.FC = () => {
    const {item1, item2} = useSelector<AppState, YourPageProps>((state) => ({
      item1: state.yourstate.item1,
      item2: state.yourstate.item2
    }))
  }

  return (
    <div>
    </div>
  )

```
#### 7. utils
Utils folder contains helper methods.
A helper method is a method that helps another method to perform it's task. These are typically used when a method has to perform a complicated task that is composed of several smaller tasks. The smaller tasks are often performed by helper methods.


## Resources
- [ReactJS Documentation](https://reactjs.org/docs/getting-started.html)
- [Axios Documentation](https://github.com/axios/axios)
- [Ant Design of React](https://ant.design/docs/react/)









