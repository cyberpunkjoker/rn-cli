import { FC } from 'react';
import { View } from 'react-native';
import { Card, Text, IconButton, MD3Colors } from 'react-native-paper';
import { deleteTodo } from '@/store/todoStore';
import ReduxHook from '@/hooks/reduxHook'

const { useDispatch } = ReduxHook

interface ListItemProps {
  item: TodoListDto;
}

const ListItem: FC<ListItemProps> = (props) => {
  const { item } = props;
  const dispatch = useDispatch()

  const handleDel = () => {
    dispatch(deleteTodo({ id: item.id }))
  }

  return (
    <>
      {
        !item.isDone && (
          <Card className='mb-4'>
            <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* 内容区 */}
              <View>
                <Text className='text-lg mb-2'>{item.content}</Text>
                <Text className='text-xs'>{item.creatTime}</Text>
              </View>

              {/* 右侧按钮区 */}
              <View>
                <IconButton
                  style={{ marginRight: -10 }}
                  icon="close-circle-outline"
                  iconColor={MD3Colors.error40}
                  size={20}
                  onPress={handleDel}
                ></IconButton>
              </View>

            </Card.Content>
          </Card>
        )
      }
    </>
  )
}

export default ListItem