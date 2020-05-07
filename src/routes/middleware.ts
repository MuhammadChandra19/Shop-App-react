import { MiddlewareFunction } from "@app/utils/router/route.item";
import { getLocalStorageObj } from "@app/utils/localstorage";
import { IUser } from "@app/domain/auth/interfaces";
import { STORAGE } from "@app/constant/storage";
import { MENU } from "@app/constant/menu";

export const Authenticated: MiddlewareFunction = async () => {
  const token = getLocalStorageObj<IUser>(STORAGE.USER)
  if (token) {
    return true
  }
  return MENU.LOGIN
}