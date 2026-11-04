import Link from "next/link";
import { ArrowLeft, LayoutDashboard, ShieldAlert } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <LayoutDashboard className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">AkademikForge</p>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard belum tersedia</h1>
        <p className="mt-3 text-slate-600">
          Area dashboard belum terhubung ke layanan autentikasi dan backend. Silakan masuk kembali setelah layanan tersebut dikonfigurasi.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/Auth/Login" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            Buka halaman login
          </Link>
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Kembali ke beranda
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldAlert className="h-4 w-4" aria-hidden="true" />
          Tidak ada sesi pengguna yang diasumsikan aktif.
        </div>
      </section>
    </main>
  );
}
