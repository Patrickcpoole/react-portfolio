import React, {useRef, useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';
import emailjs from '@emailjs/browser';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {
	pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
  const form = useRef<HTMLFormElement | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (form.current) {
      try {
        const result = await emailjs.sendForm('service_p4tlz0l', 'template_bj2qn2m', form.current, process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY);
        toast.success('Email successfully sent!');
        reset(); // Reset the form fields after successful submission
      } catch (error) {
        toast.error('Failed to send the email.');
      }
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", subject: "", message: "" });
    }
  }, [isSubmitSuccessful, reset]);

	return (
		<div
			className='w-screen min-h-screen flex relative flex-col text-center 
    max-w-7xl justify-start mx-auto items-center'
		>
			<h3 className='section-heading mt-32'>
				Contact
			</h3>
			<div className='flex flex-col mt-12 w-full'>
				<div className='space-y-10 mb-12'>
					<div className='flex items-center justify-center '>
						<PhoneIcon className='text-[#169137] h-7 w-7 mr-2' />
						<p>+{pageInfo.phoneNumber}</p>
					</div>
					<div className='flex items-center justify-center'>
						<EnvelopeIcon className='text-[#169137] h-7 w-7 mr-2' />
						<p>{pageInfo.email}</p>
					</div>
					<div className='flex items-center justify-center'>
						<MapPinIcon className='text-[#169137] h-7 w-7 mr-2' />
						<p>{pageInfo.address}</p>
					</div>
					
				</div>

				<form
				ref={form}
				onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-[95%] md:w-fit mx-auto'
				>
					<div className='flex flex-col md:flex-row items-center w-full space-y-2 md:space-y-0 md:space-x-2'>
						<input
							{...register('name')}
							placeholder='Name'
							className='contactInput'
							type='text'
						/>
						<input
							{...register('email')}
							placeholder='Email'
							className='contactInput'
							type='email'
						/>
					</div>
					<input
						{...register('subject')}
						placeholder='Subject'
						className='contactInput'
						type='text'
					/>
					<textarea
						{...register('message')}
						placeholder='Message'
						className='contactInput'
					></textarea>
					<button
						type='submit'
						className='bg-[#169137] animate-pulse py-5 px-10 rounded-md text-text font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
			<Toaster />
		</div>
	);
}

export default Contact;
