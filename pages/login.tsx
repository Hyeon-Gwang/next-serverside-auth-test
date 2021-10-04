import React, { useState } from 'react';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { fbaseAuth } from '../src/fbase';

export default (_props: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
      />
      <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
      />
      <button
        onClick={async () => {
          const auth = getAuth()
          await createUserWithEmailAndPassword(fbaseAuth, email, pass);
          window.location.href = '/';
        }}
      >
        Create account
      </button>
      <button
        onClick={async () => {
            const auth = getAuth()
          await signInWithEmailAndPassword(fbaseAuth, email, pass);
          window.location.href = '/';
        }}
      >
        Log in
      </button>
    </div>
  );
};