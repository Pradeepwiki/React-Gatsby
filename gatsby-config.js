module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-banshorian`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Software developer CV Pradeep`,
        siteUrl: `https://gatsby-starter-banshorian.vercel.app`,
        siteName: `Pradeep developer portfolio | @webmaeistro`,
        siteShortName: `Pradeep CV`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `Application developer, Full Stack Developer, Front-end`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `billysage@protonmail.com`,
        social: {
          // Usernames
          twitter: `NephliumDark`,
          gitHub: `Pradeepwiki`,
          stackOverflow: `/`,
          linkedIn: `/`,
          resumeInPdf: `/CV-20.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi! I'm Pradeep Venkatraman`,
          h2Text: `I'm a fullstack developer , based out of Bengaluru, India. `,
          typewriter: [
            `People person, coder, designer, infrastructure-as-code guy 😎`,
            `I'm a 🎥 lover`,
            `I'm a fast learner and always interested in learning new skills 🤓`,
            `I like to share what I know 👨‍🏫`,
            `In my non-coding hours, I play lot of games.`,
            
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#434343", hover: "#ffff" },
          shape1: {
            color: `#13547A`,
            opacity: `0.8`,
          },
          shape2: {
            color: `#80D0C7`,
            opacity: `0.3`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `*`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `gatsby-starter-banshorian.vercel.app`,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
}
