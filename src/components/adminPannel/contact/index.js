import style from './style.module.css';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';
import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../../axios/axios';

export default function Contact() {
    const { contact } = useSelector((state) => state.contact);
    const isLoaded = contact.status === 'loaded';
    const [inputData, setInputData] = useState({
        whatsapp: '',
        email: '',
        phone: '',
        details: ''
    });

    useEffect(() => {
        if (isLoaded) {
            setInputData({
                whatsapp: contact.items[0]?.whatsapp || '',
                email: contact.items[0]?.email || '',
                phone: contact.items[0]?.phone || '',
                details: contact.items[0]?.details || ''
            });
        }
    }, [isLoaded, contact]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const onChange = useCallback((value) => {
        setInputData((prevState) => ({
            ...prevState,
            details: value
        }));
    }, []);

    const { handleSubmit } = useForm();

    const onSubmit = async () => {
        try {
            await axios.patch(`/contact/${contact.items[0]._id}`, inputData);
            alert('Успешно отредактировано');
        } catch (err) {
            console.warn(err);
            alert('Ошибка обновления данных');
        }
    };

    return (
        <div className={style.contactForm}>
            <h2 style={{ textAlign: 'center', letterSpacing: '2px' }}>
                Редактирование контактной информации {isLoaded ? 'true' : 'false'}
            </h2>
            {isLoaded && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <label>WhatsApp</label>
                            <input
                                name="whatsapp"
                                onChange={handleChange}
                                value={inputData.whatsapp}
                                placeholder="Введите номер WhatsApp"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                name="email"
                                onChange={handleChange}
                                value={inputData.email}
                                placeholder="Введите email"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Номер телефона</label>
                            <input
                                name="phone"
                                onChange={handleChange}
                                value={inputData.phone}
                                placeholder="Введите номер телефона"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <h2>Редактирование текста с реквизитами</h2>
                        <div>
                            <SimpleMDE onChange={onChange} value={inputData.details} />
                        </div>
                    </div>
                    <button type="submit">Сохранить!</button>
                </form>
            )}
        </div>
    );
}
