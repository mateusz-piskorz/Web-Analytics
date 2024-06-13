const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const load = async () => {
  try {
    await db.eventLabel.deleteMany({});
    await db.event.deleteMany({});
    await db.activity.deleteMany({});
    await db.project.deleteMany({});

    //projects
    await db.project.createMany({
      data: [
        {
          name: "audiophile-ecommerce-website",
          nameLabel: "Audiophile Ecommerce Website",
          href: "https://github.com/epickaowca/audiophile-ecommerce-website",
          hrefLabel: "audiophile-ecommerce-website.app",
        },

        {
          name: "google-drive-clone",
          nameLabel: "Google Drive Clone",
          href: "https://github.com/epickaowca/google-drive-clone",
          hrefLabel: "google-drive-clone.app",
        },

        {
          name: "interactive-comments-section",
          nameLabel: "Interactive Comments Section",
          href: "https://github.com/epickaowca/interactive-comments-section",
          hrefLabel: "interactive-comments-section.app",
        },
        {
          name: "multi-step-form",
          nameLabel: "Multi Step Form",
          href: "https://github.com/epickaowca/multi-step-form",
          hrefLabel: "multi-step-form.app",
        },
      ],
    });

    //activity
    await db.activity.createMany({
      data: [
        {
          browser: "Chrome",
          country: "Poland",
          OS: "Windows",
          projectName: "audiophile-ecommerce-website",
        },
        {
          browser: "Safari",
          country: "Germany",
          OS: "Mac OS",
          projectName: "audiophile-ecommerce-website",
        },
      ],
    });

    //event
    await db.event.createMany({
      data: [
        {
          name: "see_product_btn_click",
          projectName: "audiophile-ecommerce-website",
        },
        {
          name: "header_action",
          projectName: "audiophile-ecommerce-website",
        },
      ],
    });

    //eventLabel
    await db.eventLabel.createMany({
      data: [
        {
          name: "productXV1",
          eventName: "see_product_btn_click",
        },
        {
          name: "open_header",
          eventName: "header_action",
        },
        {
          name: "open_header",
          eventName: "header_action",
        },
        {
          name: "close_header",
          eventName: "header_action",
        },
      ],
    });

    console.log("added seed data to db");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
};

load();
