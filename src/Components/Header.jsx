import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size={'md'}
        pos={'fixed'}
        top={'5'}
        fontSize={'lg'}
        marginLeft={'2'}
        colorScheme="purple"
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>video hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to={'/Videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to={'/Videos?catogory=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="ghost">
                <Link to={'/Upload'}>Upload</Link>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter >
            <HStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" >
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant="outline">
                <Link to={'/sign in'}>sign in</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
