export function getLocalStorageObj<T>(name: string): T {
  return JSON.parse(localStorage.getItem(name))
}

export function setLocalStorageObj(name: string, data: any) {
  localStorage.setItem(name, JSON.stringify(data))
}