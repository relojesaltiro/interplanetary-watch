import { YouTubeLogo } from './YoutubeLogo';

export const Header = ({ t, language, setLanguage }) => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm py-4 px-6 flex items-center justify-between border-b border-orange-500">
      <div className="flex items-center gap-3">
        <a href="https://www.youtube.com/channel/UCH0Hejh-O79c3wqSeUP_BMQ" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <YouTubeLogo />
        </a>
        <span className="text-orange-400 font-bold text-xl">{t.createdBy}</span>
      </div>
      <button
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
      >
        <span className="text-xl">{language === 'es' ? '🇬🇧' : '🇪🇸'}</span>
        <span>{language === 'es' ? 'English' : 'Español'}</span>
      </button>
    </div>
  );
};