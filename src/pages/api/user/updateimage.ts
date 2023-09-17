import type { NextApiRequest, NextApiResponse } from 'next'
import cloudinary from '../product/cloudinary';
import multer from 'multer';
import fs from 'fs'
import User from '@/models/User';

const upload = multer({ dest: 'uploads/' })
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== "PATCH") {
            return res.status(405).end()
        }
        const { id } = req.query
        //@ts-ignore
        upload.single('image')(req, res, async (error) => {
            try {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ message: 'Upload failed' });
                }
                //@ts-ignore
                const file = req.file;

                if (!file) {
                    return res.status(400).json({ message: 'No file uploaded.' });
                }

                // Upload gambar ke Cloudinary
                const result = await cloudinary.v2.uploader.upload(file.path);

                // Hapus file sementara yang diunggah ke server
                fs.unlinkSync(file.path);

                const data = await User.updateOne({_id : id}, {
                    $set : {
                        photo : result.secure_url
                    }
                })
                console.log({ data });
                res.status(200).json({ msg: "Success", data });
            } catch (error) {
                console.log({error});
                res.status(500).json({error})
            }
        });
    } catch (error) {
        console.log({ error });
        res.status(500).json({ error })
    }
}

export const config = {
    api: {
        bodyParser: false
    }
}


export default handler