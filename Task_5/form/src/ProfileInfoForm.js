import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaSkype, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './FormStyles.css';

const ProfileInfoForm = ({ onSave, phone, email }) => {
  const { register, handleSubmit, watch, trigger, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '', lastName: '', country: '', city: '', dateOfBirth: '',
      socialNetwork1Type: '', socialNetwork1Username: '',
      socialNetwork2Type: '', socialNetwork2Username: '', postalCode: ''
    },
  });

  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState([
    { code: 'UA', name: 'Україна' },
    { code: 'US', name: 'США' },
    { code: 'GB', name: 'Велика Британія' },
  ]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const cityOptions = {
      UA: [ { id: 'kyiv', name: 'Київ' }, { id: 'lviv', name: 'Львів' }, { id: 'odessa', name: 'Одеса' } ],
      US: [ { id: 'ny', name: 'New York' }, { id: 'la', name: 'Los Angeles' }, { id: 'chicago', name: 'Chicago' } ],
      GB: [ { id: 'london', name: 'London' }, { id: 'manchester', name: 'Manchester' } ]
    };
    setCities(cityOptions[watch('country')] || []);
  }, [watch('country')]);

  const nextStep = async () => {
    const fieldsByStep = {
      1: ['firstName', 'lastName', 'dateOfBirth', 'country', 'city'],
      2: ['socialNetwork1Type', 'socialNetwork1Username', 'socialNetwork2Type', 'socialNetwork2Username'],
      3: ['postalCode']
    };
    if (await trigger(fieldsByStep[step])) setStep(step + 1);
  };

  const onSubmitForm = (data) => {
    onSave({ ...data, phone, email });
  };

  const renderSocialIcon = (type) => {
    const icons = { skype: FaSkype, facebook: FaFacebook, instagram: FaInstagram, whatsapp: FaWhatsapp };
    const Icon = icons[type];
    return Icon ? <Icon className="social-icon" /> : null;
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Інформація профілю</h2>

        {step === 1 && (
          <div className="space-y-6">
            {[['firstName', 'Імʼя'], ['lastName', 'Прізвище'], ['dateOfBirth', 'Дата народження']].map(([id, label]) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
                <input id={id} type={id === 'dateOfBirth' ? 'date' : 'text'} {...register(id, { required: "Це поле обов’язкове" })} className="line-input" />
                {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>}
              </div>
            ))}
            {[['country', 'Країна', countries], ['city', 'Місто', cities]].map(([id, label, options]) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
                <select id={id} {...register(id, { required: "Це поле обов’язкове" })} className="line-input">
                  <option value="">Виберіть {label.toLowerCase()}</option>
                  {options.map(opt => <option key={opt.id || opt.code} value={opt.id || opt.code}>{opt.name}</option>)}
                </select>
                {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>}
              </div>
            ))}
            <button onClick={nextStep} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition">Далі</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {[['socialNetwork1Type', 'socialNetwork1Username'], ['socialNetwork2Type', 'socialNetwork2Username']].map(([typeId, userId]) => (
              <div className="social-input-container" key={typeId}>
                <select {...register(typeId, { required: "Це поле обов’язкове" })} className="line-input">
                  <option value="">Виберіть соц. мережу</option>
                  {['skype', 'facebook', 'instagram', 'whatsapp'].map(sn => <option key={sn} value={sn}>{sn}</option>)}
                </select>
                {renderSocialIcon(watch(typeId))}
                <input type="text" placeholder="Введіть логін/посилання" {...register(userId, { required: "Це поле обов’язкове" })} className="line-input" />
              </div>
            ))}
            <button onClick={nextStep} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition">Далі</button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
            <p className="text-gray-700 mb-2">Місто: {watch('city')}</p>
            <p className="text-gray-700 mb-2">Країна: {watch('country')}</p>
            <div>
              <label htmlFor="postalCode" className="block text-gray-700 mb-2">Індекс міста</label>
              <input id="postalCode" type="text" {...register('postalCode', { required: "Це поле обов’язкове" })} className="line-input" />
              {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition">Зберегти</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileInfoForm;