import React,{useState,useEffect} from 'react'

export default function useOnlineStatus() {
  let initialStatus = navigator.onLine;
  const [ status,setStatus ] = useState(initialStatus);

  useEffect(() => {
    updateOnlineStatus();
  }, [initialStatus])

  const updateOnlineStatus = () => {
    setStatus(
      navigator.onLine
    )
  }

  // const online = window.addEventListener('online',updateOnlineStatus);
  // const offline = window.addEventListener('offline',updateOnlineStatus);

  return [ status ]
}
