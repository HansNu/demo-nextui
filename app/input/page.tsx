'use client'

import React from "react";
import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import {
	Autocomplete,
	AutocompleteSection,
	AutocompleteItem
  } from "@nextui-org/autocomplete";
import {animals} from "./data.js";
import {EyeFilledIcon} from "./EyeFilledIcon.jsx";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon.jsx";

export default function InputPage() {

	const [isVisible, setIsVisible] = React.useState(false);

  	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<div>
			<h1 className={title()}>Search/Inputs DEMO</h1>
			<section className="my-5 flex flex-col items-center gap-5 justify-center">
			<Input
				isClearable
				type="text"
				label="Clearable Input"
				variant="bordered"
				placeholder="Enter your text"
				defaultValue=""
				onClear={() => console.log("input cleared")}
				className="max-w-xs"
			/>
			<Input
				label="Password"
				variant="bordered"
				placeholder="Enter your password"
				endContent={
					<button className="focus:outline-none" type="button" onClick={toggleVisibility}>
					{isVisible ? (
						<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
					) : (
						<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
					)}
					</button>
				}
				type={isVisible ? "text" : "password"}
				className="max-w-xs"
			/>
			<Autocomplete
				label="Autocomplete Search"
				placeholder="Search an animal"
				className="max-w-xs"
				defaultItems={animals}
			>
				{(item: any) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
			</Autocomplete>
			</section>
		</div>
	);
}
