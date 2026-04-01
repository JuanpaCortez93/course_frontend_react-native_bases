import { useForm } from "react-hook-form"

type FormInputs = {
    email:string;
    password:string;
}

const FormsPage = () => {

  const { register, handleSubmit } = useForm<FormInputs>(
    {
        defaultValues: {
            email: 'juan@testing.com',
            password: '12345'
        }
    }
  );

  const onSubmit = (myForm : FormInputs) => {
    console.log({myForm});
  }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Forms</h3>
            <div className="flex flex-col space-y-2 w-125">
                <input type="email" placeholder="email" className="border border-gray-300 p-2 rounded-xl" {...register('email', {required: true})}/>
                <input type="password" placeholder="password" className="border border-gray-300 p-2 rounded-xl" {...register('password', {required: true})}/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl">Submit</button>
            </div>
        </form>
    </>
  )
}

export default FormsPage
