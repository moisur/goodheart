import React from 'react';

const InstagramIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.792 2.792c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.792 2.792c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.792-2.792c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.792-2.792c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.75-9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-off-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">The Unbuttoned Co.</h3>
            <p className="text-sm text-gray-400">Chic, Playful, and Slightly Cheeky.</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Unbuttoned Co. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="#/terms-of-service" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
