'use client'

import React from "react";
import { title } from "@/components/primitives";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

export default function ModalsPage() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <div>
	<h1 className={title()}>Modals DEMO</h1>
		<section className="my-5 flex flex-col items-center gap-5 justify-center">
		<div className="flex flex-wrap gap-3 pt-2">
			{backdrops.map((b) => (
			<Button  
				key={b}
				variant="flat" 
				color="warning" 
				onPress={() => handleOpen(b)}
				className="capitalize"
			>
			{b}
			</Button>
			))}  
		</div>
		<Modal backdrop={backdrop as any} isOpen={isOpen} onClose={onClose}>
			<ModalContent>
			{(onClose) => (
				<>
				<ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
				<ModalBody>
					<p> 
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam pulvinar risus non risus hendrerit venenatis.
					Pellentesque sit amet hendrerit risus, sed porttitor quam.
					</p>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam pulvinar risus non risus hendrerit venenatis.
					Pellentesque sit amet hendrerit risus, sed porttitor quam.
					</p>
					<p>
					Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
					dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
					Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
					Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
					proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button color="danger" variant="light" onPress={onClose}>
					Close
					</Button>
					<Button color="primary" onPress={onClose}>
					Action
					</Button>
				</ModalFooter>
				</>
			)}
			</ModalContent>
		</Modal>
		</section>
    </div>
  );
}
