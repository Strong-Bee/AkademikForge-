'use client';

import Navbar from '@/components/landingpage/Navbar/page';
import Footer from '@/components/landingpage/Footer/page';
import { 
  ArrowRight, ShieldCheck, BrainCircuit, BarChart3, Upload, 
  FileSearch, FileText, CheckCircle, Sparkles, Zap, 
  Target, Users, Globe, Lock, Clock, Award, 
  TrendingUp, Database, Shield, Cpu, BarChart,
  MessageSquare, ChevronRight, Star, Download, Play,
  Sparkle, ShieldHalf, Bot, Cpu as CpuIcon,
  CircuitBoard, Cpu as Processor
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HomePage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section - Modern Gradient & Glassmorphism */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>Pioneer in AI-Powered Academic Integrity</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Deteksi Plagiarisme
                  </span>
                  <br />
                  <span className="text-gray-800">
                    Dengan Kecerdasan <span className="text-blue-600">IndoBERT</span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Platform AI revolusioner pertama di Indonesia yang memahami konteks akademik lokal. 
                  Deteksi kesamaan dan parafrasa dengan akurasi 99.2% menggunakan teknologi 
                  <span className="font-semibold text-blue-600"> IndoBERT</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Zap className="w-5 h-5" />
                      <span>Mulai Analisis Gratis</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Play className="w-5 h-5 text-blue-600" />
                      <span>Tonton Demo (2 Menit)</span>
                    </div>
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-white" />
                      ))}
                    </div>
                    <span>500+ Institusi Terpercaya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    <span>ISO 27001 Certified</span>
                  </div>
                </div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  {/* Analytics Dashboard Mockup */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Similarity Score</div>
                        <div className="text-3xl font-bold text-gray-900">12.4%</div>
                      </div>
                      <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Original Content ✓
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Originality Score</span>
                          <span>87.6%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-[87.6%]" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Paraphrase Detection</span>
                          <span>8.2%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-[8.2%]" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-sm text-gray-600">Sources Detected</div>
                        <div className="text-2xl font-bold text-blue-600">3</div>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-xl">
                        <div className="text-sm text-gray-600">Processing Time</div>
                        <div className="text-2xl font-bold text-indigo-600">45s</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border">
                    <BrainCircuit className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-xl text-white">
                    <Processor className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Database className="w-8 h-8" />, value: "10M+", label: "Academic Sources", color: "text-blue-600" },
                { icon: <Target className="w-8 h-8" />, value: "99.2%", label: "Detection Accuracy", color: "text-green-600" },
                { icon: <Users className="w-8 h-8" />, value: "500+", label: "Partner Institutions", color: "text-purple-600" },
                { icon: <Clock className="w-8 h-8" />, value: "< 2 min", label: "Average Processing", color: "text-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-white mb-4 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Modern Card Design */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-6"
              >
                TEKNOLOGI UNGGULAN
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mengapa <span className="text-blue-600">AkademikForge</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Solusi komprehensif yang dirancang khusus untuk ekosistem pendidikan Indonesia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BrainCircuit className="w-8 h-8" />,
                  title: "IndoBERT AI Engine",
                  description: "Model bahasa Indonesia dengan 110M parameters untuk analisis kontekstual",
                  features: ["Semantic analysis", "Context understanding", "Local dialect support"],
                  color: "from-blue-500 to-cyan-500",
                  badge: "AI-Powered"
                },
                {
                  icon: <ShieldHalf className="w-8 h-8" />,
                  title: "Advanced Plagiarism Detection",
                  description: "Deteksi plagiarisme dan parafrasa dengan akurasi tertinggi",
                  features: ["Multiple source check", "Paraphrase detection", "Citation analysis"],
                  color: "from-green-500 to-emerald-500",
                  badge: "99.2% Accuracy"
                },
                {
                  icon: <BarChart className="w-8 h-8" />,
                  title: "Comprehensive Reports",
                  description: "Laporan detail dengan visualisasi interaktif dan actionable insights",
                  features: ["Similarity breakdown", "Source matching", "Improvement suggestions"],
                  color: "from-purple-500 to-pink-500",
                  badge: "Interactive"
                },
                {
                  icon: <Bot className="w-8 h-8" />,
                  title: "Smart Paraphrase Assistant",
                  description: "AI-powered tool untuk membantu penulisan ulang yang original",
                  features: ["Rewrite suggestions", "Synonym recommendations", "Style improvement"],
                  color: "from-orange-500 to-red-500",
                  badge: "Writing Aid"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                    style={{ background: `linear-gradient(to right, ${feature.color})` }}
                  />
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                        {feature.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Timeline Design */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6"
              >
                ALUR KERJA
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sederhana, Cepat, & Akurat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tiga langkah mudah menuju integritas akademik yang terjamin
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 hidden lg:block" />

              {/* Steps */}
              {[
                {
                  step: '01',
                  icon: <Upload className="w-10 h-10" />,
                  title: 'Upload & Submit',
                  description: 'Unggah dokumen akademik Anda dalam berbagai format: PDF, DOCX, TXT, atau langsung paste teks',
                  details: ['Supported formats: PDF, DOCX, TXT', 'Max file size: 100MB', 'Batch upload available'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  step: '02',
                  icon: <FileSearch className="w-10 h-10" />,
                  title: 'AI Deep Analysis',
                  description: 'IndoBERT menganalisis teks, membandingkan dengan database 10M+ sumber akademik',
                  details: ['Semantic analysis', 'Paraphrase detection', 'Cross-language check'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  step: '03',
                  icon: <FileText className="w-10 h-10" />,
                  title: 'Get Detailed Report',
                  description: 'Terima laporan komprehensif dengan similarity score dan rekomendasi perbaikan',
                  details: ['Interactive report', 'Source matching', 'Export options'],
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 lg:mb-24 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}
                >
                  <div className="lg:w-1/2">
                    {/* Step Number */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:relative lg:inline-block z-10">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-3xl shadow-2xl`}>
                        {item.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-xl mt-12 lg:mt-0 ${index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'}`}>
                      <div className="flex items-start gap-6">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} text-white flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                          <p className="text-gray-600 mb-6">{item.description}</p>
                          <div className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold mb-6"
              >
                TESTIMONIAL
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dipercaya oleh <span className="text-blue-600">Institusi Terkemuka</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "AkademikForge membantu kami meningkatkan kualitas karya ilmiah mahasiswa dengan signifikan. Akurasi deteksi yang luar biasa!",
                  author: "Prof. Dr. Sari Dewi",
                  position: "Dekan Fakultas Pendidikan, Universitas Indonesia",
                  rating: 5,
                  logo: "UI"
                },
                {
                  quote: "Integrasi yang seamless dengan sistem kami. Support team sangat responsif dan solutif untuk kebutuhan kampus.",
                  author: "Dr. Ahmad Wijaya",
                  position: "Direktur Teknologi, Institut Teknologi Bandung",
                  rating: 5,
                  logo: "ITB"
                },
                {
                  quote: "Platform ini menghemat waktu grading dosen hingga 70%. Laporan yang detail membantu mahasiswa memahami kesalahan mereka.",
                  author: "Maria Sari, M.Pd.",
                  position: "Koordinator Akademik, Universitas Gadjah Mada",
                  rating: 5,
                  logo: "UGM"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg mb-8">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold mb-6"
              >
                FLEKSIBEL & TERJANGKAU
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solusi untuk Semua Kebutuhan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dari individu hingga institusi besar, kami memiliki paket yang tepat untuk Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "Gratis",
                  description: "Untuk mahasiswa & peneliti individu",
                  features: ["10 dokumen/bulan", "Basic similarity check", "PDF report", "Standard support"],
                  cta: "Mulai Gratis",
                  color: "from-gray-400 to-gray-600"
                },
                {
                  name: "Pro",
                  price: "Rp 199K",
                  period: "/bulan",
                  description: "Untuk dosen & peneliti profesional",
                  features: ["100 dokumen/bulan", "Advanced paraphrase detection", "Interactive report", "Priority support", "Batch processing"],
                  cta: "Mulai Trial",
                  popular: true,
                  color: "from-blue-600 to-indigo-600"
                },
                {
                  name: "Institution",
                  price: "Custom",
                  description: "Untuk universitas & lembaga pendidikan",
                  features: ["Unlimited documents", "Custom AI model", "API access", "Dedicated support", "White label option", "Training session"],
                  cta: "Request Demo",
                  color: "from-purple-600 to-pink-600"
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Paling Populer
                    </div>
                  )}
                  <div className={`bg-white rounded-2xl p-8 border ${plan.popular ? 'border-blue-200 shadow-2xl' : 'border-gray-200 shadow-lg'} hover:shadow-xl transition-all duration-300 h-full`}>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-300`}
                    >
                      {plan.cta}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex p-6 rounded-full bg-white/10 backdrop-blur-sm mb-8">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Bergabung dengan Revolusi Pendidikan Digital
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Mulai perjalanan menuju integritas akademik yang lebih baik hari ini. 
                <span className="font-semibold"> Gratis 30 hari</span> untuk semua paket.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span>Daftar Sekarang - Gratis 30 Hari</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3">
                    <MessageSquare className="w-6 h-6" />
                    <span>Konsultasi dengan Expert</span>
                  </div>
                </motion.button>
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold">✓</div>
                  <div className="text-sm">No credit card required</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Expert support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">🔒</div>
                  <div className="text-sm">Data security</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}