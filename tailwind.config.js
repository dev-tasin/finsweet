tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#FFD2A4',
          navbg: '#0D0D0D',
          navbtn:'#1C1D28',
          subheading:'#161722',
          servicebg:'#FFF5EB',
          watchbg:'#F5F2F0'
        },
        maxWidth: {
            'container': '1280px',
          },
        fontFamily: {
            'roboto': "Roboto Condensed, sans-serif;",
          },
        backgroundImage: {
            'banner': "url('images/banner.jpg')",
            overlay: "linear-gradient(60deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)",
            textgradient: "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
            'visitbg': "url('images/visit.jpg')",
          }
      }
    }
  }