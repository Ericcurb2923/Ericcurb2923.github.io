const passKey = `Unlock`;
const siteDescription = `Working with remarkable teams worldwide to envision, design and develop exceptional products. <span class="desktop-only"><a href="mailto:info@curb.ws" class="underline">Let's connect</a>.</span>`;
const carouselInterval = 5;
const carouselMobileSpacing = `24px`;

const about = `<div>
   <p>
        Hi, I'm Curb </p>
    <p>
        I'm a product designer, driven by insights to convey ideas in creative spaces. I have led and managed UX processes within Agile frameworks. I've have also collaborated with onshore and offshore teams to design B2B and B2C SaaS products. My process combines atomic design with systems thinking to craft impactful user experiences.</p>
    <p>
        <a href="mailto:info@curb.ws">
         Reach out at info@curb.ws to connect.
        </a>
    </p>
</div>`;

const projects = [
    {
        active: true,
        logo: `./img/McDonalds.svg`,
        logoHeight: `32px`,
        menuName: `McDonalds`,
        name: `McDonalds`,
        description: `McDonald’s Presents Karaoke Night in select cities.`,
        carouselImage: './img/McDonaldsHeroM.png',
        heroImage: './img/McDonaldsHeroD.png',
        caseStudy:'',
        sections: [
            {
                label: 'Overview',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        This marked the launch of McDonald's renowned Karaoke Campaign, an innovative marketing initiative that aimed to foster community engagement and create an entertaining, family-friendly experience. McDonald's introduced Karaoke Night at select locations, which encouraged customers to participate in live karaoke sessions while enjoying their favorite McDonald's meals. To promote the campaign, the company aired promotional commercials, leveraged social media platforms, and implemented banner advertisements to spread awareness. This campaign sought to underline McDonald's positioning as not just a fast-food chain, but also a place for fun and connection.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/McDonaldsOutdoorBnrD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/McDonaldsOutdoorBnrM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Process',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                       I was contracted to create a McDonald’s Karaoke Campaign that was designed to create a fun and engaging experience for customers. While I collaborated with McDonald’s representative and created the concept for approval, select locations were transformed into karaoke-friendly venues equipped with microphones, sound systems, and digital song catalogs. The campaign targeted families, young adults, and social groups, aiming to foster community connections.  
                    </p>
                    
                    <p>
                       To promote the campaign, McDonald’s aired TV commercials showcasing families and friends enjoying karaoke nights. Social media platforms amplified the effort, encouraging user-generated content. In-store banners and posters also invited customers to participate. Additionally, participants received incentives like discounts and free menu items, making the event more appealing. 
                    </p>
                    
                    <p>
                       The campaign partnered with local artists and influencers to host karaoke nights, drawing larger crowds and creating a lively atmosphere. This combination of entertainment, marketing, and customer incentives ensured a well-rounded and impactful campaign rollout. 
                    </p>
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#F4F5F8',
                textColor: '#212121',
                content: `<div>
                    <p>
                        The Karaoke Campaign yielded significant results, with participating locations seeing a 15%-20% increase in foot traffic and a 5%-10% boost in revenue. The events attracted families and younger audiences, encouraging them to enjoying their experience at McDonalds.
                    </p>
                    
                    <p>
                        Social media engagement was a standout success, with the generating thousands of posts and videos. This organic buzz enhanced McDonald’s brand perception as fun and community-oriented. Due to the campaign's success, McDonald’s adapted the concept for international markets, tailoring it to local cultures and music preferences.
                    </p>
                    
                    <p>
                        Ultimately, the Karaoke Campaign strengthened McDonald’s reputation as a creative and customer-focused brand, driving both engagement and sales. Below are a select few of the banner ads I designed for the campaign.
                    </p>

                    <img class="desktop-only" src="./img/McDonaldsWebAdsD.png">
                    <img class="mobile-only" src="./img/McDonaldsWebAdsM.png">
                </div>`,
            },
        ],
    },
    {
        active: true,
        logo: `./img/Taxact.svg`,
        logoHeight: `24px`,
        menuName: `TaxAct CS`,
        name: `TaxAct - Shopping Experience`,
        description: `Increasing start rate by improving performance, SEO, accessibility and highlighting value props.`,
        carouselImage: './img/TaxActHeroM.png',
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
                        TaxAct offers software specifically designed to assist users in efficiently preparing and filing their taxes, catering to both individuals and businesses. While it provides a variety of packages tailored to different tax situations, the platform’s unclear reasons to buy and inconsistent UI design patterns that have increased user drop-off rates, resulting in lower SUS and NPS ratings. Below are TaxAct’s charted scores and identified start rate drivers from the research. Full case study link above.
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
                        The mobile-first approach I created was embraced and implemented into a responsive grid system, which established a cohesive design language for future product features and provided a flexible framework for secondary and tertiary pages. This also enabled our team to integrated a CMS for the homepage, landing and partnership pages. This transition dramatically reduced our time to market and enabled us to deliver scalable, high-quality designs more efficiently. Select the case study link above for an in depth analysis of the full process.
                    </p>

                    <img class="desktop-only" src="./img/TaxActFMD.png">
                    <img class="mobile-only" src="./img/TaxActFMM.png">
                </div>`,
            },
        ],
    },
    {
        active: true,
        logo: `./img/Hilton.svg`,
        logoHeight: `32px`,
 menuName: `Hilton`,
        name: `Hilton - Hampton Hotels`,
        description: `Find a Hampton hotel location near you marketing campaign.`,
        carouselImage: './img/HamptonHeroM.png',
        heroImage: './img/HamptonHeroD.png',
        caseStudy:'',
        sections: [
            {
                label: 'Overview',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        I was contracted to design across the Hilton family of brands and Hampton Hotels was one of the most intricate campaigns I designed for. This initiative encompassed several landing pages and online marketing banners. Below are a select few of the final banners, wireframes and a landing page from the campaign, as well as the process and final designs.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/HamptonWFD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/HamptonWFM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Process',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                       The project commenced with a business case aimed at enhancing engagement promotions for Hampton Hotels through Group Reservations and e-Events. During a collaborative working session, I proposed the concept of a location-based map utilizing an array to identify the number of Hampton hotels by state. This interactive map would connect users to booking options for Group Reservations or e-Events activities during the summer months.  
                    </p>
                    
                    <p>
                       Over a three-month timeline, I collaborated closely with the project manager and two engineers to develop wireframe concepts, prototypes, and high-fidelity designs. Together, we built an array structure that included essential details such as hotel name, number of hotels, longitude, latitude, state, and city. This structure enabled the map to visually represent which states hosted Hampton hotels, the total number of locations, and their respective cities. 
                    </p>
                    
                    <p>
                       Throughout the wireframing phase, I worked diligently with the engineer to address functional details, ensuring that the concept was feasible. We conducted thorough testing of the prototype prior to finalizing the design. 
                    </p>
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#F4F5F8',
                textColor: '#212121',
                content: `<div>
                    <p>
                        I successfully delivered the final designs for the interactive landing page and promotional banners ahead of schedule. These designs not only adhered to Hilton's brand standards for Hampton Hotels but also performed exceptionally well among users making group reservations and those selecting Hampton locations through e-Events. A three percent increase underscored the effectiveness of our collaborative efforts in enhancing user engagement.
                    </p>

                    <img class="desktop-only" src="./img/HamptonFDD.png">
                    <img class="mobile-only" src="./img/HamptonFDM.png">
                </div>`,
            },
        ],
    },
    {
        active: true,
        logo: `./img/FedEx.svg`,
        logoHeight: `28px`,
        menuName: `FedEx`,
        name: `FedEx Office Launch`,
        description: `Marketing campaign:  Print from your office to our office.`,
        carouselImage: './img/FedExHeroM.png',
        heroImage: './img/FedExHeroD.png',
        caseStudy:'',
        sections: [
            {
                label: 'Overview',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        FedEx launched a marketing campaign to promote FedEx Office, with a series of web banners displayed on numerous high-traffic websites. The “Print from your office to our office” campaign encompassed a variety of elements, including design, messaging, and both animated and static banner ads. I created 40 banners working with product manager and a FedEx rep.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/FedExBPD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/FedExBPM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Process',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        FedEx provided a comprehensive guide that ensures the marketing banners maintain FedEx's strong brand identity while meeting technical requirements for high-quality production. This 50-page document facilitates the creation of cohesive marketing materials that align with FedEx's global brand strategy in order to maintain consistent standards across all platforms. Familiarizing myself with the brand guidelines constituted the bulk of the preparatory work. 
                        I worked with a FedEx PM to determine the strategy and go to market timeline. 
                    </p>
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#F4F5F8',
                textColor: '#212121',
                content: `<div>
                    <p>
                        I completed the project within the two-week deadline. The majority of the banners were static, plus some animated as well, utilizing FedEx’s brand style guide. Below are a selection of banners that showcase the assets developed during this project that exceeded expectations.
                    </p>

                    <img class="desktop-only" src="./img/FedExFMD.png">
                    <img class="mobile-only" src="./img/FedExFMM.png">
                </div>`,
            },
        ],
    },
    {
        active: true,
        logo: `./img/Marvel.svg`,
        logoHeight: `28px`,
        menuName: `Marvel`,
        name: `Marvel Iron Man 2 - LG`,
        description: `Creating a redemption website for Marvel, LG and DecalGirl.`,
        carouselImage: './img/MarvelHeroM.png',
        heroImage: './img/MarvelHeroD.png',
        caseStudy:'',
        sections: [
            {
                label: 'Overview',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        Marvel, LG & DecalGirl partnered to promote the movie Iron Man 2 by creating a redemption website with custom mobile device skins and promotional wallpaper from the movie. This was an opportunity to capitalize across brands with the launch of new mobile phones, custom skins and promotional wallpapers for the movie rollout.
                    </p>
                </div>`,
            },
            {
                backgroundColor: '#f4f5f8',
                content: `<div>
                    <img class="desktop-only" src="./img/MarvelCarouselD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/MarvelCarouselM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Process',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        I designed a dual-pathway funnel based on unique redemption codes. One pathway branded with Iron Man 2 visuals and the other with LG’s brand showcasing custom skins designs. I crafted initial wireframes for approval to ensure the design met the needs for both flows visually and functionally while working with stakeholders and an engineer. 
                    </p>
                    <p>
                        Users could select customized artwork skins from DecalGirl and get the a bonus limited Iron Man 2 wallpaper depending on the redemption code they received. A select a number of users were granted access between both promotions via email. To claim the reward users accessed the website link to follow the step-by-step instructions. Users were prompted to enter their redemption code which would push users to either funnel. Users selected their LG device first, then a custom skin and lastly entered their contact information to confirm for shipping.
                    </p>
                    <p>
                    </p>

                    <img class="desktop-only" src="./img/MarvelWFD.png" style="margin-top: 1em">
                    <img class="mobile-only" src="./img/MarvelWFM.png" style="margin-top: 1em">
                </div>`,
            },
            {
                label: 'Outcome',
                hideMobileLabel: false,
                backgroundColor: '#F4F5F8',
                textColor: '#212121',
                content: `<div>
                    <p>
                        DecalGirl experienced a measurable increase in brand recognition, with a 7% rise in international website traffic during the campaign period. Marvel successfully tied the Iron Man 2 movie promotion to a tangible product, enhancing fan engagement and merchandise sales. The dual-pathway funnel design ensured a seamless user experience, reducing drop-off rates by 4% compared to previous campaigns. The step-by-step instructions and redemption process contributed to the campaign's overall success.
                    </p>
                    <p>
                        By aligning the goals of all partners and leveraging the strengths of each brand, the campaign not only met but exceeded expectations, setting a benchmark for future collaborative promotions.
                    </p>

                    <img class="desktop-only" src="./img/MarvelFDD.png">
                    <img class="mobile-only" src="./img/MarvelFDM.png">
                </div>`,
            },
        ],
    },
    {
        active: true,
        logo: `./img/ThomsonReuters.svg`,
        logoHeight: `32px`,
        menuName: `Westlaw CS`,
        name: `Thomson Reuters Westlaw`,
        description: `Launching Westlaw’s iPhone app and refreshing their iPad product experience to align.`,
        carouselImage: './img/WestlawHeroM.png',
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
                        Westlaw is an online legal research service and database for legal professionals in over 60 countries. While most research is conducted on desktops, users sought a mobile solution. Since Thomson Reuters Westlaw did not offer an app to meet this demand, we explored how to adapt Westlaw's desktop experience into a new iPhone app. The following showcases a few selected wireframes that were tested and the outlined approach. Full case study is link above.
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
                        The iOS apps addressed the needs for legal services companies, law practices, government employees, and educational institutions, through organized access to legal information from Westlaw anywhere. As a result, the Westlaw iPhone app won over 13 awards for the best legal research app. View case study link above for an in depth analysis of the project. Also view in App Store.
                    </p>

                    <img class="desktop-only" src="./img/WestlawFMD.png">
                    <img class="mobile-only" src="./img/WestlawFMM.png">
                </div>`,
            },
        ],
    },
    {
        active: true,
        logo: `./img/Beacon.svg`,
        logoHeight: `24px`,
        menuName: `Beacon CS`,
        name: `Beacon - RentSpree`,
        description: `Crafting a design language for a PropTech app by establishing their design system`,
        carouselImage: './img/BeaconHeroM.png',
        heroImage: './img/BeaconHeroD.png',
        caseStudy: 'https://www.figma.com/proto/isDCdyShYTJgwRwJMir42Y/Beam-CS?page-id=0%3A1&node-id=1-2&viewport=426%2C615%2C0.25&t=ov41KbWwZQHHTuAz-1&scaling=contain&content-scaling=fixed',
        sections: [
            {
                label: 'Problem',
                hideMobileLabel: false,
                backgroundColor: '#ffffff',
                textColor: '#212121',
                content: `<div>
                    <p>
                        RentSpree connects landlords, agents, and renters, but its previous design system lacked cohesion, hindering consistency, speed to market, and product improvements. Beacon now serves as a clear unified design guide, offering reusable, scalable components that enhance RentSpree’s brand and product experience. Below is the process of the project.
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
                        Beacon created a clear design language that improves user experience with easy-to-use scalable components and guidelines for RentSpree. A governance process was introduced to ensure all elements are functional and user-friendly through UX and Dev reviews. This design system has also increased cross functional collaboration ensuring consistency and an elevated product quality that support RentSpree's goal of simplifying the rental experience for all users. Select the case study link above for an in depth analysis of the project.
                    </p>

                    <img class="desktop-only" src="./img/BeaconMocksD.png">
                    <img class="mobile-only" src="./img/BeaconMocksM.png">
                </div>`,
            },
        ],
    },
];
