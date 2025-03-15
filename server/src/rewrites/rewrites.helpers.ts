import * as cheerio from "cheerio";

class MetaHelper {
  private cheerioInstance: cheerio.CheerioAPI;

  constructor(cheerioInstance: cheerio.CheerioAPI) {
    this.cheerioInstance = cheerioInstance;
  }

  static async initialize(
    url: string = "https://koalendar-test-450614.web.app",
  ) {
    if (!url) throw new Error("URL is required");
    const html = await cheerio.fromURL(url);
    return new MetaHelper(html);
  }

  addTitle(title: string) {
    if (!this.cheerioInstance("title").length) {
      this.cheerioInstance("head").append(`<title>${title}</title>`);
    } else {
      this.cheerioInstance("title").text(title);
    }
  }

  addMetaDescription(description: string) {
    if (!this.cheerioInstance("meta[name='description']").length) {
      this.cheerioInstance("head").append(
        `<meta name='description' content='${description}' />`,
      );
    } else {
      this.cheerioInstance("meta[name='description']").attr(
        "content",
        description,
      );
    }
  }

  addLink(link: string) {
    if (!this.cheerioInstance("link[rel='canonical']").length) {
      this.cheerioInstance("head").append(
        `<link rel='canonical' href='${link}' />`,
      );
    } else {
      this.cheerioInstance("link[rel='canonical']").attr("href", link);
    }
  }

  addOgSiteName(siteName: string) {
    if (!this.cheerioInstance("meta[property='og:site_name']").length) {
      this.cheerioInstance("head").append(
        `<meta property='og:site_name' content='${siteName}' />`,
      );
    } else {
      this.cheerioInstance("meta[property='og:site_name']").attr(
        "content",
        siteName,
      );
    }
  }

  getHtml() {
    return this.cheerioInstance.html();
  }
}

export const initMetaHelper = MetaHelper.initialize;
