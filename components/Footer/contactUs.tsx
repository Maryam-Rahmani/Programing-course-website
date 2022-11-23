import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import React, { useState, useEffect } from "react";
import { ContactUsProps } from '../../types/types';
import ContactUsAPI from './contactUsAPI';

const ContactUsForm: NextPage = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm<ContactUsProps>()
    const [formValue, setFormValue] = useState<ContactUsProps>({
      email: "",
      name: "",
      text: "",
    })

   
    const onSubmit = () =>{
        console.log(formValue) 
        ContactUsAPI(formValue)
        .then((res) => {
          console.log(res.data)
        })
        formValue.email =  ""
        formValue.name =  ""
        formValue.text = ""
    }

   
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-6">
                <div className="form-group col-md-6">
                    <label htmlFor="name" className="form-label">name</label>
                    <input
                        type="name"
                        value={formValue.name}
                        {...register("name",
                                { required: 'please inter name',
                                    minLength: { 
                                    value: 2, 
                                    message: 'name must be at least 2 character'
                                    }
                                }
                            )}
                            onChange={e => setFormValue({...formValue, name:(e.target.value)})}
                    />
                    {errors.name && <p style={{color:"red"}}>{errors.name?.message}</p>}
                </div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                    type="email"
                    value={formValue.email}
                    {...register("email",
                        { required: 'please inter email',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'invalid email address'
                            }
                        }
                    )}
                    onChange={e => setFormValue({...formValue, email:(e.target.value)})}
                    />
                    {errors.email && <p style={{color:"red"}}>{errors.email?.message}</p>}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="textarea" className="form-label">Comment</label>
                    <input
                        type="textarea"
                        value={formValue.text}
                        {...register("text",
                            { required: 'please inter text',
                                minLength: {
                                    value: 8,
                                    message: 'text must be at least 100 character'
                                }
                            }
                        )}
                        onChange={e => setFormValue({...formValue, text:(e.target.value)})}
                    />
                    {errors.text && <p style={{color:"red"}}>{errors.text?.message}</p>}
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary mt-4 float-start"
                data-testid="submit-button"
            >
                Send
            </button>
        </form>
    )
 }

export default ContactUsForm