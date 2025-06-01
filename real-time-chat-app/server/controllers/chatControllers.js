import Chat from "../models/chatModel.js";


//response structure common
//proper error loggin messages

export const accessChats = () => {};
export const fetchAllChats = () => {};
export const createGroup = async (req, res) => {
  const { chatName, users } = req.body;

  if (!chatName || !users) {
    res.status(400).json({ message: "Please fill all the fields" });
  }

  const parsedUsers = JSON.parse(users);

  if (parsedUsers.length < 2) {
    res.send(400).json({ message: "Group should contain more than 2 users" });
  }

  try {
    const chat = await Chat.create({
      chatName,
      users: parsedUsers,
      isGroup: true,
      groupAdmin: req.rootUserId,
    });

    const createdChat = await Chat.findOne({ _id: chat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.send(createdChat);
  } catch (error) {
    res.send(500).json({ error });
  }
};
export const renameGroup = async (req, res) => {

    const {chatId, chatName} = req.body;

    if(!chatId || !chatName){
        res.status(400).send({message:"Provide Chat id and Chat name"})
    }

    try {
        const chat = await Chat.findByIdAndUpdate(chatId, {
            $set:{chatName},
        })
        .populate("groupAdmin", "-password")
        .populate("users", "-password");
  
        if (!chat) res.status(404);

        res.status(200).send(chat);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error});
    }

};
export const addToGroup = async (req, res) => {
  const { userId, chatId } = req.body;

  const existing = await Chat.findOne({ _id: chatId });

  if (!existing.users.includes(userId)) {
    const chat = await Chat.findByIdAndUpdate(chatId, {
      $push: { users: userId },
    })
      .populate("groupAdmin", "-password")
      .populate("users", "-password");

    if (!chat) res.status(404);

    res.status(200).send(chat);
  } else {
    res.status(409).json({ message: "User already exists" });
  }
};
export const removeFromGroup = () => {

    // $pull: { users: userId },

};
