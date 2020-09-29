import React, {useState} from 'react'

export default function useDocumentTitle(docTitle) {
  const [ title, setTitle ] = useState(docTitle);
  const initialTitle = document.getElementById('docTitle');

  const setValue = value => {
    setTitle(initialTitle.innerText = value);
  }

  return [ title, setValue ]
}
