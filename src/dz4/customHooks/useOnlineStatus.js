import React,{useState} from 'react'

export default function useOnlineStatus(user) {
  const online = user.online;
  const [status,setStatus] = useState(user.online)

  if(online) {
    return 'online'
  } else {
    return 'offline'
  }
}
