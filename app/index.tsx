import { FC } from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import { store } from '@/store'
import Routers from '@/routers/router'
import './global.css'; // 导入你的全局 CSS 文件

const App: FC = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routers></Routers>
      </PaperProvider>
    </Provider>
  )
}

export default App