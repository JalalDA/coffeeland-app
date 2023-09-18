import User from '@/models/User';
import Transactions from '@/models/Transactions';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      console.log(req.body);
      if (req.body.transaction_status === 'settlement') {
        //temukan data user 
        // const existUser = await user.findOne({ _id: id })
        //update status transaksi
        await Transactions.updateMany({ order_id: req.body.order_id }, {
          $set: {
            status: "Paid",
            amount: req.body.gross_amount
          }
        })
        //find user
        // const transaksinya = await Transactions.findOne({order_id : req.body.order_id})
        // const usernya = await User.findOne({_id : transaksinya.user_id})
        // console.log(usernya.balance);
        // //update saldo 
        // const balance = await User.updateOne({_id : transaksinya.user_id}, {
        //   $set : {
        //     balance : Number(req.body.gross_amount)  + Number(usernya.balance)
        //   }
        // })
        // await transaction.updateOne({ order_id: req.body.order_id }, {
        //   $set: {
        //     balance: existUser.balance + req.body.gross_amount
        //   }
        // })
        return res.status(200).json({msg : "Sukses update transaksi" })
      }
      res.status(200).end();

    } catch (error) {
      console.log({ error });
      console.error('Error handling webhook:', error);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
