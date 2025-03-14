import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormStyles.css';

function RegistrationForm({ onComplete }) {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    defaultValues: { phoneCode: '+380', phone: '', confirmationCode: '', email: '', password: '' }
  });

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const phoneCode = watch('phoneCode');
  const phoneValue = watch('phone');
  const codeValue = watch('confirmationCode');
  const passwordValue = watch('password');

  const handleSendCode = () => {
    if (!phoneValue) return alert('First enter your phone number');
    setStep(2);
  };

  const handleConfirmCode = () => {
    if (codeValue === '1234') setStep(3);
    else alert('Invalid confirmation code');
  };

  const onSubmit = (data) => {
    const fullPhone = `${data.phoneCode} ${data.phone}`;
    onComplete && onComplete({ ...data, phone: fullPhone });
  };

  return (
    <>
      <div className="header-area">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
        <h1>Registration</h1>
      </div>

      <div className="form-container">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label>Phone number</label>
              <div className="flex gap-2">
                <select {...register('phoneCode', { required: 'Required' })} className="line-input">
                  <option value="+380">+380</option>
                  <option value="+1">+1</option>
                </select>
                <input type="tel" placeholder="000-00-00-00" {...register('phone', { required: 'Required' })} className="line-input" />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
            <button onClick={handleSendCode} className="w-full bg-blue-500 text-white py-3 rounded-lg">Send code</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label>Enter your phone number</label>
              <input type="tel" value={`${phoneCode} ${phoneValue}`} disabled className="line-input w-full" />
            </div>
            <div>
              <label>Confirmation code</label>
              <input type="text" placeholder=" - - - - " {...register('confirmationCode', { required: 'Required' })} className="line-input" />
              <button onClick={() => { reset({ confirmationCode: '' }, { keepValues: true }); alert('Code resent!'); }} className="text-blue-500 underline text-sm">Send again</button>
            </div>
            <button onClick={handleConfirmCode} className="w-full bg-blue-500 text-white py-3 rounded-lg">Confirm</button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label>Phone number</label>
              <input type="tel" value={`${phoneCode} ${phoneValue}`} disabled className="line-input w-full" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="example@mail.com" {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid format' } })} className="line-input w-full" />
            </div>
            <div className="relative">
              <label>Password</label>
              <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" {...register('password', { required: 'Required', minLength: { value: 6, message: 'Minimum 6 characters' } })} className="line-input w-full pr-12" />
              <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">👁</button>
            </div>
            <button type="submit" className={`w-full py-3 rounded-lg ${passwordValue?.length >= 6 ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-800'}`}>Complete registration</button>
          </form>
        )}
      </div>
    </>
  );
}

export default RegistrationForm;
