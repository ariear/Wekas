import connectMongo from "../../../lib/connectMongo"
import authServer from "../../../middleware/authServer"
import Message from "../../../model/message"

const ChatSendHandle = async (req , res) => {
    if (req.method !== 'POST') return res.status(405).end()
    const auth = authServer(req , res)
    
    const {client_user_id , message} = req.body

    await connectMongo()
    const sendChat = await Message.create({
        parent_user_id : auth.id,
        client_user_id,
        message,
        isRead: false
    })

    res.status(200).json({
        message: 'Chat send successfully',
        data: sendChat
    })
}

export default ChatSendHandle