import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type Inputs = {
    name: string
    unitPrice: number
    unitsInStock: number
    quantityPerUnit: string
}


const addProductShema = yup.object().shape({
    name: yup.string().required("Name alanı boş bırakılamaz!"),
    unitPrice: yup.number().required("unitPrice alanı boş bırakılamaz!")

})


function AddProductForm() {


    //register ile inputları eşleştireceğim
    const { register, handleSubmit, formState: { errors }, } = useForm<any>({
        resolver: yupResolver(addProductShema)
    })

    const addProduct: SubmitHandler<Inputs> = (data: Inputs) => {

        console.log(data);

        // axios.post('https://northwind.vercel.app/api/products', data)
        //     .then(res => {
        //         console.log(res);
        //         alert('Success!')
        //     })

    }

    return (<>
        <div>
            <form onSubmit={handleSubmit(addProduct)}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type='text' {...register("name")} />
                    { errors.name && <span style={{color:'red'}}>{errors.name.message?.toString()}</span>}
                </div>
                <div>
                    <label htmlFor="">Unit Price</label>
                    <input {...register('unitPrice')} />
                    { errors.unitPrice && <span style={{color:'red'}}>{errors.unitPrice.message?.toString()}</span>}

                </div>
                <div>
                    <label htmlFor="">Stock</label>
                    <input type='text' {...register('unitsInStock')} />
                </div>
                <div>
                    <label htmlFor="">Quantity Per Unit</label>
                    <input type='text' {...register("quantityPerUnit")} />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    </>)
}

export default AddProductForm