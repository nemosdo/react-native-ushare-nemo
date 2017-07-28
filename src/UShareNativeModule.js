//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { UShareNemo } = NativeModules

export default {
  exampleMethod () {
    return UShare.exampleMethod()
  },

  EXAMPLE_CONSTANT: UShare.EXAMPLE_CONSTANT
}
