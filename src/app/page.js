import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="main">
      <div className={styles.personal}>
      {/* foto + pequena descrição */}
      <Image src="/placeholder.png" width={300} height={300} alt="João Victor Rocha Fernandes"></Image>
      <h1>João Victor Rocha Fernandes</h1>
      <p>Estudante de ciência da computação na UNICAP. Desenvolvedor Fullstack. Interesse em Redes de computadores, DevOps e Infraestrutura.</p>
      <Link href={"https://github.com/naoehcleber"}> <FaGithub /> </Link>
      <Link href={"www.linkedin.com/in/joão-victor-rocha-980a12290"}> <FaLinkedin /> </Link>
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
        </p>
        <h2> Cursos </h2>
        <p>Curso de desenvolvimento Front-End — Senac</p>
      </div>
    </div>
  );
}

