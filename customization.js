const siteDescription = `Working with remarkable teams worldwide to envision, design and develop exceptional products.`;
const carouselInterval = 5;

const about = `<div>
   <p>
        Hi, I'm Curb </p>
    <p>
        I'm a product designer, driven by insights to convey ideas in creative spaces. I have led and managed UX processes within Agile frameworks. I've have also collaborated with onshore and offshore teams to design B2B and B2C SaaS products. My process combines atomic design with systems thinking to craft impactful user experiences. </p>
    <p>
        <a href="mailto:info@curb.ws">
         Reach out at info@curb.ws to connect.
        </a>
    </p>
</div>`;

const projects = [
    {
        menuName: `Beacon`,
        name: `Beacon - RentSpree`,
        description: `Crafting a design language for a PropTech app by establishing their design system`,
        logo: `./img/Beacon.svg`,
        carouselImage: './img/BeaconCarouselD.png',
        heroImage: './img/BeaconHeroD.png',
        caseStudy: '',
        sections: [
            {
                label: 'Problem',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        RentSpree connects landlords, agents, and renters, but its previous design system lacked cohesion, slowing consistency, speed to market, and product improvements. Beacon now serves as a clear unified design guide, offering reusable, scalable components that enhance RentSpree’s brand and product. Below is the process of the project.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/BeaconCollageD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/BeaconCollageM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Solution',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        The design system strategy focused on building a unified framework that helps teams deliver consistent, user-friendly experiences. By creating a single source of truth for design components and guidelines, it improves collaboration, streamlines workflows, and ensures a cohesive brand across platforms. I prioritized flexibility, accessibility, and efficiency to adapt to user needs while maintaining a professional design. My strategy as the UX Design Lead is as follows:
                    </p>

                    <ol>
                        <li>Evaluate (Colors, Icons, UI Patterns, Accessibility)</li>
                        <li>Shape vision (Create design language and principles)</li>
                        <li>Create library (Typography, Color Palette, Patterns/Components, Assets)</li>
                        <li>Unify as one (Style & Usage guidance, Component library, Team governance)</li>
                    </ol>
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#212121',
                textColor: '#ffffff',
                content: `<div>
                    <p>
                        Beacon created a clear design language that improves user experience with easy-to-use scalable components and guidelines for RentSpree. A governance process was introduced to ensure all elements are functional and user-friendly through UX and Dev reviews. This design system has also increased cross functional collaboration ensuring consistency and an elevated product quality that support RentSpree's goal of simplifying the rental experience for all users.
                    </p>

                    <img class="desktop-only" src="./img/BeaconMocksD.png">
                    <img class="mobile-only" src="./img/BeaconMocksM.png">
                </div>`,
            },
        ],
    },

    {
        menuName: `Westlaw CS`,
        name: `Thomson Reuters Westlaw`,
        description: `Launching Westlaw’s iPhone app and refreshing their iPad product experience to align.`,
        logo: `./img/ThomsonReuters.svg`,
        carouselImage: './img/WestlawCarousel.png',
        heroImage: './img/WestlawHeroD.png',
        caseStudy:
            'https://www.figma.com/proto/qESLRga2Goq4UJSbxCrygs/Westlaw-CS?page-id=0%3A1&node-id=1-24&p=f&viewport=383%2C445%2C0.25&t=OBAbaTxLmy9QLfuS-1&scaling=min-zoom&content-scaling=fixed',
        sections: [
            {
                label: 'Problem',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        Westlaw is an online legal research service and database for legal professionals in over 60 countries. While most research is conducted on desktops, users sought a mobile solution. Since Thomson Reuters Westlaw did not offer an app to meet this demand, we explored how to adapt Westlaw's desktop experience into a new iPhone app. The following showcases a few selected wireframes that were tested and the outlined approach.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/WestlawWiresD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/WestlawWiresM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Solution',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        To provide a clear and organized pathway to legal information, insights and pain points were collected from surveys and interviews with lawyers, paralegals, and librarians. This effort had several objectives: Identify target users, leverage desktop UX, understand features, align iPad app with new iPhone app.
                    </p>

                    <p>
                        As the UX Design Lead, I partnered with three researchers, five QA team members, three product owners and eight engineers to analyze the data, design wireframes, high fidelity concepts and test prototypes. We reviewed user analytics based on device usage and engaged users including law firms with high fidelity prototypes to ensure product features met their needs. The survey feedback determined core features and attributes that users valued the most.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/WestlawDataD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/WestlawDataM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        The research conducted for the new Westlaw iPhone app provided crucial insights into user preferences, opportunities for simplifying the user experience, and strategies for creating a scalable product. The approach involved generative and qualitative methods, including surveys, navigation testing, wireframing, prototype testing, and A/B testing. The research revealed that iOS is the preferred operating system among users and identified essential features, such as:
                    </p>

                    <ol>
                        <li>Search functionality for quick access to information.</li>
                        <li>Document Display for easy reading and navigation.</li>
                        <li>News & Analysis to keep users informed about the latest developments.</li>
                        <li>The ability to follow specific practice areas or companies for tailored updates.</li>
                    </ol>

                    <p>
                        The iOS apps addressed the needs for legal services companies, law practices, government employees, and educational institutions, through organized access to legal information from Westlaw anywhere. As a result, the Westlaw iPhone app won over 13 awards for the best legal research app. Check out the case study link for a detailed project analysis. Also view in App Store.
                    </p>

                    <img class="desktop-only" src="./img/WestlawFMD.png">
                    <img class="mobile-only" src="./img/WestlawFMM.png">
                </div>`,
            },
        ],
    },

    {
        menuName: `TaxAct CS`,
        name: `TaxAct -  Shopping Experience`,
        description: `Increasing start rate by improving performance, SEO, accessibility and highlighting value props.`,
        logo: `./img/Taxact.svg`,
        carouselImage: './img/TaxActCarouselD.png',
        heroImage: './img/TaxActHeroD.png',
        caseStudy:
            'https://www.figma.com/proto/RLE1VHpfSzpxdOOwRtH7lG/TaxAct-CS?page-id=0%3A1&node-id=[…]25&t=8xEcY8agLeF6XQjr-1&scaling=min-zoom&content-scaling=fixed',
        sections: [
            {
                label: 'Problem',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        TaxAct offers software specifically designed to assist users in efficiently preparing and filing their taxes, catering to both individuals and businesses. While it provides a variety of packages tailored to different tax situations, the platform’s unclear reasons to buy and inconsistent UI design patterns that have increased user drop-off rates, resulting in lower SUS and NPS ratings. Below are TaxAct’s charted scores and identified start rate drivers from the research.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/TaxActDataD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/TaxActDataM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Solution',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        The four key objectives were: Improve authentication, align on start rate drivers that can increase user confidence and convenience, highlight advantages compared to competitors, and allow our product to convert new and retain current customers. We chose the Double Diamond design process model to research, create and valid concepts for production.
                    </p>

                    <p>
                        As the UX Design Lead, my focus was design strategy, creating a mobile first approach, user research, prototyping, A/B testing and design. I partnered with two researchers, three engineers, two QA team members and the product owner for five months. Below is the design strategy.
                    </p>

                    <img class="desktop-only" src="./img/TaxActStrategyD.png">
                    <img class="mobile-only" src="./img/TaxActStrategyM.png">
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#f4f5f8',
                textColor: '#212121',
                content: `<div>
                    <p>
                        The success of the project was measured by user conversion rates and confidence in our product's ability to have clear value props. By creating a scalable, user-friendly homepage, and integrating user feedback with our start rate drivers, we achieved a 30% improvement in performance, accessibility, best practices, and SEO. This directly contributed to reaching our goal of a 2% increase in start rate.
                    </p>
                    </ol>

                    <p>
                        The mobile-first approach I created was embraced and implemented into a responsive grid system, which established a cohesive design language for future product features and provided a flexible framework for secondary and tertiary pages. This also enabled our team to integrated a CMS for the homepage, landing and partnership pages. This transition dramatically reduced our time to market and enabled us to deliver scalable, high-quality designs more efficiently. Select the case study link for a in depth analysis of the full process.
                    </p>

                    <img class="desktop-only" src="./img/TaxActFMD.png">
                    <img class="mobile-only" src="./img/TaxActFMM.png">
                </div>`,
            },
        ],
    },
];
