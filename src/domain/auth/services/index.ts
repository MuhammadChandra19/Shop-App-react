import { BaseService } from "@app/domain/common/services/base.service";
import { IUser } from "../interfaces";
import { setLocalStorageObj, getLocalStorageObj } from "@app/utils/localstorage";
import { STORAGE } from "@app/constant/storage";
import { history } from "@app/utils/redux/store";
import { MENU } from "@app/constant/menu";

class AuthService extends BaseService {

  public facebookLogin = (response: any) => {
    console.log("kesini")
    const user: IUser = {
      accessToken: response.accessToken,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url
    }
    this.setAuthStorage(user)
    history.replace(MENU.HOME)
  }
  public googleLogin = (response: any) => {
    const user: IUser = {
      accessToken: response.accessToken,
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl
    }

    this.setAuthStorage(user)
    history.replace(MENU.HOME)
  }

  public login = (username: string, password: string) => {
    const user: IUser = {
      accessToken: `${username}${password}`,
      email: null,
      name: username,
      picture: null
    }
    this.setAuthStorage(user)
    history.replace(MENU.HOME)
  }

  public logout = () => {
    localStorage.clear()
    history.replace(MENU.LOGIN)
  }

  public getUserData = (): { name: string, picture: string } => {
    const { name, picture } = getLocalStorageObj<IUser>(STORAGE.USER);
    return { name, picture }
  }
  private setAuthStorage = (user: IUser) => {
    setLocalStorageObj(STORAGE.USER, user)
  }
}

const authService = new AuthService()

export default authService