module.exports = {
    name: "Disaster Intervention Specialists",
    email: "anna@disasterinterventionspecialists.com",
    phoneForTel: "503-730-0012",
    phoneFormatted: "(503) 730-0012",
    address: {
        lineOne: "4135 SE Bentley St.",
        lineTwo: "",
        city: "Hillsboro",
        state: "OR",
        zip: "97123",
        country: "US",
        mapLink: "",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.disasterinterventionspecialists.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
