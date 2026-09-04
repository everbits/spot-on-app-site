(function () {
    var translations = {
        en: {
            pageTitle: "SpotOn Energy Support",
            pageDescription: "Support contact details and help information for the SpotOn Energy app.",
            themeButton: "Switch theme",
            eyebrowHero: "SpotOn Energy support",
            heroTitle: "Need help with SpotOn Energy?",
            heroLede: "If you are having trouble with the app, have a billing question, or want to report a bug, contact us and we will help as quickly as we can.",
            emailSupport: "Email support",
            readTerms: "Read terms",
            readPrivacy: "Read privacy policy",
            contactLabel: "Contact",
            contactBody: "The best way to reach the SpotOn Energy team for account, billing, and app issues.",
            responseLabel: "Response time",
            responseValue: "Usually within 1-2 business days",
            responseBody: "We are a small team, but we do read every support request.",
            issuesEyebrow: "Common issues",
            issuesTitle: "What we can help with",
            issueBillingTitle: "Subscription and billing questions",
            issueBillingBody: "Contact us about subscriptions, renewals, cancellations, refunds, or purchase problems.",
            issueBugTitle: "App issues and bug reports",
            issueBugBody: "If something is not working as expected, send us the details and we will investigate.",
            issueAccountTitle: "Account access and feature questions",
            issueAccountBody: "Reach out if you need help accessing your account or want clarification on how a feature works.",
            beforeEyebrow: "Before you email",
            beforeTitle: "What to include",
            deviceLabel: "Device details",
            deviceValue: "Model and OS version",
            appVersionLabel: "App version",
            appVersionValue: "The version you are using",
            summaryLabel: "Problem summary",
            summaryValue: "What happened and what you expected",
            screenshotsLabel: "Screenshots",
            screenshotsValue: "Helpful if something looks wrong",
            stepsLabel: "Steps to reproduce",
            stepsValue: "If the problem happens more than once",
            contactEyebrow: "Contact support",
            contactTitle: "How to reach us",
            emailTitle: "Email",
            emailBody: "Send support requests to",
            bestForTitle: "Best for",
            bestForBody: "Billing questions, account help, bug reports, and general product support.",
            operatedByTitle: "Operated by",
            operatedByBody: "SpotOn Energy support is provided by Everbit AB.",
            relatedEyebrow: "Related",
            relatedTitle: "Useful links",
            privacyLabel: "Privacy policy",
            supportEmailLabel: "Support email"
        },
        sv: {
            pageTitle: "SpotOn Energy Support",
            pageDescription: "Kontaktuppgifter och supportinformation för SpotOn Energy-appen.",
            themeButton: "Byt tema",
            eyebrowHero: "SpotOn Energy support",
            heroTitle: "Behöver du hjälp med SpotOn Energy?",
            heroLede: "Om du har problem med appen, har en fråga om abonnemang eller vill rapportera en bugg, kontakta oss så hjälper vi dig så snabbt vi kan.",
            emailSupport: "Mejla support",
            readTerms: "Läs användarvillkoren",
            readPrivacy: "Läs integritetspolicyn",
            contactLabel: "Kontakt",
            contactBody: "Det bästa sättet att nå SpotOn Energy-teamet för konto-, betalnings- och appfrågor.",
            responseLabel: "Svarstid",
            responseValue: "Vanligtvis inom 1-2 arbetsdagar",
            responseBody: "Vi är ett litet team, men vi läser varje supportärende.",
            issuesEyebrow: "Vanliga frågor",
            issuesTitle: "Det här kan vi hjälpa till med",
            issueBillingTitle: "Abonnemang och betalningsfrågor",
            issueBillingBody: "Kontakta oss om abonnemang, förnyelser, uppsägningar, återbetalningar eller problem med köp.",
            issueBugTitle: "Appproblem och buggrapporter",
            issueBugBody: "Om något inte fungerar som det ska, skicka detaljerna till oss så undersöker vi det.",
            issueAccountTitle: "Kontotillgång och funktionsfrågor",
            issueAccountBody: "Hör av dig om du behöver hjälp att komma åt ditt konto eller vill förstå hur en funktion fungerar.",
            beforeEyebrow: "Innan du mejlar",
            beforeTitle: "Skicka gärna med",
            deviceLabel: "Enhetsdetaljer",
            deviceValue: "Modell och OS-version",
            appVersionLabel: "Appversion",
            appVersionValue: "Vilken version du använder",
            summaryLabel: "Problembeskrivning",
            summaryValue: "Vad som hände och vad du förväntade dig",
            screenshotsLabel: "Skärmbilder",
            screenshotsValue: "Hjälper om något ser fel ut",
            stepsLabel: "Steg för att återskapa",
            stepsValue: "Om problemet händer mer än en gång",
            contactEyebrow: "Kontakta support",
            contactTitle: "Så når du oss",
            emailTitle: "E-post",
            emailBody: "Skicka supportärenden till",
            bestForTitle: "Passar för",
            bestForBody: "Betalningsfrågor, kontohjälp, buggrapporter och allmän produktsupport.",
            operatedByTitle: "Drivs av",
            operatedByBody: "SpotOn Energy-supporten tillhandahålls av Everbit AB.",
            relatedEyebrow: "Relaterat",
            relatedTitle: "Användbara länkar",
            termsLabel: "Användarvillkor",
            privacyLabel: "Integritetspolicy",
            supportEmailLabel: "Supportmejl"
        }
    };

    function preferredLanguage() {
        var language = (navigator.language || navigator.userLanguage || "en").toLowerCase();
        return language.indexOf("sv") === 0 ? "sv" : "en";
    }

    function setText(key, value) {
        var element = document.querySelector('[data-i18n="' + key + '"]');
        if (element) {
            element.textContent = value;
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var language = preferredLanguage();
        var copy = translations[language];
        var root = document.documentElement;
        var metaDescription = document.querySelector('meta[name="description"]');

        root.lang = language;
        document.title = copy.pageTitle;
        if (metaDescription) {
            metaDescription.setAttribute("content", copy.pageDescription);
        }

        Object.keys(copy).forEach(function (key) {
            setText(key, copy[key]);
        });

        window.dispatchEvent(new Event("spoton-language-change"));
    });
})();
