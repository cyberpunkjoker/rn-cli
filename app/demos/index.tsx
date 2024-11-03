import { FC } from "react"
import { ScrollView, Text } from "react-native"
import StockTrend from "./components/stockTrend"

const Demos: FC = () => {
  return (
    <ScrollView>
      <StockTrend></StockTrend>
    </ScrollView>
  )
}

export default Demos