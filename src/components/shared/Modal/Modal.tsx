
'use client'
import { CloudArrowUp } from 'phosphor-react'
import {
  Button,
  Modal as KeepModal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'keep-react'


 const Modal = () => {  
  return (
    <KeepModal>
      <ModalAction asChild>
        <Button className='bg-primary'>Book Now</Button>
      </ModalAction>
      <ModalContent>
        <ModalClose className="absolute right-4 top-4" />
        <ModalHeader className="mb-6 space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <CloudArrowUp size={28} />
          </div>
          <div className="space-y-1">
            <ModalTitle>Update Modal Status</ModalTitle>
            <ModalDescription>
              Your document has unsaved changes. Discard or save them as a new page to continue.
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <ModalClose asChild>
            <Button>Confirm</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </KeepModal>
  )
}

export default Modal;
