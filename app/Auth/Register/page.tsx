"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building,
  GraduationCap,
  Shield,
  CheckCircle,
  ArrowLeft,
  BrainCircuit,
  BookOpen,
  Users,
  UserPlus,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Step 2
    institution: "",
    institutionType: "university",
    role: "student",
    department: "",
    studentId: "",
    phoneNumber: "",
    // Step 3
    acceptTerms: false,
    subscribeNewsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    // Handle registration logic here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? target.checked : value,
    });
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const institutionTypes = [
    { value: "university", label: "Universitas" },
    { value: "college", label: "Sekolah Tinggi" },
    { value: "institute", label: "Institut" },
    { value: "polytechnic", label: "Politeknik" },
    { value: "school", label: "Sekolah" },
    { value: "company", label: "Perusahaan" },
    { value: "government", label: "Pemerintah" },
    { value: "other", label: "Lainnya" },
  ];

  const roles = [
    { value: "student", label: "Mahasiswa" },
    { value: "lecturer", label: "Dosen" },
    { value: "researcher", label: "Peneliti" },
    { value: "academic_staff", label: "Staf Akademik" },
    { value: "administrator", label: "Administrator" },
    { value: "other", label: "Lainnya" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto">
          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      stepNumber === step
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : stepNumber < step
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {stepNumber < step ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  <div
                    className={`ml-4 ${
                      stepNumber === step
                        ? "text-gray-900 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    <div className="text-sm">Step {stepNumber}</div>
                    <div className="text-xs">
                      {stepNumber === 1 && "Informasi Pribadi"}
                      {stepNumber === 2 && "Informasi Institusi"}
                      {stepNumber === 3 && "Konfirmasi"}
                    </div>
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-24 h-1 mx-4 ${
                        step > stepNumber ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-gray-900">
                    AkademikForge
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Academic Integrity Platform
                  </p>
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {step === 1 && "Buat Akun Baru"}
                {step === 2 && "Informasi Institusi"}
                {step === 3 && "Konfirmasi Pendaftaran"}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {step === 1 &&
                  "Mulai perjalanan menuju integritas akademik yang lebih baik"}
                {step === 2 &&
                  "Berikan informasi institusi untuk pengalaman yang optimal"}
                {step === 3 && "Tinjau informasi Anda sebelum membuat akun"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Email Institusi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="nama@universitas.ac.id"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Gunakan email institusi untuk verifikasi yang lebih cepat
                    </p>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={8}
                        className="block w-full pl-10 pr-10 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Minimal 8 karakter"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            formData.password.length >= 8
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        />
                        Minimal 8 karakter
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            /[A-Z]/.test(formData.password)
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        />
                        Huruf besar
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            /[a-z]/.test(formData.password)
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        />
                        Huruf kecil
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            /[0-9]/.test(formData.password)
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        />
                        Angka
                      </div>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Konfirmasi Kata Sandi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-10 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Ketik ulang kata sandi Anda"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                    {formData.password && formData.confirmPassword && (
                      <p
                        className={`mt-2 text-sm ${
                          formData.password === formData.confirmPassword
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {formData.password === formData.confirmPassword
                          ? "✓ Kata sandi cocok"
                          : "✗ Kata sandi tidak cocok"}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Institution Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Institution Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Institusi
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Nama universitas/sekolah/institusi"
                      />
                    </div>
                  </div>

                  {/* Institution Type & Role */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Institusi
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <BookOpen className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          name="institutionType"
                          value={formData.institutionType}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white"
                        >
                          {institutionTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Peran Anda
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white"
                        >
                          {roles.map((role) => (
                            <option key={role.value} value={role.value}>
                              {role.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Department & Student ID */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jurusan/Fakultas
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <GraduationCap className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="Contoh: Teknik Informatika"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Induk{" "}
                        {formData.role === "student" ? "Mahasiswa" : "Pegawai"}
                      </label>
                      <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        className="block w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Opsional"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="08xx-xxxx-xxxx (Opsional)"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  {/* Review Information */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Tinjau Informasi Anda
                    </h3>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">
                            Nama Lengkap
                          </div>
                          <div className="font-medium">{formData.fullName}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="font-medium">{formData.email}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Institusi</div>
                          <div className="font-medium">
                            {formData.institution}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Peran</div>
                          <div className="font-medium">
                            {
                              roles.find((r) => r.value === formData.role)
                                ?.label
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Saya setuju dengan{" "}
                        <Link
                          href="/terms"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Syarat & Ketentuan
                        </Link>{" "}
                        dan{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Kebijakan Privasi
                        </Link>{" "}
                        AkademikForge
                      </label>
                    </div>

                    <div className="flex items-start">
                      <input
                        id="subscribeNewsletter"
                        name="subscribeNewsletter"
                        type="checkbox"
                        checked={formData.subscribeNewsletter}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="subscribeNewsletter"
                        className="ml-3 text-sm text-gray-700"
                      >
                        Saya ingin menerima pembaruan produk, tips akademik, dan
                        penawaran khusus
                      </label>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Yang Anda Dapatkan:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Gratis 30 hari untuk semua fitur premium",
                        "10 dokumen analisis pertama gratis",
                        "Akses ke tools paraphrasing AI",
                        "Priority email support",
                        "Laporan unlimited untuk 30 hari",
                      ].map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                {step > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleBack}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Kembali
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading || (step === 3 && !formData.acceptTerms)}
                  className="flex-1 relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Memproses...</span>
                    </div>
                  ) : step < 3 ? (
                    <div className="flex items-center justify-center gap-3">
                      <span>Lanjutkan</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <UserPlus className="w-5 h-5" />
                      <span>Buat Akun Sekarang</span>
                    </div>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Sudah punya akun?{" "}
                <Link
                  href="/Auth/Login"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>

            {/* Security Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Keamanan data terjamin dengan enkripsi AES-256</span>
                </div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4" />
                  <span>Platform AI untuk integritas akademik</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
