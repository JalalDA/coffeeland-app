import dbConnet from '@/config/mongo'
import User from '@/models/User'
import type {NextApiRequest, NextApiResponse} from 'next'

const handler = async (req:NextApiRequest, res:NextApiResponse)=>{
    await dbConnet()
    const {method} = req

    switch (method) {
        case "GET":
            try {                
                const {id} = req.query
                const user = await User.findOne({_id : id}).select('-password')
                res.status(200).json({msg : "success", user})
            } catch (error) {
                console.log({error});
                res.status(500).json({msg : "Internal server error"})
            }
            break;
    
        default:
            break;
    }
}

export default handler