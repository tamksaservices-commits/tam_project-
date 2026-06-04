export const metadata = {
  title: 'منصة تم | خدمات طلابية وتصاميم احترافية',
  description: 'منصة تم لتقديم العروض التقديمية وتنسيق ملفات Word والسير الذاتية ATS وبطاقات التخرج في المملكة العربية السعودية.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;750;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
