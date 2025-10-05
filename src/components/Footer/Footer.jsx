import { YouTubeLogo } from '../Header/YoutubeLogo';

export const Footer = ({ t }) => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-sm py-4 px-6 flex items-center justify-between border-t border-orange-500">
      <span className="text-orange-400 font-bold">{t.createdBy}</span>
      <a href="https://www.youtube.com/channel/UCH0Hejh-O79c3wqSeUP_BMQ" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <YouTubeLogo />
      </a>
    </div>
  );
};