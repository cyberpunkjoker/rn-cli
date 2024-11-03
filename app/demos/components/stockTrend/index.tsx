import React, { FC, useEffect } from 'react'; n
import { View, } from 'react-native';
import SSEClient from '@/utils/sse';
import EventSource from "react-native-sse";
import { Button } from 'react-native-paper';


const StockTrend: FC = () => {

  const initSSE = () => {
    const url = 'https://9.push2.eastmoney.com/api/qt/stock/trends2/sse?fields1=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f17&fields2=f51,f52,f53,f54,f55,f56,f57,f58&mpi=1000&ut=fa5fd1943c7b386f172d6893dbfba10b&secid=1.600611&ndays=1&iscr=0&iscca=0&wbp2u=|0|0|0|web';


    const es = new EventSource(url);

    console.log('SSE client initialized', es);


    es.addEventListener('message', (e) => {
      console.log('Received message:', e);
    })

    // const sseInstance = new SSEClient({
    //   url: url,
    //   onMessage: (data) => console.log("Received message:", data),
    //   onError: (error) => console.error("SSE error:", error),
    // });
  }

  useEffect(() => {
    initSSE();
  }, [])

  return (
    <View>
      <Button onPress={initSSE}>Stock Trend</Button>
    </View>
  )
}

export default StockTrend;  