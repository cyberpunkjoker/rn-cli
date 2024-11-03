import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ListItem from './components/ListItem';
import CommonModal, { useModalHook } from '@/components/CommonModal';
import ReduxHook from '@/hooks/reduxHook'
import { createTodo } from '@/store/todoStore';

const { useSelector, useDispatch } = ReduxHook

const ToDoPage: FC = () => {
  const modal = useModalHook();
  const [text, setText] = useState('');

  const todoList = useSelector((state) => state.todoStore.todoList)
  const dispatch = useDispatch()

  const handleAddTodo = async () => {
    if (!text) {
      return
    }

    dispatch(createTodo({ content: text }))
  }

  return (
    <View className='px-2 mt-4'>
      <Text className='text-2xl font-bold'>待办事项</Text>

      <View className='mt-4'>
        {todoList.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}

      </View>

      <View className='mt-5 w-full flex items-center'>
        <Button
          className='w-36'
          icon="plus"
          mode="contained-tonal"
          onPress={modal.openModal}
        >
          新增
        </Button>
      </View>

      <CommonModal
        {...modal}
        title="新增待办事项"
        btnName="新增"
        promiseFn={handleAddTodo}
      >
        <View className='mb-4'>
          <TextInput
            mode="outlined"
            label="代办内容"
            placeholder="请输入代办内容"
            value={text}
            onChangeText={text => setText(text)}
            right={<TextInput.Affix text="/100" />}
          />
        </View>
      </CommonModal>
    </View>
  )
}

export default ToDoPage;