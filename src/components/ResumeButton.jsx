export default function ResumeButton({ compact = false }) {
  return (
    <a
      href="/Akarsh_Naveen_Chandra_SWE2_Resume.pdf"
      download
      className={`inline-flex items-center justify-center rounded-full
        bg-gradient-to-r from-primary to-secondary
        text-white font-semibold
        shadow-lg shadow-black/30
        hover:shadow-black/50 hover:scale-[1.03]
        transition
        ${
          compact ? 'px-3 py-1 text-xs' : 'px-5 py-2 text-sm'
        }`}
    >
      Get My Resume 📄
    </a>
  );
}
