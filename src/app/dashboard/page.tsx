export default function DashboardPage() {
  // URL ini dapat diubah ke situs web mana pun yang Anda inginkan.
  // Pastikan situs tersebut mengizinkan untuk disematkan dalam iframe.
  const url = 'https://id.wikipedia.org/wiki/Halaman_Utama';

  return (
    <div className="h-screen w-screen bg-white">
      <iframe
        src={url}
        className="h-full w-full border-0"
        title="Web Viewer"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
