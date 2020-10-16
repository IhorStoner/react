export const saveLocal = (key,state) => {
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key,serializedState)
  } catch(err) {
    console.log(err)
  }
}

export const loadLocal = (key) => {
  try{
    const serializedState = localStorage.getItem(key)
    if(serializedState === null) {
      return []
    }
    return JSON.parse(serializedState)
  } catch(err) {
    console.log(err)
  }
}
