import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import emailJS from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailJS
      .send(
        'service_8p00a36',
        'template_8jztj7a',
        {
          from_name: form.name,
          to_name: 'Pedro Silva',
          from_email: form.email,
          to_email: 'pedrosilvacwb@gmail.com',
          message: form.message,
        },
        'DgPpha_hz10aBaiPU'
      )
      .then(() => {
        setLoading(false);
        alert('Obrigado pelo contato. Entrarei em contato assim que possivel.');
        setForm(
          {
            name: '',
            email: '',
            message: '',
          },
          (error) => {
            setLoading(false);
            console.log(error);

            alert('Ops, algo deu errado.');
          }
        );
      });
  };

  return (
    <div className="xl:mt-12">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Me mande um olá</p>
        <h3 className={`${styles.sectionHeadText}`}>Contato.</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handeSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu Nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Seu email..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensagem</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Sua mensagem..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            className="bg-[#47d974] py-3 px-8 outline-none w-fit text-primary rounded-xl font-bold shadow-md"
            type="submit"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
