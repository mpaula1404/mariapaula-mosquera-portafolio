"use client";

import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl overflow-y-auto rounded-[32px] border border-[var(--primary)]/30 bg-gradient-to-br from-[#2f241d] to-[#1a1410] shadow-2xl max-h-[90vh]">
        <div className="sticky top-0 flex items-center justify-between border-b border-[var(--primary)]/20 bg-gradient-to-br from-[#2f241d] to-[#1a1410] p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <button
            onClick={onClose}
            className="ml-4 flex h-8 w-8 items-center justify-center text-2xl font-bold text-gray-400 transition hover:text-white"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="p-6 text-gray-300 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
