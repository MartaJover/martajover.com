import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FincUpProject() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portfolio
          </Link>
        </div>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-normal text-black mb-4">
            FincUp
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Diseño UX/UI - case study
          </p>
        </div>

        {/* Project Image */}
        <div className="flex justify-center">
          <img
            src="/FincUp.png"
            alt="Proyecto FincUp - Diseño UX/UI case study"
            className="w-full md:w-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
