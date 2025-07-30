import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

interface ImageCompressionOption {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    maxSize?: number;
}

// 压缩图片的函数，接受一个目录路径和压缩选项作为参数
async function compressionImage(dir: string, imageCompressionOption: ImageCompressionOption = {}) {
    // 检查目录是否存在
    if (!fs.existsSync(dir)) {
        console.error(`指定的目录 ${dir} 不存在。`);
        return;
    }

    try {
        // 读取目录中的所有文件和文件夹
        const files = await fs.promises.readdir(dir);
        // 遍历目录中的每个文件或文件夹
        for (const file of files) {
            const filePath = path.join(dir, file);
            // 检查文件或文件夹的信息
            const stats = await fs.promises.stat(filePath);

            if (stats.isDirectory()) {
                // 如果是文件夹，则递归调用 compressionImage 方法处理该子文件夹
                await compressionImage(filePath, imageCompressionOption);
            } else if (stats.isFile()) {
                const fileExt = path.extname(file).toLowerCase().slice(1);
                // 检查文件是否为图片类型
                const isImage = ["jpg", "jpeg", "png", "tiff", "webp"].includes(fileExt);
                if (isImage) {
                    // 检查文件大小是否大于 100KB（100 * 1024 字节）
                    if (imageCompressionOption.maxSize && stats.size <= imageCompressionOption.maxSize * 1024) {
                        const relativePath = path.relative(__dirname, filePath);
                        console.warn(`图片 ${relativePath} 大小未超过 100KB，跳过压缩。`);
                        continue;
                    }

                    const originalSize = stats.size;

                    let img = sharp(filePath);
                    if (imageCompressionOption.maxHeight || imageCompressionOption.maxWidth) {
                        let imgMetaData = await img.metadata();

                        let setHeight: number | undefined;
                        let setWidth: number | undefined;
                        if (
                            imageCompressionOption.maxHeight &&
                            imageCompressionOption.maxHeight < (imgMetaData.height || 0)
                        ) {
                            setHeight = imageCompressionOption.maxHeight;
                        }

                        if (
                            imageCompressionOption.maxWidth &&
                            imageCompressionOption.maxWidth < (imgMetaData.width || 0)
                        ) {
                            setWidth = imageCompressionOption.maxWidth;
                        }

                        // 如果有超限
                        if (setHeight || setWidth) {
                            img = img.resize({
                                width: setWidth,
                                height: setHeight,
                                fit: "inside"
                            });
                        }
                    }

                    const quality = imageCompressionOption.quality || 80;
                    let compressedImageBuffer: Buffer;

                    if (fileExt === "jpg" || fileExt === "jpeg") {
                        compressedImageBuffer = await img.jpeg({ quality }).toBuffer();
                    } else if (fileExt === "png") {
                        compressedImageBuffer = await img.png({ quality }).toBuffer();
                    } else if (fileExt === "tiff") {
                        compressedImageBuffer = await img.tiff({ quality }).toBuffer();
                    } else if (fileExt === "webp") {
                        compressedImageBuffer = await img.webp({ quality }).toBuffer();
                    } else {
                        throw new Error(`不支持的图片格式: ${fileExt}`);
                    }

                    // 将压缩后的图片内容写回到原始文件路径，覆盖原始文件
                    await fs.promises.writeFile(filePath, compressedImageBuffer);

                    const compressedStats = await fs.promises.stat(filePath);
                    const compressedSize = compressedStats.size;

                    const relativePath = path.relative(__dirname, filePath);
                    console.log(
                        `图片 ${relativePath} 压缩成功并覆盖原文件，从 ${(originalSize / 1024).toFixed(2)}KB 压缩到 ${(
                            compressedSize / 1024
                        ).toFixed(2)}KB`
                    );
                }
            }
        }
    } catch (err) {
        console.error("处理图片时出现错误:", err);
    }
}

compressionImage(path.join(__dirname, "../public"), {
    maxWidth: 1000,
    quality: 80,
    maxSize: 100 //最大文件大小
}).catch((error) => {
    console.error("压缩图片过程中发生错误:", error);
});
