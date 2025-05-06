'use client';

import { useState } from 'react';
import QrScanner from '../component/QRscanner';

export default function HomePage() {
  const [qrData, setQrData] = useState<string | null>(null);

  const handleScan = (data: string) => {
    try {
      const parsed = JSON.parse(data);
      console.log('QR-оос авсан:', parsed);
      setQrData(data);
      // жишээ: API руу өгөгдөл явуулах
      // fetch(`/api/prescriptions/${parsed.prescriptionId}`)
    } catch (e) {
      alert('QR код буруу форматтай байна!');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <QrScanner onScan={handleScan} />
      {qrData && (
        <div className="mt-4 p-2 border rounded bg-gray-100 text-center">
          <p>Уншсан QR:</p>
          <pre>{qrData}</pre>
        </div>
      )}
    </main>
  );
}
