import fs from 'fs'
import imagekit from '../configs/imageKit.js'

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog)
        const imageFile = req.file

        /*== CHECK IF ALL FIELDS ARE PRESENT ==*/
        if (!title || !description || !category || !imageFile) {
            return res.status(400).json({ success: false, message: 'Missing required fields' })
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        /*== UPLOAD image to ImageKit ==*/
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile,
            folder: '/blogs',
        })

        /*== OPTIMIZATION through imagekit URL transformation ==*/
    } catch (error) {}
}
