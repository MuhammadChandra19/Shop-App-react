
export const baseApi = () => {

  const makeRequest = async function <T>(
    url: string,
  ): Promise<T> {
    const resultFetch = await fetch(url)
    if (resultFetch.status === 200) {
      return resultFetch.json()
    }
    return Promise.reject()
  }

  return {
    makeRequest
  }
}

