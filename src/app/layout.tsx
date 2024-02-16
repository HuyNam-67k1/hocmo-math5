export const metadata = {
  title: "Học Mở - Toán Lớp 5",
  description: "Học toán lớp 5",
};
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
