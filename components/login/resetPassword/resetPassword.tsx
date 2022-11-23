import type {NextPage} from 'next'
import { useForm } from 'react-hook-form'
import { ResetPasswordProps } from '../../../types/types';
import React, { useState, useEffect } from "react";
import ResetPasswordAPI from './resetPasswordAPI';


const ResetPassWordForm: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordProps>()
    const [formValue, setFormValue] = useState<ResetPasswordProps>({
      password: "",
    })
 

    const onSubmit = () =>{
        console.log(formValue)
       ResetPasswordAPI(formValue)
       .then((res) => {
        console.log(res.data)
       })
       
        formValue.password =  ""
       
    }

  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
            <div className="form-group col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        value={formValue.password}
                        {...register("password",
                            { required: 'please inter password',
                                minLength: {
                                    value: 8,
                                    message: 'password must be at least 8 character'
                                }
                            }
                        )}
                        onChange={e => setFormValue({...formValue, password:(e.target.value)})}
                    />
                    {errors.password && <p style={{color:"red"}}>{errors.password?.message}</p>}
                </div>
            </div>
            
            <button
                type="submit"
                className="btn btn-primary mt-4 float-start"
                data-testid="submit-button"
            >
                reset
            </button>
        </form>
    )
 }

export default ResetPassWordForm