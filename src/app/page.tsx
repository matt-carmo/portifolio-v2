"use client";
import { Header } from "@/components/Header";
import Image from "next/image";

import { FaReact } from "react-icons/fa";
import {
  FaArrowUp,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
} from "react-icons/fa6";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import "../styles/global.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-[#161513] px-3">
        <section
          id="home"
          className="flex flex-col justify-center items-center text-center mx-auto max-w-7xl"
        >
          <div className="max-w-[674px] flex items-center flex-col gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 md:max-w-50 w-1/2 flex justify-center"
            >
              <Image src="/avatar.png" alt="Hero" width={250} height={250} />
            </motion.div>
            <h1 className="text-2xl md:text-5xl text-center font-bold">
              Desenvolvedor
              <span className="ml-2 bg-gradient-to-r  from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
                Full Stack
              </span>
            </h1>
            <p className="text-[#C5C5C5] text-xs md:text-base">
              Desenvolvedor Full Stack com 2 anos de experiência em
              desenvolvimento web e mobile. Habilidade em criar aplicações
              modernas e eficientes utilizando React.js, Node.js, Bun, Prisma e
              Postgres. Experiência em desenvolvimento mobile com Ionic e React
              Native. Foco em SEO, otimização de performance, e melhoria da
              experiência do usuário.
            </p>
            <div className="flex gap-x-4">
              <a
                href="/matheus-hg-carmo.pdf"
                download="matheus-carmo.pdf"
                className="bg-[#161513] flex items-center gap-2 hover:bg-[#f1f1f1]/90 hover:text-[#161513] transition duration-300 px-4 py-3 rounded-full border  font-bold text-[#ffff]"
              >
                <FaDownload className="mb-1" /> Currículo
              </a>
              {/* <button className="bg-[#161513] px-4 py-3 rounded-full border  font-bold text-[#ffff]">
                Download CV
              </button> */}
            </div>
            <span className="uppercase text-[#C5C5C5] font-medium tracking-wider text-xl">
              Experiencia com
            </span>
            <div className="md:flex grid-cols-3 grid gap-8 text-5xl">
              <motion.div
                transition={{ delay: 0.75 }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
              >
                <SiTypescript />
              </motion.div>

              <motion.div
                transition={{ delay: 0.6 }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
              >
                <FaReact />
              </motion.div>

              <motion.div
                transition={{ delay: 0.45 }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
              >
                <FaNodeJs />
              </motion.div>
              <motion.div
                transition={{ delay: 0.3 }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
              >
                <FaReact />
              </motion.div>
              <motion.div
                transition={{ delay: 0.15 }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
              >
                <FaNodeJs />
              </motion.div>
              <motion.div
                transition={{ delay: 0 }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
              >
                <SiPostgresql />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto mt-10 md:mt-20" id="projects">
          <h2 className="mb-6 uppercase text-2xl md:text-4xl text-center text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#FF8660] to-[#D5491D]">
            Projetos
          </h2>
          <ul className="flex flex-col md:flex-row gap-4 justify-between">
            <li>
              <a href="https://github.com/matt-carmo/Sunnyside-agency-landing-page">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="item"
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt="Imagem do projeto"
                    className="rounded-t-3xl w-full"
                    width={390}
                    height={235}
                    src={"/R_kgDOG5b2bw.webp"}
                  ></Image>
                  <div className="px-3 py-2 flex items-center justify-between">
                    <h4 className="font-semibold md:text-lg">
                      Sunnyside agency landing page{" "}
                    </h4>
                    <FaArrowUp className="rotate-[45deg]" />
                  </div>
                </motion.div>
              </a>
            </li>
            <li>
              <a href="https://github.com/matt-carmo/FlexBlog">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="item"
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt="Imagem do projeto"
                    className="rounded-t-3xl w-full"
                    width={390}
                    height={235}
                    src={"/R_kgDOGa-BQA.webp"}
                  ></Image>
                  <div className="px-3 py-2 flex items-center justify-between">
                    <h4 className="font-semibold md:text-lg">Flex Blog</h4>
                    <FaArrowUp className="rotate-[45deg]" />
                  </div>
                </motion.div>
              </a>
            </li>

            <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <a href="https://projetosenac.netlify.app/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="item"
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt="Imagem do projeto"
                    className="rounded-t-3xl w-full"
                    width={390}
                    height={235}
                    src={"/R_kgDOHNq7Yw.webp"}
                  ></Image>
                  <div className="px-3 py-2 flex items-center justify-between">
                    <h4 className="font-semibold md:text-lg">Illegal Inc</h4>
                    <FaArrowUp className="rotate-[45deg]" />
                  </div>
                </motion.div>
              </a>
            </motion.li>
          </ul>
        </section>
        <section className="max-w-6xl mx-auto mt-10 md:mt-20" id="experience">
          <h2 className="mb-6 uppercase text-2xl md:text-4xl text-center text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#5BADFF] to-[#1373D1]">
            Experiência
          </h2>
          <ul className="gap-6 flex flex-col">
            <li>
              <div className="md:flex justify-between">
                <h4 className="text-sm font-bold md:text-lg">
                  Desenvolvedor Web - Lion Produtos Naturais
                </h4>
                <span className="text-gray-200 font-medium text-xs md:text-base">
                  out 2023 - abr 2024
                </span>
              </div>
              <ul className="list-disc list-inside px-4 py-3 text-gray-200 font-medium md:text-base text-xs flex flex-col gap-3">
                <li>
                  Desenvolvi e reestruturei landing pages em WordPress,
                  melhorando a eficiência e responsividade.
                </li>
                <li>
                  Criei páginas otimizadas para SEO, aumentando a visibilidade
                  online da empresa.
                </li>
                <li>
                  Contribuí para a melhoria contínua da experiência do usuário.
                </li>
              </ul>
            </li>
            <li>
              <div className="md:flex justify-between">
                <h4 className="text-sm font-bold md:text-lg">
                  Estagiário Desenvolvedor Front-End - Enterlight
                </h4>

                <span className="text-gray-200 font-medium text-xs md:text-base">
                  jun 2022 - jun 2023
                </span>
              </div>
              <ul className="list-disc list-inside px-4 py-3 text-gray-200 font-medium md:text-base text-xs flex flex-col gap-3">
                <li>
                  Criei interfaces para sistema ERP e desenvolvi aplicações
                  mobile.
                </li>
                <li>
                  Implementei melhorias na interatividade e design do sistema,
                  aprimorando a usabilidade.
                </li>
                <li>
                  Desenvolvi o front end do site institucional, assegurando uma
                  experiência de usuário positiva.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section
          className="max-w-6xl mx-auto mt-10 md:mt-20 pb-20"
          id="degrees"
        >
          <h2 className="mb-6 uppercase text-2xl md:text-4xl text-center text-transparent bg-clip-text font-extrabold bg-gradient-to-b from-[#FF8660] to-[#FF5E00]">
            Formação
          </h2>
          <ul className="gap-6 flex flex-col">
            <li>
              <div className="md:flex justify-between">
                <h4 className="font-semibold md:text-lg text-sm">
                  Bacharelado em Tecnologia da Informação - Univesp
                </h4>

                <span className="text-gray-200 font-medium text-xs md:text-base">
                  jul 2024 - dez 2027
                </span>
              </div>
              {/* <ul className="list-disc list-inside px-4 py-3 text-gray-200 font-medium md:text-base text-xs flex flex-col gap-3">
                <li>
                  Criei interfaces para sistema ERP e desenvolvi aplicações
                  mobile.
                </li>
                <li>
                  Implementei melhorias na interatividade e design do sistema,
                  aprimorando a usabilidade.
                </li>
                <li>
                  Desenvolvi o front end do site institucional, assegurando uma
                  experiência de usuário positiva.
                </li>
              </ul> */}
            </li>
            <li>
              <div className="md:flex justify-between">
                <h4 className="font-semibold md:text-lg text-sm">
                  Técnico de informática para Internet - Senac
                </h4>
                <span className="text-gray-200 font-medium text-xs md:text-base">
                  fev 2022 - jun 2023
                </span>
              </div>
              {/* <ul className="list-disc list-inside px-4 py-3 text-gray-200 font-medium md:text-base text-xs flex flex-col gap-3">
                <li>
                  Desenvolvi e reestruturei landing pages em WordPress,
                  melhorando a eficiência e responsividade.
                </li>
                <li>
                  Criei páginas otimizadas para SEO, aumentando a visibilidade
                  online da empresa.
                </li>
                <li>
                  Contribuí para a melhoria contínua da experiência do usuário.
                </li>
              </ul> */}
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-[#191919] py-10">
        <section
          id="contact"
          className="max-w-6xl mx-auto py-6 flex flex-col gap-2 items-center md:items-start"
        >
          <h2 className="text-3xl font-semibold mb-2">Contato</h2>
          <p className="text-gray-200">
            Entre em contato para mais informações.
          </p>
          <div className="flex ">
            <ul className="flex gap-6">
              <li>
                <a href="https://www.linkedin.com/in/matt-carmo">
                  <FaLinkedin className="text-3xl" />
                </a>
              </li>
              <li>
                <a href="https://github.com/matt-carmo">
                  <FaGithub className="text-3xl" />
                </a>
              </li>
              <li>
                <a href="mailto:matheus2018i@gmail.com">
                  <FaEnvelope className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}
