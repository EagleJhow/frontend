import { useState, FormEvent } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import Link from 'next/link';

export default function Cadastro() {
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const [ loading, setLoading ] = useState(false);

  async function handleSingUp(event: FormEvent){
    event.preventDefault();

    if(name === '' || email === '' || password === ''){
      alert("PREENCHA TODOS OS CAMPOS")
      return;
    }

    setLoading(true);



  }

  return (
    <>
    <Head>
      <title>Faça seu cadastro!</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo Sujeito Pizzaria" />

      <div className={styles.login}>


        <form onSubmit={handleSingUp}>
          <Input
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />

          <Input
            placeholder="Digite seu email"
            type="text"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <Input
            placeholder="Sua senha"
            type="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />
          
          <Button
            type="submit"
            loading={loading}
          >
            Cadastrar
          </Button>
        </form>

        
           <Link className={styles.text} href="/">
            Já possui uma conta? Faça login!
            </Link>
        

      </div>
    </div>
    </>
  )
}