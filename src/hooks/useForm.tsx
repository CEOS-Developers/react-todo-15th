import { FormEvent } from 'react';
import useInput from './useInput';

//handler : any... 방법을 못찾겠습니다.ㅜㅜㅜ
const useForm = (initialValue: string, handler: any, id: string | null) => {
    const { value, setValue, onChange } = useInput(initialValue);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //새 할일 추가 or 할일 내용 변경
        handler(value, id);
        //입력창 초기화
        setValue('');
    };

    return { value, setValue, onChange, onSubmit };
};

export default useForm;
