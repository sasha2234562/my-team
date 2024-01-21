export const setLike = (likeId: number | null, like: boolean) => localStorage.setItem(`${likeId}`, JSON.stringify(like))
export const getLike = (likeId: number | null) => JSON.parse(localStorage.getItem(`${likeId}`) || "false")
export const clearStorage = () => localStorage.clear()