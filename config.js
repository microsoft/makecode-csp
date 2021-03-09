const config = {
    gatsby: {
        pathPrefix: "/makecode-csp",
        siteUrl: "https://microsoft.github.io/makecode-csp",
        gaTrackingId: null,
        trailingSlash: false,
    },
    header: {
        logo: "https://microsoft.github.io/makecode-csp/assets/brand.svg",
        logoLink: "https://microsoft.github.io/makecode-csp/",
        title: "<h2>MakeCode CSP</h2>",
        githubUrl: "https://github.com/microsoft/makecode-csp",
        helpUrl: "",
        tweetText: "",
        social: `<li>
		    <a href="https://twitter.com/msmakecode" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
        links: [{ text: "", link: "" }],
        search: {
            enabled: false,
            indexName: "",
            algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
            algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
            algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
        },
    },
    sidebar: {
        forcedNavOrder: [
            "/introduction", // add trailing slash if enabled above
            "/codeblock",
        ],
        collapsedNav: [
            "/codeblock", // add trailing slash if enabled above
        ],
        links: [
            { text: "MakeCode Arcade", link: "https://arcade.makecode.com" },
        ],
        frontline: false,
        ignoreIndex: true,
        title: "Contents",
    },
    siteMetadata: {
        title: "MakeCode Computer Science Principles",
        description:
            "Microsoft MakeCode Advanced Placement Computer Science Principles Curriculum",
        ogImage: null,
        docsLocation:
            "https://github.com/microsoft/makecode-csp/tree/master/content",
        favicon:
            "https://microsoft.github.io/makecode-csp/favicon.ico",
    },
    pwa: {
        enabled: false, // disabling this will also remove the existing service worker.
        manifest: {
            name: "MakeCode Computer Science Principles",
            short_name: "MakeCodeCSP",
            start_url: "/",
            background_color: "#6b37bf",
            theme_color: "#6b37bf",
            display: "standalone",
            crossOrigin: "use-credentials",
            icons: [
                {
                    src: "src/pwa-512.png",
                    sizes: `512x512`,
                    type: `image/png`,
                },
            ],
        },
    },
};

module.exports = config;
