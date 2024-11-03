import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text, IconButton, MD3Colors, Button } from 'react-native-paper';

interface CommonModalProps {
  visible: boolean;
  openModal: () => void;
  closeModal: () => void;
  title: string;
  children: JSX.Element;
  btnName?: string;
  promiseFn?: (p?: any) => Promise<void> | void;
}

export const useModalHook = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);

  const closeModal = () => setVisible(false);

  return { visible, openModal, closeModal };
}

const CommonModal: FC<CommonModalProps> = (props) => {
  const { visible = true, closeModal, title, children, btnName = 'cancel', promiseFn } = props;

  const hideModal = () => {
    closeModal && closeModal();
  };

  const handleOk = async () => {
    try {
      promiseFn && await promiseFn()
      hideModal();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{ backgroundColor: 'white', margin: 20 }}
        >
          <View className='mx-4 p-4 pt-0'>
            {title &&
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                className='flex justify-between items-center'
              >
                <Text className='inline-block'>{title}</Text>
                <IconButton
                  style={{ marginRight: -6 }}
                  icon="close-circle-outline"
                  iconColor={MD3Colors.primary10}
                  size={20}
                  onPress={hideModal}
                />
              </View>
            }
            {children}

            <View className='w-full flex justify-center items-center'>
              <Button mode="elevated" onPress={handleOk}>
                {btnName}
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </View >
  );
};

export default CommonModal;