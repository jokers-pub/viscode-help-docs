import fs from "node:fs";
import { MenuEn, MenuZhCN } from "../common/datas/menu";
import path from "node:path";

let result: string[] = [];
for (let item of MenuZhCN.allMenus) {
    if (item.children?.length) {
        for (let cItem of item.children) {
            result.push(`https://help.viscode.jokers.pub` + cItem.path || "");
        }
    }
}

for (let item of MenuEn.allMenus) {
    if (item.children?.length) {
        for (let cItem of item.children) {
            result.push(`https://help.viscode.jokers.pub` + cItem.path || "");
        }
    }
}

let xmlContent = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://help.viscode.jokers.pub</loc>
</url>
<url>
<loc>https://help.viscode.jokers.pub/en</loc>
</url>
${result
    .map((n) => {
        return `<url>
<loc>${n}</loc>
</url>`;
    })
    .join("\n")}
</urlset>
`;

fs.writeFileSync(path.resolve("./dist/sitemap.xml"), xmlContent, "utf8");
