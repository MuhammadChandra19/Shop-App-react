import { BaseService } from "@app/domain/common/services/base.service";
import { IUser } from "../interfaces";
import { setLocalStorageObj } from "@app/utils/localstorage";
import { STORAGE } from "@app/constant/storage";

class AuthService extends BaseService {

  public facebookLogin = (response: any) => {
    const user: IUser = {
      accessToken: response.accessToken,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url
    }
    this.setAuthStorage(user)
  }
  public googleLogin = (response: any) => {
    const user: IUser = {
      accessToken: response.accessToken,
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl
    }

    this.setAuthStorage(user)
  }
  private setAuthStorage = (user: IUser) => {
    setLocalStorageObj(STORAGE.USER, user)
  }
}

const authService = new AuthService()

export default authService