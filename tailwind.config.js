module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-banner" : "url('https://images.unsplash.com/photo-1632948177278-5ab29b5b6e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80')",
        "profile-picture" : "url('https://pbs.twimg.com/profile_images/1488744041374224385/Fm-oElzM_400x400.jpg')",
      }
    },
  },
  plugins: [],
}
