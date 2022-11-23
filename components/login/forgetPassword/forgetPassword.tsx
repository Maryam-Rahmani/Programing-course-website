import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import { ForgetPasswordProps } from '../../../types/types';
import React, { useState, useEffect } from "react";
import ForgetPasswordAPI from './forgetPasswordAPI';


const ForgetPassWordForm: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordProps>()
    const [formValue, setFormValue] = useState<ForgetPasswordProps>({
      email: "",
    })
 

    const onSubmit = () =>{
        console.log(formValue)
       ForgetPasswordAPI(formValue)
       .then((res) => {
        console.log(res)
       })
       
        formValue.email =  ""
       
    }

  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-6">
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
            </div>
            
            <button
                type="submit"
                className="btn btn-primary mt-4 float-start"
                data-testid="submit-button"
            >
                send
            </button>
        </form>
    )
 }

export default ForgetPassWordForm