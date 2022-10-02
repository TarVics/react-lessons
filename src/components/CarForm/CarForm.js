import {useForm} from "react-hook-form";

const CarForm = ({onSubmit}) => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: 'all'});
    const onSave = data => {
        if (typeof onSubmit === 'function') onSubmit(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSave)}>
            <input placeholder={"model"} {...register("model", {required: true})} />
            {errors.model && <span>{errors.model.message}</span>}
            <input placeholder={"price"} {...register("price", {required: true, valueAsNumber: true})} />
            {errors.price && <span>{errors.price.message}</span>}
            <input placeholder={"year"} {...register("year", {required: true, valueAsNumber: true})} />
            {errors.year && <span>{errors.year.message}</span>}

            <input disabled={!isValid} type="submit" value={'Create'}/>
        </form>
    );
};

export {CarForm};
