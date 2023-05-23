import React from 'react'
import { Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import TrashIcon from '../../icons/trash'
import {
  ModalContainer,
  ModalWrapper,
  ButtonsWrapper,
  TextWrapper,
  Title,
  Description,
  StyledButton,
  StyledButtonText
} from './styles'
import type { EraseModalProps } from './types'

const EraseModal = ({
  isOpen,
  onClose,
  onErase,
  account
}: EraseModalProps) => {
  return (
      <Modal
        animationType="fade"
        visible={isOpen}
        transparent
      >
        <ModalWrapper
          activeOpacity={1}
          onPress={() => {
            onClose()
          }}
        >
          <TouchableWithoutFeedback>
            <ModalContainer>
              <TrashIcon
                color="#FF6680"
                height={40}
                width={40}
                strokeSize={1}
              />
              <TextWrapper>
                <Title>Deseja excluir a conta</Title>
                <Description>{account?.code} - {account?.name}</Description>
              </TextWrapper>
              <ButtonsWrapper>
                <TouchableOpacity onPress={() => {
                  onClose()
                }}>
                  <StyledButton type="secondary">
                    <StyledButtonText type="secondary">
                      Não!
                    </StyledButtonText>
                  </StyledButton>
                </TouchableOpacity >
                <TouchableOpacity
                  onPress={() => {
                    if (account) {
                      onErase(account)
                    }
                  }}
                >
                  <StyledButton type="primary">
                    <StyledButtonText type="primary">
                      Com certeza
                    </StyledButtonText>
                  </StyledButton>
                </TouchableOpacity >
              </ButtonsWrapper>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </ModalWrapper>
      </Modal>
  )
}

export default EraseModal
