import React, {useState} from 'react'

export default function useDocumentTitle() {
  const [ title, setTitle ] = useState(document.title);

  const setValue = value => {
    setTitle(document.title = value);
  }

  return [ title, setValue ]
}
