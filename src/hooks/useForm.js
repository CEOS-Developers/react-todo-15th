import useInput from './useInput';

const useForm = (initialValue, handler) => {
    const { value, setValue, onChange } = useInput(initialValue);

    const onSubmit = (e) => {
        e.preventDefault();

        //새 할일 추가 or 할일 내용 변경
        handler(value);
        //입력창 초기화
        setValue('');
    };

    return { value, setValue, onChange, onSubmit };
};

export default useForm;
