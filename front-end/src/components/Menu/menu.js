import React from 'react';
import Link from 'next/link';
import styles from '@/components/Menu/menu.module.css';

export default function Menu (){
    return (
        <nav className={styles.menu}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/eventos">Eventos</Link></li>
                <li><Link className={styles.entrar} href="/entrar">Entrar</Link></li>
            </ul>
        </nav>
    );
};