import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Header } from 'semantic-ui-react';
import { fetchFiles } from '../../redux/actions/fileAction'
import { getFileByGistId, getFilesLoading } from '../../redux/selectors/files';
import { getGistById, getGists } from '../../redux/selectors/gists';
import DimmerLoader from '../Loader/Loader';

export default function GistsContent() {
  const { gistId } = useParams();
  const dispatch = useDispatch();
  const selectedGist = useSelector(state => getGistById(state,gistId));

  useEffect(() => {
    if(selectedGist) {
      dispatch(fetchFiles({ files: selectedGist.files,gistId: gistId}))
    }
  }, [gistId,selectedGist]) 

  const files = useSelector(state => getFileByGistId(state,gistId))
  const loading = useSelector(getFilesLoading);

  if(!selectedGist) {
    return (
      <Redirect to='/'></Redirect>
    )
  }
  return (
    <div>
      <DimmerLoader active={loading}></DimmerLoader>
      <Header as='h2'>
        {selectedGist.owner.login}
      </Header>
      {
        files.map(file => (
          <SyntaxHighlighter language={file.language && file.language.toLowerCase()} className='gistContent'  style={docco}>
            {file.fileContent}
          </SyntaxHighlighter>
        ))
      }
      
    </div>
  )
}
