function PacificFarms() {
  const embedUrl = "https://app.startinfinity.com/embed/5FUQ8PbybMB";

  return (
    <div className="w-full h-screen">
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        title="Pacific Farms Board"
        allow="fullscreen"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
}

export default PacificFarms;
