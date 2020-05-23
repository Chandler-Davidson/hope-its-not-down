export class SessionStorage {
  getUrls(): string[] {
    const json = sessionStorage.getItem("urls") || "[]";
    return JSON.parse(json);
  }

  setUrl(url: string) {
    const urls = this.getUrls();
    const json = JSON.stringify([...urls, url]);
    sessionStorage.setItem("urls", json);
  }
}