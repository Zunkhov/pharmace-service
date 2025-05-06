// components/QrScanner.tsx
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function QrScanner({ onScan }: { onScan: (data: string) => void }) {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-lg font-bold">QR код уншуулна уу</h2>
      <div className="w-[300px] h-[300px] border">
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {
            if (!!result) {
              onScan(result.getText());
            }

            if (!!error) {
              setError(error?.message);
            }
          }}
          containerStyle={{ width: '100%', height: '100%' }}
        />
      </div>
      {error && <p className="text-red-500">Алдаа: {error}</p>}
    </div>
  );
}
