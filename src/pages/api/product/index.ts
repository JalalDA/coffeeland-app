// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnet from '@/config/mongo'
import Products from '@/models/Products'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnet()
    const { method } = req
    switch (method) {
        case "POST":
            try {
                const {
                    merchantId,
                    name,
                    priceBuy,
                    priceSale,
                    suplier,
                    condition,
                    category,
                    description,
                    photo,
                    stock
                } = req.body
                if (!merchantId) {
                    return res.status(400).json({ msg: "Please input a valid merchant id" })
                }
                const product = await Products.create({
                    merchantId : process.env.NEXT_PUBLIC_MERCHANT_ID,
                    name,
                    priceBuy,
                    priceSale,
                    suplier,
                    condition,
                    category,
                    description,
                    photo,
                    stock
                })
                res.status(200).json({
                    msg: "Success",
                    product
                })
            } catch (error) {
                console.log({ error });
                res.status(500).json({ error, msg: "Something wrong, try again later" })
            }

            break;
        case "GET":
            try {
                const { id, merchantId } = req.query
                if (!id) {
                    const products = await Products.find({merchantId})
                    console.log({ products });
                    return res.status(200).json({ products })
                }
                const product = await Products.findOne({ _id: id})
                console.log({ product });
                res.status(200).json({ product })
            } catch (error) {
                console.log({ error });
                res.status(500).json({ msg: "Internal server error" })
            }
            break;
        case "PATCH":
            try {
                const { id, name, price, supplier, condition, category, description, photo, stock } = req.body
                const product = await Products.findOne({ _id: id })
                console.log({product});
                if (product) {
                    await Products.updateMany({_id : id},{
                        $set: {
                            name,
                            price,
                            supplier,
                            condition,
                            category,
                            description,
                            photo,
                            stock
                        }
                    })
                    res.status(200).json({ msg: "Sukses update produk" })
                }else{
                    res.status(404).json({msg : "Product not found"})
                }
            } catch (error) {
                console.log({ error });
                res.status(500).json({ error })
            }
            break;
        case "DELETE":
            try {
                const { id, name, price, supplier, condition, category, description, photo, stock } = req.body
                const product = await Products.findOne({ _id: id })
                if (product) {
                    await Products.updateOne({_id : id},{
                        $set: {
                            deletedAt : new Date(Date.now())
                        }
                    })
                    res.status(200).json({ msg: "Sukses update produk" })
                }
            } catch (error) {
                console.log({ error });
                res.status(500).json({ error })
            }
        default:
            break;
    }
}
