"use client";

import Link from 'next/link';
import styles from '@/components/Menu/menu.module.css';
import { deslogarUsuario } from '@/lib/userLogin';

export default function Menu({ userName }) {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/eventos">Eventos</Link></li>
                <li>
                    {userName == "" ? (<Link className={styles.entrar} href="/entrar">Entrar</Link>) : (<p>{userName}</p>)}
                </li>
            </ul>
        </nav>
    );
};