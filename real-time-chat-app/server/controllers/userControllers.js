import user from '../models/userModel.js'

export const register = async (req, res) =>{
    const {firstname, lastname, email, password} = req.body;
    try {
        //check if the email exists from mongo db
        const existingUser = await user.findOne({email:email});
        if(existingUser){
            return res.status(400).json({error: 'User already exists'});
        };
        const fullName = `${firstname} ${lastname}`;
        const newUser = new user({email, password, name: fullName});
        const token = await newUser.generateAuthToken();
        await newUser.save();
        res.json({message:'success', token:token});
    } catch (error) {
        console.log(`Error in registering user: ` , error);
    }
}


export const login = async (req, res) => {

}


export const validUser = async (req, res) => {
    
}


export const googleAuth = async (req, res) => {
    
}


export const logout = async (req, res) => {
    
}


export const searchUsers = async (req, res) => {
    
}


export const getUserById = async (req, res) => {
    
}

export const updateInfo = async (req, res) => {
    
}