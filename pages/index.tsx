import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Footer from '@/components/footer/footer'
import SearchBar from "@/components/searchbar/searchbar";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Gif Seeker</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    What <span>Gif</span> are you looking for?
                </h1>

                <SearchBar />


            </main>

            <Footer />
        </div>
    )
}
