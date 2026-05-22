/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar, Header } from './components/Navigation';
import { AuraAssistant } from './components/AuraAssistant';
import { Dashboard } from './pages/Dashboard';
import { Automations } from './pages/Automations';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#f8f9fd] min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 min-h-screen relative">
        <Header />
        <main className="p-8 pt-28 max-w-[1600px] mx-auto">
          {children}
        </main>
        <AuraAssistant />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Dashboard Routes wrapper with Layout */}
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        
        {/* Placeholder for other routes shown in the sidebar */}
        <Route path="/cartera" element={<MainLayout><PlaceholderPage title="Cartera" /></MainLayout>} />
        <Route path="/estudiantes" element={<MainLayout><PlaceholderPage title="Estudiantes" /></MainLayout>} />
        <Route path="/acuerdos" element={<MainLayout><PlaceholderPage title="Acuerdos" /></MainLayout>} />
        <Route path="/gestiones" element={<MainLayout><PlaceholderPage title="Gestiones" /></MainLayout>} />
        <Route path="/predictive-risk" element={<MainLayout><PlaceholderPage title="Predicción de Riesgo" /></MainLayout>} />
        <Route path="/automations" element={<MainLayout><Automations /></MainLayout>} />
        <Route path="/reports" element={<MainLayout><PlaceholderPage title="Reportes" /></MainLayout>} />
        <Route path="/settings" element={<MainLayout><PlaceholderPage title="Configuración" /></MainLayout>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <h2 className="text-4xl font-bold text-navy-dark">{title}</h2>
      <p className="text-slate-500 font-medium">Esta sección está en desarrollo para SIRA Premium.</p>
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
      </div>
    </div>
  );
}
