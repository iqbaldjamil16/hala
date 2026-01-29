export default function PopulasiTernakPage() {
  const url = 'https://populasi-ternak.vercel.app/';

  return (
    <div className="h-screen w-screen bg-white">
      <iframe
        src={url}
        className="h-full w-full border-0"
        title="Populasi Ternak Web Viewer"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
