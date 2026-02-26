import fs from "fs/promises"
import path from "path"
export async function addingBlogToSitemap(domain) {
    const sitemapUrl=path.join(process.cwd(),"public","sitemap.xml")

    let sitemapContent=await fs.readFile(sitemapUrl,"utf-8")

    const date = new Date().toISOString().split('T')[0];
    const newSitemapEntry = `<url>
    <loc>https://quertech.vercel.app/${domain}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
</urlset>`;
sitemapContent = sitemapContent.replace("</urlset>", newSitemapEntry);
await fs.writeFile(sitemapUrl,sitemapContent,"utf-8")
}