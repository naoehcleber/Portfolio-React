"use client"
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import styles from "./main.module.css";
import NavBar from "./components/navBar";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import VantaBackground from "./components/vantaBackground";

const client = new ApolloClient({
  link: new HttpLink ({ uri: "https://api.github.com/graphql"}),
  cache: new InMemoryCache(),
});

export default function Home() {

  return (
    <>
      <NavBar />
      <div className={styles.main}>  
        <div className={styles.personal}>
          {/* foto + pequena descrição */}
          <Image className={styles.pfp} src={"/images/pfp.png"} width={483} height={591} alt="João Victor Rocha Fernandes"></Image>
          <h1>João Victor Rocha Fernandes</h1>
          <p>Estudante de ciência da computação na UNICAP. Desenvolvedor Fullstack. Interesse em Redes de computadores, DevOps e Infraestrutura.</p>
          <ul>
            <Link href={"https://github.com/naoehcleber"}> <FaGithub /> </Link>
            <Link href={"https://www.linkedin.com/in/joão-victor-rocha-980a12290"}> <FaLinkedin /> </Link>
          </ul>
        </div>
        <div className={styles.professional}>
          {/* curriculo profissional */}
          <h2> Formações Acadêmicas </h2>
          <p>Bacharelado em Ciência da Computação — 2023 - Atual</p>
          <h2> Experiências Profissionais </h2>
          <p>Analista Júnior de NOC — Accenture — Julho de 2024 - Outubro de 2024 </p>
          <h2> Conhecimentos Técnicos </h2>
          <p>
            Linguagens de programação Python, JavaScript, Java, C/C++ <br />
            Banco de dados relacionais (MySQL, MariaDB, Postgres) e não relacionais (MongoDB) <br/>
            Framewoks React, Django, Express, SpringBoot <br/>
            Docker
          </p>
          <h2>Projetos</h2>
          
        </div>
      </div>
    </>
  );
}

