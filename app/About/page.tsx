"use client";

import Navbar from "@/components/landingpage/Navbar/page";
import Footer from "@/components/landingpage/Footer/page";
import {
  Brain,
  Shield,
  Award,
  Users,
  Target,
  Globe,
  Cpu,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-gray-50/50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8"
              >
                <Brain className="w-5 h-5" />
                <span>TENTANG TEKNOLOGI KAMI</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Revolusi{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Integritas Akademik
                </span>{" "}
                Indonesia
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              >
                Kami membangun masa depan pendidikan yang lebih jujur dengan
                teknologi AI tercanggih, khusus didesain untuk konteks akademik
                Indonesia.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Misi Kami
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Menjadi garda terdepan dalam memerangi plagiarisme akademik di
                  Indonesia melalui inovasi teknologi AI yang memahami secara
                  mendalam konteks bahasa dan budaya lokal.
                </p>
                <ul className="space-y-4">
                  {[
                    "Meningkatkan kualitas pendidikan melalui integritas akademik",
                    "Mengembangkan solusi teknologi yang terjangkau dan mudah diakses",
                    "Memberdayakan institusi pendidikan dengan alat deteksi yang presisi",
                    "Membangun ekosistem akademik yang transparan dan bertanggung jawab",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visi Kami
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Menjadikan Indonesia sebagai pusat inovasi teknologi
                  pendidikan yang diakui secara global, dengan standar
                  integritas akademik tertinggi di Asia Tenggara.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Target 2025
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">
                        Institusi Mitra
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        1M+
                      </div>
                      <div className="text-sm text-gray-600">
                        Dokumen Teranalisis
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">
                        99.5%
                      </div>
                      <div className="text-sm text-gray-600">
                        Akurasi Target
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">10</div>
                      <div className="text-sm text-gray-600">Bahasa Daerah</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-6"
              >
                TEKNOLOGI INTI
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Engine <span className="text-blue-600">IndoBERT</span> & Beyond
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kombinasi teknologi mutakhir untuk analisis teks bahasa
                Indonesia yang tak tertandingi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "IndoBERT Base",
                  description:
                    "Model transformer bahasa Indonesia dengan 12-layer attention",
                  icon: <Cpu className="w-8 h-8" />,
                  stats: "110M parameters",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Semantic Analysis",
                  description:
                    "Analisis makna dan konteks dengan word embeddings khusus",
                  icon: <Brain className="w-8 h-8" />,
                  stats: "99.2% accuracy",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Plagiarism Detection",
                  description:
                    "Algoritma canggih untuk deteksi similarity dan parafrase",
                  icon: <Shield className="w-8 h-8" />,
                  stats: "10M+ database",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Report Generation",
                  description:
                    "Sistem laporan otomatis dengan visualisasi interaktif",
                  icon: <BarChart className="w-8 h-8" />,
                  stats: "Real-time analysis",
                  color: "from-orange-500 to-red-500",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${tech.color} text-white mb-6`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div className="text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg px-3 py-2 inline-block">
                    {tech.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold mb-6"
              >
                TIM KAMI
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dipimpin oleh <span className="text-blue-600">Para Ahli</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kombinasi unik antara ahli teknologi, akademisi, dan praktisi
                pendidikan
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  image: "/foto/foto-1.png",
                  role: "CEO & Founder",
                  name: "Lintang Syahdewo",
                  expertise:
                    "PhD in Computational Linguistics, 10+ years NLP experience",
                  achievements:
                    "Pendiri dan arsitek utama AkademikForge, memimpin pengembangan produk NLP untuk pendidikan tinggi di Indonesia",
                },
                {
                  image: "/foto/foto-2.png",
                  role: "Academic Director",
                  name: "Prof. Sari Dewi",
                  expertise: "Professor of Education Technology, Former Dean",
                  achievements:
                    "Konsultan Kemdikbud, penulis 20+ buku dan modul akademik",
                },
                {
                  image: "/foto/foto-3.png",
                  role: "Engineering Lead",
                  name: "Raihan Rivana P",
                  expertise: "MSc Computer Science, Ex-Google AI Engineer",
                  achievements:
                    "Specialist in scalable ML systems, 5+ patents in AI and ML infrastructure",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border border-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {member.role}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{member.expertise}</p>
                    <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4">
                      {member.achievements}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl"
            >
              <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bergabung dalam Revolusi Pendidikan Indonesia
              </h2>
              <p className="text-xl text-blue-100 mb-10">
                Jadilah bagian dari perubahan menuju pendidikan yang lebih jujur
                dan berkualitas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Bergabung sebagai Institusi Mitra
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                  Peluang Karir
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
