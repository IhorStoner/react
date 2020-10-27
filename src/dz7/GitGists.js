import React,{ useEffect } from 'react'
import { BrowserRouter, Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
import GistsContent from './components/GistsContent/GistsContent'
import GistsList from './components/GistsList/GistsList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGists } from './redux/actions/gistsAction'
import DimmerLoader from './components/Loader/Loader'
import { getGists, getGistsLoading } from './redux/selectors/gists'

export default function GitGists() {
  const gists = useSelector(getGists);
  const isLoading = useSelector(getGistsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGists());
  }, []);

  return (
    <BrowserRouter>
    <Container>
      <Grid columns={2}>
        <Grid.Column width='4'>
          <DimmerLoader active={isLoading}/>
          <Route path='/'>
            <GistsList gists={gists}/>
          </Route>  
        </Grid.Column>
        <Grid.Column width='12'>
          <Route path='/:gistId' exact>
            <GistsContent/>
          </Route>
        </Grid.Column>
      </Grid>
    </Container>
    </BrowserRouter>
  )
}
