import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const DimmerLoader = (props) => (
  <Loader active={props.active} inline='centered' />
)

export default DimmerLoader