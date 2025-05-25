// app/page.tsx
import React from 'react';
import Whiteboard from '@/components/Whiteboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Real-Time Collaborative Whiteboard with AI Summaries</h1>
      <Whiteboard />
    </main>
  );
}
