import { r2 } from 'r2';

async function getGallery(): Promise<string[]> {
    const galleryUrls: string[] = [];

    try {
        const response = await r2.get('https://your-cloudflare-r2-url');
        const folders = await response.json();

        for (const folder of folders) {
            galleryUrls.push(folder.url);
        }
    } catch (error) {
        console.error('Error retrieving galleries:', error);
    }

    return galleryUrls;
}

export default getGallery;
