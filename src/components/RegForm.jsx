import React from 'react'
import { useForm } from 'react-hook-form'
import '../App.css'

function RegForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    async function onSubmit(data) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("submitting the form", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto bg-green-50 p-6 rounded-lg shadow-lg">
            <div className="mb-5">
                <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 mb-1">First Name:</label>
                <input
                    id="firstName"
                    className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    {...register('firstName', {
                        required: "First Name is required",
                        minLength: { value: 3, message: "Min length should be at least 3" },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Fast Name should only contain letters",
                        }
                    })}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
            </div>

            <div className="mb-5">
                <label htmlFor="middleName" className="block text-lg font-medium text-gray-700 mb-1">Middle Name:</label>
                <input
                    id="middleName"
                    className={`w-full p-2 border rounded-md ${errors.middleName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    {...register('middleName')}
                />
                {errors.middleName && <p className="mt-1 text-sm text-red-500">{errors.middleName.message}</p>}
            </div>

            <div className="mb-5">
                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-1">Last Name:</label>
                <input
                    id="lastName"
                    className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    {...register('lastName', {
                        required: "Last Name is required",
                        minLength: { value: 3, message: "Min length should be at least 3" },
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Last Name should only contain letters",
                        }
                    })}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
            </div>

            <div className="mb-5">
                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 mb-1">Email: </label>
                <input
                    id="email"
                    className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    {...register('email', {
                        required: "Email is required",
                        // minLength: { value: 3, message: "Min length should be at least 3" },
                        pattern: {
                            // value: /^[A-Za-z]+$/i,
                            // message: "should only contain letters",
                        }
                    })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${isSubmitting ? 'bg-green-300' : 'hover:bg-green-600'}`}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}

export default RegForm;
