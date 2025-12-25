import plugin from 'tailwindcss/plugin';

export const plumagePlugin = plugin(function({ addUtilities, theme }) {
  addUtilities({
    // Glassmorphism System
    '.plumage-glass': {
      'background': 'rgba(255, 255, 255, 0.03)',
      'backdrop-filter': 'blur(12px)',
      '-webkit-backdrop-filter': 'blur(12px)',
      'border': '1px solid rgba(255, 255, 255, 0.08)',
      'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    },
    '.plumage-glass-heavy': {
      'background': 'rgba(15, 15, 18, 0.8)',
      'backdrop-filter': 'blur(20px)',
      '-webkit-backdrop-filter': 'blur(20px)',
      'border': '1px solid rgba(255, 255, 255, 0.05)',
    },
    
    // Aesthetic Utilities
    '.plumage-gradient': {
      'background': 'linear-gradient(45deg, #5865F2, #23a559, #f43f5e)',
      'background-size': '200% 200%',
      'animation': 'plumage 5s ease infinite',
    },
    '.text-glow': {
      'text-shadow': '0 0 20px rgba(var(--peacock-primary-rgb), 0.5)',
    },
    
    // Texture System
    '.noise-texture': {
      'position': 'relative',
      'isolation': 'isolate',
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'inset': '0',
        'opacity': '0.03',
        'z-index': '-1',
        'pointer-events': 'none',
        'background-image': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/ %3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }
    }
  });
}, {
  theme: {
    extend: {
      colors: {
        peacock: {
          primary: '#5865F2', // Discord Blue
          success: '#23a559', // Discord Green
          danger: '#f43f5e',  // Rose 500
          dark: '#0f0f12',    // Deep charcoal
          darker: '#050505',
          surface: {
            1: '#16161a',
            2: '#1c1c21',
            3: '#25252b',
          }
        }
      },
      keyframes: {
        plumage: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        plumage: 'plumage 5s ease infinite',
      }
    }
  }
});
