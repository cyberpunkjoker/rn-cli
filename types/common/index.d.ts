interface Dict<T = any> {
  [key: string]: T;
}


interface RouterListDto {
  path: string;
  name: string;
  component: React.ComponentType<any>;
  bottomBar?: boolean;
  icon?: string;
}