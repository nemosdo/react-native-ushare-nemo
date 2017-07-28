//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const UShare = requireNativeComponent('UShareNemo', UShareView)

export default class UShareView extends Component {
  render () {
    return <UShare {...this.props} />
  }
}

UShareView.propTypes = {
  exampleProp: React.PropTypes.any
}
