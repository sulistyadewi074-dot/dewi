import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (20 BUTIR SOAL: NO. 1 - 20)
  // Setiap soal memiliki 4 opsi jawaban (A, B, C, D) dengan 1 jawaban benar.
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pecahan Senilai',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar lingkaran yang terbagi menjadi beberapa juring sama besar berikut! Nilai pecahan yang senilai dengan daerah yang diarsir adalah...',
    imageSvg: `<svg viewBox="0 0 240 210" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(120, 100)">
    <path d="M 0 0 L 80 0 A 80 80 0 0 1 56.57 56.57 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
    <path d="M 0 0 L 56.57 56.57 A 80 80 0 0 1 0 80 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
    <path d="M 0 0 L 0 80 A 80 80 0 0 1 -56.57 56.57 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
    <path d="M 0 0 L -56.57 56.57 A 80 80 0 0 1 -80 0 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 0 0 L -80 0 A 80 80 0 0 1 -56.57 -56.57 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 0 0 L -56.57 -56.57 A 80 80 0 0 1 0 -80 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 0 0 L 0 -80 A 80 80 0 0 1 56.57 -56.57 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 0 0 L 56.57 -56.57 A 80 80 0 0 1 80 0 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
  </g>
  <text x="120" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">3 dari 8 bagian diarsir</text>
</svg>`,
    options: [
      { id: 'A', text: '2/5' },
      { id: 'B', text: '6/16' },
      { id: 'C', text: '5/8' },
      { id: 'D', text: '9/16' },
    ],
    correctAnswer: 'B',
    explanation:
      'Daerah lingkaran dibagi menjadi 8 juring sama besar dan 3 juring diarsir, sehingga bernilai pecahan 3/8.\nPecahan yang senilai diperoleh dengan mengalikan pembilang dan penyebut dengan bilangan yang sama:\n(3 × 2) / (8 × 2) = 6/16.\nJadi, pecahan yang senilai adalah 6/16.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Menyederhanakan Pecahan',
    difficulty: 'Mudah',
    text: 'Bentuk paling sederhana dari pecahan 48/72 adalah...',
    options: [
      { id: 'A', text: '3/4' },
      { id: 'B', text: '4/6' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '1/2' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk menyederhanakan pecahan 48/72 ke bentuk paling sederhana, kita bagi pembilang dan penyebut dengan FPB dari 48 dan 72, yaitu 24.\n48 ÷ 24 = 2\n72 ÷ 24 = 3\nMaka bentuk paling sederhananya adalah 2/3.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Mengubah Bentuk Pecahan',
    difficulty: 'Mudah',
    text: 'Pecahan campuran 3 4/5 jika diubah ke dalam bentuk pecahan biasa dan pecahan desimal berturut-turut adalah...',
    options: [
      { id: 'A', text: '19/5 dan 3,8' },
      { id: 'B', text: '17/5 dan 3,4' },
      { id: 'C', text: '19/5 dan 3,4' },
      { id: 'D', text: '12/5 dan 2,4' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pecahan biasa: (3 × 5 + 4) / 5 = 19/5.\nPecahan desimal: 19 ÷ 5 = 3,8 (atau 3 + 4/5 = 3 + 8/10 = 3,8).\nJadi jawabannya adalah 19/5 dan 3,8.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Mengubah ke Persen',
    difficulty: 'Mudah',
    text: 'Bentuk persen dari pecahan 7/20 adalah...',
    options: [
      { id: 'A', text: '28%' },
      { id: 'B', text: '35%' },
      { id: 'C', text: '45%' },
      { id: 'D', text: '70%' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bentuk persen artinya perseratus.\n7/20 = (7 × 5) / (20 × 5) = 35/100 = 35%.\nAtau: 7/20 × 100% = 35%.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Pecahan Desimal & Persen',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar persegi panjang yang dibagi menjadi petak-petak berukuran sama berikut! Nilai pecahan desimal dan persen dari daerah yang diarsir adalah...',
    imageSvg: `<svg viewBox="0 0 320 150" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="300" height="100" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
  <rect x="10" y="10" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="70" y="10" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="130" y="10" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="190" y="10" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="250" y="10" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="10" y="60" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="70" y="60" width="60" height="50" fill="#10b981" stroke="#047857" stroke-width="2"/>
  <rect x="130" y="60" width="60" height="50" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="190" y="60" width="60" height="50" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
  <rect x="250" y="60" width="60" height="50" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
  <text x="160" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Total 10 petak sama besar (7 diarsir)</text>
</svg>`,
    options: [
      { id: 'A', text: '0,07 dan 7%' },
      { id: 'B', text: '0,7 dan 70%' },
      { id: 'C', text: '0,35 dan 35%' },
      { id: 'D', text: '0,7 dan 35%' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total petak = 10 bagian sama besar.\nPetak yang diarsir = 7 petak.\nPecahan biasa = 7/10.\nPecahan desimal = 7 ÷ 10 = 0,7.\nBentuk persen = 7/10 × 100% = 70%.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengurutkan Pecahan',
    difficulty: 'Sedang',
    text: 'Urutan pecahan: 0,65; 3/4; 70%; 5/8 dari yang terkecil ke terbesar adalah...',
    options: [
      { id: 'A', text: '5/8; 0,65; 70%; 3/4' },
      { id: 'B', text: '0,65; 5/8; 70%; 3/4' },
      { id: 'C', text: '5/8; 70%; 0,65; 3/4' },
      { id: 'D', text: '3/4; 70%; 0,65; 5/8' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ubah semua pecahan ke bentuk desimal:\n• 0,65 = 0,650\n• 3/4 = 0,750\n• 70% = 0,700\n• 5/8 = 0,625\nUrutan dari terkecil: 0,625 (5/8) < 0,650 (0,65) < 0,700 (70%) < 0,750 (3/4).\nMaka urutan terkecil ke terbesar adalah: 5/8; 0,65; 70%; 3/4.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Penjumlahan Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil penjumlahan dari 2/3 + 3/5 adalah...',
    options: [
      { id: 'A', text: '5/8' },
      { id: 'B', text: '1 1/15' },
      { id: 'C', text: '1 4/15' },
      { id: 'D', text: '1 2/5' },
    ],
    correctAnswer: 'C',
    explanation:
      'Samakan penyebut dengan mencari KPK dari 3 dan 5, yaitu 15:\n2/3 = 10/15\n3/5 = 9/15\n2/3 + 3/5 = 10/15 + 9/15 = 19/15 = 1 4/15.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pengurangan Pecahan Campuran',
    difficulty: 'Sedang',
    text: 'Hasil pengurangan dari 4 1/2 - 1 3/4 adalah...',
    options: [
      { id: 'A', text: '2 1/4' },
      { id: 'B', text: '2 1/2' },
      { id: 'C', text: '2 3/4' },
      { id: 'D', text: '3 1/4' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah ke pecahan biasa atau samakan penyebut:\n4 1/2 = 9/2 = 18/4\n1 3/4 = 7/4\n18/4 - 7/4 = 11/4 = 2 3/4.\nJadi hasilnya adalah 2 3/4.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Garis Bilangan Pecahan',
    difficulty: 'Mudah',
    text: 'Perhatikan garis bilangan pecahan berikut! Titik K menunjukkan letak sebuah pecahan. Bentuk paling sederhana dari pecahan yang ditunjukkan oleh titik K adalah...',
    imageSvg: `<svg viewBox="0 0 340 120" class="w-72 h-auto" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="60" x2="310" y2="60" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
  <line x1="40" y1="45" x2="40" y2="75" stroke="#334155" stroke-width="2.5"/>
  <text x="40" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">0</text>
  <line x1="85" y1="50" x2="85" y2="70" stroke="#64748b" stroke-width="2"/>
  <text x="85" y="95" text-anchor="middle" font-size="11" fill="#64748b">1/6</text>
  <line x1="130" y1="50" x2="130" y2="70" stroke="#64748b" stroke-width="2"/>
  <text x="130" y="95" text-anchor="middle" font-size="11" fill="#64748b">2/6</text>
  <line x1="175" y1="50" x2="175" y2="70" stroke="#64748b" stroke-width="2"/>
  <text x="175" y="95" text-anchor="middle" font-size="11" fill="#64748b">3/6</text>
  <line x1="220" y1="45" x2="220" y2="75" stroke="#2563eb" stroke-width="3"/>
  <circle cx="220" cy="60" r="6" fill="#2563eb"/>
  <text x="220" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">Titik K</text>
  <line x1="265" y1="50" x2="265" y2="70" stroke="#64748b" stroke-width="2"/>
  <text x="265" y="95" text-anchor="middle" font-size="11" fill="#64748b">5/6</text>
  <line x1="300" y1="45" x2="300" y2="75" stroke="#334155" stroke-width="2.5"/>
  <text x="300" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">1</text>
</svg>`,
    options: [
      { id: 'A', text: '1/3' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '5/6' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jarak dari 0 ke 1 dibagi menjadi 6 bagian sama panjang (tiap ruas berjarak 1/6).\nTitik K berada pada ruas ke-4, yang berarti bernilai 4/6.\nPecahan 4/6 disederhanakan dengan membagi pembilang dan penyebut dengan 2:\n4/6 = (4 ÷ 2) / (6 ÷ 2) = 2/3.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Hasil perkalian dari 5/8 × 2 2/5 adalah...',
    options: [
      { id: 'A', text: '1 1/4' },
      { id: 'B', text: '1 1/2' },
      { id: 'C', text: '1 3/4' },
      { id: 'D', text: '2' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ubah pecahan campuran 2 2/5 menjadi pecahan biasa:\n2 2/5 = (2 × 5 + 2) / 5 = 12/5.\nLakukan perkalian:\n5/8 × 12/5 = (5 × 12) / (8 × 5) = 60/40 = 6/4 = 3/2 = 1 1/2.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari 3/4 ÷ 5/6 adalah...',
    options: [
      { id: 'A', text: '5/8' },
      { id: 'B', text: '8/9' },
      { id: 'C', text: '9/10' },
      { id: 'D', text: '1 1/8' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pembagian pecahan dihitung dengan mengalikan pecahan pertama dengan kebalikan dari pecahan kedua:\n3/4 ÷ 5/6 = 3/4 × 6/5 = (3 × 6) / (4 × 5) = 18/20 = 9/10.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pembagian Pecahan & Desimal',
    difficulty: 'Sedang',
    text: 'Hasil perhitungan dari 2 1/4 ÷ 0,5 adalah...',
    options: [
      { id: 'A', text: '3,5' },
      { id: 'B', text: '4,0' },
      { id: 'C', text: '4,5' },
      { id: 'D', text: '5,0' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah ke bentuk pecahan biasa atau desimal:\n2 1/4 = 2,25\n2,25 ÷ 0,5 = 4,5.\nAtau: 9/4 ÷ 1/2 = 9/4 × 2/1 = 18/4 = 9/2 = 4 1/2 = 4,5.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Operasi Hitung Campuran Pecahan',
    difficulty: 'Sedang',
    text: 'Hasil dari 1/2 + 3/4 × 2/3 adalah...',
    options: [
      { id: 'A', text: '5/6' },
      { id: 'B', text: '1' },
      { id: 'C', text: '1 1/4' },
      { id: 'D', text: '1 1/2' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berdasarkan urutan operasi hitung matematika, operasi perkalian harus didahulukan daripada penjumlahan:\n3/4 × 2/3 = (3 × 2) / (4 × 3) = 6/12 = 1/2.\nSelanjutnya dijumlahkan:\n1/2 + 1/2 = 2/2 = 1.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Pengurangan Pecahan Kontekstual',
    difficulty: 'Sedang',
    text: 'Sebuah gelas ukur mula-mula berisi air sebanyak 3/4 liter seperti tampak pada gambar. Jika Budi menuangkan air tersebut sebanyak 1/3 liter untuk melarutkan pupuk, sisa air di dalam gelas ukur adalah...',
    imageSvg: `<svg viewBox="0 0 200 240" class="w-44 h-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="30" width="100" height="170" rx="6" fill="#f8fafc" stroke="#475569" stroke-width="3"/>
  <rect x="53" y="73" width="94" height="124" rx="4" fill="#60a5fa" opacity="0.65"/>
  <line x1="120" y1="40" x2="150" y2="40" stroke="#1e293b" stroke-width="2"/>
  <text x="160" y="44" font-size="11" font-weight="bold" fill="#1e293b">1 L</text>
  <line x1="125" y1="73" x2="150" y2="73" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="160" y="77" font-size="11" font-weight="bold" fill="#1d4ed8">3/4 L</text>
  <line x1="125" y1="115" x2="150" y2="115" stroke="#1e293b" stroke-width="2"/>
  <text x="160" y="119" font-size="11" font-weight="bold" fill="#1e293b">2/4 L</text>
  <line x1="125" y1="157" x2="150" y2="157" stroke="#1e293b" stroke-width="2"/>
  <text x="160" y="161" font-size="11" font-weight="bold" fill="#1e293b">1/4 L</text>
  <line x1="120" y1="199" x2="150" y2="199" stroke="#1e293b" stroke-width="2"/>
  <text x="160" y="203" font-size="11" font-weight="bold" fill="#1e293b">0</text>
  <text x="100" y="225" text-anchor="middle" font-size="11" font-weight="bold" fill="#475569">Gelas Ukur (Air = 3/4 L)</text>
</svg>`,
    options: [
      { id: 'A', text: '1/6 liter' },
      { id: 'B', text: '1/4 liter' },
      { id: 'C', text: '5/12 liter' },
      { id: 'D', text: '7/12 liter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Sisa air = Volume mula-mula - Volume yang dituangkan\nSisa air = 3/4 liter - 1/3 liter\nKPK dari 4 dan 3 adalah 12:\n3/4 = 9/12\n1/3 = 4/12\n9/12 - 4/12 = 5/12 liter.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Soal Cerita Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Rina memiliki seutas pita sepanjang 4 1/2 meter. Pita tersebut dipotong-potong menjadi beberapa helai yang sama panjang untuk menghias kotak kado. Jika setiap kotak kado memerlukan pita sepanjang 3/4 meter, berapa banyak kado yang dapat dihias oleh Rina?',
    options: [
      { id: 'A', text: '4 kado' },
      { id: 'B', text: '5 kado' },
      { id: 'C', text: '6 kado' },
      { id: 'D', text: '7 kado' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak kado = Total panjang pita ÷ Panjang pita per kado\n= 4 1/2 ÷ 3/4\n= 9/2 ÷ 3/4\n= 9/2 × 4/3\n= (9 × 4) / (2 × 3) = 36/6 = 6 kado.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Persentase & Diskon Pecahan',
    difficulty: 'Sedang',
    text: 'Harga sebuah tas sekolah adalah Rp120.000,00. Toko memberikan potongan harga (diskon) sebesar 25%. Berapakah harga tas yang harus dibayar pembeli setelah mendapat potongan harga?',
    options: [
      { id: 'A', text: 'Rp85.000,00' },
      { id: 'B', text: 'Rp90.000,00' },
      { id: 'C', text: 'Rp95.000,00' },
      { id: 'D', text: 'Rp100.000,00' },
    ],
    correctAnswer: 'B',
    explanation:
      'Diskon = 25% = 25/100 = 1/4.\nBesar potongan harga = 1/4 × Rp120.000,00 = Rp30.000,00.\nHarga yang harus dibayar = Rp120.000,00 - Rp30.000,00 = Rp90.000,00.\n(Atau: pembeli membayar 75% = 3/4 × Rp120.000,00 = Rp90.000,00).',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Soal Cerita Bagian Luas',
    difficulty: 'Sukar',
    text: 'Pak Budi memiliki sebidang kebun seluas 600 m². Sebanyak 1/3 bagian kebun ditanami jagung, 2/5 bagian dibuat kolam ikan, dan sisanya ditanami rumput gajah. Luas kebun yang ditanami rumput gajah adalah...',
    options: [
      { id: 'A', text: '120 m²' },
      { id: 'B', text: '140 m²' },
      { id: 'C', text: '160 m²' },
      { id: 'D', text: '180 m²' },
    ],
    correctAnswer: 'C',
    explanation:
      '• Luas lahan jagung = 1/3 × 600 m² = 200 m²\n• Luas kolam ikan = 2/5 × 600 m² = 240 m²\n• Total lahan terpakai = 200 m² + 240 m² = 440 m²\n• Luas rumput gajah = 600 m² - 440 m² = 160 m².\n(Atau pecahan sisa: 1 - 1/3 - 2/5 = 15/15 - 5/15 - 6/15 = 4/15 bagian. 4/15 × 600 = 160 m²).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Representasi Visual Pecahan Bagian',
    difficulty: 'Mudah',
    text: 'Sebatang cokelat terdiri dari 12 petak seperti tampak pada gambar di bawah ini. Adik memakan 5 petak cokelat dan Kakak memakan 4 petak cokelat. Pecahan paling sederhana yang menyatakan sisa cokelat yang belum dimakan adalah...',
    imageSvg: `<svg viewBox="0 0 300 180" class="w-64 h-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="270" height="120" rx="8" fill="#78350f" stroke="#451a03" stroke-width="3"/>
  <rect x="23" y="23" width="58" height="32" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
  <rect x="87" y="23" width="58" height="32" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
  <rect x="151" y="23" width="58" height="32" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
  <rect x="215" y="23" width="58" height="32" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
  <rect x="23" y="59" width="58" height="32" rx="4" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
  <rect x="87" y="59" width="58" height="32" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
  <rect x="151" y="59" width="58" height="32" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
  <rect x="215" y="59" width="58" height="32" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
  <rect x="23" y="95" width="58" height="32" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
  <rect x="87" y="95" width="58" height="32" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="151" y="95" width="58" height="32" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="215" y="95" width="58" height="32" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="150" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">Cokelat Batang: 5 Dimakan Adik, 4 Dimakan Kakak</text>
</svg>`,
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '1/3' },
      { id: 'D', text: '5/12' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total petak cokelat = 12 petak.\nBagian yang dimakan = 5 petak (Adik) + 4 petak (Kakak) = 9 petak.\nSisa petak cokelat = 12 - 9 = 3 petak.\nNilai pecahan sisa = 3/12.\nBentuk paling sederhana = (3 ÷ 3) / (12 ÷ 3) = 1/4.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Penjumlahan Desimal',
    difficulty: 'Mudah',
    text: 'Ibu membeli 3 kantong gula pasir dengan berat masing-masing 1,75 kg, 2,4 kg, dan 0,85 kg. Berat total seluruh gula pasir yang dibeli ibu adalah...',
    options: [
      { id: 'A', text: '4,85 kg' },
      { id: 'B', text: '4,95 kg' },
      { id: 'C', text: '5,00 kg' },
      { id: 'D', text: '5,15 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Lakukan penjumlahan pecahan desimal secara bersusun dengan meluruskan tanda koma:\n  1,75\n  2,40\n  0,85\n------ +\n  5,00 kg (atau 5 kg).',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Pecahan Bagian dari Kumpulan Benda',
    difficulty: 'Sedang',
    text: 'Di dalam sebuah keranjang terdapat 40 butir buah yang terdiri dari jeruk dan apel. Jika banyak jeruk adalah 3/8 dari total seluruh buah, maka banyak buah apel di dalam keranjang tersebut adalah...',
    options: [
      { id: 'A', text: '15 butir' },
      { id: 'B', text: '20 butir' },
      { id: 'C', text: '25 butir' },
      { id: 'D', text: '30 butir' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak jeruk = 3/8 × 40 = 15 butir.\nBanyak apel = Total buah - Banyak jeruk\n= 40 - 15 = 25 butir.\n(Atau: bagian apel = 1 - 3/8 = 5/8 bagian. 5/8 × 40 = 25 butir).',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 21 - 25)
  // Setiap soal memiliki 3 pilihan jawaban (A, B, C).
  // Kemungkinan lebih dari 1 pilihan jawaban benar.
  // =========================================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Pecahan Senilai',
    difficulty: 'Sedang',
    text: 'Pilihlah semua bentuk pecahan atau persentase di bawah ini yang memiliki nilai sama dengan 3/4! (Jawaban benar dapat lebih dari satu pilihan)',
    options: [
      { id: 'A', text: '0,75' },
      { id: 'B', text: '75%' },
      { id: 'C', text: '15/25' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• 3/4 diubah ke desimal: 3 ÷ 4 = 0,75 (Pilihan A BENAR)\n• 3/4 diubah ke persen: 3/4 × 100% = 75% (Pilihan B BENAR)\n• 15/25 disederhanakan: 3/5 = 0,60 atau 60%, bukan 3/4 (Pilihan C SALAH).',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Perbandingan Visual Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan dua bangun persegi yang diarsir pada gambar berikut! Pilihlah pernyataan yang bernilai BENAR terkait kedua gambar tersebut! (Jawaban benar dapat lebih dari satu pilihan)',
    imageSvg: `<svg viewBox="0 0 320 160" class="w-72 h-auto" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="100" height="100" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="0" y="0" width="50" height="100" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
    <line x1="50" y1="0" x2="50" y2="100" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="0" y1="50" x2="100" y2="50" stroke="#1e293b" stroke-width="1.5"/>
    <text x="50" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Persegi I (2/4)</text>
  </g>
  <g transform="translate(190, 20)">
    <rect x="0" y="0" width="100" height="100" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
    <rect x="0" y="0" width="50" height="100" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
    <line x1="25" y1="0" x2="25" y2="100" stroke="#1e293b" stroke-width="1"/>
    <line x1="50" y1="0" x2="50" y2="100" stroke="#1e293b" stroke-width="1.5"/>
    <line x1="75" y1="0" x2="75" y2="100" stroke="#1e293b" stroke-width="1"/>
    <line x1="0" y1="50" x2="100" y2="50" stroke="#1e293b" stroke-width="1.5"/>
    <text x="50" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Persegi II (4/8)</text>
  </g>
</svg>`,
    options: [
      { id: 'A', text: 'Luas daerah yang diarsir pada Persegi I bernilai 1/2 dari luas persegi utuh.' },
      { id: 'B', text: 'Nilai pecahan daerah arsiran Persegi I senilai dengan arsiran Persegi II.' },
      { id: 'C', text: 'Daerah arsiran Persegi II lebih kecil daripada daerah arsiran Persegi I.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Persegi I membagi bangun jadi 4 petak dengan 2 petak diarsir: 2/4 = 1/2 (Pernyataan A BENAR).\n• Persegi II membagi bangun jadi 8 petak dengan 4 petak diarsir: 4/8 = 1/2. Karena 2/4 = 4/8, kedua arsiran bernilai senilai (Pernyataan B BENAR).\n• Karena nilainya sama besar, pernyataan C SALAH.',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Operasi Penjumlahan & Pengurangan',
    difficulty: 'Sukar',
    text: 'Manakah dari operasi hitung pecahan berikut yang menghasilkan nilai LEBIH DARI 1? (Pilihlah seluruh jawaban yang benar)',
    options: [
      { id: 'A', text: '2/3 + 1/2' },
      { id: 'B', text: '3/4 + 1/3' },
      { id: 'C', text: '1 1/4 - 1/3' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A: 2/3 + 1/2 = 4/6 + 3/6 = 7/6 = 1 1/6 (Lebih dari 1 -> BENAR)\n• B: 3/4 + 1/3 = 9/12 + 4/12 = 13/12 = 1 1/12 (Lebih dari 1 -> BENAR)\n• C: 1 1/4 - 1/3 = 5/4 - 1/3 = 15/12 - 4/12 = 11/12 (Kurang dari 1 -> SALAH).',
  },
  {
    id: 24,
    type: 'pgk',
    topic: 'Pecahan dan Bentuk Desimal',
    difficulty: 'Sedang',
    text: 'Manakah pasangan pecahan biasa dan pecahan desimal berikut yang bernilai TEPAT? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: '1/8 = 0,125' },
      { id: 'B', text: '2/5 = 0,40' },
      { id: 'C', text: '3/8 = 0,350' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• 1/8 = 1 ÷ 8 = 0,125 (BENAR)\n• 2/5 = 4/10 = 0,4 = 0,40 (BENAR)\n• 3/8 = 3 ÷ 8 = 0,375, bukan 0,350 (SALAH).',
  },
  {
    id: 25,
    type: 'pgk',
    topic: 'Soal Cerita Persediaan Bahan',
    difficulty: 'Sedang',
    text: 'Ibu memiliki persediaan tepung terigu sebanyak 1 1/2 kg. Ibu membeli lagi tepung terigu sebanyak 2,25 kg. Kemudian sebanyak 2 1/4 kg digunakan untuk membuat bolu kukus. Pilihlah pernyataan yang BENAR mengenai tepung terigu Ibu! (Jawaban benar dapat lebih dari satu pilihan)',
    options: [
      { id: 'A', text: 'Total tepung terigu setelah membeli tambahan adalah 3,75 kg.' },
      { id: 'B', text: 'Sisa tepung terigu yang masih dimiliki Ibu adalah 1 1/2 kg.' },
      { id: 'C', text: 'Sisa tepung terigu yang masih dimiliki Ibu adalah 1,25 kg.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Tepung awal + tambahan = 1,5 kg + 2,25 kg = 3,75 kg (Pernyataan A BENAR).\n• Tepung yang digunakan = 2 1/4 kg = 2,25 kg.\n• Sisa tepung = 3,75 kg - 2,25 kg = 1,5 kg atau 1 1/2 kg (Pernyataan B BENAR).\n• Pernyataan C bernilai SALAH karena sisa tepung adalah 1,5 kg, bukan 1,25 kg.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (10 BUTIR SOAL: NO. 26 - 35)
  // Setiap butir soal memuat 3 pernyataan yang direspons Benar atau Salah.
  // =========================================================================
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Konsep Dasar Pecahan',
    difficulty: 'Mudah',
    text: 'Tentukan kebenaran (Benar / Salah) untuk setiap pernyataan mengenai konsep pecahan di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Pada pecahan 5/9, angka 5 disebut sebagai pembilang dan angka 9 disebut sebagai penyebut.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pecahan 7/4 merupakan contoh dari pecahan murni.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pecahan campuran 2 3/5 memiliki nilai yang sama dengan pecahan biasa 13/5.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: Pada a/b, a adalah pembilang dan b adalah penyebut.\n2. Salah: Pecahan murni memiliki pembilang lebih kecil dari penyebut. Karena 7 > 4, maka 7/4 merupakan pecahan tidak murni.\n3. Benar: 2 3/5 = (2 × 5 + 3) / 5 = 13/5.',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Representasi Pecahan Segi Enam',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar segi enam beraturan yang terbagi menjadi 6 segitiga sama besar berikut! Tentukan Benar atau Salah untuk setiap pernyataan di bawah ini!',
    imageSvg: `<svg viewBox="0 0 240 200" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(120, 95)">
    <polygon points="0,0 75,0 37.5,64.95" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/>
    <polygon points="0,0 37.5,64.95 -37.5,64.95" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/>
    <polygon points="0,0 -37.5,64.95 -75,0" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/>
    <polygon points="0,0 -75,0 -37.5,-64.95" fill="#8b5cf6" stroke="#5b21b6" stroke-width="2"/>
    <polygon points="0,0 -37.5,-64.95 37.5,-64.95" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <polygon points="0,0 37.5,-64.95 75,0" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
  </g>
  <text x="120" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Segi Enam (4 dari 6 bagian diarsir)</text>
</svg>`,
    statements: [
      {
        id: 's1',
        text: 'Bagian yang diarsir bernilai 4/6 dari luas seluruh segi enam.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bentuk paling sederhana dari pecahan bagian yang diarsir adalah 2/3.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bagian yang TIDAK diarsir bernilai 50% dari luas seluruh gambar segi enam.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Terdapat 4 segitiga diarsir dari total 6 segitiga sama besar (4/6 bagian).\n2. Benar: 4/6 disederhanakan dengan membagi 2 menjadi 2/3.\n3. Salah: Bagian yang tidak diarsir adalah 2/6 = 1/3 bagian ≈ 33,33%, bukan 50%.',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Perbandingan dan Urutan Pecahan',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan perbandingan nilai bilangan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Pecahan 3/5 bernilai lebih besar daripada pecahan 4/7.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bilangan desimal 0,45 bernilai lebih kecil daripada 40%.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pada garis bilangan, letak pecahan 5/6 berada di antara 1/2 dan 1.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: 3/5 = 21/35 dan 4/7 = 20/35. Karena 21/35 > 20/35, maka 3/5 > 4/7.\n2. Salah: 0,45 = 45%. Karena 45% > 40%, maka 0,45 lebih besar dari 40%.\n3. Benar: 1/2 = 3/6 dan 1 = 6/6. Karena 3/6 < 5/6 < 6/6, maka 5/6 terletak di antara 1/2 dan 1.',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Operasi Penjumlahan & Pengurangan',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap hasil operasi hitung pecahan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Hasil dari 3/8 + 1/8 adalah 1/2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil dari 5/6 - 1/3 adalah 1/2.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Hasil dari 2 1/3 + 1 1/2 adalah 3 2/5.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: 3/8 + 1/8 = 4/8 = 1/2.\n2. Benar: 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2.\n3. Salah: 2 1/3 + 1 1/2 = 2 2/6 + 1 3/6 = 3 5/6, bukan 3 2/5.',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Perkalian dan Kebalikan Pecahan',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan mengenai perkalian dan kebalikan pecahan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Kebalikan (invers) dari pecahan 4/7 adalah 7/4.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil perkalian antara suatu pecahan dengan kebalikannya selalu bernilai 1.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Hasil dari perkalian 3/5 × 2/3 adalah 1/5.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Kebalikan dari a/b adalah b/a, sehingga kebalikan 4/7 adalah 7/4.\n2. Benar: a/b × b/a = 1 (contoh: 4/7 × 7/4 = 28/28 = 1).\n3. Salah: 3/5 × 2/3 = 6/15 = 2/5, bukan 1/5.',
  },
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Pembagian Kue Tart (Kontekstual)',
    difficulty: 'Sedang',
    text: 'Sebuah kue tart dipotong menjadi 12 potongan sama besar seperti pada gambar. Sebanyak 8 potong kue telah dibagikan kepada tamu undangan. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    imageSvg: `<svg viewBox="0 0 240 210" class="w-52 h-auto" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(120, 100)">
    <circle cx="0" cy="0" r="75" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    <path d="M 0 0 L 0 -75 A 75 75 0 1 1 -64.95 37.5 Z" fill="#f43f5e" opacity="0.85" stroke="#be123c" stroke-width="2"/>
    <line x1="0" y1="0" x2="0" y2="-75" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="37.5" y2="-64.95" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="64.95" y2="-37.5" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="75" y2="0" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="64.95" y2="37.5" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="37.5" y2="64.95" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="0" y2="75" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="-37.5" y2="64.95" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="-64.95" y2="37.5" stroke="#991b1b" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="-75" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="-64.95" y2="-37.5" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="-37.5" y2="-64.95" stroke="#94a3b8" stroke-width="1.5"/>
  </g>
  <text x="120" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Kue Tart: 8 dari 12 Potong Dibagikan (Warna Merah)</text>
</svg>`,
    statements: [
      {
        id: 's1',
        text: 'Bagian kue tart yang telah dibagikan kepada tamu bernilai 2/3 dari seluruh kue.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sisa kue tart yang belum dibagikan adalah 4 potong atau bernilai 1/3 bagian.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika 2 potong lagi dibagikan, maka sisa kue tart menjadi 1/4 bagian dari seluruh kue.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Bagian yang dibagikan = 8/12. Disederhanakan menjadi (8 ÷ 4) / (12 ÷ 4) = 2/3.\n2. Benar: Sisa kue = 12 - 8 = 4 potong = 4/12 = 1/3 bagian.\n3. Salah: Jika 2 potong lagi dibagikan, sisa kue menjadi 4 - 2 = 2 potong = 2/12 = 1/6 bagian, bukan 1/4.',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Pembagian Pecahan dan Desimal',
    difficulty: 'Sedang',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan mengenai pembagian pecahan dan desimal berikut!',
    statements: [
      {
        id: 's1',
        text: 'Membagi suatu bilangan dengan 1/2 sama hasilnya dengan mengalikan bilangan tersebut dengan 2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil dari 3/5 ÷ 3 adalah 1/5.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Hasil dari 0,6 ÷ 0,2 adalah 0,3.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: n ÷ (1/2) = n × (2/1) = 2n.\n2. Benar: 3/5 ÷ 3 = 3/5 × 1/3 = 3/15 = 1/5.\n3. Salah: 0,6 ÷ 0,2 = 6/10 ÷ 2/10 = 6 ÷ 2 = 3, bukan 0,3.',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Konversi Antar Bentuk Pecahan',
    difficulty: 'Mudah',
    text: 'Tentukan Benar atau Salah untuk pernyataan mengenai perubahan bentuk pecahan di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Pecahan biasa 13/4 jika diubah ke bentuk pecahan campuran menjadi 3 1/4.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bentuk persen dari bilangan desimal 0,08 adalah 80%.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pecahan 3/25 senilai dengan 12%.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Benar: 13 ÷ 4 = 3 sisa 1, sehingga ditulis 3 1/4.\n2. Salah: 0,08 = 8/100 = 8%, bukan 80% (80% adalah 0,8).\n3. Benar: 3/25 = (3 × 4) / (25 × 4) = 12/100 = 12%.',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Penerapan Kontekstual Persediaan Beras',
    difficulty: 'Sedang',
    text: 'Di sebuah toko kelontong terdapat persediaan beras sebanyak 50 kg. Sebanyak 3/5 bagian dari beras tersebut telah terjual kepada pelanggan. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Beras yang telah terjual sebanyak 30 kg.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sisa persediaan beras yang belum terjual adalah 2/5 bagian dari persediaan awal.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Sisa persediaan beras yang belum terjual di toko tersebut sebanyak 25 kg.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Beras terjual = 3/5 × 50 kg = 30 kg.\n2. Benar: Bagian sisa = 1 - 3/5 = 2/5 bagian.\n3. Salah: Berat sisa beras = 50 kg - 30 kg = 20 kg, bukan 25 kg.',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Operasi Campuran dan Aturan Hitung',
    difficulty: 'Sukar',
    text: 'Tentukan Benar atau Salah untuk setiap pernyataan mengenai aturan dan hasil operasi hitung campuran pecahan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Hasil dari (1/4 + 1/2) × 4 adalah 3.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil dari 1 - 2/5 × 1/2 adalah 4/5.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pada operasi hitung campuran tanpa tanda kurung, operasi penjumlahan selalu dikerjakan terlebih dahulu sebelum operasi perkalian.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Benar: Kerjakan dalam kurung dahulu: 1/4 + 2/4 = 3/4. Lalu 3/4 × 4 = 3.\n2. Benar: Kerjakan perkalian dahulu: 2/5 × 1/2 = 2/10 = 1/5. Lalu 1 - 1/5 = 5/5 - 1/5 = 4/5.\n3. Salah: Menurut kaidah operasi hitung, perkalian dan pembagian memiliki derajat lebih tinggi dan harus didahulukan daripada penjumlahan dan pengurangan.',
  },
];
