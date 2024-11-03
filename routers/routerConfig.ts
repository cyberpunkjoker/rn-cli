import ToDoPage from "@/app/todo";
import Demos from "@/app/demos";
const routerConfig: RouterListDto[] = [
  {
    path: "/todo",
    name: "Todo",
    component: ToDoPage,
    bottomBar: true,
    icon: "home"
  },
  {
    path: "/demos",
    name: "Demo",
    component: Demos,
    bottomBar: true,
    icon: "camera"
  }
]

export const TabNavigatorConfig = routerConfig.filter(item => item.bottomBar)

export default routerConfig;