import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    console.log(formData);
    window.location.href = `mailto:patrickcpoole@gmail?subject=
    ${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`
  }
	return (
		<div 
			className="h-screen w-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>
			<div className="flex flex-col space-y-10">
				
				<div className="space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#169137] h-7 w-7 animate-pulse" />
						<p>+303-888-8909</p>
					</div>
          <div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#169137] h-7 w-7 animate-pulse" />
						<p>Denver, CO</p>
					</div>
          <div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#169137] h-7 w-7 animate-pulse" />
						<p>patrickcpoole@gmail.com</p>
					</div>
          
				</div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
            <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
            <textarea {...register('message')} placeholder="Message" className="contactInput"></textarea>
            <button type="submit" className="bg-[#169137] py-5 px-10 rounded-md text-white font-bold text-lg">Submit</button>
        </form>

			</div>
		</div>
	);
}

export default Contact;
