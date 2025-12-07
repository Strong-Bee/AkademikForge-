'use client';

import Navbar from '@/components/landingpage/Navbar/page';
import Footer from '@/components/landingpage/Footer/page';
import { Mail, Phone, MapPin, Clock, MessageSquare, Building, Globe, Send, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                <MessageSquare className="w-5 h-5" />
                <span>HUBUNGI KAMI</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Mari <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Berbicara</span> Tentang <br />
                <span className="text-3xl md:text-5xl">Masa Depan Pendidikan</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Tim kami siap membantu Anda dengan solusi terbaik untuk kebutuhan institusi pendidikan Anda.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h2>
                  
                  <div className="space-y-8">
                    {[
                      {
                        icon: <Mail className="w-6 h-6" />,
                        title: "Email",
                        details: ["support@akademikforge.id", "partnership@akademikforge.id"],
                        description: "Response dalam 24 jam"
                      },
                      {
                        icon: <Phone className="w-6 h-6" />,
                        title: "Telepon",
                        details: ["(021) 1234-5678", "0800-1234-5678 (Toll-Free)"],
                        description: "Senin - Jumat, 08:00 - 17:00 WIB"
                      },
                      {
                        icon: <MapPin className="w-6 h-6" />,
                        title: "Kantor Pusat",
                        details: ["Gedung Inovasi Teknologi", "Jl. Akademik No. 123", "Jakarta 10110"],
                        description: "By appointment only"
                      },
                      {
                        icon: <Clock className="w-6 h-6" />,
                        title: "Jam Operasional",
                        details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 09:00 - 15:00"],
                        description: "Support 24/7 via email"
                      }
                    ].map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-700">{detail}</p>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Media */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Follow Kami</h3>
                    <div className="flex space-x-4">
                      {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        >
                          <span className="font-semibold text-sm">{platform[0]}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form & Partnerships */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-12"
              >
                {/* Contact Form */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
                      <p className="text-gray-600 mt-2">Tim kami akan menghubungi Anda dalam 1x24 jam</p>
                    </div>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Pesan terkirim!</span>
                      </motion.div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="nama@institusi.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Institusi *
                        </label>
                        <input
                          type="text"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="Nama universitas/sekolah"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Permintaan *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option value="general">Pertanyaan Umum</option>
                        <option value="demo">Request Demo</option>
                        <option value="partnership">Kerjasama Institusi</option>
                        <option value="technical">Support Teknis</option>
                        <option value="pricing">Informasi Harga</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Apa yang bisa kami bantu?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                        placeholder="Tulis pesan detail Anda di sini..."
                      />
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Data Anda aman dengan kami. Lihat{' '}
                        <a href="#" className="text-blue-600 hover:underline">kebijakan privasi</a>.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <span>Kirim Pesan</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Partnerships */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                        <Building className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3">Kerjasama Institusi</h2>
                      <p className="text-blue-100">
                        Solusi khusus untuk universitas, sekolah, dan lembaga pendidikan
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <Users className="w-16 h-16 opacity-20" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Campus License",
                        features: ["Unlimited users", "Custom integration", "Priority support", "Training session"]
                      },
                      {
                        title: "Enterprise Solution",
                        features: ["API Access", "White-label option", "Custom AI model", "Dedicated manager"]
                      },
                      {
                        title: "Government Package",
                        features: ["Bulk discounts", "Localization", "Compliance tools", "Annual review"]
                      }
                    ].map((plan, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <h3 className="font-semibold text-lg mb-4">{plan.title}</h3>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all">
                      Request Proposal Institusi
                    </button>
                    <button className="bg-transparent border-2 border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                      Jadwalkan Konsultasi
                    </button>
                  </div>
                </div>

                {/* Global Presence */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Jangkauan Global</h3>
                      <p className="text-sm text-gray-600">Melayani institusi di seluruh dunia</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Indonesia', 'Malaysia', 'Singapore', 'Australia', 'Japan', 'South Korea', 'USA', 'UK'].map((country) => (
                      <div key={country} className="text-center p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition-colors">
                        <div className="text-2xl mb-2">🇮🇩</div>
                        <div className="font-medium text-gray-900">{country}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}