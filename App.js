import React from 'react'
import Status from './src/component/statusBar/Status'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RootNavigator from './src/navigator/rootNavigator/RootNavigator'
import Toast from 'react-native-toast-message'
import { toastConfig } from './src/component/customToast/CustomToast'

const App = () => {
  return (
    <SafeAreaProvider>
      <Status>
        <RootNavigator></RootNavigator>
        <Toast config={toastConfig}></Toast>
      </Status>
    </SafeAreaProvider>

  )
}

export default App