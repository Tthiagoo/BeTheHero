import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../Assets/logo.svg'
import api from '../../services/api'; //busca a api criada

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    }
    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID:${response.data.id}`)
      history.push('/');
    } catch (err) {
      alert('Erro ao cadastrar')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Beee" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
              Já tenho tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleSubmit(handleRegister)}>
          <input
            name="ong"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
            ref={register({ required: true })}
          />
          {errors.ong && <p className="error">Esse campo é requirido</p>}


          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            ref={register({
              required: "Enter your e-mail",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            name="whatsapp"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            ref={register({
              required: true,
              minLength: 10,
              maxLength: 11,
            })}
          />
          {errors.whatsapp?.type === "required" && <p className="error">Este campo é obrigatorio</p>}
          {errors.whatsapp?.type === "minLength" && <p className="error">Digite um numero válido</p>}
          {errors.whatsapp?.type === "maxLength" && <p className="error">Digite um numero válido</p>}

          <div className="input-group">
            <input
              name="city"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
              ref={register({ required: true })}
            />
            {errors.city && <p className="error">Esse campo é requirido</p>}
            <input
              name="uf"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
              ref={register({ required: true })}
            />
            {errors.uf && <p className="error">Esse campo é requirido</p>}
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}