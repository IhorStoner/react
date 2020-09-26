import React, {useState} from 'react'

export default function useDocumentTitle(prevTitle) {
  const [ title, setTitle ] = useState(prevTitle);

  const setValue = value => {
    setTitle(value);
  }

  return [ title, setValue ]
}
